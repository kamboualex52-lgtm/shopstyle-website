// ==================== GESTION DES PRODUITS (ADMIN) ====================
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
                            <option value="Best-seller" ${product.badge === 'Best-seller' ? 'selected' : ''}>Best-seller</option>
                            <option value="Top Vente" ${product.badge === 'Top Vente' ? 'selected' : ''}>Top Vente</option>
                            <option value="Offre Spéciale" ${product.badge === 'Offre Spéciale' ? 'selected' : ''}>Offre Spéciale</option>
                        </select>
                    </div>

                    <!-- SECTION IMAGE AMÉLIORÉE AVEC UPLOAD -->
                    <div class="form-group full-width image-upload-section">
                        <label>Image du produit *</label>

                        <!-- Zone de glisser-déposer -->
                        <div class="upload-area" id="upload-area" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" ondrop="handleDrop(event)">
                            <div class="upload-icon">
                                <i class="fas fa-cloud-upload-alt"></i>
                            </div>
                            <div class="upload-text">
                                <p>Glissez-déposez votre image ici ou</p>
                                <button type="button" class="btn btn-secondary" onclick="document.getElementById('file-input').click()">
                                    <i class="fas fa-folder-open"></i> Parcourir
                                </button>
                            </div>
                            <input type="file" id="file-input" accept="image/*" style="display: none;" onchange="handleFileSelect(this)">
                            <p class="upload-hint">Formats acceptés : JPG, PNG, GIF (max 5 Mo)</p>
                        </div>

                        <!-- Aperçu de l'image -->
                        <div class="image-preview-container" id="image-preview-container" style="${product.image ? 'display: block;' : 'display: none;'}">
                            <img id="image-preview" src="${product.image || ''}" alt="Aperçu">
                            <button type="button" class="btn-icon remove-image" onclick="removeImage()" title="Supprimer l'image">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>

                        <!-- Champ caché pour stocker l'URL de l'image -->
                        <input type="hidden" id="product-image" value="${product.image || ''}" required>
                        <small class="image-url-hint">Ou entrez une URL d'image :</small>
                        <input type="url" id="product-image-url" class="image-url-input" value="${product.image || ''}" placeholder="https://exemple.com/image.jpg" oninput="syncImageFromUrl(this.value)">
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

    // Ajouter les gestionnaires d'événements pour l'upload
    setupImageUploadHandlers();

    // Ajouter l'aperçu en temps réel
    setupProductPreview();

    // Si édition, stocker l'ID
    if (isEditing) {
        document.getElementById('product-form').dataset.productId = product.id;
    }
}

// ==================== FONCTIONS DE GESTION D'IMAGES ====================

function setupImageUploadHandlers() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const imagePreview = document.getElementById('image-preview-container');

    if (uploadArea) {
        // Événements pour le glisser-déposer
        uploadArea.addEventListener('dragover', handleDragOver);
        uploadArea.addEventListener('dragleave', handleDragLeave);
        uploadArea.addEventListener('drop', handleDrop);

        // Clic sur la zone d'upload
        uploadArea.addEventListener('click', function(e) {
            if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'I') {
                fileInput.click();
            }
        });
    }
}

function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    const uploadArea = document.getElementById('upload-area');
    uploadArea.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    const uploadArea = document.getElementById('upload-area');
    uploadArea.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    const uploadArea = document.getElementById('upload-area');
    uploadArea.classList.remove('drag-over');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        processImageFile(files[0]);
    }
}

function handleFileSelect(input) {
    if (input.files && input.files[0]) {
        processImageFile(input.files[0]);
    }
}

function processImageFile(file) {
    // Vérifier le type de fichier
    if (!file.type.match('image.*')) {
        showNotification('Veuillez sélectionner une image (JPG, PNG, GIF)', 'error');
        return;
    }

    // Vérifier la taille (max 5 Mo)
    if (file.size > 5 * 1024 * 1024) {
        showNotification('L\'image ne doit pas dépasser 5 Mo', 'error');
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        const imageUrl = e.target.result;

        // Mettre à jour le champ caché
        document.getElementById('product-image').value = imageUrl;

        // Mettre à jour le champ URL si nécessaire
        const urlInput = document.getElementById('product-image-url');
        if (urlInput) {
            urlInput.value = '';
        }

        // Afficher l'aperçu
        showImagePreview(imageUrl);

        // Mettre à jour l'aperçu du produit
        updatePreview();

        showNotification('Image chargée avec succès', 'success');
    };

    reader.readAsDataURL(file);
}

