// Données des catégories
const categories = [
    { id: 'electromenager', name: 'Électroménager', count: 24, image: 'https://cdn.futura-sciences.com/sources/images/soldes-hiver-electromenager.jpeg' },
    { id: 'electricite', name: 'Électricité', count: 18, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'vetements', name: 'Vêtements', count: 42, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'chaussures', name: 'Chaussures', count: 31, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'accessoires', name: 'Accessoires', count: 27, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'beaute', name: 'Beauté', count: 36, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'complement', name: 'Compléments', count: 15, image: 'https://images.unsplash.com/photo-1585435557343-3b092031d5ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'fitness', name: 'Fitness', count: 22, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
];

// Données des produits COMPLÈTES avec médias
const products = [
    { 
        id: 1, 
        name: 'Mixeur électrique 500W', 
        price: 25000, 
        category: 'electromenager', 
        image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
        rating: 4, 
        badge: 'Nouveau',
        description: 'Mixeur électrique haute performance 500W avec 5 vitesses variables. Parfait pour smoothies, soupes et préparations culinaires. Design ergonomique et facile à nettoyer.',
        features: [
            'Moteur puissant de 500W',
            '5 vitesses variables + fonction pulse',
            'Lames en acier inoxydable',
            'Capacité: 1.5L',
            'Design anti-dérapant',
            'Facile à nettoyer'
        ],
        media: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
        ]
    },
    { 
        id: 2, 
        name: 'Lampadaire LED moderne', 
        price: 18000, 
        category: 'electricite', 
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
        rating: 5, 
        badge: 'Populaire',
        description: 'Lampadaire LED design avec lumière chaude et réglable. Éclairage ambiant parfait pour salon et chambre à coucher.',
        features: [
            'LED éco-énergétique',
            'Lumière chaude 3000K',
            'Hauteur réglable',
            'Interrupteur intégré',
            'Design moderne'
        ],
        media: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
        ]
    },
    { 
        id: 4, 
        name: 'Chaussures de sport Nike', 
        price: 35000, 
        category: 'chaussures', 
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
        rating: 5, 
        badge: 'Promo',
        description: 'Chaussures de sport Nike pour homme, confortables et durables. Idéales pour la course et les activités sportives.',
        features: [
            'Semelle en caoutchouc',
            'Tige en mesh respirant',
            'Confort amortissant',
            'Semelle anti-dérapante',
            'Plusieurs coloris disponibles'
        ],
        media: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
        ]
    },
    { 
        id: 5, 
        name: 'Sac à main cuir véritable', 
        price: 22000, 
        category: 'accessoires', 
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
        rating: 4, 
        badge: null,
        description: 'Sac à main en cuir véritable, élégant et spacieux. Parfait pour usage quotidien ou occasions spéciales.',
        features: [
            'Cuir véritable',
            'Fermeture à zip',
            'Compartiments multiples',
            'Bandoulière ajustable',
            'Dimensions: 30x20x10cm'
        ],
        media: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
        ]
    },
    { 
        id: 6, 
        name: 'Kit soins visage complet', 
        price: 12000, 
        category: 'beaute', 
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
        rating: 4, 
        badge: null,
        description: 'Kit complet de soins pour le visage avec produits naturels. Nettoyant, tonique et crème hydratante.',
        features: [
            'Nettoyant visage',
            'Tonique rafraîchissant',
            'Crème hydratante',
            'Ingrédients naturels',
            'Pour tous types de peau'
        ],
        media: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
        ]
    },
    { 
        id: 7, 
        name: 'Vitamines et minéraux', 
        price: 8000, 
        category: 'complement', 
        image: 'Image/came.jpeg', 
        rating: 3, 
        badge: null,
        description: 'Complément alimentaire riche en vitamines et minéraux essentiels. Soutient le système immunitaire et l\'énergie.',
        features: [
            'Multivitamines complètes',
            'Minéraux essentiels',
            'Soutien immunitaire',
            '60 gélules',
            'Sans conservateurs'
        ],
        media: [
            { type: 'image', src: 'Image/came.jpeg' }
        ]
    },
    { 
        id: 8, 
        name: 'Tapis de yoga premium', 
        price: 15000, 
        category: 'fitness', 
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
        rating: 4, 
        badge: null,
        description: 'Tapis de yoga antidérapant et écologique. Idéal pour la pratique du yoga, pilates et exercices au sol.',
        features: [
            'Matériau écologique',
            'Surface antidérapante',
            'Épaisseur: 6mm',
            'Dimensions: 183x61cm',
            'Facile à nettoyer'
        ],
        media: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
        ]
    },
    
    // Vos produits vêtements avec images locales
    { 
        id: 9, 
        name: 'Robe africaine élégante - Modèle 1', 
        price: 15000, 
        category: 'vetements', 
        image: 'Image/Vetement/Image1.jpeg', 
        rating: 4, 
        badge: null,
        description: 'Robe africaine élégante en tissu wax de haute qualité. Design unique et confortable pour toutes occasions.',
        features: [
            'Tissu wax 100% coton',
            'Coupe ajustée',
            'Manches courtes',
            'Longueur mi-mollet',
            'Lavable en machine'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image1.jpeg' }
        ]
    },
    { 
        id: 10, 
        name: 'Robe africaine élégante - Modèle 2', 
        price: 18000, 
        category: 'vetements', 
        image: 'Image/Vetement/Image2.jpeg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Robe africaine moderne avec motifs traditionnels. Parfaite pour les cérémonies et événements spéciaux.',
        features: [
            'Tissu wax premium',
            'Design contemporain',
            'Encolure en V',
            'Ceinture assortie',
            'Taille unique'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image2.jpeg' }
        ]
    },
    { 
        id: 11, 
        name: 'Robe africaine élégante - Modèle 3', 
        price: 22000, 
        category: 'vetements', 
        image: 'Image/Vetement/Image3.jpeg', 
        rating: 4, 
        badge: null,
        description: 'Robe africaine sophistiquée avec broderies artisanales. Pièce unique et élégante.',
        features: [
            'Broderies artisanales',
            'Tissu de qualité supérieure',
            'Coupe fluide',
            'Manches trois-quarts',
            'Élégante et raffinée'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image3.jpeg' }
        ]
    },
    { 
        id: 12, 
        name: 'Robe africaine élégante - Modèle 4', 
        price: 19000, 
        category: 'vetements', 
        image: 'Image/Vetement/Image4.jpeg', 
        rating: 4, 
        badge: null,
        description: 'Robe africaine colorée avec imprimés vibrants. Confort et style pour votre garde-robe.',
        features: [
            'Imprimés vibrants',
            'Tissu léger et respirant',
            'Coupe droite',
            'Encolure ronde',
            'Entretien facile'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image4.jpeg' }
        ]
    },
    { 
        id: 13, 
        name: 'Robe africaine élégante - Modèle 5', 
        price: 25000, 
        category: 'vetements', 
        image: 'Image/Vetement/Image5.jpeg', 
        rating: 5, 
        badge: 'Populaire',
        description: 'Robe africaine de luxe avec détails perlés. Création exclusive pour les occasions spéciales.',
        features: [
            'Détails perlés',
            'Tissu de soie africaine',
            'Coupe sur mesure',
            'Longueur longue',
            'Pièce exclusive'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image5.jpeg' }
        ]
    },
    { 
        id: 14, 
        name: 'Robe africaine élégante - Modèle 6', 
        price: 17000, 
        category: 'vetements', 
        image: 'Image/Vetement/Image6.jpeg', 
        rating: 4, 
        badge: null,
        description: 'Robe africaine décontractée pour usage quotidien. Style et confort réunis.',
        features: [
            'Style décontracté',
            'Tissu stretch confortable',
            'Poches fonctionnelles',
            'Ceinture élastique',
            'Usage quotidien'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image6.jpeg' }
        ]
    },
    { 
        id: 15, 
        name: 'Robe africaine élégante - Modèle 7', 
        price: 21000, 
        category: 'vetements', 
        image: 'Image/Vetement/Image7.jpeg', 
        rating: 4, 
        badge: null,
        description: 'Robe africaine élégante avec motifs géométriques. Modernité et tradition harmonieusement mêlées.',
        features: [
            'Motifs géométriques',
            'Tissu wax imprimé',
            'Coupe A-line',
            'Manches ballon',
            'Style moderne'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image7.jpeg' }
        ]
    },
    { 
        id: 16, 
        name: 'Robe africaine élégante - Modèle 8', 
        price: 23000, 
        category: 'vetements', 
        image: 'Image/Vetement/Image8.jpeg', 
        rating: 5, 
        badge: 'Promo',
        description: 'Robe africaine cérémoniale avec accessoires assortis. Élégance et tradition pour grands événements.',
        features: [
            'Set complet',
            'Tissu premium',
            'Accessoires inclus',
            'Coupe traditionnelle',
            'Pour cérémonies'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image8.jpeg' }
        ]
    },

    // Electro_menager
    { 
        id: 17, 
        name: 'Ouvre bière automatique', 
        price: 2500, 
        category: 'electromenager', 
        image: 'Image/Electro_menager/Ouvre_auto/Ouvre bière automatique.jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Ouvre-bouteille automatique fonctionnant sur piles. Simple d\'utilisation et efficace.',
        features: [
            'Fonctionnement automatique',
            'Alimentation piles',
            'Design compact',
            'Facile à utiliser',
            'Pour bouteilles standards'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Ouvre_auto/Ouvre bière automatique.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Ouvre_auto/Ouvre1.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Ouvre_auto/Ouvre2.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Ouvre_auto/Ouvre3.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Ouvre_auto/Ouvre4.jpg' }
            
        ]
    },
    { 
        id: 18, 
        name: 'Tire bouchon rechargeable', 
        price: 12000, 
        category: 'electromenager', 
        image: 'Image/Electro_menager/Tire_bouch/Tire bouchon.jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Tire-bouchon électrique rechargeable. Retire les bouchons en quelques secondes sans effort.',
        features: [
            'Rechargeable USB',
            'Fonctionnement silencieux',
            'Batterie lithium',
            'Automatique',
            'Charge rapide'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Tire_bouch/Tire bouchon.jpg' },
            { type: 'video', src: 'Image/Electro_menager/Tire_bouch/Tire bouchon-VID.mp4' }
            
        ]
    },
    { 
        id: 19, 
        name: 'Thermos LED 1L', 
        price: 8000, 
        category: 'electromenager', 
        image: 'Image/Electro_menager/Therm_L/Thermos LED.jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Thermos isotherme avec affichage LED de la température. Garde les boissons chaudes ou froides pendant des heures.',
        features: [
            'Capacité 1L',
            'Affichage LED température',
            'Isolation 12 heures',
            'Bouchon étanche',
            'Design moderne'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Therm_L/Thermos LED.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Therm_L/Thermo1.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Therm_L/Thermo1.jpg' } 
        ]
    },
    { 
        id: 21, 
        name: 'Carafe plus 4 verres (très Robuste)', 
        price: 8000, 
        category: 'electromenager', 
        image: 'Image/Electro_menager/Carafe plus 4 verres.jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Set carafe et verres en verre trempé très robuste. Idéal pour jus, eau et boissons.',
        features: [
            'Verre trempé robuste',
            'Set 5 pièces',
            'Capacité carafe: 1.5L',
            'Design élégant',
            'Lavable au lave-vaisselle'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Carafe plus 4 verres.jpg' }
        ]
    },
    { 
        id: 22, 
        name: 'Chauffe eau 3L', 
        price: 10000, 
        category: 'electromenager', 
        image: 'Image/Electro_menager/Chauffe eau 3L.jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Bouilloire électrique 3L avec arrêt automatique. Chauffe l\'eau rapidement et en toute sécurité.',
        features: [
            'Capacité 3L',
            'Arrêt automatique',
            'Base rotative 360°',
            'Indicateur niveau eau',
            'Chauffe rapide'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Chauffe eau 3L.jpg' }
        ]
    },
    { 
        id: 23, 
        name: 'Mixeur portatif', 
        price: 8000, 
        category: 'electromenager', 
        image: 'Image/Electro_menager/Mixeur_p/Mixeur portatif.jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Mixeur plongeant portable pour smoothies et soupes. Léger et facile à utiliser.',
        features: [
            'Mixeur plongeant',
            'Portable et léger',
            'Lames inoxydables',
            'Facile à nettoyer',
            'Parfait pour smoothies'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Mixeur_p/Mixeur portatif.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Mixeur_p/Mixeur_color.jpg' }
        ]
    },
    { 
        id: 24, 
        name: 'Tapie de Cuisson', 
        price: 3000, 
        category: 'electromenager', 
        image: 'Image/Electro_menager/Tapie de Cuisson.jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Tapis de cuisson silicone réutilisable. Anti-adhésif et résistant à la chaleur.',
        features: [
            'Silicone alimentaire',
            'Résistant à 230°C',
            'Anti-adhésif',
            'Réutilisable',
            'Facile à nettoyer'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Tapie de Cuisson.jpg' }
        ]
    },

    // Electricité
    { 
        id: 20, 
        name: 'Caisse à outils (électricien)', 
        price: 120000, 
        category: 'electricite', 
        image: 'Image/Electricité/Cais_élec/Caisse à outils (électricien).jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Caisse à outils complète pour électricien professionnel. Tous les outils essentiels pour travaux électriques.',
        features: [
            '50 pièces complètes',
            'Outils isolés',
            'Testeur de tension',
            'Multimètre digital',
            'Caisse robuste'
        ],
        media: [
            { type: 'image', src: 'Image/Electricité/Cais_élec/Caisse à outils (électricien).jpg' },
            { type: 'image', src: 'Image/Electricité/Cais_élec/Contenue1.jpg' },
            { type: 'image', src: 'Image/Electricité/Cais_élec/Contenue2.jpg' },
            { type: 'image', src: 'Image/Electricité/Cais_élec/Contenue3.jpg' },
            { type: 'image', src: 'Image/Electricité/Cais_élec/Contenue4.jpg' }
        ]
    },
    { 
        id: 25, 
        name: 'Caisse à outils (électro-technicien)', 
        price: 25000, 
        category: 'electricite', 
        image: 'Image/Electricité/Caisse élctro-technicien.jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Caisse à outils électro-technicien avec instruments de mesure. Parfaite pour dépannage et maintenance.',
        features: [
            'Instruments de mesure',
            'Tournevis isolés',
            'Pinces diverses',
            'Matériel de test',
            'Porte-documents inclus'
        ],
        media: [
            { type: 'image', src: 'Image/Electricité/Caisse élctro-technicien.jpg' }
        ]
    }
];

