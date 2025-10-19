// Afficher les produits filtrés - VERSION AMÉLIORÉE
function displayFilteredProducts(filteredProducts, title) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Cacher la section catégories
    const categoriesSection = document.querySelector('.categories-section');
    if (categoriesSection) {
        categoriesSection.style.display = 'none';
    }
    
    grid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px;">
                <div style="font-size: 80px; color: #ddd; margin-bottom: 20px;">😔</div>
                <h3 style="color: #666; margin-bottom: 15px; font-size: 24px;">Aucun produit trouvé</h3>
                <p style="color: #999; margin-bottom: 30px; font-size: 16px; max-width: 400px; margin-left: auto; margin-right: auto;">
                    Nous n'avons pas de produits dans cette section pour le moment. 
                    Revenez bientôt pour découvrir nos nouvelles arrivées !
                </p>
                <button class="btn" onclick="showHomePage()" style="padding: 12px 30px; font-size: 16px;">
                    <i class="fas fa-home"></i> Retour à l'accueil
                </button>
            </div>
        `;
        return;
    }
    
    // En-tête de section amélioré
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
        <h2 style="margin: 0 0 10px 0; font-size: 28px; font-weight: bold;">${title}</h2>
        <p style="margin: 0; opacity: 0.9; font-size: 16px;">
            ${filteredProducts.length} produit${filteredProducts.length > 1 ? 's' : ''} disponible${filteredProducts.length > 1 ? 's' : ''}
        </p>
    `;
    grid.appendChild(sectionHeader);
    
    // Afficher les produits
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i></button>
                    <button class="view-detail" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                    <button><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</div>
                <div class="product-price">${product.price.toLocaleString()} FCFA</div>
                <button class="btn add-to-cart-btn" data-id="${product.id}">Ajouter au panier</button>
            </div>
        `;
        grid.appendChild(productCard);
    });
    
    attachProductEvents();
    updatePageTitle(title);
}

// Mettre à jour le titre de la page
function updatePageTitle(title) {
    document.title = `${title} - KWAD`;
}



// ==================== FONCTIONNALITÉ DE RECHERCHE ====================

// Initialiser la recherche
function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if (searchInput && searchButton) {
        // Recherche au clic sur le bouton
        searchButton.addEventListener('click', performSearch);
        
        // Recherche avec la touche Entrée
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Recherche en temps réel (optionnel)
        searchInput.addEventListener('input', function() {
            if (this.value.length >= 3) {
                performSearch();
            } else if (this.value.length === 0) {
                // Réinitialiser l'affichage si la recherche est vide
                initProducts();
            }
        });
    }
}

// Exécuter la recherche
function performSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        // Si la recherche est vide, réinitialiser l'affichage
        initProducts();
        return;
    }
    
    // Filtrer les produits selon le terme de recherche
    const filteredProducts = products.filter(product => {
        // Recherche dans le nom
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        
        // Recherche dans la description
        const descriptionMatch = product.description.toLowerCase().includes(searchTerm);
        
        // Recherche dans la catégorie
        const categoryMatch = product.category.toLowerCase().includes(searchTerm);
        
        // Recherche dans les caractéristiques
        const featuresMatch = product.features && product.features.some(feature => 
            feature.toLowerCase().includes(searchTerm)
        );
        
        return nameMatch || descriptionMatch || categoryMatch || featuresMatch;
    });
    
    // Afficher les résultats
    displaySearchResults(filteredProducts, searchTerm);
}

// Afficher les résultats de recherche
function displaySearchResults(filteredProducts, searchTerm) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        // Aucun résultat trouvé
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <div style="font-size: 48px; color: #ccc; margin-bottom: 20px;">
                    <i class="fas fa-search"></i>
                </div>
                <h3 style="color: #666; margin-bottom: 10px;">Aucun résultat trouvé</h3>
                <p style="color: #999;">Aucun produit ne correspond à "${searchTerm}"</p>
                <button class="btn" onclick="clearSearch()" style="margin-top: 20px;">
                    Voir tous les produits
                </button>
            </div>
        `;
        return;
    }
    
    // Afficher le nombre de résultats
    const resultsHeader = document.createElement('div');
    resultsHeader.className = 'search-results-header';
    resultsHeader.style.cssText = `
        grid-column: 1/-1;
        margin-bottom: 20px;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid var(--primary);
    `;
    resultsHeader.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h3 style="margin: 0; color: #333;">Résultats de recherche</h3>
                <p style="margin: 5px 0 0 0; color: #666;">
                    ${filteredProducts.length} produit${filteredProducts.length > 1 ? 's' : ''} trouvé${filteredProducts.length > 1 ? 's' : ''} pour "${searchTerm}"
                </p>
            </div>
            <button class="btn btn-outline" onclick="clearSearch()">
                <i class="fas fa-times"></i> Effacer
            </button>
        </div>
    `;
    grid.appendChild(resultsHeader);
    
    // Afficher les produits filtrés
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i></button>
                    <button class="view-detail" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                    <button><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${highlightSearchTerm(product.name, searchTerm)}</h3>
                <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</div>
                <div class="product-price">${product.price.toLocaleString()} FCFA</div>
                <button class="btn add-to-cart-btn" data-id="${product.id}">Ajouter au panier</button>
            </div>
        `;
        grid.appendChild(productCard);
    });
    
    attachProductEvents();
}

// Surligner le terme de recherche dans les résultats
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

// Effacer la recherche et réinitialiser l'affichage
function clearSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.value = '';
    }
    initProducts();
}


