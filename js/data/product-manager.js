// ==================== GESTIONNAIRE CENTRAL DES PRODUITS ====================

const ProductManager = {
    // Obtenir tous les produits
    getAll() {
        return products; // La variable globale déjà fusionnée
    },

    // Obtenir un produit par ID
    getById(id) {
        return getProductById(id);
    },

    // Obtenir les produits par catégorie
    getByCategory(categoryId) {
        return products.filter(p => p.category === categoryId);
    },

    // Obtenir les produits avec un badge spécifique
    getByBadge(badge) {
        return products.filter(p => p.badge === badge);
    },

    // Rechercher des produits
    search(term) {
        term = term.toLowerCase();
        return products.filter(p =>
            p.name.toLowerCase().includes(term) ||
            (p.description && p.description.toLowerCase().includes(term)) ||
            (p.features && p.features.some(f => f.toLowerCase().includes(term)))
        );
    },

    // Filtrer les produits (version générique)
    filter(callback) {
        return products.filter(callback);
    },

    // Vérifier si un produit est personnalisé
    isCustom(productId) {
        return productId > 1000;
    },

    // Recharger depuis localStorage
    refresh() {
        return reloadProducts();
    },

    // Obtenir les statistiques
    getStats() {
        return {
            total: products.length,
            default: defaultProducts.length,
            custom: customProducts.length,
            byCategory: categories.reduce((acc, cat) => {
                acc[cat.id] = products.filter(p => p.category === cat.id).length;
                return acc;
            }, {})
        };
    }
};

// Rendre le gestionnaire global
window.ProductManager = ProductManager;