function showImagePreview(imageUrl) {
    const previewContainer = document.getElementById('image-preview-container');
    const preview = document.getElementById('image-preview');
    const uploadArea = document.getElementById('upload-area');

    if (preview && previewContainer) {
        preview.src = imageUrl;
        previewContainer.style.display = 'block';

        if (uploadArea) {
            uploadArea.style.display = 'none';
        }
    }
}

function removeImage() {
    // Cacher l'aperçu
    const previewContainer = document.getElementById('image-preview-container');
    const uploadArea = document.getElementById('upload-area');

    if (previewContainer) {
        previewContainer.style.display = 'none';
    }

    if (uploadArea) {
        uploadArea.style.display = 'flex';
    }

    // Vider les champs
    document.getElementById('product-image').value = '';

    const urlInput = document.getElementById('product-image-url');
    if (urlInput) {
        urlInput.value = '';
    }

    // Réinitialiser l'aperçu du produit
    updatePreview();
}

function syncImageFromUrl(url) {
    document.getElementById('product-image').value = url;

    if (url) {
        // Si une URL est entrée, on l'utilise
        showImagePreview(url);

        // Cacher la zone d'upload
        const uploadArea = document.getElementById('upload-area');
        if (uploadArea) {
            uploadArea.style.display = 'none';
        }
    } else {
        // Si l'URL est vide, on revient à la zone d'upload
        const previewContainer = document.getElementById('image-preview-container');
        const uploadArea = document.getElementById('upload-area');

        if (previewContainer) {
            previewContainer.style.display = 'none';
        }

        if (uploadArea) {
            uploadArea.style.display = 'flex';
        }
    }

    updatePreview();
}

// ==================== FONCTIONS EXISTANTES MODIFIÉES ====================

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
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', updatePreview);
        }
    });

    // Aperçu initial
    updatePreview();
}

// Rendre updatePreview accessible globalement
window.updatePreview = function() {
    const preview = document.getElementById('product-preview');
    if (preview) {
        const name = document.getElementById('product-name')?.value || 'Nom du produit';
        const price = document.getElementById('product-price')?.value || '0';
        const rating = document.getElementById('product-rating')?.value || '4';
        const badge = document.getElementById('product-badge')?.value;
        const image = document.getElementById('product-image')?.value || 'https://via.placeholder.com/200';

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
};

// Le reste des fonctions (saveProduct, deleteProduct, etc.) reste identique



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
        features: features,
        media: [{ type: 'image', src: document.getElementById('product-image').value }]
    };

    if (productId) {
        // Modification
        const updated = updateCustomProduct(productId, productData);
        if (updated) {
            showNotification('Produit modifié avec succès', 'success');
        } else {
            showNotification('Erreur lors de la modification', 'error');
        }
    } else {
        // Nouveau produit
        const newProduct = addCustomProduct(productData);
        showNotification(`Produit "${newProduct.name}" ajouté avec succès`, 'success');
    }

    // Revenir à la liste
    showAdminProductsTab();
}

function deleteProduct(productId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
        deleteCustomProduct(productId);
        showNotification('Produit supprimé', 'info');
        showAdminProductsTab();
    }
}

function editProduct(productId) {
    // Chercher d'abord dans les produits personnalisés
    let product = customProducts.find(p => p.id == productId);

    // Si pas trouvé, chercher dans les produits par défaut
    if (!product) {
        product = defaultProducts.find(p => p.id == productId);
        if (product) {
            // Pour les produits par défaut, on crée une copie pour édition
            showAddProductForm({
                ...product,
                id: null,
                isCopy: true,
                originalId: product.id
            });
            return;
        }
    }

    if (product) {
        showAddProductForm(product);
    }
}

function duplicateProduct(productId) {
    // Chercher le produit original
    let original = defaultProducts.find(p => p.id == productId) ||
                   customProducts.find(p => p.id == productId);

    if (original) {
        const newProduct = {
            name: `${original.name} (copie)`,
            price: original.price,
            category: original.category,
            rating: original.rating,
            badge: original.badge,
            image: original.image,
            description: original.description,
            features: original.features || []
        };

        const added = addCustomProduct(newProduct);
        showNotification(`Produit dupliqué : "${added.name}"`, 'success');
        showAdminProductsTab();
    }
}

function filterAdminProducts() {
    const search = document.getElementById('admin-product-search').value.toLowerCase();
    const category = document.getElementById('admin-category-filter').value;

    let filtered = ProductManager.getAll();

    if (search) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
    }

    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }

    document.getElementById('admin-products-list').innerHTML = renderAdminProductsList(filtered);
}