// Variables globales
let cart = [];
let currentSlide = 0;
const slidesToShow = 5;
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

// ==================== FONCTIONS CATÉGORIES ====================
function initCategories() {
    const container = document.getElementById('categories-container');
    const nav = document.getElementById('carousel-nav');
    
    if (!container || !nav) return;
    
    // Générer les cartes de catégories
    categories.forEach((category, index) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <div class="category-image">
                <img src="${category.image}" alt="${category.name}" onerror="handleImageError(this)">
            </div>
            <div class="category-info">
                <h3 class="category-title">${category.name}</h3>
                <div class="category-count">${category.count} articles</div>
            </div>
        `;
        categoryCard.addEventListener('click', () => filterProducts(category.id));
        container.appendChild(categoryCard);
        
        // Générer les points de navigation
        if (index % slidesToShow === 0) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(index / slidesToShow));
            nav.appendChild(dot);
        }
    });
}

// ==================== FONCTIONS PRODUITS ====================
function initProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i></button>
                    <button class="view-detail" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                    <button><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</div>
                <div class="product-price">${product.price.toLocaleString()} FCFA</div>
                <button class="btn add-to-cart-btn" data-id="${product.id}">Ajouter au panier</button>
            </div>
        `;
        grid.appendChild(productCard);
    });
    
    attachProductEvents();
}

function attachProductEvents() {
    // Ajouter au panier
    document.querySelectorAll('.add-to-cart, .add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    // Voir les détails
    document.querySelectorAll('.view-detail').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-id'));
            showProductDetail(productId);
        });
    });
    
    // Clic sur la carte produit
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.product-actions') && !e.target.closest('.add-to-cart-btn')) {
                const productId = parseInt(this.querySelector('.add-to-cart').getAttribute('data-id'));
                showProductDetail(productId);
            }
        });
    });
}

