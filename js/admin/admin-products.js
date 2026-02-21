// ==================== GESTION DES PRODUITS (ADMIN) ====================

function showAddProductForm(productToEdit = null) {
    const content = document.getElementById('admin-content');
    if (!content) return;

    const isEditing = productToEdit !== null;
    const product = productToEdit || {};

    const formHTML = `
        <div class="admin-form">
            <div class="form-header">
                <h3><i class="fas ${isEditing ? 'fa-edit' : 'fa-plus'}"></i>
                    ${isEditing ? 'Modifier le produit' : 'Ajouter un nouveau produit'}
                </h3>
                <button class="btn btn-secondary" onclick="showAdminProductsTab()">
                    <i class="fas fa-arrow-left"></i> Retour
                </button>
            </div>

            <form id="product-form" onsubmit="event.preventDefault(); saveProduct()">
                <div class="form-grid">
                    <div class="form-group">
                        <label>Nom du produit *</label>
                        <input type="text" id="product-name" value="${product.name || ''}" required>
                    </div>

                    <div class="form-group">
                        <label>Prix (FCFA) *</label>
                        <input type="number" id="product-price" value="${product.price || ''}" min="0" required>
                    </div>

                    <div class="form-group">
                        <label>Catégorie *</label>
                        <select id="product-category" required>
                            <option value="">Sélectionner une catégorie</option>
                            ${categories.map(c => `
                                <option value="${c.id}" ${product.category === c.id ? 'selected' : ''}>
                                    ${c.name}
                                </option>
                            `).join('')}
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Note (1-5)</label>
                        <input type="number" id="product-rating" value="${product.rating || 4}" min="1" max="5">
                    </div>

                    <div class="form-group full-width">
                        <label>Badge (optionnel)</label>
                        <select id="product-badge">
                            <option value="">Aucun badge</option>
                            <option value="Nouveau" ${product.badge === 'Nouveau' ? 'selected' : ''}>Nouveau</option>
                            <option value="Promo" ${product.badge === 'Promo' ? 'selected' : ''}>Promo</option>
                            <option value="Populaire" ${product.badge === 'Populaire' ? 'selected' : ''}>Populaire</option>
                        </select>
                    </div>

                    <div class="form-group full-width">
                        <label>URL de l'image *</label>
                        <input type="url" id="product-image" value="${product.image || ''}" required
                               placeholder="https://exemple.com/image.jpg">
                        <small>Entrez l'URL complète de l'image</small>
                    </div>

                    <div class="form-group full-width">
                        <label>Description</label>
                        <textarea id="product-description" rows="4">${product.description || ''}</textarea>
                    </div>

                    <div class="form-group full-width">
                        <label>Caractéristiques (une par ligne)</label>
                        <textarea id="product-features" rows="4"
                                  placeholder="Exemple:&#10;100% coton&#10;Taille unique">${product.features ? product.features.join('\n') : ''}</textarea>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn btn-success">
                        <i class="fas fa-save"></i> ${isEditing ? 'Mettre à jour' : 'Enregistrer'}
                    </button>
                    <button type="button" class="btn btn-secondary" onclick="showAdminProductsTab()">
                        Annuler
                    </button>
                </div>
            </form>

            <div class="form-preview">
                <h4>Aperçu</h4>
                <div class="preview-card" id="product-preview">
                    <!-- L'aperçu sera mis à jour en temps réel -->
                </div>
            </div>
        </div>
    `;

    content.innerHTML = formHTML;

    // Ajouter l'aperçu en temps réel
    setupProductPreview();

    // Si édition, stocker l'ID
    if (isEditing) {
        document.getElementById('product-form').dataset.productId = product.id;
    }
}

function setupProductPreview() {
    const preview = document.getElementById('product-preview');

    function updatePreview() {
        const name = document.getElementById('product-name').value || 'Nom du produit';
        const price = document.getElementById('product-price').value || '0';
        const rating = document.getElementById('product-rating').value || '4';
        const badge = document.getElementById('product-badge').value;
        const image = document.getElementById('product-image').value || 'https://via.placeholder.com/200';

        preview.innerHTML = `
            <div class="product-card-preview">
                ${badge ? `<div class="product-badge">${badge}</div>` : ''}
                <div class="product-image">
                    <img src="${image}" alt="${name}" onerror="this.src='https://via.placeholder.com/200'">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${name}</h3>
                    <div class="product-rating">${'★'.repeat(parseInt(rating))}${'☆'.repeat(5-parseInt(rating))}</div>
                    <div class="product-price">${parseInt(price).toLocaleString()} FCFA</div>
                </div>
            </div>
        `;
    }

    // Mettre à jour à chaque changement
    ['product-name', 'product-price', 'product-rating', 'product-badge', 'product-image'].forEach(id => {
        document.getElementById(id)?.addEventListener('input', updatePreview);
    });

    // Aperçu initial
    updatePreview();
}

function saveProduct() {
    const form = document.getElementById('product-form');
    const productId = form.dataset.productId;

    // Récupérer les caractéristiques
    const featuresText = document.getElementById('product-features').value;
    const features = featuresText.split('\n').filter(f => f.trim() !== '');

    const productData = {
        name: document.getElementById('product-name').value,
        price: parseInt(document.getElementById('product-price').value),
        category: document.getElementById('product-category').value,
        rating: parseInt(document.getElementById('product-rating').value) || 4,
        badge: document.getElementById('product-badge').value || null,
        image: document.getElementById('product-image').value,
        description: document.getElementById('product-description').value,
        features: features
    };

    if (productId) {
        // Modification
        const index = customProducts.findIndex(p => p.id == productId);
        if (index !== -1) {
            customProducts[index] = { ...customProducts[index], ...productData };
        }
        showNotification('Produit modifié avec succès', 'success');
    } else {
        // Nouveau produit
        const newId = 1000 + customProducts.length + 1;
        customProducts.push({
            id: newId,
            ...productData
        });
        showNotification('Produit ajouté avec succès', 'success');
    }

    // Sauvegarder
    saveCustomProducts();

    // Revenir à la liste
    showAdminProductsTab();
}

function deleteProduct(productId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
        customProducts = customProducts.filter(p => p.id != productId);
        saveCustomProducts();
        showNotification('Produit supprimé', 'info');
        showAdminProductsTab();
    }
}

function editProduct(productId) {
    // Chercher d'abord dans les produits personnalisés
    let product = customProducts.find(p => p.id == productId);

    // Si pas trouvé, chercher dans les produits par défaut (mais en lecture seule)
    if (!product) {
        product = products.find(p => p.id == productId);
        if (product) {
            // Pour les produits par défaut, on crée une copie pour édition
            showAddProductForm({ ...product, id: null });
            return;
        }
    }

    if (product) {
        showAddProductForm(product);
    }
}

function duplicateProduct(productId) {
    let product = products.find(p => p.id == productId) || customProducts.find(p => p.id == productId);

    if (product) {
        const newProduct = {
            ...product,
            id: 1000 + customProducts.length + 1,
            name: `${product.name} (copie)`
        };
        customProducts.push(newProduct);
        saveCustomProducts();
        showNotification('Produit dupliqué', 'success');
        showAdminProductsTab();
    }
}

function filterAdminProducts() {
    const search = document.getElementById('admin-product-search').value.toLowerCase();
    const category = document.getElementById('admin-category-filter').value;

    let filtered = [...products, ...customProducts];

    if (search) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
    }

    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }

    document.getElementById('admin-products-list').innerHTML = renderAdminProductsList(filtered);
}