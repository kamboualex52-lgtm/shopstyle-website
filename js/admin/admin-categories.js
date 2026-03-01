// ==================== GESTION DES CATÉGORIES (ADMIN) ====================

// Variable pour stocker la catégorie en cours d'édition
let currentEditingCategory = null;

function showAdminCategoriesTab() {
    const content = document.getElementById('admin-content');
    if (!content) return;

    // Recharger les catégories depuis le localStorage
    loadCategoriesFromStorage();

    content.innerHTML = `
        <div class="admin-categories">
            <div class="admin-toolbar">
                <h3><i class="fas fa-tags"></i> Gestion des Catégories</h3>
                <button class="btn btn-success" onclick="showAddCategoryForm()">
                    <i class="fas fa-plus"></i> Ajouter une catégorie
                </button>
            </div>

            <div class="admin-categories-grid" id="admin-categories-grid">
                ${renderCategoriesList()}
            </div>
        </div>
    `;
}

function renderCategoriesList() {
    if (!categories || categories.length === 0) {
        return `
            <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-tags" style="font-size: 64px; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 15px;">Aucune catégorie</h3>
                <p style="color: #999; margin-bottom: 25px;">Commencez par ajouter votre première catégorie</p>
                <button class="btn btn-success" onclick="showAddCategoryForm()">
                    <i class="fas fa-plus"></i> Ajouter une catégorie
                </button>
            </div>
        `;
    }

    return categories.map(cat => `
        <div class="category-admin-card" data-category-id="${cat.id}">
            <img src="${cat.image}" alt="${cat.name}" onerror="this.src='https://via.placeholder.com/100x100?text=${encodeURIComponent(cat.name)}'">
            <div class="category-info">
                <h4>${cat.name}</h4>
                <p>${cat.count || 0} produit${cat.count !== 1 ? 's' : ''}</p>
            </div>
            <div class="category-actions">
                <button class="btn-icon" onclick="editCategory('${cat.id}')" title="Modifier">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon delete" onclick="deleteCategory('${cat.id}')" title="Supprimer">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function showAddCategoryForm(categoryToEdit = null) {
    const content = document.getElementById('admin-content');
    if (!content) return;

    currentEditingCategory = categoryToEdit;
    const isEditing = categoryToEdit !== null;

    const formHTML = `
        <div class="admin-form">
            <div class="form-header">
                <h3><i class="fas ${isEditing ? 'fa-edit' : 'fa-plus'}"></i>
                    ${isEditing ? 'Modifier la catégorie' : 'Ajouter une nouvelle catégorie'}
                </h3>
                <button class="btn btn-secondary" onclick="showAdminCategoriesTab()">
                    <i class="fas fa-arrow-left"></i> Retour
                </button>
            </div>

            <form id="category-form" onsubmit="event.preventDefault(); saveCategory()">
                <div class="form-grid">
                    <div class="form-group full-width">
                        <label>Nom de la catégorie *</label>
                        <input type="text" id="category-name" value="${isEditing ? categoryToEdit.name : ''}"
                               placeholder="Ex: Électroménager, Vêtements, etc." required>
                    </div>

                    <div class="form-group full-width">
                        <label>ID de la catégorie (pour l'URL)</label>
                        <input type="text" id="category-id" value="${isEditing ? categoryToEdit.id : ''}"
                               placeholder="ex: electromenager (généré automatiquement si vide)"
                               ${isEditing ? 'readonly' : ''}>
                        <small>Laissez vide pour générer automatiquement à partir du nom</small>
                    </div>

                    <!-- SECTION IMAGE AVEC UPLOAD -->
                    <div class="form-group full-width image-upload-section">
                        <label>Image de la catégorie *</label>

                        <!-- Zone de glisser-déposer -->
                        <div class="upload-area" id="upload-area" ondragover="handleDragOver(event)"
                             ondragleave="handleDragLeave(event)" ondrop="handleDrop(event)">
                            <div class="upload-icon">
                                <i class="fas fa-cloud-upload-alt"></i>
                            </div>
                            <div class="upload-text">
                                <p>Glissez-déposez votre image ici ou</p>
                                <button type="button" class="btn btn-secondary" onclick="document.getElementById('file-input').click()">
                                    <i class="fas fa-folder-open"></i> Parcourir
                                </button>
                            </div>
                            <input type="file" id="file-input" accept="image/*" style="display: none;" onchange="handleCategoryFileSelect(this)">
                            <p class="upload-hint">Formats acceptés : JPG, PNG, GIF (max 5 Mo)</p>
                        </div>

                        <!-- Aperçu de l'image -->
                        <div class="image-preview-container" id="image-preview-container"
                             style="${isEditing && categoryToEdit.image ? 'display: block;' : 'display: none;'}">
                            <img id="image-preview" src="${isEditing ? categoryToEdit.image : ''}" alt="Aperçu">
                            <button type="button" class="btn-icon remove-image" onclick="removeCategoryImage()" title="Supprimer l'image">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>

                        <!-- Champ caché pour stocker l'URL de l'image -->
                        <input type="hidden" id="category-image" value="${isEditing ? categoryToEdit.image : ''}" required>
                        <small class="image-url-hint">Ou entrez une URL d'image :</small>
                        <input type="url" id="category-image-url" class="image-url-input"
                               value="${isEditing ? categoryToEdit.image : ''}"
                               placeholder="https://exemple.com/image.jpg"
                               oninput="syncCategoryImageFromUrl(this.value)">
                    </div>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn btn-success">
                        <i class="fas fa-save"></i> ${isEditing ? 'Mettre à jour' : 'Enregistrer'}
                    </button>
                    <button type="button" class="btn btn-secondary" onclick="showAdminCategoriesTab()">
                        Annuler
                    </button>
                </div>
            </form>

            <div class="form-preview">
                <h4>Aperçu de la catégorie</h4>
                <div class="preview-card" id="category-preview">
                    ${generateCategoryPreview(isEditing ? categoryToEdit : null)}
                </div>
            </div>
        </div>
    `;

    content.innerHTML = formHTML;
    setupCategoryUploadHandlers();
    setupCategoryPreview();
}

function generateCategoryPreview(category) {
    if (!category) {
        category = { name: 'Nouvelle catégorie', image: 'https://via.placeholder.com/300x200?text=Image', count: 0 };
    }

    return `
        <div class="category-card-preview">
            <div class="category-image">
                <img src="${category.image}" alt="${category.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Image'">
            </div>
            <div class="category-info">
                <h3 class="category-title">${category.name}</h3>
                <div class="category-count">${category.count || 0} produit(s)</div>
            </div>
        </div>
    `;
}

function setupCategoryUploadHandlers() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');

    if (uploadArea) {
        uploadArea.addEventListener('dragover', handleDragOver);
        uploadArea.addEventListener('dragleave', handleDragLeave);
        uploadArea.addEventListener('drop', handleDrop);

        uploadArea.addEventListener('click', function(e) {
            if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'I') {
                fileInput.click();
            }
        });
    }
}

function handleCategoryFileSelect(input) {
    if (input.files && input.files[0]) {
        processCategoryImageFile(input.files[0]);
    }
}

function processCategoryImageFile(file) {
    if (!file.type.match('image.*')) {
        showNotification('Veuillez sélectionner une image (JPG, PNG, GIF)', 'error');
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        showNotification('L\'image ne doit pas dépasser 5 Mo', 'error');
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        const imageUrl = e.target.result;
        document.getElementById('category-image').value = imageUrl;

        const urlInput = document.getElementById('category-image-url');
        if (urlInput) urlInput.value = '';

        showCategoryImagePreview(imageUrl);
        updateCategoryPreview();
        showNotification('Image chargée avec succès', 'success');
    };

    reader.readAsDataURL(file);
}

function showCategoryImagePreview(imageUrl) {
    const previewContainer = document.getElementById('image-preview-container');
    const preview = document.getElementById('image-preview');
    const uploadArea = document.getElementById('upload-area');

    if (preview && previewContainer) {
        preview.src = imageUrl;
        previewContainer.style.display = 'block';
        if (uploadArea) uploadArea.style.display = 'none';
    }
}

function removeCategoryImage() {
    const previewContainer = document.getElementById('image-preview-container');
    const uploadArea = document.getElementById('upload-area');

    if (previewContainer) previewContainer.style.display = 'none';
    if (uploadArea) uploadArea.style.display = 'flex';

    document.getElementById('category-image').value = '';
    const urlInput = document.getElementById('category-image-url');
    if (urlInput) urlInput.value = '';

    updateCategoryPreview();
}

function syncCategoryImageFromUrl(url) {
    document.getElementById('category-image').value = url;

    if (url) {
        showCategoryImagePreview(url);
        const uploadArea = document.getElementById('upload-area');
        if (uploadArea) uploadArea.style.display = 'none';
    } else {
        const previewContainer = document.getElementById('image-preview-container');
        const uploadArea = document.getElementById('upload-area');

        if (previewContainer) previewContainer.style.display = 'none';
        if (uploadArea) uploadArea.style.display = 'flex';
    }

    updateCategoryPreview();
}

function setupCategoryPreview() {
    const nameInput = document.getElementById('category-name');
    const imageInput = document.getElementById('category-image');

    if (nameInput) {
        nameInput.addEventListener('input', updateCategoryPreview);
    }

    if (imageInput) {
        const observer = new MutationObserver(updateCategoryPreview);
        observer.observe(imageInput, { attributes: true, attributeFilter: ['value'] });
    }

    updateCategoryPreview();
}

function updateCategoryPreview() {
    const preview = document.getElementById('category-preview');
    if (!preview) return;

    const name = document.getElementById('category-name')?.value || 'Nouvelle catégorie';
    const image = document.getElementById('category-image')?.value || 'https://via.placeholder.com/300x200?text=Image';

    preview.innerHTML = `
        <div class="category-card-preview">
            <div class="category-image">
                <img src="${image}" alt="${name}" onerror="this.src='https://via.placeholder.com/300x200?text=Image'">
            </div>
            <div class="category-info">
                <h3 class="category-title">${name}</h3>
                <div class="category-count">0 produit</div>
            </div>
        </div>
    `;
}

function saveCategory() {
    const name = document.getElementById('category-name').value.trim();
    let id = document.getElementById('category-id').value.trim();
    const image = document.getElementById('category-image').value;

    if (!name) {
        showNotification('Le nom de la catégorie est requis', 'error');
        return;
    }

    if (!image) {
        showNotification('L\'image de la catégorie est requise', 'error');
        return;
    }

    // Générer l'ID si vide
    if (!id) {
        id = name.toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Enlever les accents
            .replace(/[^a-z0-9]+/g, '-') // Remplacer les caractères non alphanumériques par des tirets
            .replace(/^-|-$/g, ''); // Enlever les tirets au début et à la fin
    }

    const categoryData = {
        id: id,
        name: name,
        image: image,
        count: currentEditingCategory ? currentEditingCategory.count || 0 : 0
    };

    if (currentEditingCategory) {
        // Modification
        const index = categories.findIndex(c => c.id === currentEditingCategory.id);
        if (index !== -1) {
            // Mettre à jour l'ID dans tous les produits de cette catégorie si l'ID a changé
            if (currentEditingCategory.id !== id) {
                updateProductsCategoryId(currentEditingCategory.id, id);
                triggerProductsUpdated();
            }

            categories[index] = categoryData;
            showNotification(`Catégorie "${name}" modifiée avec succès`, 'success');
        }
    } else {
        // Vérifier si l'ID existe déjà
        if (categories.some(c => c.id === id)) {
            showNotification('Une catégorie avec cet ID existe déjà', 'error');
            return;
        }

        // Nouvelle catégorie
        categories.push(categoryData);
        triggerProductsUpdated();
        showNotification(`Catégorie "${name}" ajoutée avec succès`, 'success');
    }

    // Sauvegarder dans localStorage
    saveCategoriesToStorage();

    // Revenir à la liste
    showAdminCategoriesTab();
}

function updateProductsCategoryId(oldId, newId) {
    // Mettre à jour la catégorie de tous les produits qui utilisaient l'ancien ID
    products.forEach(product => {
        if (product.category === oldId) {
            product.category = newId;
        }
    });

    // Sauvegarder les produits mis à jour
    if (typeof saveCustomProducts === 'function') {
        saveCustomProducts();
    }
}

function editCategory(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
        showAddCategoryForm(category);
    }
}

function deleteCategory(categoryId) {
    // Compter les produits dans cette catégorie
    const productsInCategory = products.filter(p => p.category === categoryId).length;

    let message = `Êtes-vous sûr de vouloir supprimer la catégorie "${categories.find(c => c.id === categoryId)?.name}" ?`;
    if (productsInCategory > 0) {
        message = `⚠️ ${productsInCategory} produit(s) sont associés à cette catégorie.\n\n` +
                 `Que souhaitez-vous faire ?\n` +
                 `- OK : Supprimer la catégorie (les produits ne seront plus associés à aucune catégorie)\n` +
                 `- Annuler : Ne rien faire`;
    }

    if (confirm(message)) {
        // Supprimer la catégorie
        categories = categories.filter(c => c.id !== categoryId);

        // Optionnel : Mettre à jour les produits (les laisser sans catégorie)
        // Si vous voulez les supprimer ou les réaffecter, c'est ici

        saveCategoriesToStorage();
        showNotification('Catégorie supprimée', 'info');
        showAdminCategoriesTab();
    }
}

// Fonctions de persistance des catégories
function saveCategoriesToStorage() {
    try {
        localStorage.setItem('kwad_categories', JSON.stringify(categories));
        console.log('💾 Catégories sauvegardées:', categories.length);
    } catch (e) {
        console.error('Erreur lors de la sauvegarde des catégories:', e);
    }
}

function loadCategoriesFromStorage() {
    try {
        const saved = localStorage.getItem('kwad_categories');
        if (saved) {
            const loadedCategories = JSON.parse(saved);
            // Fusionner avec les catégories par défaut (garder les IDs uniques)
            const defaultCategoryIds = categories.map(c => c.id);
            const newCategories = loadedCategories.filter(c => !defaultCategoryIds.includes(c.id));
            categories = [...categories, ...newCategories];
            console.log('📂 Catégories chargées:', categories.length);
        }
    } catch (e) {
        console.error('Erreur lors du chargement des catégories:', e);
    }
}


// ==================== FONCTIONS UTILITAIRES POUR LES CATÉGORIES ====================

function updateCategoriesCount() {
    // Initialiser tous les compteurs à 0
    categories.forEach(cat => {
        cat.count = 0;
    });

    // Compter les produits par catégorie
    products.forEach(product => {
        const category = categories.find(c => c.id === product.category);
        if (category) {
            category.count = (category.count || 0) + 1;
        }
    });

    console.log('📊 Compteurs de catégories mis à jour:', categories.map(c => `${c.name}: ${c.count}`));
    return categories;
}

// Version optimisée qui ne met à jour qu'une seule catégorie
function updateSingleCategoryCount(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
        const newCount = products.filter(p => p.category === categoryId).length;
        category.count = newCount;
        console.log(`📊 Compteur mis à jour pour ${category.name}: ${newCount}`);
    }
}

// Appeler cette fonction après chaque modification de produit
function refreshCategoryCounts() {
    updateCategoriesCount();
    saveCategoriesToStorage();

    // Rafraîchir l'affichage si on est dans l'onglet admin
    if (document.getElementById('admin-categories-grid')) {
        showAdminCategoriesTab();
    }
}

function deleteCategory(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return;

    const productsInCategory = products.filter(p => p.category === categoryId);
    const productsCount = productsInCategory.length;

    if (productsCount === 0) {
        // Pas de produits, suppression simple
        if (confirm(`Êtes-vous sûr de vouloir supprimer la catégorie "${category.name}" ?`)) {
            performCategoryDeletion(categoryId);
        }
    } else {
        // Afficher une modal de réaffectation
        showCategoryReassignmentModal(category, productsInCategory);
    }
}

function showCategoryReassignmentModal(category, productsInCategory) {
    // Créer la modal
    const modal = document.createElement('div');
    modal.className = 'admin-modal';
    modal.id = 'reassign-modal';

    // Filtrer les autres catégories (exclure celle qu'on supprime)
    const otherCategories = categories.filter(c => c.id !== category.id);

    modal.innerHTML = `
        <div class="admin-modal-content" style="max-width: 500px;">
            <div class="admin-modal-header">
                <h2><i class="fas fa-exchange-alt"></i> Réaffecter les produits</h2>
                <button class="close-admin-modal" onclick="closeReassignModal()">&times;</button>
            </div>
            <div class="admin-modal-body">
                <div style="margin-bottom: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
                    <i class="fas fa-exclamation-triangle" style="color: #856404;"></i>
                    <strong style="color: #856404;"> ${productsInCategory.length} produit(s)</strong>
                    <p style="color: #856404; margin: 5px 0 0 0;">sont associés à la catégorie "${category.name}".</p>
                </div>

                <form id="reassign-form" onsubmit="event.preventDefault(); handleReassignAndDelete('${category.id}')">
                    <div class="form-group">
                        <label><i class="fas fa-arrow-right"></i> Que souhaitez-vous faire ?</label>

                        <div style="margin: 20px 0;">
                            <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px; cursor: pointer;">
                                <input type="radio" name="reassign-option" value="delete" checked>
                                <div>
                                    <strong>Supprimer définitivement</strong>
                                    <p style="margin: 5px 0 0 0; color: #666; font-size: 13px;">
                                        Les produits seront également supprimés (⚠️ action irréversible)
                                    </p>
                                </div>
                            </label>

                            <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px; cursor: pointer;">
                                <input type="radio" name="reassign-option" value="reassign">
                                <div>
                                    <strong>Réaffecter à une autre catégorie</strong>
                                    <p style="margin: 5px 0 0 0; color: #666; font-size: 13px;">
                                        Les produits seront déplacés vers la catégorie choisie
                                    </p>
                                </div>
                            </label>
                        </div>

                        <div id="category-select-container" style="display: none; margin-top: 15px;">
                            <label>Sélectionner une catégorie de destination :</label>
                            <select id="target-category" class="form-control" style="width: 100%; padding: 10px; margin-top: 5px;">
                                <option value="">-- Choisir une catégorie --</option>
                                ${otherCategories.map(c => `
                                    <option value="${c.id}">${c.name} (${c.count || 0} produits)</option>
                                `).join('')}
                            </select>

                            ${otherCategories.length === 0 ? `
                                <div style="margin-top: 10px; padding: 10px; background: #f8d7da; border-radius: 5px; color: #721c24;">
                                    <i class="fas fa-exclamation-circle"></i>
                                    Aucune autre catégorie disponible. Créez-en une d'abord.
                                </div>
                            ` : ''}
                        </div>
                    </div>

                    <div class="form-actions" style="margin-top: 30px;">
                        <button type="submit" class="btn btn-danger">
                            <i class="fas fa-trash"></i> Confirmer
                        </button>
                        <button type="button" class="btn btn-secondary" onclick="closeReassignModal()">
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Gestion de l'affichage conditionnel du select
    const radios = document.querySelectorAll('input[name="reassign-option"]');
    const selectContainer = document.getElementById('category-select-container');

    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            selectContainer.style.display = this.value === 'reassign' ? 'block' : 'none';
        });
    });
}