// ==================== FONCTIONS PANIER ====================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartCount();
    updateCartDisplay();
    showNotification(`${product.name} ajouté au panier`);
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = count;
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('cart-subtotal');
    const totalElement = document.getElementById('cart-total');
    
    if (!cartItems || !subtotalElement || !totalElement) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 20px;">Votre panier est vide</p>';
        subtotalElement.textContent = '0 FCFA';
        totalElement.textContent = '1500 FCFA';
        return;
    }
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="handleImageError(this)">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price.toLocaleString()} FCFA</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    const shipping = 1500;
    const total = subtotal + shipping;
    
    subtotalElement.textContent = `${subtotal.toLocaleString()} FCFA`;
    totalElement.textContent = `${total.toLocaleString()} FCFA`;
    
    // Réattacher les événements pour les boutons de quantité
    attachCartEventListeners();
}

function attachCartEventListeners() {
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            if (this.classList.contains('increase')) {
                updateQuantity(productId, 1);
            } else if (this.classList.contains('decrease')) {
                updateQuantity(productId, -1);
            }
        });
    });
    
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const newQuantity = parseInt(this.value);
            if (newQuantity > 0) {
                setQuantity(productId, newQuantity);
            } else {
                removeFromCart(productId);
            }
        });
    });
    
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            updateCartDisplay();
        }
    }
}

function setQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        updateCartCount();
        updateCartDisplay();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
}

function openCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.style.display = 'flex';
    }
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.style.display = 'none';
    }
}

// ==================== CORRECTION DE LA GESTION DU MENU ====================

function initNavigation() {
    // Gestion du menu responsive
    initMobileMenu();
    
    // Gestion des liens de navigation
    initNavLinks();
    
    // Gestion du sous-menu Catégories
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
    
    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
            nav.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        }
    });
}

// Gestion des liens de navigation - VERSION CORRIGÉE
function initNavLinks() {
    // Sélectionner tous les liens de navigation principaux
    const navLinks = document.querySelectorAll('nav > ul > li > a');
    
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Fermer le sous-menu des catégories s'il est ouvert
            const submenu = document.querySelector('.submenu');
            if (submenu) {
                submenu.classList.remove('active');
            }
            
            // Fermer le menu mobile s'il est ouvert
            const nav = document.querySelector('nav');
            if (nav) {
                nav.classList.remove('active');
            }
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            
            // Déterminer quelle page afficher selon l'index
            switch(index) {
                case 0: // Accueil
                    showHomePage();
                    break;
                case 1: // Catégories (géré par initCategoriesMenu)
                    // Ne rien faire ici, le sous-menu se gère séparément
                    break;
                case 2: // Nouveautés
                    showNewProducts();
                    break;
                case 3: // Promotions
                    showPromotions();
                    break;
                case 4: // À propos
                    showAbout();
                    break;
                case 5: // Contact
                    showContact();
                    break;
            }
        });
    });
}

// Gestion du sous-menu Catégories
function initCategoriesMenu() {
    const categoriesLink = document.querySelector('nav li:nth-child(2) > a');
    const submenu = document.querySelector('.submenu');
    
    if (categoriesLink && submenu) {
        // Ouvrir/fermer le sous-menu au clic
        categoriesLink.addEventListener('click', function(e) {
            e.preventDefault();
            submenu.classList.toggle('active');
        });
        
        // Fermer le sous-menu en cliquant ailleurs
        document.addEventListener('click', function(e) {
            if (!e.target.closest('nav li:nth-child(2)')) {
                submenu.classList.remove('active');
            }
        });
        
        // Gérer les clics sur les sous-catégories
        const submenuLinks = document.querySelectorAll('.submenu a');
        submenuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const categoryId = this.getAttribute('data-category');
                filterProducts(categoryId);
                
                // Fermer le sous-menu après sélection
                submenu.classList.remove('active');
                
                // Fermer le menu mobile
                const nav = document.querySelector('nav');
                if (nav) {
                    nav.classList.remove('active');
                }
                const menuToggle = document.querySelector('.menu-toggle');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
            });
        });
    }
}

// ==================== FONCTIONS DES PAGES AMÉLIORÉES ====================

// Page d'accueil
function showHomePage() {
    // Réinitialiser l'affichage des produits
    initProducts();
    
    // Afficher les catégories
    const categoriesSection = document.querySelector('.categories-section');
    if (categoriesSection) {
        categoriesSection.style.display = 'block';
    }
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Mettre à jour le titre
    updatePageTitle('Accueil');
    
    console.log('Navigation: Accueil');
}

// Nouveautés - VERSION AMÉLIORÉE
function showNewProducts() {
    const newProducts = products.filter(product => 
        product.badge === 'Nouveau' || product.badge === 'Nouveauté' //|| product.badge === 'Populaire'
    );
    
    if (newProducts.length === 0) {
        // Si aucun produit "Nouveau", prendre les 8 premiers produits
        displayFilteredProducts(products.slice(0, 8), 'Nouveautés');
    } else {
        displayFilteredProducts(newProducts, 'Nouveautés');
    }
    
    console.log('Navigation: Nouveautés -', newProducts.length, 'produits');
}

// Promotions - VERSION AMÉLIORÉE
function showPromotions() {
    const promoProducts = products.filter(product => 
        product.badge === 'Promo' || product.badge === 'Promotion'
        //product.price < 15000// Produits à moins de 15,000 FCFA considérés en promo
    );
    
    displayFilteredProducts(promoProducts, 'Promotions');
    
    console.log('Navigation: Promotions -', promoProducts.length, 'produits');
}

