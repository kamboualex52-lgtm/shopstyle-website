//main.js

// ==================== POINT D'ENTRÉE PRINCIPAL ====================

// Charger tous les modules dans l'ordre
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 KWAD - Initialisation...');

    // Forcer le rechargement des produits au démarrage
    if (typeof reloadProducts === 'function') {
        reloadProducts();
        console.log('📦 Produits rechargés:', products.length);
    }

    // Initialiser toutes les fonctionnalités
    initCategories();

    // Attendre un court instant pour s'assurer que tout est chargé
    setTimeout(() => {
        initProducts();
    }, 50);

    initEventListeners();
    initSearch();
    initNavigation();
    initFooterLinks();
    initSocialLinks();
    setupDetailPageEvents();

    // Initialiser l'admin
    if (typeof initAdminAuth === 'function') {
        initAdminAuth();
    }

    // Mettre à jour le compteur du panier
    updateCartCount();

    // Ajouter la navigation du carousel
    addCarouselNavigation();

    // Démarrer le carousel automatique
    startCarousel();
    enableSwipe();
    addCarouselPauseEvents();

    console.log('✅ KWAD - Initialisation terminée');
});

// ==================== ÉVÉNEMENTS GLOBAUX ====================

function initEventListeners() {
    // Ouvrir/fermer le panier
    const openCartBtn = document.getElementById('open-cart');
    const closeCartBtn = document.getElementById('close-cart');

    if (openCartBtn) openCartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

    // Méthodes de paiement
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Commander sur WhatsApp
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

    // Fermer le panier en cliquant à l'extérieur
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === this) closeCart();
        });
    }
}

// Exporter les fonctions globales nécessaires
window.showHomePage = showHomePage;
window.showNewProducts = showNewProducts;
window.showPromotions = showPromotions;
window.showAbout = showAbout;
window.showContact = showContact;
window.showDeliveryInfo = showDeliveryInfo;
window.showTerms = showTerms;
window.showPrivacyPolicy = showPrivacyPolicy;
window.showAccountPage = showAccountPage;
window.showOrderHistory = showOrderHistory;
window.showWishlist = showWishlist;
window.showNewsletterPage = showNewsletterPage;
window.filterProducts = filterProducts;
window.openWhatsAppContact = openWhatsAppContact;
window.makePhoneCall = makePhoneCall;
window.sendEmail = sendEmail;
window.clearSearch = clearSearch;

// Exporter les fonctions admin
window.showAdminDashboard = showAdminDashboard;
window.adminLogout = adminLogout;
window.showAdminProductsTab = showAdminProductsTab;
window.showAddProductForm = showAddProductForm;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.duplicateProduct = duplicateProduct;
window.filterAdminProducts = filterAdminProducts;
window.showAdminCategoriesTab = showAdminCategoriesTab;