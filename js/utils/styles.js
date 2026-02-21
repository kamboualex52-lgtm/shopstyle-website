// ==================== INJECTION DES STYLES CSS ====================

function injectNavigationStyles() {
    const navigationStyles = `
    /* Sous-menu actif */
    .submenu.active {
        display: block;
        animation: fadeInDown 0.3s ease;
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Menu mobile */
    .menu-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        color: var(--primary);
        cursor: pointer;
        padding: 10px;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
        }

        nav ul {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: var(--shadow);
            flex-direction: column;
            padding: 10px 0;
            z-index: 1000;
        }

        nav.active ul {
            display: flex;
        }

        .submenu {
            position: static;
            box-shadow: none;
            background: #f8f9fa;
        }
    }

    /* Style pour les sections */
    .about-section, .contact-section, .info-page {
        animation: fadeIn 0.5s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Styles pour la recherche */
    .search-highlight {
        background-color: #fff3cd;
        padding: 2px 4px;
        border-radius: 3px;
        font-weight: bold;
        color: #856404;
    }

    .btn-outline {
        background: transparent;
        border: 2px solid var(--primary);
        color: var(--primary);
    }

    .btn-outline:hover {
        background: var(--primary);
        color: white;
    }

    /* Styles pour le carousel */
    .categories-carousel {
        position: relative;
        overflow: hidden;
    }

    .carousel-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background: white;
        border: none;
        border-radius: 50%;
        box-shadow: var(--shadow);
        cursor: pointer;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .carousel-arrow:hover {
        background: var(--primary);
        color: white;
    }

    .carousel-prev {
        left: 10px;
    }

    .carousel-next {
        right: 10px;
    }

    .carousel-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ccc;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .carousel-dot.active {
        background: var(--primary);
        transform: scale(1.2);
    }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = navigationStyles;
    document.head.appendChild(styleSheet);
}

// Appeler l'injection des styles au chargement
document.addEventListener('DOMContentLoaded', injectNavigationStyles);