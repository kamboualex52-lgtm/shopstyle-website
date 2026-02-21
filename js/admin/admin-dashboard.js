// ==================== TABLEAU DE BORD ADMIN ====================

function showAdminDashboard() {
    if (!isAdminLoggedIn) {
        showAdminLoginModal();
        return;
    }

    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    const dashboardHTML = `
        <div class="admin-dashboard">
            <div class="admin-header">
                <h2><i class="fas fa-tachometer-alt"></i> Tableau de Bord Admin</h2>
                <div class="admin-user-info">
                    <span><i class="fas fa-user"></i> ${currentAdmin.username}</span>
                    <span class="admin-role">(${currentAdmin.role})</span>
                    <button class="btn btn-danger btn-sm" onclick="adminLogout()">
                        <i class="fas fa-sign-out-alt"></i> Déconnexion
                    </button>
                </div>
            </div>

            <div class="admin-stats">
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-box"></i></div>
                    <div class="stat-info">
                        <h3>${products.length + customProducts.length}</h3>
                        <p>Produits totaux</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-tags"></i></div>
                    <div class="stat-info">
                        <h3>${categories.length}</h3>
                        <p>Catégories</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-shopping-cart"></i></div>
                    <div class="stat-info">
                        <h3>${cart.reduce((a, b) => a + b.quantity, 0)}</h3>
                        <p>Articles en panier</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-star"></i></div>
                    <div class="stat-info">
                        <h3>${customProducts.length}</h3>
                        <p>Produits personnalisés</p>
                    </div>
                </div>
            </div>

            <div class="admin-tabs">
                <button class="tab-btn active" onclick="showAdminProductsTab()">
                    <i class="fas fa-box"></i> Produits
                </button>
                <button class="tab-btn" onclick="showAdminCategoriesTab()">
                    <i class="fas fa-tags"></i> Catégories
                </button>
                <button class="tab-btn" onclick="showAdminOrdersTab()">
                    <i class="fas fa-shopping-bag"></i> Commandes
                </button>
                <button class="tab-btn" onclick="showAdminSettingsTab()">
                    <i class="fas fa-cog"></i> Paramètres
                </button>
            </div>

            <div class="admin-content" id="admin-content">
                <!-- Le contenu des onglets sera chargé ici -->
            </div>
        </div>
    `;

    grid.innerHTML = dashboardHTML;
    updatePageTitle('Administration - KWAD');

    // Afficher l'onglet produits par défaut
    showAdminProductsTab();
}

function showAdminProductsTab() {
    const content = document.getElementById('admin-content');
    if (!content) return;

    // Fusionner les produits par défaut et personnalisés
    const allProducts = [...products, ...customProducts];

    content.innerHTML = `
        <div class="admin-products">
            <div class="admin-toolbar">
                <h3><i class="fas fa-box"></i> Gestion des Produits</h3>
                <button class="btn btn-success" onclick="showAddProductForm()">
                    <i class="fas fa-plus"></i> Ajouter un produit
                </button>
            </div>

            <div class="admin-filters">
                <input type="text" placeholder="Rechercher un produit..." id="admin-product-search" onkeyup="filterAdminProducts()">
                <select id="admin-category-filter" onchange="filterAdminProducts()">
                    <option value="">Toutes les catégories</option>
                    ${categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                </select>
            </div>

            <div class="admin-products-table">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Catégorie</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="admin-products-list">
                        ${renderAdminProductsList(allProducts)}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderAdminProductsList(productsList) {
    if (productsList.length === 0) {
        return `
            <tr>
                <td colspan="6" class="empty-state">
                    <i class="fas fa-box-open"></i>
                    <p>Aucun produit trouvé</p>
                </td>
            </tr>
        `;
    }

    return productsList.map(product => {
        const isCustom = product.id > 1000; // Les produits personnalisés ont des ID > 1000
        const category = categories.find(c => c.id === product.category) || { name: 'Non catégorisé' };

        return `
            <tr data-product-id="${product.id}">
                <td>
                    <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                </td>
                <td>
                    <strong>${product.name}</strong>
                    ${isCustom ? '<span class="badge-custom">Personnalisé</span>' : ''}
                </td>
                <td>${product.price.toLocaleString()} FCFA</td>
                <td>${category.name}</td>
                <td>
                    <span class="status-badge ${product.badge ? 'active' : 'inactive'}">
                        ${product.badge || 'Standard'}
                    </span>
                </td>
                <td class="actions">
                    <button class="btn-icon" onclick="editProduct(${product.id})" title="Modifier">
                        <i class="fas fa-edit"></i>
                    </button>
                    ${isCustom ? `
                        <button class="btn-icon delete" onclick="deleteProduct(${product.id})" title="Supprimer">
                            <i class="fas fa-trash"></i>
                        </button>
                    ` : ''}
                    <button class="btn-icon" onclick="duplicateProduct(${product.id})" title="Dupliquer">
                        <i class="fas fa-copy"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}