function closeReassignModal() {
    const modal = document.getElementById('reassign-modal');
    if (modal) modal.remove();
}

function handleReassignAndDelete(categoryId) {
    const option = document.querySelector('input[name="reassign-option"]:checked')?.value;

    if (option === 'delete') {
        // Supprimer la catégorie ET tous ses produits
        if (confirm('⚠️ Cette action est irréversible. Les produits seront définitivement supprimés. Continuer ?')) {
            // Supprimer tous les produits de cette catégorie
            const productsToDelete = products.filter(p => p.category === categoryId);
            productsToDelete.forEach(product => {
                if (product.id > 1000) { // Produits personnalisés seulement
                    customProducts = customProducts.filter(p => p.id !== product.id);
                }
            });

            // Sauvegarder les produits
            if (typeof saveCustomProducts === 'function') {
                saveCustomProducts();
            }

            // Supprimer la catégorie
            performCategoryDeletion(categoryId);
            closeReassignModal();
            showNotification(`${productsToDelete.length} produit(s) et la catégorie ont été supprimés`, 'warning');
        }
    }
    else if (option === 'reassign') {
        const targetCategoryId = document.getElementById('target-category')?.value;

        if (!targetCategoryId) {
            showNotification('Veuillez sélectionner une catégorie de destination', 'error');
            return;
        }

        // Réaffecter tous les produits
        products.forEach(product => {
            if (product.category === categoryId) {
                product.category = targetCategoryId;
            }
        });

        // Sauvegarder les modifications
        if (typeof saveCustomProducts === 'function') {
            saveCustomProducts();
        }

        triggerProductsUpdated();

        // Mettre à jour les compteurs
        updateSingleCategoryCount(categoryId);
        updateSingleCategoryCount(targetCategoryId);

        // Supprimer la catégorie
        performCategoryDeletion(categoryId);
        closeReassignModal();
        showNotification(`Tous les produits ont été déplacés vers la nouvelle catégorie`, 'success');
    }
}

