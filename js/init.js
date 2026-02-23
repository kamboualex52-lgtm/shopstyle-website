// ==================== INITIALISATION PRIORITAIRE ====================

// Cette fonction s'exécute immédiatement
(function() {
    console.log('🚀 Initialisation prioritaire...');

    // S'assurer que les produits personnalisés sont chargés
    if (typeof loadCustomProducts === 'function') {
        loadCustomProducts();
    }

    if (typeof reloadProducts === 'function') {
        reloadProducts();
    }

    console.log('✅ Initialisation prioritaire terminée');
})();