// Page À propos - VERSION AMÉLIORÉE
function showAbout() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Cacher la section catégories
    const categoriesSection = document.querySelector('.categories-section');
    if (categoriesSection) {
        categoriesSection.style.display = 'none';
    }
    
    const aboutHTML = `
        <div class="about-section" style="padding: 40px 20px; max-width: 900px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">À Propos de KWAD</h2>
            
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow);">
                <div style="text-align: center; margin-bottom: 40px;">
                    <div style="font-size: 64px; color: var(--primary); margin-bottom: 20px;">
                        🛍️
                    </div>
                    <h3 style="color: #333; margin-bottom: 15px; font-size: 28px;">Votre Boutique en Ligne de Confiance</h3>
                    <p style="color: #666; font-size: 18px; line-height: 1.6;">
                        Découvrez une expérience de shopping exceptionnelle avec KWAD
                    </p>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px;">
                    <div>
                        <h4 style="color: var(--primary); margin-bottom: 20px; font-size: 22px;">📖 Notre Histoire</h4>
                        <p style="line-height: 1.7; color: #666; font-size: 16px;">
                            Fondée en 2024, <strong>KWAD</strong> est née de la passion pour offrir des produits de qualité 
                            à des prix accessibles pour tous les Congolais. Notre mission est de révolutionner 
                            le commerce en ligne au Congo Brazzaville en proposant une plateforme fiable, 
                            sécurisée et conviviale.
                        </p>
                    </div>
                    
                    <div>
                        <h4 style="color: var(--primary); margin-bottom: 20px; font-size: 22px;">🎯 Notre Mission</h4>
                        <p style="line-height: 1.7; color: #666; font-size: 16px;">
                            Rendre le shopping en ligne <strong>simple, sécurisé et agréable</strong>. Nous sélectionnons 
                            rigoureusement chaque produit pour vous garantir qualité, durabilité et satisfaction. 
                            Votre bonheur est notre priorité absolue.
                        </p>
                    </div>
                </div>
                
                <div style="margin-bottom: 40px;">
                    <h4 style="color: var(--primary); margin-bottom: 25px; font-size: 22px; text-align: center;">⭐ Nos Valeurs</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        <div style="text-align: center; padding: 25px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid var(--primary);">
                            <div style="font-size: 32px; margin-bottom: 15px;">👍</div>
                            <h5 style="color: #333; margin-bottom: 10px;">Qualité Garantie</h5>
                            <p style="color: #666; font-size: 14px;">Des produits rigoureusement sélectionnés et testés</p>
                        </div>
                        <div style="text-align: center; padding: 25px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid var(--success);">
                            <div style="font-size: 32px; margin-bottom: 15px;">🚚</div>
                            <h5 style="color: #333; margin-bottom: 10px;">Livraison Rapide</h5>
                            <p style="color: #666; font-size: 14px;">Expédition express dans tout le Congo Brazzaville</p>
                        </div>
                        <div style="text-align: center; padding: 25px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid var(--warning);">
                            <div style="font-size: 32px; margin-bottom: 15px;">💬</div>
                            <h5 style="color: #333; margin-bottom: 10px;">Service Client</h5>
                            <p style="color: #666; font-size: 14px;">Support réactif et attentionné 6j/7</p>
                        </div>
                        <div style="text-align: center; padding: 25px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid var(--danger);">
                            <div style="font-size: 32px; margin-bottom: 15px;">🛡️</div>
                            <h5 style="color: #333; margin-bottom: 10px;">Confiance & Sécurité</h5>
                            <p style="color: #666; font-size: 14px;">Transactions 100% sécurisées et transparentes</p>
                        </div>
                    </div>
                </div>
                
                <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; padding: 30px; border-radius: 10px; text-align: center;">
                    <h4 style="margin-bottom: 20px; font-size: 24px;">📊 Notre Impact</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px;">
                        <div>
                            <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;">${products.length}+</div>
                            <div>Produits</div>
                        </div>
                        <div>
                            <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;">${categories.length}</div>
                            <div>Catégories</div>
                        </div>
                        <div>
                            <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;">100%</div>
                            <div>Satisfaction Client</div>
                        </div>
                        <div>
                            <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;">24/7</div>
                            <div>Support Client</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    grid.innerHTML = aboutHTML;
    updatePageTitle('À Propos');
    console.log('Navigation: À Propos');
}

// Page Contact - VERSION AMÉLIORÉE
function showContact() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Cacher la section catégories
    const categoriesSection = document.querySelector('.categories-section');
    if (categoriesSection) {
        categoriesSection.style.display = 'none';
    }
    
    const contactHTML = `
        <div class="contact-section" style="padding: 40px 20px; max-width: 1000px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 40px; color: var(--primary); font-size: 32px;">Contactez-Nous</h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px;">
                <!-- Informations de contact -->
                <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: var(--shadow);">
                    <h3 style="color: var(--primary); margin-bottom: 25px; font-size: 24px;">📞 Informations de Contact</h3>
                    
                    <div style="space-y-4">
                        <div style="display: flex; align-items: center; margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                            <div style="background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div>
                                <div style="font-weight: bold; color: #333; font-size: 16px;">Téléphone Principal</div>
                                <div style="color: #666; font-size: 18px;">+242 06 844 8698</div>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                            <div style="background: #25D366; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <div>
                                <div style="font-weight: bold; color: #333; font-size: 16px;">WhatsApp Business</div>
                                <div style="color: #666; font-size: 18px;">+242 06 844 8698</div>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                            <div style="background: var(--secondary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <div style="font-weight: bold; color: #333; font-size: 16px;">Email</div>
                                <div style="color: #666; font-size: 18px;">frediadaniella@gmail.com</div>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                            <div style="background: var(--warning); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <div style="font-weight: bold; color: #333; font-size: 16px;">Adresse</div>
                                <div style="color: #666; font-size: 18px;">Pointe-Noire, République du Congo</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Horaires d'ouverture -->
                <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: var(--shadow);">
                    <h3 style="color: var(--primary); margin-bottom: 25px; font-size: 24px;">🕒 Horaires d'Ouverture</h3>
                    
                    <div style="color: #666; space-y-3">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                            <span style="font-weight: 500;">Lundi - Vendredi</span>
                            <span style="font-weight: bold; color: var(--primary);">8h00 - 18h00</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                            <span style="font-weight: 500;">Samedi</span>
                            <span style="font-weight: bold; color: var(--primary);">9h00 - 16h00</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="font-weight: 500;">Dimanche</span>
                            <span style="font-weight: bold; color: #dc3545;">Fermé</span>
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-radius: 10px; border-left: 4px solid #ffc107;">
                        <div style="color: #856404; font-size: 15px; line-height: 1.5;">
                            <strong>💡 Conseil :</strong> Pour une réponse rapide, contactez-nous via WhatsApp ! 
                            Notre équipe est disponible pour vous accompagner dans vos achats.
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Actions de contact -->
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow); text-align: center;">
                <h3 style="color: var(--primary); margin-bottom: 30px; font-size: 26px;">📍 Contactez-Nous Directement</h3>
                <p style="color: #666; margin-bottom: 30px; font-size: 16px; max-width: 600px; margin-left: auto; margin-right: auto;">
                    Nous sommes là pour vous aider ! Choisissez le moyen de contact qui vous convient le mieux.
                </p>
                
                <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                    <button class="btn" onclick="openWhatsAppContact()" style="padding: 15px 30px; font-size: 16px; display: flex; align-items: center; gap: 10px;">
                        <i class="fab fa-whatsapp" style="font-size: 20px;"></i> WhatsApp
                    </button>
                    <button class="btn" onclick="makePhoneCall()" style="padding: 15px 30px; font-size: 16px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-phone" style="font-size: 18px;"></i> Appeler
                    </button>
                    <button class="btn" onclick="sendEmail()" style="padding: 15px 30px; font-size: 16px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-envelope" style="font-size: 18px;"></i> Email
                    </button>
                </div>
            </div>
        </div>
    `;
    
    grid.innerHTML = contactHTML;
    updatePageTitle('Contact');
    console.log('Navigation: Contact');
}



// ==================== FONCTIONS INFORMATIONS - VERSION CORRIGÉE ====================

// Gestion des liens du footer - VERSION COMPLÈTE ET FONCTIONNELLE
// REMPLACEZ la gestion des cas dans initFooterLinks() par ceci :
function initFooterLinks() {
    console.log('🔄 Initialisation des liens du footer...');
    
    const footerLinks = document.querySelectorAll('.footer-column a, footer a');
    
    footerLinks.forEach((link) => {
        const linkText = link.textContent.trim();
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log(`🎯 Clic sur le lien: "${linkText}"`);
            
            // Gestion spécifique pour les liens problématiques
            if (linkText.includes('Conditions générales') || linkText === 'Conditions générales') {
                console.log('🚀 Navigation vers Conditions générales');
                showTerms();
            }
            else if (linkText.includes('Politique de confidentialité') || linkText === 'Politique de confidentialité') {
                console.log('🚀 Navigation vers Politique de confidentialité');
                showPrivacyPolicy();
            }
            else if (linkText.includes('Livraison')) {
                showDeliveryInfo();
            }
            else if (linkText.includes('Retour')) {
                showReturnPolicy();
            }
            else if (linkText.includes('À propos')) {
                showAbout();
            }
            else if (linkText.includes('Mon compte')) {
                showAccountPage();
            }
            else if (linkText.includes('Historique')) {
                showOrderHistory();
            }
            else if (linkText.includes('souhaits') || linkText.includes('Favoris')) {
                showWishlist();
            }
            else if (linkText.includes('Newsletter')) {
                showNewsletterPage();
            }
            else if (linkText.includes('Contact')) {
                showContact();
            }
            else {
                console.log('🔍 Lien non reconnu, navigation vers accueil');
                showHomePage();
            }
        });
    });
    
    console.log(`✅ ${footerLinks.length} liens du footer initialisés`);
}

// Fonction utilitaire pour cacher toutes les sections
function hideAllSections() {
    const categoriesSection = document.querySelector('.categories-section');
    const newsletterSection = document.querySelector('.newsletter');
    
    if (categoriesSection) categoriesSection.style.display = 'none';
    if (newsletterSection) newsletterSection.style.display = 'none';
}

// 🚚 PAGE LIVRAISON - VERSION COMPLÈTE
function showDeliveryInfo() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    hideAllSections();
    
    const deliveryHTML = `
        <div class="info-page" style="padding: 40px 20px; max-width: 900px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">🚚 Informations de Livraison</h2>
            
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow);">
                <!-- Section Zones de Livraison -->
                <div style="margin-bottom: 40px;">
                    <h3 style="color: var(--primary); margin-bottom: 20px; font-size: 22px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">📍 Zones de Livraison</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 20px;">
                        <div style="background: #e8f5e8; padding: 20px; border-radius: 10px; border-left: 4px solid var(--success);">
                            <h4 style="color: #2e7d32; margin-bottom: 10px;">🏙️ Pointe-Noire</h4>
                            <p style="color: #666; margin: 0;">Livraison express en 24h</p>
                            <p style="color: var(--primary); font-weight: bold; margin: 5px 0 0 0;">1 500 FCFA</p>
                        </div>
                        <div style="background: #fff3e0; padding: 20px; border-radius: 10px; border-left: 4px solid var(--warning);">
                            <h4 style="color: #ef6c00; margin-bottom: 10px;">🏙️ Brazzaville</h4>
                            <p style="color: #666; margin: 0;">Livraison en 48h</p>
                            <p style="color: var(--primary); font-weight: bold; margin: 5px 0 0 0;">2 500 FCFA</p>
                        </div>
                        <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border-left: 4px solid var(--info);">
                            <h4 style="color: #1565c0; margin-bottom: 10px;">🏘️ Autres Villes</h4>
                            <p style="color: #666; margin: 0;">Livraison en 3-5 jours</p>
                            <p style="color: var(--primary); font-weight: bold; margin: 5px 0 0 0;">À partir de 3 500 FCFA</p>
                        </div>
                    </div>
                </div>
                
                <!-- Section Processus de Livraison -->
                <div style="margin-bottom: 40px;">
                    <h3 style="color: var(--primary); margin-bottom: 20px; font-size: 22px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">📦 Processus de Livraison</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        <div style="text-align: center; padding: 20px;">
                            <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: bold;">1</div>
                            <h4 style="color: #333; margin-bottom: 10px;">Commande</h4>
                            <p style="color: #666; font-size: 14px;">Passez votre commande via WhatsApp</p>
                        </div>
                        <div style="text-align: center; padding: 20px;">
                            <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: bold;">2</div>
                            <h4 style="color: #333; margin-bottom: 10px;">Confirmation</h4>
                            <p style="color: #666; font-size: 14px;">Nous confirmons votre commande</p>
                        </div>
                        <div style="text-align: center; padding: 20px;">
                            <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: bold;">3</div>
                            <h4 style="color: #333; margin-bottom: 10px;">Préparation</h4>
                            <p style="color: #666; font-size: 14px;">Préparation de votre colis</p>
                        </div>
                        <div style="text-align: center; padding: 20px;">
                            <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: bold;">4</div>
                            <h4 style="color: #333; margin-bottom: 10px;">Livraison</h4>
                            <p style="color: #666; font-size: 14px;">Livraison à votre adresse</p>
                        </div>
                    </div>
                </div>
                
                <!-- Section Délais -->
                <div style="margin-bottom: 40px;">
                    <h3 style="color: var(--primary); margin-bottom: 20px; font-size: 22px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">⏰ Délais de Livraison</h3>
                    <div style="background: #f8f9fa; padding: 25px; border-radius: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="background: var(--primary); color: white;">
                                    <th style="padding: 12px; text-align: left;">Zone</th>
                                    <th style="padding: 12px; text-align: left;">Délai</th>
                                    <th style="padding: 12px; text-align: left;">Frais</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom: 1px solid #eee;">
                                    <td style="padding: 12px;">Pointe-Noire</td>
                                    <td style="padding: 12px;">24-48 heures</td>
                                    <td style="padding: 12px; font-weight: bold;">1 500 FCFA</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #eee;">
                                    <td style="padding: 12px;">Brazzaville</td>
                                    <td style="padding: 12px;">2-3 jours</td>
                                    <td style="padding: 12px; font-weight: bold;">2 500 FCFA</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #eee;">
                                    <td style="padding: 12px;">Dolisie, Nkayi</td>
                                    <td style="padding: 12px;">3-4 jours</td>
                                    <td style="padding: 12px; font-weight: bold;">3 500 FCFA</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px;">Autres villes</td>
                                    <td style="padding: 12px;">4-7 jours</td>
                                    <td style="padding: 12px; font-weight: bold;">Sur devis</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Section Informations Importantes -->
                <div style="background: #fff3cd; padding: 20px; border-radius: 10px; border-left: 4px solid #ffc107; margin-bottom: 30px;">
                    <h4 style="color: #856404; margin-bottom: 10px;">💡 Informations Importantes</h4>
                    <ul style="color: #856404; padding-left: 20px; margin: 0;">
                        <li>Les délais commencent à partir de la confirmation de commande</li>
                        <li>Livraison offerte à partir de 50 000 FCFA d'achat</li>
                        <li>Suivi de commande disponible par téléphone</li>
                        <li>Horaires de livraison : 8h00 - 18h00 du lundi au samedi</li>
                    </ul>
                </div>
                
                <!-- Boutons d'action -->
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="showHomePage()" class="btn" style="background: var(--primary); color: white; padding: 12px 25px; border: none; border-radius: 25px; cursor: pointer; font-size: 16px;">
                        <i class="fas fa-home"></i> Retour à l'accueil
                    </button>
                    <button onclick="openWhatsAppContact()" class="btn" style="background: #25D366; color: white; padding: 12px 25px; border: none; border-radius: 25px; cursor: pointer; font-size: 16px;">
                        <i class="fab fa-whatsapp"></i> Poser une question
                    </button>
                </div>
            </div>
        </div>
    `;
    
    grid.innerHTML = deliveryHTML;
    updatePageTitle('Livraison - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// 📄 CONDITIONS GÉNÉRALES - VERSION COMPLÈTE ET TESTÉE
function showTerms() {
    console.log('🔧 showTerms() appelée - Affichage des conditions générales');
    
    const grid = document.getElementById('products-grid');
    if (!grid) {
        console.error('❌ Element products-grid non trouvé');
        return;
    }
    
    // Cacher les autres sections
    hideAllSections();
    
    const termsHTML = `
        <div style="padding: 40px 20px; max-width: 900px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">📝 Conditions Générales de Vente</h2>
            
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow);">
                
                <!-- En-tête -->
                <div style="text-align: center; margin-bottom: 40px;">
                    <div style="font-size: 80px; margin-bottom: 20px;">⚖️</div>
                    <h3 style="color: var(--primary); margin-bottom: 15px;">Conditions Générales de Vente KWAD</h3>
                    <p style="color: #666; font-size: 16px;">
                        Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}
                    </p>
                </div>

                <!-- Article 1 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">1</span>
                        Objet
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Les présentes conditions générales de vente régissent les relations contractuelles entre KWAD et ses clients.
                        Toute commande implique l'acceptation sans réserve de ces conditions.
                    </p>
                </div>

                <!-- Article 2 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">2</span>
                        Produits et Prix
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Les produits sont décrits avec la plus grande exactitude possible. Les prix sont en francs CFA (FCFA) toutes taxes comprises.
                        KWAD se réserve le droit de modifier ses prix à tout moment.
                    </p>
                </div>

                <!-- Article 3 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">3</span>
                        Commandes
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Les commandes sont passées via WhatsApp. Toute commande vaut acceptation des prix et des conditions de vente.
                        KWAD se réserve le droit d'annuler toute commande en cas de problème de stock.
                    </p>
                </div>

                <!-- Article 4 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">4</span>
                        Paiement
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Le paiement s'effectue par Mobile Money (MTN ou Airtel). La commande n'est validée qu'après confirmation du paiement.
                    </p>
                </div>

                <!-- Article 5 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">5</span>
                        Livraison
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Les délais de livraison sont indicatifs. En cas de retard, le client sera informé.
                        Les frais de livraison sont à la charge du client sauf indication contraire.
                    </p>
                </div>

                <!-- Article 6 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">6</span>
                        Retour et Remboursement
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Délai de rétractation de 7 jours. Les produits doivent être retournés dans leur état d'origine.
                        Les frais de retour sont à la charge du client sauf pour les produits défectueux.
                    </p>
                </div>

                <!-- Article 7 -->
                <div style="margin-bottom: 40px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">7</span>
                        Responsabilité
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        KWAD ne saurait être tenue responsable des dommages résultant d'une mauvaise utilisation des produits.
                    </p>
                </div>

                <!-- Section contact -->
                <div style="background: #e3f2fd; padding: 25px; border-radius: 10px; margin-bottom: 30px; text-align: center;">
                    <h4 style="color: #1565c0; margin-bottom: 15px;">📞 Questions sur nos conditions ?</h4>
                    <p style="color: #1565c0; margin: 0 0 15px 0;">
                        Notre équipe est à votre disposition pour toute clarification.
                    </p>
                    <button onclick="openWhatsAppContact()" class="btn" style="background: #25D366; color: white;">
                        <i class="fab fa-whatsapp"></i> Nous contacter
                    </button>
                </div>

                <!-- Boutons de navigation -->
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="showHomePage()" class="btn" style="background: var(--primary); color: white;">
                        <i class="fas fa-home"></i> Retour à l'accueil
                    </button>
                    <button onclick="showPrivacyPolicy()" class="btn" style="background: var(--secondary); color: white;">
                        <i class="fas fa-shield-alt"></i> Politique de confidentialité
                    </button>
                </div>
            </div>
        </div>
    `;
    
    grid.innerHTML = termsHTML;
    updatePageTitle('Conditions Générales - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log('✅ Conditions générales affichées avec succès');
}



// 🔒 POLITIQUE DE CONFIDENTIALITÉ - VERSION COMPLÈTE ET TESTÉE
function showPrivacyPolicy() {
    console.log('🔧 showPrivacyPolicy() appelée - Affichage de la politique de confidentialité');
    
    const grid = document.getElementById('products-grid');
    if (!grid) {
        console.error('❌ Element products-grid non trouvé');
        return;
    }
    
    // Cacher les autres sections
    hideAllSections();
    
    const privacyHTML = `
        <div style="padding: 40px 20px; max-width: 900px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">🔒 Politique de Confidentialité</h2>
            
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow);">
                
                <!-- En-tête -->
                <div style="text-align: center; margin-bottom: 40px;">
                    <div style="font-size: 80px; margin-bottom: 20px;">🛡️</div>
                    <h3 style="color: var(--primary); margin-bottom: 15px;">Protection de Vos Données Personnelles</h3>
                    <p style="color: #666; font-size: 16px;">
                        Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}
                    </p>
                </div>

                <!-- Section 1 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">1</span>
                        Données Collectées
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Nous collectons : nom, prénom, adresse, numéro de téléphone, adresse email.
                        Ces données sont nécessaires au traitement de votre commande et à la livraison.
                    </p>
                </div>

                <!-- Section 2 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">2</span>
                        Utilisation des Données
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Vos données sont utilisées pour : traiter votre commande, vous livrer, vous informer de l'état de votre commande,
                        et vous envoyer des offres promotionnelles (si vous y consentez).
                    </p>
                </div>

                <!-- Section 3 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">3</span>
                        Protection des Données
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données
                        contre tout accès non autorisé, modification ou destruction.
                    </p>
                </div>

                <!-- Section 4 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">4</span>
                        Partage des Données
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec nos prestataires
                        de livraison uniquement dans le cadre de l'exécution de votre commande.
                    </p>
                </div>

                <!-- Section 5 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">5</span>
                        Durée de Conservation
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Vos données sont conservées pendant la durée nécessaire à l'exécution de nos services,
                        et conformément aux obligations légales.
                    </p>
                </div>

                <!-- Section 6 -->
                <div style="margin-bottom: 40px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">6</span>
                        Vos Droits
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Vous disposez des droits d'accès, de rectification, d'effacement, de limitation et d'opposition.
                        Pour exercer ces droits, contactez-nous aux coordonnées ci-dessous.
                    </p>
                </div>

                <!-- Section contact -->
                <div style="background: #e8f5e8; padding: 25px; border-radius: 10px; margin-bottom: 30px;">
                    <h4 style="color: #2e7d32; margin-bottom: 15px; text-align: center;">📞 Contact Délégué à la Protection des Données</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 24px; margin-bottom: 10px;">📧</div>
                            <div style="font-weight: bold; color: #333;">Email</div>
                            <div style="color: #666;">frediadaniella@gmail.com</div>
                        </div>
                        <div>
                            <div style="font-size: 24px; margin-bottom: 10px;">📞</div>
                            <div style="font-weight: bold; color: #333;">Téléphone</div>
                            <div style="color: #666;">+242 06 844 8698</div>
                        </div>
                        <div>
                            <div style="font-size: 24px; margin-bottom: 10px;">💬</div>
                            <div style="font-weight: bold; color: #333;">WhatsApp</div>
                            <div style="color: #666;">+242 06 844 8698</div>
                        </div>
                    </div>
                </div>

                <!-- Boutons de navigation -->
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="showHomePage()" class="btn" style="background: var(--primary); color: white;">
                        <i class="fas fa-home"></i> Retour à l'accueil
                    </button>
                    <button onclick="showTerms()" class="btn" style="background: var(--secondary); color: white;">
                        <i class="fas fa-file-contract"></i> Conditions générales
                    </button>
                </div>
            </div>
        </div>
    `;
    
    grid.innerHTML = privacyHTML;
    updatePageTitle('Politique de Confidentialité - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log('✅ Politique de confidentialité affichée avec succès');
}



// FONCTIONS MANQUANTES À AJOUTER

// Page Mon Compte
function showAccountPage() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    hideAllSections();
    
    grid.innerHTML = `
        <div style="padding: 40px 20px; max-width: 600px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">👤 Mon Compte</h2>
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow); text-align: center;">
                <div style="font-size: 64px; color: #ddd; margin-bottom: 20px;">
                    <i class="fas fa-user-circle"></i>
                </div>
                <h3 style="color: #666; margin-bottom: 20px;">Espace Client</h3>
                <p style="color: #999; margin-bottom: 30px;">
                    Pour accéder à votre espace personnel, veuillez nous contacter via WhatsApp.
                </p>
                <button onclick="openWhatsAppContact()" class="btn" style="background: #25D366; color: white; padding: 15px 30px; font-size: 16px;">
                    <i class="fab fa-whatsapp"></i> Contacter le Service Client
                </button>
            </div>
        </div>
    `;
    updatePageTitle('Mon Compte - KWAD');
}

// Historique des commandes
function showOrderHistory() {
    showAccountPage(); // Redirige vers la page compte pour l'instant
    updatePageTitle('Historique des Commandes - KWAD');
}

// Liste de souhaits
function showWishlist() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    hideAllSections();
    
    grid.innerHTML = `
        <div style="padding: 40px 20px; max-width: 600px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">❤️ Liste de Souhaits</h2>
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow); text-align: center;">
                <div style="font-size: 64px; color: #ddd; margin-bottom: 20px;">
                    <i class="fas fa-heart"></i>
                </div>
                <h3 style="color: #666; margin-bottom: 20px;">Vos Produits Favoris</h3>
                <p style="color: #999; margin-bottom: 30px;">
                    Fonctionnalité en cours de développement. Revenez bientôt !
                </p>
                <button onclick="showHomePage()" class="btn" style="padding: 15px 30px; font-size: 16px;">
                    <i class="fas fa-shopping-bag"></i> Découvrir nos produits
                </button>
            </div>
        </div>
    `;
    updatePageTitle('Liste de Souhaits - KWAD');
}

// Page Newsletter
function showNewsletterPage() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    hideAllSections();
    
    grid.innerHTML = `
        <div style="padding: 40px 20px; max-width: 600px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">📧 Newsletter</h2>
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow); text-align: center;">
                <div style="font-size: 64px; color: var(--primary); margin-bottom: 20px;">
                    <i class="fas fa-newspaper"></i>
                </div>
                <h3 style="color: #333; margin-bottom: 15px;">Restez Informé !</h3>
                <p style="color: #666; margin-bottom: 30px; line-height: 1.6;">
                    Inscrivez-vous à notre newsletter pour recevoir en avant-première nos offres exclusives, 
                    nouveautés et promotions spéciales.
                </p>
                
                <form class="newsletter-form" style="max-width: 400px; margin: 0 auto;">
                    <input type="email" placeholder="Votre adresse email" required 
                           style="width: 100%; padding: 12px 15px; border: 2px solid #eee; border-radius: 25px; margin-bottom: 15px; font-size: 16px;">
                    <button type="submit" class="btn" style="width: 100%; padding: 12px; font-size: 16px;">
                        <i class="fas fa-paper-plane"></i> S'inscrire
                    </button>
                </form>
                
                <p style="color: #999; font-size: 14px; margin-top: 20px;">
                    🔒 Nous respectons votre vie privée. Désinscription à tout moment.
                </p>
            </div>
        </div>
    `;
    updatePageTitle('Newsletter - KWAD');
}

// FONCTIONS DE CONTACT AMÉLIORÉES
function openWhatsAppContact() {
    const message = "Bonjour KWAD, j'aimerais avoir des informations supplémentaires sur...";
    const phoneNumber = '+242068448698';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function makePhoneCall() {
    const phoneNumber = '+242068448698';
    window.open(`tel:${phoneNumber}`);
}

// N'OUBLIEZ PAS D'AJOUTER CET APPEL D'INITIALISATION DANS VOTRE CODE EXISTANT :
// Dans la fonction initEventListeners() ou DOMContentLoaded, ajoutez :
// initFooterLinks();




// ==================== FONCTIONS UTILITAIRES AJOUTÉES ===================

// Fonction pour envoyer un email
function sendEmail() {
    const email = 'frediadaniella@gmail.com';
    const subject = 'Demande d\'information - KWAD';
    const body = 'Bonjour KWAD,\n\nJe suis intéressé(e) par vos produits et j\'aimerais avoir plus d\'informations.\n\nCordialement,';
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
}

// Afficher les produits filtrés - VERSION AMÉLIORÉE
function displayFilteredProducts(filteredProducts, title) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Cacher la section catégories
    const categoriesSection = document.querySelector('.categories-section');
    if (categoriesSection) {
        categoriesSection.style.display = 'none';
    }
    
    grid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px;">
                <div style="font-size: 80px; color: #ddd; margin-bottom: 20px;">😔</div>
                <h3 style="color: #666; margin-bottom: 15px; font-size: 24px;">Aucun produit trouvé</h3>
                <p style="color: #999; margin-bottom: 30px; font-size: 16px; max-width: 400px; margin-left: auto; margin-right: auto;">
                    Nous n'avons pas de produits dans cette section pour le moment. 
                    Revenez bientôt pour découvrir nos nouvelles arrivées !
                </p>
                <button class="btn" onclick="showHomePage()" style="padding: 12px 30px; font-size: 16px;">
                    <i class="fas fa-home"></i> Retour à l'accueil
                </button>
            </div>
        `;
        return;
    }
    
    // En-tête de section amélioré
    const sectionHeader = document.createElement('div');
    sectionHeader.style.cssText = `
        grid-column: 1/-1;
        margin-bottom: 30px;
        padding: 25px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
        border-radius: 15px;
        text-align: center;
        box-shadow: var(--shadow);
    `;
    sectionHeader.innerHTML = `
        <h2 style="margin: 0 0 10px 0; font-size: 28px; font-weight: bold;">${title}</h2>
        <p style="margin: 0; opacity: 0.9; font-size: 16px;">
            ${filteredProducts.length} produit${filteredProducts.length > 1 ? 's' : ''} disponible${filteredProducts.length > 1 ? 's' : ''}
        </p>
    `;
    grid.appendChild(sectionHeader);
    
    // Afficher les produits
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i></button>
                    <button class="view-detail" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                    <button><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</div>
                <div class="product-price">${product.price.toLocaleString()} FCFA</div>
                <button class="btn add-to-cart-btn" data-id="${product.id}">Ajouter au panier</button>
            </div>
        `;
        grid.appendChild(productCard);
    });
    
    attachProductEvents();
    updatePageTitle(title);
}

// Mettre à jour le titre de la page
function updatePageTitle(title) {
    document.title = `${title} - KWAD`;
}



// ==================== FONCTIONNALITÉ DE RECHERCHE ====================

// Initialiser la recherche
function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if (searchInput && searchButton) {
        // Recherche au clic sur le bouton
        searchButton.addEventListener('click', performSearch);
        
        // Recherche avec la touche Entrée
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Recherche en temps réel (optionnel)
        searchInput.addEventListener('input', function() {
            if (this.value.length >= 3) {
                performSearch();
            } else if (this.value.length === 0) {
                // Réinitialiser l'affichage si la recherche est vide
                initProducts();
            }
        });
    }
}

// Exécuter la recherche
function performSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        // Si la recherche est vide, réinitialiser l'affichage
        initProducts();
        return;
    }
    
    // Filtrer les produits selon le terme de recherche
    const filteredProducts = products.filter(product => {
        // Recherche dans le nom
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        
        // Recherche dans la description
        const descriptionMatch = product.description.toLowerCase().includes(searchTerm);
        
        // Recherche dans la catégorie
        const categoryMatch = product.category.toLowerCase().includes(searchTerm);
        
        // Recherche dans les caractéristiques
        const featuresMatch = product.features && product.features.some(feature => 
            feature.toLowerCase().includes(searchTerm)
        );
        
        return nameMatch || descriptionMatch || categoryMatch || featuresMatch;
    });
    
    // Afficher les résultats
    displaySearchResults(filteredProducts, searchTerm);
}

// Afficher les résultats de recherche
function displaySearchResults(filteredProducts, searchTerm) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        // Aucun résultat trouvé
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <div style="font-size: 48px; color: #ccc; margin-bottom: 20px;">
                    <i class="fas fa-search"></i>
                </div>
                <h3 style="color: #666; margin-bottom: 10px;">Aucun résultat trouvé</h3>
                <p style="color: #999;">Aucun produit ne correspond à "${searchTerm}"</p>
                <button class="btn" onclick="clearSearch()" style="margin-top: 20px;">
                    Voir tous les produits
                </button>
            </div>
        `;
        return;
    }
    
    // Afficher le nombre de résultats
    const resultsHeader = document.createElement('div');
    resultsHeader.className = 'search-results-header';
    resultsHeader.style.cssText = `
        grid-column: 1/-1;
        margin-bottom: 20px;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid var(--primary);
    `;
    resultsHeader.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h3 style="margin: 0; color: #333;">Résultats de recherche</h3>
                <p style="margin: 5px 0 0 0; color: #666;">
                    ${filteredProducts.length} produit${filteredProducts.length > 1 ? 's' : ''} trouvé${filteredProducts.length > 1 ? 's' : ''} pour "${searchTerm}"
                </p>
            </div>
            <button class="btn btn-outline" onclick="clearSearch()">
                <i class="fas fa-times"></i> Effacer
            </button>
        </div>
    `;
    grid.appendChild(resultsHeader);
    
    // Afficher les produits filtrés
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i></button>
                    <button class="view-detail" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                    <button><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${highlightSearchTerm(product.name, searchTerm)}</h3>
                <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</div>
                <div class="product-price">${product.price.toLocaleString()} FCFA</div>
                <button class="btn add-to-cart-btn" data-id="${product.id}">Ajouter au panier</button>
            </div>
        `;
        grid.appendChild(productCard);
    });
    
    attachProductEvents();
}

