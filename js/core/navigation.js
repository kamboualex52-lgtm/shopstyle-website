//navigation.js

// ==================== GESTION DE LA NAVIGATION ====================

function initNavigation() {
    initMobileMenu();
    initNavLinks();
    initCategoriesMenu();
}

// Menu mobile
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
            nav.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        }
    });
}

// Gestion des liens de navigation
function initNavLinks() {
    const navLinks = document.querySelectorAll('nav > ul > li > a');

    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const submenu = document.querySelector('.submenu');
            if (submenu) submenu.classList.remove('active');

            const nav = document.querySelector('nav');
            if (nav) nav.classList.remove('active');

            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) menuToggle.classList.remove('active');

            switch(index) {
                case 0: showHomePage(); break;
                case 1: break; // Catégories (géré séparément)
                case 2: showNewProducts(); break;
                case 3: showPromotions(); break;
                case 4: showAbout(); break;
                case 5: showContact(); break;
            }
        });
    });
}

// Gestion du sous-menu Catégories
function initCategoriesMenu() {
    const categoriesLink = document.querySelector('nav li:nth-child(2) > a');
    const submenu = document.querySelector('.submenu');

    if (categoriesLink && submenu) {
        categoriesLink.addEventListener('click', function(e) {
            e.preventDefault();
            submenu.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('nav li:nth-child(2)')) {
                submenu.classList.remove('active');
            }
        });

        document.querySelectorAll('.submenu a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const categoryId = this.getAttribute('data-category');
                filterProducts(categoryId);
                submenu.classList.remove('active');

                const nav = document.querySelector('nav');
                if (nav) nav.classList.remove('active');

                const menuToggle = document.querySelector('.menu-toggle');
                if (menuToggle) menuToggle.classList.remove('active');
            });
        });
    }
}

// Page d'accueil
function showHomePage() {
    initProducts();

    const categoriesSection = document.querySelector('.categories-section');
    if (categoriesSection) {
        categoriesSection.style.display = 'block';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    updatePageTitle('Accueil');
}

// Nouveautés
// Nouveautés
function showNewProducts() {
    const newProducts = ProductManager.filter(product =>
        product.badge === 'Nouveau' || product.badge === 'Nouveauté'
    );

    if (newProducts.length === 0) {
        displayFilteredProducts(products.slice(0, 8), 'Nouveautés');
    } else {
        displayFilteredProducts(newProducts, 'Nouveautés');
    }
}

// Promotions
function showPromotions() {
    const promoProducts = ProductManager.filter(product =>
        product.badge === 'Promo' || product.badge === 'Promotion'
    );

    displayFilteredProducts(promoProducts, 'Promotions');
}