// ==================== VARIABLES GLOBALES ====================
let cart = [];
let currentSlide = 0;
let slidesToShow = 4; // Sera mis à jour au chargement
let currentProduct = null;
let currentMediaIndex = 0;

// ==================== FONCTIONS DE CONFIGURATION ====================
function getSlidesToShow() {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 992) return 2;
    return 4;
}

// Mettre à jour slidesToShow au chargement
slidesToShow = getSlidesToShow();