// Surligner le terme de recherche dans les résultats
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

// Effacer la recherche et réinitialiser l'affichage
function clearSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.value = '';
    }
    initProducts();
}

// ==================== FONCTIONS PAGE DÉTAIL ====================
function setupDetailPageEvents() {
    // Fermer le modal détail
    const closeDetail = document.getElementById('close-detail');
    if (closeDetail) {
        closeDetail.addEventListener('click', closeProductDetail);
    }
    
    // Fermer en cliquant à l'extérieur
    const detailModal = document.getElementById('product-detail-modal');
    if (detailModal) {
        detailModal.addEventListener('click', function(e) {
            if (e.target === this) closeProductDetail();
        });
    }
    
    // Gestion de la quantité
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = document.querySelector('.qty-input');
            let value = parseInt(input.value);
            
            if (this.classList.contains('plus')) {
                value = Math.min(value + 1, 99);
            } else if (this.classList.contains('minus')) {
                value = Math.max(value - 1, 1);
            }
            
            input.value = value;
        });
    });
    
    // Ajouter au panier depuis détail
    const addToCartDetail = document.getElementById('add-to-cart-detail');
    if (addToCartDetail) {
        addToCartDetail.addEventListener('click', function() {
            if (!currentProduct) return;
            
            const quantity = parseInt(document.querySelector('.qty-input').value);
            
            for (let i = 0; i < quantity; i++) {
                addToCart(currentProduct.id);
            }
            
            showNotification(`${quantity} ${currentProduct.name} ajouté${quantity > 1 ? 's' : ''} au panier`);
            closeProductDetail();
        });
    }
    
    // Acheter maintenant
    const buyNow = document.getElementById('buy-now');
    if (buyNow) {
        buyNow.addEventListener('click', function() {
            if (!currentProduct) return;
            
            const quantity = parseInt(document.querySelector('.qty-input').value);
            
            // Vider le panier et ajouter seulement ce produit
            cart = [];
            
            for (let i = 0; i < quantity; i++) {
                addToCart(currentProduct.id);
            }
            
            closeProductDetail();
            openCart();
        });
    }
    
    // Échappement pour fermer les modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductDetail();
        }
    });
}

