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

// Charger les produits personnalisés depuis localStorage
function loadCustomProducts() {
    const saved = localStorage.getItem('kwad_custom_products');
    if (saved) {
        customProducts = JSON.parse(saved);
    }
}

// Sauvegarder les produits personnalisés
function saveCustomProducts() {
    localStorage.setItem('kwad_custom_products', JSON.stringify(customProducts));
}

// Initialiser
loadCustomProducts();

// Variables de session admin
let currentAdmin = null;
let isAdminLoggedIn = false;