function performCategoryDeletion(categoryId) {
    // Supprimer la catégorie
    categories = categories.filter(c => c.id !== categoryId);
    saveCategoriesToStorage();
    triggerProductsUpdated();

    // Mettre à jour l'affichage
    showAdminCategoriesTab();
    showNotification('Catégorie supprimée', 'info');
}

// ==================== RÉORGANISATION DES CATÉGORIES ====================

let draggedCategory = null;

function enableCategoryDragAndDrop() {
    const categoryCards = document.querySelectorAll('.category-admin-card');
    const grid = document.getElementById('admin-categories-grid');

    if (!grid) return;

    categoryCards.forEach(card => {
        card.setAttribute('draggable', 'true');

        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
        card.addEventListener('dragover', handleDragOver);
        card.addEventListener('dragenter', handleDragEnter);
        card.addEventListener('dragleave', handleDragLeave);
        card.addEventListener('drop', handleDrop);
    });

    // Style pour le drag & drop
    const style = document.createElement('style');
    style.textContent = `
        .category-admin-card.dragging {
            opacity: 0.5;
            transform: scale(0.95);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .category-admin-card.drag-over {
            border: 2px dashed var(--primary);
            transform: scale(1.02);
            background: rgba(155, 135, 245, 0.1);
        }

        .category-admin-card {
            transition: all 0.3s ease;
            cursor: grab;
            user-select: none;
        }

        .category-admin-card:active {
            cursor: grabbing;
        }
    `;
    document.head.appendChild(style);
}

