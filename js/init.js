// Variables globales
let cart = [];
let currentSlide = 0;
const slidesToShow = 3;
let currentProduct = null;
let currentMediaIndex = 0;

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initCategories();
    initProducts();
    initEventListeners();
    initSearch();
    initNavigation();
    updateCartCount();
    addCarouselNavigation();
    setupDetailPageEvents();
    initFooterLinks();
});