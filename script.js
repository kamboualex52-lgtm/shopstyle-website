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
    //initFooterLinks();
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
                    //showNewProducts();
                    showDeliveryInfo();
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



// ==================== FONCTIONS Informations ====================
// Gestion des liens du footer - VERSION COMPLÈTE
function initFooterLinks() {
    const footerLinks = document.querySelectorAll('.footer-column a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const linkText = this.textContent.trim();
            
            switch(linkText) {
                case 'À propos de nous':
                    showAbout();
                    break;
                case 'Livraison':
                    showDeliveryInfo();
                    break;
                case 'Politique de retour':
                    showReturnPolicy();
                    break;
                case 'Conditions générales':
                    showTerms();
                    break;
                case 'Politique de confidentialité':
                    showPrivacyPolicy();
                    break;
                default:
                    showHomePage();
            }
        });
    });
}




// 📄 CONDITIONS GÉNÉRALES DE VENTE
function showTerms() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    hideAllSections();
    
    const termsHTML = `
        <div class="legal-page" style="padding: 40px 20px; max-width: 900px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">🧾 CONDITIONS GÉNÉRALES DE VENTE – KWAD</h2>
            
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow);">
                <!-- Section 1 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">1. Présentation</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        Le site <strong>KWAD</strong> est une boutique en ligne proposant des produits dans les catégories suivantes :
                        Électroménager, Électricité, Vêtements, Chaussures, Accessoires et Beauté.
                        En utilisant le site ou en passant commande, le client accepte sans réserve les présentes Conditions Générales de Vente (CGV).
                    </p>
                </div>
                
                <!-- Section 2 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">2. Produits</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        Les produits présentés sur KWAD sont décrits et photographiés avec la plus grande exactitude possible.
                        Cependant, des variations mineures peuvent exister selon les écrans ou les fabricants.
                    </p>
                </div>
                
                <!-- Section 3 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">3. Commandes</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        Toute commande effectuée sur le site implique l'acceptation des prix, des descriptions et des présentes conditions.
                        KWAD se réserve le droit d'annuler ou de refuser toute commande pour motif légitime (stock insuffisant, problème de paiement, suspicion de fraude…).
                    </p>
                </div>
                
                <!-- Section 4 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">4. Prix et paiement</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        Les prix sont indiqués en <strong>franc CFA</strong> et incluent toutes taxes applicables.
                        Les paiements peuvent s'effectuer par <strong>Mobile Money, carte bancaire</strong> ou tout autre moyen indiqué sur le site.
                    </p>
                </div>
                
                <!-- Section 5 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">5. Livraison</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        KWAD livre sur tout le territoire indiqué sur le site.
                        Les délais de livraison varient selon la destination et la disponibilité du produit.
                        En cas de retard, le client sera informé et pourra demander un remboursement si le produit n'a pas été expédié.
                    </p>
                </div>
                
                <!-- Section 6 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">6. Retours et remboursements</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        Le client dispose d'un délai de <strong>7 jours</strong> après réception du produit pour signaler un article défectueux ou non conforme.
                        Le produit devra être retourné dans son emballage d'origine, non utilisé.
                        KWAD s'engage à échanger le produit ou à effectuer un remboursement selon le cas.
                    </p>
                </div>
                
                <!-- Section 7 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">7. Responsabilité</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        KWAD ne saurait être tenue responsable des dommages résultant d'une mauvaise utilisation du produit ou d'une cause extérieure (accident, choc, utilisation non conforme…).
                    </p>
                </div>
                
                <!-- Section 8 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">8. Données personnelles</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        Les informations collectées lors des commandes sont nécessaires au traitement des achats et à la gestion du service client.
                        Elles sont traitées conformément à la <a href="#" onclick="showPrivacyPolicy(); return false;" style="color: var(--primary); text-decoration: underline;">Politique de Confidentialité</a> de KWAD.
                    </p>
                </div>
                
                <!-- Section 9 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">9. Propriété intellectuelle</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        Tous les éléments du site (textes, images, logos, design) sont la propriété exclusive de KWAD et ne peuvent être reproduits sans autorisation.
                    </p>
                </div>
                
                <!-- Section 10 -->
                <div style="margin-bottom: 40px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">10. Droit applicable</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        Les présentes conditions sont régies par le <strong>droit congolais</strong>.
                        En cas de litige, une solution à l'amiable sera privilégiée avant toute action judiciaire.
                    </p>
                </div>
                
                <!-- Boutons d'action -->
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="showHomePage()" class="btn" style="background: var(--primary); color: white; padding: 12px 25px; border: none; border-radius: 25px; cursor: pointer; font-size: 16px;">
                        <i class="fas fa-home"></i> Retour à l'accueil
                    </button>
                    <button onclick="showPrivacyPolicy()" class="btn" style="background: var(--secondary); color: white; padding: 12px 25px; border: none; border-radius: 25px; cursor: pointer; font-size: 16px;">
                        <i class="fas fa-shield-alt"></i> Voir la Politique de Confidentialité
                    </button>
                </div>
            </div>
        </div>
    `;
    
    grid.innerHTML = termsHTML;
    updatePageTitle('Conditions Générales - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}




// 🔒 POLITIQUE DE CONFIDENTIALITÉ
function showPrivacyPolicy() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    hideAllSections();
    
    const privacyHTML = `
        <div class="legal-page" style="padding: 40px 20px; max-width: 900px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">🔒 POLITIQUE DE CONFIDENTIALITÉ – KWAD</h2>
            
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow);">
                <!-- Section 1 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">1. Collecte des informations</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        KWAD collecte les informations suivantes lorsque vous utilisez le site ou passez commande :
                    </p>
                    <ul style="line-height: 1.7; color: #666; font-size: 16px; padding-left: 20px;">
                        <li>Nom, prénom, adresse, numéro de téléphone, email</li>
                        <li>Informations de paiement (sécurisées et non conservées après transaction)</li>
                        <li>Historique de commandes et préférences produits</li>
                    </ul>
                </div>
                
                <!-- Section 2 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">2. Utilisation des données</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        Ces données servent à :
                    </p>
                    <ul style="line-height: 1.7; color: #666; font-size: 16px; padding-left: 20px;">
                        <li>Traiter et livrer vos commandes</li>
                        <li>Améliorer nos services et nos offres</li>
                        <li>Vous informer des promotions et nouveautés (si vous y consentez)</li>
                    </ul>
                </div>
                
                <!-- Section 3 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">3. Protection des données</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        <strong>KWAD s'engage à protéger vos données personnelles.</strong><br>
                        Nous utilisons des mesures de sécurité adaptées (cryptage, pare-feu, accès restreint).
                        Aucune donnée n'est vendue ni partagée à des tiers sans votre consentement.
                    </p>
                </div>
                
                <!-- Section 4 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">4. Cookies</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        Le site KWAD utilise des cookies pour améliorer la navigation et analyser les visites.
                        Vous pouvez à tout moment refuser les cookies via les paramètres de votre navigateur.
                    </p>
                </div>
                
                <!-- Section 5 -->
                <div style="margin-bottom: 30px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">5. Vos droits</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        Conformément à la réglementation en vigueur, vous pouvez :
                    </p>
                    <ul style="line-height: 1.7; color: #666; font-size: 16px; padding-left: 20px;">
                        <li>Accéder à vos données</li>
                        <li>Demander leur modification ou suppression</li>
                        <li>Retirer votre consentement à tout moment</li>
                    </ul>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 15px;">
                        <p style="color: #666; font-size: 16px; margin: 0;">
                            <strong>Pour exercer vos droits :</strong><br>
                            📧 Contact : <strong>frediadaniella@gmail.cm</strong><br>
                            📞 Téléphone : <strong>+242 06 844 86 98</strong>
                        </p>
                    </div>
                </div>
                
                <!-- Section 6 -->
                <div style="margin-bottom: 40px;">
                    <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">6. Modifications</h3>
                    <p style="line-height: 1.7; color: #666; font-size: 16px;">
                        KWAD se réserve le droit de modifier la présente politique à tout moment.
                        La version la plus récente est toujours disponible sur notre site.
                    </p>
                </div>
                
                <!-- Boutons d'action -->
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="showHomePage()" class="btn" style="background: var(--primary); color: white; padding: 12px 25px; border: none; border-radius: 25px; cursor: pointer; font-size: 16px;">
                        <i class="fas fa-home"></i> Retour à l'accueil
                    </button>
                    <button onclick="showTerms()" class="btn" style="background: var(--secondary); color: white; padding: 12px 25px; border: none; border-radius: 25px; cursor: pointer; font-size: 16px;">
                        <i class="fas fa-file-contract"></i> Voir les Conditions Générales
                    </button>
                </div>
            </div>
        </div>
    `;
    
    grid.innerHTML = privacyHTML;
    updatePageTitle('Politique de Confidentialité - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Page Livraison
function showDeliveryInfo() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    hideAllSections();
    
    grid.innerHTML = `
        <div style="padding: 40px 20px; max-width: 800px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">🚚 Informations de Livraison</h2>
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow);">
                <h3>Nos Services de Livraison</h3>
                <p>Contenu à compléter avec vos informations de livraison...</p>
                <button onclick="showHomePage()" class="btn">Retour à l'accueil</button>
            </div>
        </div>
    `;
    updatePageTitle('Livraison - KWAD');
}





// ==================== FONCTIONS UTILITAIRES AJOUTÉES ====================

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