function handleDragStart(e) {
    draggedCategory = this;
    this.classList.add('dragging');

    // Stocker l'ID de la catégorie
    e.dataTransfer.setData('text/plain', this.dataset.categoryId);
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    document.querySelectorAll('.category-admin-card').forEach(card => {
        card.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    e.preventDefault();
    if (this !== draggedCategory) {
        this.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');

    const targetCard = this;
    const targetId = targetCard.dataset.categoryId;
    const draggedId = e.dataTransfer.getData('text/plain');

    if (draggedId === targetId || !draggedId) return;

    // Réorganiser le tableau categories
    const draggedIndex = categories.findIndex(c => c.id === draggedId);
    const targetIndex = categories.findIndex(c => c.id === targetId);

    if (draggedIndex !== -1 && targetIndex !== -1) {
        // Réorganiser le tableau
        const [draggedItem] = categories.splice(draggedIndex, 1);
        categories.splice(targetIndex, 0, draggedItem);

        // Sauvegarder le nouvel ordre
        saveCategoriesToStorage();

        // Réorganiser le DOM
        const grid = document.getElementById('admin-categories-grid');
        const cards = [...grid.children];

        if (draggedIndex < targetIndex) {
            grid.insertBefore(draggedCategory, targetCard.nextSibling);
        } else {
            grid.insertBefore(draggedCategory, targetCard);
        }

        showNotification('Ordre des catégories mis à jour', 'success');
    }
}

// Bouton pour réinitialiser l'ordre par défaut
function resetCategoryOrder() {
    if (confirm('Réinitialiser l\'ordre des catégories par défaut ?')) {
        // Recharger les catégories depuis le fichier original
        const defaultCategories = [
            { id: 'electromenager', name: 'Électroménager', count: 0, image: '...' },
            { id: 'electricite', name: 'Électricité', count: 0, image: '...' },
            // ... (copier toutes les catégories par défaut)
        ];

        // Fusionner avec les catégories personnalisées
        const customCats = categories.filter(c => !defaultCategories.some(dc => dc.id === c.id));
        categories = [...defaultCategories, ...customCats];

        saveCategoriesToStorage();
        showAdminCategoriesTab();
        showNotification('Ordre réinitialisé', 'info');
    }
}

// Mettre à jour showAdminCategoriesTab pour activer le drag & drop
function showAdminCategoriesTab() {
    const content = document.getElementById('admin-content');
    if (!content) return;

    loadCategoriesFromStorage();
    updateCategoriesCount(); // Mettre à jour les compteurs avant l'affichage

    content.innerHTML = `
        <div class="admin-categories">
            <div class="admin-toolbar">
                <h3><i class="fas fa-tags"></i> Gestion des Catégories</h3>
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-secondary" onclick="resetCategoryOrder()" title="Réinitialiser l'ordre">
                        <i class="fas fa-undo"></i> Réinitialiser
                    </button>
                    <button class="btn btn-success" onclick="showAddCategoryForm()">
                        <i class="fas fa-plus"></i> Ajouter une catégorie
                    </button>
                </div>
            </div>

            <div class="admin-info" style="background: #e3f2fd; padding: 10px; border-radius: 5px; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-info-circle" style="color: #1976d2;"></i>
                <span style="color: #1976d2;">Astuce : Vous pouvez réorganiser les catégories par glisser-déposer</span>
            </div>

            <div class="admin-categories-grid" id="admin-categories-grid">
                ${renderCategoriesList()}
            </div>
        </div>
    `;

    // Activer le drag & drop après le rendu
    setTimeout(enableCategoryDragAndDrop, 100);
}


// Rendre les fonctions disponibles globalement
window.showAdminCategoriesTab = showAdminCategoriesTab;
window.showAddCategoryForm = showAddCategoryForm;
window.editCategory = editCategory;
window.deleteCategory = deleteCategory;
window.saveCategory = saveCategory;
window.handleCategoryFileSelect = handleCategoryFileSelect;
window.removeCategoryImage = removeCategoryImage;
window.syncCategoryImageFromUrl = syncCategoryImageFromUrl;
window.updateCategoryPreview = updateCategoryPreview;