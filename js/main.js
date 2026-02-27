// Données simulées (en attendant de charger depuis JSON)
const siteData = {
    categories: [
        { id: 'electromenager', name: 'Électroménager', count: 10, image: 'https://cdn.futura-sciences.com/sources/images/soldes-hiver-electromenager.jpeg' },
        { id: 'electricite', name: 'Électricité', count: 2, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 'vetements', name: 'Vêtements', count: 8, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 'chaussures', name: 'Chaussures', count: 0, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 'accessoires', name: 'Accessoires', count: 2, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 'beaute', name: 'Beauté', count: 0, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 'complement', name: 'Compléments', count: 0, image: 'data:image/jpeg;base64,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' },
        { id: 'fitness', name: 'Fitness', count: 0, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
        { id: 'vehicules', name: 'Véhicules', count: 1, image: 'data:image/jpeg;base64,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' }
    ],
    products: [
        {
            id: 1,
            name: 'Robe de soirée',
            category: 'vetements',
            image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            rating: 4.5,
            badge: 'Top Vente',
            description: '2025 été élégant robe de soirée formelle haute fente robe de bal fête balayage Train paillettes Maxi longue Slip robes pour les femmes',
            features: ['Silhouette : A-Line', 'Type de tissu : Organza bordé'],
            media: [
                { type: 'image', src: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
            ]
        },
        {
            id: 2,
            name: 'Réfrigérateur',
            category: 'electromenager',
            image: 'https://images.unsplash.com/photo-1584568694244-14d7cbb8a9e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            rating: 4.2,
            badge: 'Nouveau',
            description: 'Réfrigérateur moderne avec technologie de refroidissement avancée',
            features: ['Capacité: 300L', 'Classe énergétique: A++'],
            media: [
                { type: 'image', src: 'https://images.unsplash.com/photo-1584568694244-14d7cbb8a9e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
            ]
        },
        {
            id: 3,
            name: 'Chemise homme',
            category: 'vetements',
            image: 'https://images.unsplash.com/photo-1598033129073-9e0b8f6f1e7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            rating: 4.0,
            badge: 'Promo',
            description: 'Chemise en coton premium, confortable et élégante',
            features: ['Matière: 100% coton', 'Couleur: Blanc'],
            media: [
                { type: 'image', src: 'https://images.unsplash.com/photo-1598033129073-9e0b8f6f1e7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
            ]
        }
    ]
};

// Chargement des catégories
function loadCategories() {
    const track = document.getElementById('categoryTrack');
    if (!track) return;

    // Dupliquer les catégories pour l'effet infini
    const categories = [...siteData.categories, ...siteData.categories];

    track.innerHTML = categories.map(cat => `
        <li class="category-card" data-category="${cat.id}">
            <img src="${cat.image}" alt="${cat.name}" loading="lazy">
            <div class="category-info">
                <h3>${cat.name}</h3>
                <p>${cat.count} produits</p>
            </div>
        </li>
    `).join('');

    // Initialiser le carrousel
    initCarousel();
}

// Chargement des produits populaires
function loadFeaturedProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = siteData.products.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.rating})</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-actions">
                    <button class="btn-add" onclick="addToCart(${product.id})">
                        <i class="fab fa-whatsapp"></i> Commander
                    </button>
                    <a href="product.html?id=${product.id}" class="btn-view">Voir</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Générer les étoiles de notation
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - rating < 1 && i - rating > 0) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Carrousel infini
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.getElementById('prevCategory');
    const nextBtn = document.getElementById('nextCategory');
    const indicators = document.getElementById('categoryIndicators');

    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = siteData.categories.length; // Commencer à la moitié pour l'effet infini
    const itemWidth = 270; // Largeur de l'item + gap
    const totalItems = track.children.length;
    const itemsPerView = Math.floor(track.parentElement.offsetWidth / itemWidth) || 3;

    // Créer les indicateurs
    for (let i = 0; i < siteData.categories.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('indicator');
        dot.addEventListener('click', () => {
            currentIndex = i + siteData.categories.length;
            updateCarousel();
        });
        indicators.appendChild(dot);
    }

    function updateCarousel() {
        // Logique de boucle infinie
        if (currentIndex >= totalItems - itemsPerView) {
            currentIndex = siteData.categories.length;
            track.style.transition = 'none';
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
            }, 10);
        } else if (currentIndex < itemsPerView) {
            currentIndex = totalItems - itemsPerView - siteData.categories.length;
            track.style.transition = 'none';
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
            }, 10);
        }

        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

        // Mettre à jour les indicateurs
        const activeIndex = (currentIndex - siteData.categories.length + siteData.categories.length) % siteData.categories.length;
        document.querySelectorAll('.indicator').forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
    });

    // Mise à jour au redimensionnement
    window.addEventListener('resize', () => {
        updateCarousel();
    });

    updateCarousel();
}

// Menu mobile
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Barre de recherche
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchBtn && searchInput) {
        const performSearch = () => {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        };

        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    loadCategories();
    loadFeaturedProducts();
    initMobileMenu();
    initSearch();

    // Animation au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('.product-card, .category-card').forEach(el => {
        observer.observe(el);
    });
});