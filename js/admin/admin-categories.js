// ==================== GESTION DES CATÉGORIES (ADMIN) ====================

function showAdminCategoriesTab() {
    const content = document.getElementById('admin-content');
    if (!content) return;

    content.innerHTML = `
        <div class="admin-categories">
            <div class="admin-toolbar">
                <h3><i class="fas fa-tags"></i> Gestion des Catégories</h3>
                <button class="btn btn-success" onclick="showAddCategoryForm()">
                    <i class="fas fa-plus"></i> Ajouter une catégorie
                </button>
            </div>

            <div class="admin-categories-grid">
                ${categories.map(cat => `
                    <div class="category-admin-card">
                        <img src="${cat.image}" alt="${cat.name}" onerror="this.src='https://via.placeholder.com/100'">
                        <div class="category-info">
                            <h4>${cat.name}</h4>
                            <p>${cat.count} produits</p>
                        </div>
                        <div class="category-actions">
                            <button class="btn-icon" onclick="editCategory('${cat.id}')">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn-icon delete" onclick="deleteCategory('${cat.id}')">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function showAddCategoryForm() {
    // Similaire à la fonction pour les produits
    showNotification('Fonctionnalité à venir', 'info');
}