function showProductDetail(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;
    
    // Mettre à jour les informations principales
    document.getElementById('detail-product-name').textContent = currentProduct.name;
    document.getElementById('detail-product-rating').innerHTML = '★'.repeat(currentProduct.rating) + '☆'.repeat(5-currentProduct.rating);
    document.getElementById('detail-product-price').textContent = currentProduct.price.toLocaleString() + ' FCFA';
    document.getElementById('detail-product-description').textContent = currentProduct.description || 'Description non disponible.';
    
    // Mettre à jour les caractéristiques
    const featuresList = document.getElementById('detail-product-features');
    featuresList.innerHTML = '';
    if (currentProduct.features && currentProduct.features.length > 0) {
        currentProduct.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    } else {
        featuresList.innerHTML = '<li>Aucune caractéristique disponible</li>';
    }
    
    // Mettre à jour la galerie
    updateProductGallery();
    
    // Réinitialiser la quantité
    document.querySelector('.qty-input').value = 1;
    
    // Afficher le modal
    document.getElementById('product-detail-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function updateProductGallery() {
    const mainImage = document.getElementById('detail-main-image');
    const thumbnailsContainer = document.getElementById('image-thumbnails');
    const playVideoBtn = document.getElementById('play-video-btn');
    
    if (!mainImage || !thumbnailsContainer) return;
    
    thumbnailsContainer.innerHTML = '';
    currentMediaIndex = 0;
    
    // Utiliser les médias si disponibles, sinon utiliser l'image principale
    const mediaItems = currentProduct.media || [{ type: 'image', src: currentProduct.image }];
    
    // Image principale
    mainImage.src = mediaItems[0].src;
    mainImage.alt = currentProduct.name;
    
    // Afficher/masquer le bouton play pour la vidéo
    if (playVideoBtn) {
        playVideoBtn.style.display = mediaItems[0].type === 'video' ? 'block' : 'none';
    }
    
    // Miniatures
    mediaItems.forEach((media, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        
        if (media.type === 'video') {
            thumbnail.innerHTML = `<img src="${media.thumbnail || media.src}" alt="Vidéo ${currentProduct.name}">`;
        } else {
            thumbnail.innerHTML = `<img src="${media.src}" alt="${currentProduct.name} ${index + 1}">`;
        }
        
        thumbnail.addEventListener('click', () => {
            // Mettre à jour l'image principale
            mainImage.src = media.type === 'video' ? (media.thumbnail || media.src) : media.src;
            
            if (playVideoBtn) {
                playVideoBtn.style.display = media.type === 'video' ? 'block' : 'none';
            }
            
            currentMediaIndex = index;
            
            // Mettre à jour les miniatures actives
            document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function closeProductDetail() {
    const detailModal = document.getElementById('product-detail-modal');
    if (detailModal) {
        detailModal.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
}

// ==================== FONCTIONS UTILITAIRES ====================
function handleImageError(img) {
    console.log('Image non trouvée:', img.src);
    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><rect width="24" height="24" fill="%23f0f0f0"/><text x="12" y="12" font-family="Arial" font-size="12" text-anchor="middle" alignment-baseline="middle" fill="%23999">Image</text></svg>';
    img.alt = 'Image non disponible';
    img.style.backgroundColor = '#f9f9f9';
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: var(--shadow);
        z-index: 3000;
        transition: all 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ==================== FONCTIONS FILTRAGE ====================
function filterProducts(categoryId) {
    const filteredProducts = products.filter(product => product.category === categoryId);
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">Aucun produit trouvé dans cette catégorie.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i></button>
                    <button class="view-detail" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                    <button><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</div>
                <div class="product-price">${product.price.toLocaleString()} FCFA</div>
                <button class="btn add-to-cart-btn" data-id="${product.id}">Ajouter au panier</button>
            </div>
        `;
        grid.appendChild(productCard);
    });
    
    attachProductEvents();
}

// ==================== ÉVÉNEMENTS GLOBAUX ====================
function initEventListeners() {
    // Ouvrir/fermer le panier
    document.getElementById('open-cart').addEventListener('click', openCart);
    document.getElementById('close-cart').addEventListener('click', closeCart);
    
    // Méthodes de paiement
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Commander sur WhatsApp
    document.getElementById('checkout-btn').addEventListener('click', checkout);
    
    // Fermer le panier en cliquant à l'extérieur
    document.getElementById('cart-modal').addEventListener('click', function(e) {
        if (e.target === this) closeCart();
    });
    
    // Filtrer les produits via le menu de catégories
    document.querySelectorAll('.submenu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryId = this.getAttribute('data-category');
            filterProducts(categoryId);
        });
    });
}

// ==================== FONCTIONS CAROUSEL ====================
function goToSlide(slideIndex) {
    const container = document.getElementById('categories-container');
    const dots = document.querySelectorAll('.carousel-dot');
    const totalSlides = Math.ceil(categories.length / slidesToShow);
    
    // Gérer les limites
    if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = slideIndex;
    }
    
    const slideWidth = 100 / slidesToShow;
    container.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Navigation automatique du carousel
setInterval(() => {
    const totalSlides = Math.ceil(categories.length / slidesToShow);
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}, 5000);

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function addCarouselNavigation() {
    const carousel = document.querySelector('.categories-carousel');
    if (!carousel) return;
    
    // Créer les flèches de navigation
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.className = 'carousel-arrow carousel-prev';
    prevButton.addEventListener('click', prevSlide);
    
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.className = 'carousel-arrow carousel-next';
    nextButton.addEventListener('click', nextSlide);
    
    // Ajouter les flèches au carousel
    carousel.style.position = 'relative';
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);
}

// ==================== FONCTION WHATSAPP ====================
function checkout() {
    if (cart.length === 0) {
        showNotification('Votre panier est vide');
        return;
    }
    
    const selectedMethod = document.querySelector('.payment-method.selected').getAttribute('data-method');
    const methodName = selectedMethod === 'momo' ? 'MTN Mobile Money' : 'Airtel Money';
    
    // Obtenir la date et l'heure actuelles
    const now = new Date();
    const orderDate = now.toLocaleDateString('fr-FR');
    const orderTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    
    // Générer un numéro de commande simple
    const orderNumber = 'CMD' + now.getTime().toString().slice(-6);
    
    let message = `🛒 *NOUVELLE COMMANDE KWAD* 🛒%0A%0A`;
    message += `*Numéro de commande:* ${orderNumber}%0A`;
    message += `*Date:* ${orderDate} à ${orderTime}%0A%0A`;
    message += `*DÉTAILS DE LA COMMANDE:*%0A`;
    message += `═════════════════════%0A%0A`;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        message += `*${index + 1}. ${item.name}*%0A`;
        message += `   Quantité: ${item.quantity}%0A`;
        message += `   Prix unitaire: ${item.price.toLocaleString()} FCFA%0A`;
        message += `   Sous-total: ${itemTotal.toLocaleString()} FCFA%0A%0A`;
    });
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 1500;
    const total = subtotal + shipping;
    
    message += `*RÉCAPITULATIF DE PAIEMENT:*%0A`;
    message += `═════════════════════%0A`;
    message += `Sous-total: ${subtotal.toLocaleString()} FCFA%0A`;
    message += `Frais de livraison: ${shipping.toLocaleString()} FCFA%0A`;
    message += `*TOTAL: ${total.toLocaleString()} FCFA*%0A%0A`;
    
    message += `*INFORMATIONS DE PAIEMENT:*%0A`;
    message += `═════════════════════%0A`;
    message += `Méthode: ${methodName}%0A%0A`;
    
    message += `*INSTRUCTIONS:*%0A`;
    message += `═════════════════════%0A`;
    message += `1. Confirmez ma commande%0A`;
    message += `2. Donnez-moi les détails pour le paiement ${methodName}%0A`;
    message += `3. Indiquez le délai de livraison%0A%0A`;
    
    message += `_Merci de me recontacter rapidement pour finaliser cette commande._%0A%0A`;
    message += `📞 *Service Client KWAD*`;
    
    const phoneNumber = '+242068448698';
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(url, '_blank');
}

// ==================== INJECTION DES STYLES CSS ====================

// Injecter les styles CSS pour la navigation
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
    .about-section, .contact-section {
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
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = navigationStyles;
    document.head.appendChild(styleSheet);
}

// Appeler l'injection des styles
document.addEventListener('DOMContentLoaded', function() {
    injectNavigationStyles();
});
