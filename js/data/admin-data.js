//admin-data.js

// ==================== DONNÉES ADMIN ====================

// Comptes admin autorisés
const adminUsers = [
    {
        id: 1,
        username: 'admin',
        password: 'admin123', // À changer en production
        email: 'admin@kwad.com',
        role: 'superadmin'
    },
    {
        id: 2,
        username: 'client',
        password: 'client123',
        email: 'client@kwad.com',
        role: 'editor'
    }
];

// Stockage local pour les produits ajoutés par l'admin
let customProducts = [];

// Clé pour localStorage
const STORAGE_KEY = 'kwad_custom_products';

// Charger les produits personnalisés depuis localStorage
function loadCustomProducts() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            customProducts = JSON.parse(saved);
            console.log(`📂 Produits personnalisés chargés : ${customProducts.length}`);
        } else {
            customProducts = [];
            console.log('📂 Aucun produit personnalisé trouvé');
        }
    } catch (e) {
        console.error('Erreur lors du chargement des produits:', e);
        customProducts = [];
    }
    return customProducts;
}

// Sauvegarder les produits personnalisés
function saveCustomProducts() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(customProducts));
        console.log(`💾 Produits personnalisés sauvegardés : ${customProducts.length}`);

        // Recharger les produits globaux
        if (typeof reloadProducts === 'function') {
            reloadProducts();
        }

        return true;
    } catch (e) {
        console.error('Erreur lors de la sauvegarde:', e);
        return false;
    }
}


// Ajouter un produit personnalisé
function addCustomProduct(productData) {
    const newId = 1000 + customProducts.length + 1;

    const newProduct = {
        id: newId,
        ...productData,
        isCustom: true,
        createdAt: new Date().toISOString()
    };

    customProducts.push(newProduct);
    saveCustomProducts();

    return newProduct;
}

// Modifier un produit personnalisé
function updateCustomProduct(productId, productData) {
    const index = customProducts.findIndex(p => p.id == productId);
    if (index !== -1) {
        customProducts[index] = {
            ...customProducts[index],
            ...productData,
            updatedAt: new Date().toISOString()
        };
        saveCustomProducts();
        return customProducts[index];
    }
    return null;
}

// Supprimer un produit personnalisé
function deleteCustomProduct(productId) {
    customProducts = customProducts.filter(p => p.id != productId);
    saveCustomProducts();
}

// Obtenir tous les produits (par défaut + personnalisés)
function getAllProducts() {
    return [...defaultProducts, ...customProducts];
}

// Obtenir un produit par son ID (cherche dans les deux listes)
function getProductById(productId) {
    // Chercher d'abord dans les produits par défaut
    let product = defaultProducts.find(p => p.id == productId);

    // Si pas trouvé, chercher dans les produits personnalisés
    if (!product) {
        product = customProducts.find(p => p.id == productId);
    }

    return product;
}

// Variables de session admin
let currentAdmin = null;
let isAdminLoggedIn = false;

// Initialiser
loadCustomProducts();