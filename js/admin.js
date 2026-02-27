// Vérification authentification (simulée)
let isAuthenticated = sessionStorage.getItem('kwad_admin') === 'true';

// Rediriger si non authentifié
if (!isAuthenticated && window.location.pathname.includes('admin.html')) {
    const password = prompt('Entrez le mot de passe admin:');
    if (password === 'admin123') { // À changer en production
        sessionStorage.setItem('kwad_admin', 'true');
        isAuthenticated = true;
    } else {
        window.location.href = 'index.html';
    }
}

// Gestion des onglets
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

        this.classList.add('active');
        const tabId = this.dataset.tab;
        document.getElementById(`${tabId}-tab`).classList.add('active');

        // Recharger les données
        if (tabId === 'products') loadProductsTable();
        else loadCategoriesTable();
    });
});

// Charger la table des produits
function loadProductsTable() {
    const tbody = document.getElementById('productsTableBody');
    if (!tbody) return;

    const products = ProductManager.getAll();
    const categories = CategoryManager.getAll();

    tbody.innerHTML = products.map(product => {
        const category = categories.find(c => c.id === product.category);
        return `
        <tr>
            <td><img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/50'"></td>
            <td>${product.name}</td>
            <td>${category ? category.name : product.category}</td>
            <td>${product.rating} ⭐</td>
            <td>${product.badge || '-'}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete-btn" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `}).join('');
}

// Charger la table des catégories
function loadCategoriesTable() {
    const tbody = document.getElementById('categoriesTableBody');
    if (!tbody) return;

    const categories = CategoryManager.getAll();

    tbody.innerHTML = categories.map(category => `
        <tr>
            <td><img src="${category.image}" alt="${category.name}" onerror="this.src='https://via.placeholder.com/50'"></td>
            <td>${category.name}</td>
            <td>${category.id}</td>
            <td>${category.count}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editCategory('${category.id}')">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete-btn" onclick="deleteCategory('${category.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Gestion des modals
const productModal = document.getElementById('productModal');
const categoryModal = document.getElementById('categoryModal');

// Ouvrir modal produit
document.getElementById('addProductBtn')?.addEventListener('click', () => {
    document.getElementById('modalTitle').textContent = 'Ajouter un produit';
    document.getElementById('productForm').reset();
    document.getElementById('productForm').dataset.productId = '';

    // Charger les catégories dans le select
    const select = document.getElementById('productCategory');
    const categories = CategoryManager.getAll();
    select.innerHTML = categories.map(c =>
        `<option value="${c.id}">${c.name}</option>`
    ).join('');

    productModal.style.display = 'block';
});

// Ouvrir modal catégorie
document.getElementById('addCategoryBtn')?.addEventListener('click', () => {
    document.getElementById('categoryForm').reset();
    categoryModal.style.display = 'block';
});

// Fermer les modals
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', function() {
        productModal.style.display = 'none';
        categoryModal.style.display = 'none';
    });
});

// Soumission formulaire produit
document.getElementById('productForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const product = {
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        image: document.getElementById('productImage').value,
        rating: parseFloat(document.getElementById('productRating').value),
        badge: document.getElementById('productBadge').value || null,
        description: document.getElementById('productDescription').value,
        features: document.getElementById('productFeatures').value.split('\n').filter(f => f.trim()),
        media: [{ type: 'image', src: document.getElementById('productImage').value }]
    };

    const productId = document.getElementById('productForm').dataset.productId;

    if (productId) {
        // Modification
        ProductManager.update(productId, product);
    } else {
        // Ajout
        ProductManager.add(product);
        // Mettre à jour le compteur de la catégorie
        CategoryManager.updateProductCount(product.category, true);
    }

    productModal.style.display = 'none';
    loadProductsTable();
});

// Soumission formulaire catégorie
document.getElementById('categoryForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const category = {
        id: document.getElementById('categoryId').value,
        name: document.getElementById('categoryName').value,
        image: document.getElementById('categoryImage').value,
        count: 0
    };

    CategoryManager.add(category);
    categoryModal.style.display = 'none';
    loadCategoriesTable();

    // Mettre à jour le select des catégories dans le modal produit
    const select = document.getElementById('productCategory');
    if (select) {
        select.innerHTML += `<option value="${category.id}">${category.name}</option>`;
    }
});

// Fonctions globales pour les actions
window.editProduct = function(id) {
    const product = ProductManager.getById(id);
    if (!product) return;

    document.getElementById('modalTitle').textContent = 'Modifier le produit';
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productImage').value = product.image;
    document.getElementById('productRating').value = product.rating;
    document.getElementById('productBadge').value = product.badge || '';
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productFeatures').value = product.features.join('\n');
    document.getElementById('productForm').dataset.productId = id;

    productModal.style.display = 'block';
};

window.deleteProduct = function(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
        const product = ProductManager.getById(id);
        ProductManager.delete(id);
        if (product) {
            CategoryManager.updateProductCount(product.category, false);
        }
        loadProductsTable();
    }
};

window.editCategory = function(id) {
    // Implémenter modification catégorie
    alert('Modification catégorie à implémenter');
};

window.deleteCategory = function(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
        CategoryManager.delete(id);
        loadCategoriesTable();
    }
};

// Déconnexion
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    sessionStorage.removeItem('kwad_admin');
    window.location.href = 'index.html';
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('admin.html') && isAuthenticated) {
        loadProductsTable();
        loadCategoriesTable();
    }
});