// ==================== FONCTIONS UTILITAIRES ====================
function handleImageError(img) {
    console.log('Image non trouvée:', img.src);
    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><rect width="24" height="24" fill="%23f0f0f0"/><text x="12" y="12" font-family="Arial" font-size="12" text-anchor="middle" alignment-baseline="middle" fill="%23999">Image</text></svg>';
    img.alt = 'Image non disponible';
    img.style.backgroundColor = '#f9f9f9';
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: var(--shadow);
        z-index: 3000;
        transition: all 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ==================== FONCTIONS FILTRAGE ====================
function filterProducts(categoryId) {
    const filteredProducts = products.filter(product => product.category === categoryId);
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">Aucun produit trouvé dans cette catégorie.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i></button>
                    <button class="view-detail" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                    <button><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</div>
                <div class="product-price">${product.price.toLocaleString()} FCFA</div>
                <button class="btn add-to-cart-btn" data-id="${product.id}">Ajouter au panier</button>
            </div>
        `;
        grid.appendChild(productCard);
    });
    
    attachProductEvents();
}

// ==================== ÉVÉNEMENTS GLOBAUX ====================
function initEventListeners() {
    // Ouvrir/fermer le panier
    document.getElementById('open-cart').addEventListener('click', openCart);
    document.getElementById('close-cart').addEventListener('click', closeCart);
    
    // Méthodes de paiement
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Commander sur WhatsApp
    document.getElementById('checkout-btn').addEventListener('click', checkout);
    
    // Fermer le panier en cliquant à l'extérieur
    document.getElementById('cart-modal').addEventListener('click', function(e) {
        if (e.target === this) closeCart();
    });
    
    // Filtrer les produits via le menu de catégories
    document.querySelectorAll('.submenu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryId = this.getAttribute('data-category');
            filterProducts(categoryId);
        });
    });
}


// ==================== FONCTION WHATSAPP ====================
function checkout() {
    if (cart.length === 0) {
        showNotification('Votre panier est vide');
        return;
    }
    
    const selectedMethod = document.querySelector('.payment-method.selected').getAttribute('data-method');
    const methodName = selectedMethod === 'momo' ? 'MTN Mobile Money' : 'Airtel Money';
    
    // Obtenir la date et l'heure actuelles
    const now = new Date();
    const orderDate = now.toLocaleDateString('fr-FR');
    const orderTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    
    // Générer un numéro de commande simple
    const orderNumber = 'CMD' + now.getTime().toString().slice(-6);
    
    let message = `🛒 *NOUVELLE COMMANDE KWAD* 🛒%0A%0A`;
    message += `*Numéro de commande:* ${orderNumber}%0A`;
    message += `*Date:* ${orderDate} à ${orderTime}%0A%0A`;
    message += `*DÉTAILS DE LA COMMANDE:*%0A`;
    message += `═════════════════════%0A%0A`;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        message += `*${index + 1}. ${item.name}*%0A`;
        message += `   Quantité: ${item.quantity}%0A`;
        message += `   Prix unitaire: ${item.price.toLocaleString()} FCFA%0A`;
        message += `   Sous-total: ${itemTotal.toLocaleString()} FCFA%0A%0A`;
    });
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 1500;
    const total = subtotal + shipping;
    
    message += `*RÉCAPITULATIF DE PAIEMENT:*%0A`;
    message += `═════════════════════%0A`;
    message += `Sous-total: ${subtotal.toLocaleString()} FCFA%0A`;
    message += `Frais de livraison: ${shipping.toLocaleString()} FCFA%0A`;
    message += `*TOTAL: ${total.toLocaleString()} FCFA*%0A%0A`;
    
    message += `*INFORMATIONS DE PAIEMENT:*%0A`;
    message += `═════════════════════%0A`;
    message += `Méthode: ${methodName}%0A%0A`;
    
    message += `*INSTRUCTIONS:*%0A`;
    message += `═════════════════════%0A`;
    message += `1. Confirmez ma commande%0A`;
    message += `2. Donnez-moi les détails pour le paiement ${methodName}%0A`;
    message += `3. Indiquez le délai de livraison%0A%0A`;
    
    message += `_Merci de me recontacter rapidement pour finaliser cette commande._%0A%0A`;
    message += `📞 *Service Client KWAD*`;
    
    const phoneNumber = '+242068448698';
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(url, '_blank');
}

// ==================== INJECTION DES STYLES CSS ====================

// Injecter les styles CSS pour la navigation
function injectNavigationStyles() {
    const navigationStyles = `
    /* Sous-menu actif */
    .submenu.active {
        display: block;
        animation: fadeInDown 0.3s ease;
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Menu mobile */
    .menu-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        color: var(--primary);
        cursor: pointer;
        padding: 10px;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
        }
        
        nav ul {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: var(--shadow);
            flex-direction: column;
            padding: 10px 0;
        }
        
        nav.active ul {
            display: flex;
        }
        
        .submenu {
            position: static;
            box-shadow: none;
            background: #f8f9fa;
        }
    }

    /* Style pour les sections */
    .about-section, .contact-section {
        animation: fadeIn 0.5s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Styles pour la recherche */
    .search-highlight {
        background-color: #fff3cd;
        padding: 2px 4px;
        border-radius: 3px;
        font-weight: bold;
        color: #856404;
    }

    .btn-outline {
        background: transparent;
        border: 2px solid var(--primary);
        color: var(--primary);
    }

    .btn-outline:hover {
        background: var(--primary);
        color: white;
    }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = navigationStyles;
    document.head.appendChild(styleSheet);
}

// Appeler l'injection des styles
document.addEventListener('DOMContentLoaded', function() {
    injectNavigationStyles();
});
