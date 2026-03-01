//products.js

// ==================== GESTION DES PRODUITS ====================

// Initialiser les produits
function initProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.innerHTML = '';

    // Utiliser ProductManager pour obtenir tous les produits
    const allProducts = ProductManager.getAll();

    allProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });

    attachProductEvents();
}

// Créer une carte produit
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
            <div class="product-actions">
                <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i></button>
                <button class="view-detail" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                <button class="share-product" data-id="${product.id}"><i class="fas fa-share-alt"></i></button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</div>
            <button class="btn add-to-cart-btn" data-id="${product.id}">Ajouter au panier</button>
        </div>
    `;
    return productCard;
}

// Attacher les événements aux produits
function attachProductEvents() {
    // Ajouter au panier
    document.querySelectorAll('.add-to-cart, .add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });

    // Voir les détails
    document.querySelectorAll('.view-detail').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-id'));
            showProductDetail(productId);
        });
    });

    // Clic sur la carte produit
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.product-actions') && !e.target.closest('.add-to-cart-btn')) {
                const productId = parseInt(this.querySelector('.add-to-cart').getAttribute('data-id'));
                showProductDetail(productId);
            }
        });
    });

    // Dans attachProductEvents
    document.querySelectorAll('.share-product').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-id'));
            const product = ProductManager.getById(productId);
            if (product && typeof ShareManager !== 'undefined') {
                const shareUrl = URLHandler.generateShareUrl(productId);
                navigator.clipboard.writeText(shareUrl).then(() => {
                    showNotification('Lien de partage copié !', 'success');
                });
            }
        });
    });


}

// Afficher les produits filtrés
function displayFilteredProducts(filteredProducts, title) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    // Cacher la section catégories
    hideAllSections();

    grid.innerHTML = '';

    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px;">
                <div style="font-size: 80px; color: #ddd; margin-bottom: 20px;">😔</div>
                <h3 style="color: #666; margin-bottom: 15px; font-size: 24px;">Aucun produit trouvé</h3>
                <p style="color: #999; margin-bottom: 30px;">Nous n'avons pas de produits dans cette section pour le moment.</p>
                <button class="btn" onclick="showHomePage()">Retour à l'accueil</button>
            </div>
        `;
        return;
    }

    // En-tête de section
    const sectionHeader = document.createElement('div');
    sectionHeader.style.cssText = `
        grid-column: 1/-1;
        margin-bottom: 30px;
        padding: 25px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
        border-radius: 15px;
        text-align: center;
        box-shadow: var(--shadow);
    `;
    sectionHeader.innerHTML = `
        <h2 style="margin: 0 0 10px 0; font-size: 28px;">${title}</h2>
        <p style="margin: 0; opacity: 0.9;">${filteredProducts.length} produit${filteredProducts.length > 1 ? 's' : ''} disponible${filteredProducts.length > 1 ? 's' : ''}</p>
    `;
    grid.appendChild(sectionHeader);

    // Afficher les produits
    filteredProducts.forEach(product => {
        grid.appendChild(createProductCard(product));
    });

    attachProductEvents();
    updatePageTitle(title);
}