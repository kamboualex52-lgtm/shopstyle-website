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

// Données des produits - VERSION COMPLÈTE AVEC DESCRIPTIONS
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
        ]
    },

    // Electro_menager
    { 
        id: 17, 
        name: 'Ouvre bière automatique', 
        price: 2500, 
        category: 'electromenager', 
        image: 'Image/Electro_menager/Ouvre bière automatique.jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Ouvre-bouteille automatique fonctionnant sur piles. Simple d\'utilisation et efficace.',
        features: [
            'Fonctionnement automatique',
            'Alimentation piles',
            'Design compact',
            'Facile à utiliser',
            'Pour bouteilles standards'
        ]
    },
    { 
        id: 18, 
        name: 'Tire bouchon rechargeable', 
        price: 12000, 
        category: 'electromenager', 
        image: 'Image/Electro_menager/Tire bouchon.jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Tire-bouchon électrique rechargeable. Retire les bouchons en quelques secondes sans effort.',
        features: [
            'Rechargeable USB',
            'Fonctionnement silencieux',
            'Batterie lithium',
            'Automatique',
            'Charge rapide'
        ]
    },
    { 
        id: 19, 
        name: 'Thermos LED 1L', 
        price: 8000, 
        category: 'electromenager', 
        image: 'Image/Electro_menager/Thermos LED.jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Thermos isotherme avec affichage LED de la température. Garde les boissons chaudes ou froides pendant des heures.',
        features: [
            'Capacité 1L',
            'Affichage LED température',
            'Isolation 12 heures',
            'Bouchon étanche',
            'Design moderne'
        ]
    },
    { 
        id: 21, 
        name: 'Carafe plus 4 verres(très Robuste)', 
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
        ]
    },
    { 
        id: 23, 
        name: 'Mixeur portatif', 
        price: 8000, 
        category: 'electromenager', 
        image: 'Image/Electro_menager/Mixeur portatif.jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Mixeur plongeant portable pour smoothies et soupes. Léger et facile à utiliser.',
        features: [
            'Mixeur plongeant',
            'Portable et léger',
            'Lames inoxydables',
            'Facile à nettoyer',
            'Parfait pour smoothies'
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
        ]
    },

    //Electricité
    { 
        id: 20, 
        name: 'Caisse à outils (électricien)', 
        price: 120000, 
        category: 'electricite', 
        image: 'Image/Electricité/Caisse à outils (électricien).jpg', 
        rating: 5, 
        badge: 'Nouveau',
        description: 'Caisse à outils complète pour électricien professionnel. Tous les outils essentiels pour travaux électriques.',
        features: [
            '50 pièces complètes',
            'Outils isolés',
            'Testeur de tension',
            'Multimètre digital',
            'Caisse robuste'
        ]
    },
    { 
        id: 25, 
        name: 'Caisse à outils (élctro-technicien)', 
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
        ]
    }
];

// Variables globales
let cart = [];
let currentSlide = 0;
const slidesToShow = 5;
let currentProduct = null;
let currentMediaIndex = 0;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initCategories();
    initProducts();
    initEventListeners();
    updateCartCount();
    addCarouselNavigation();
});

// Initialiser les catégories
function initCategories() {
    const container = document.getElementById('categories-container');
    const nav = document.getElementById('carousel-nav');
    
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

// Initialiser les produits
function initProducts() {
    const grid = document.getElementById('products-grid');
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
    
    // Ajouter les événements
    attachProductEvents();
}

// Attacher les événements aux produits
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
            if (!e.target.closest('.product-actions')) {
                const productId = parseInt(this.querySelector('.add-to-cart').getAttribute('data-id'));
                showProductDetail(productId);
            }
        });
    });
}

// Gestion des erreurs d'images
function handleImageError(img) {
    console.log('Image non trouvée:', img.src);
    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><rect width="24" height="24" fill="%23f0f0f0"/><text x="12" y="12" font-family="Arial" font-size="12" text-anchor="middle" alignment-baseline="middle" fill="%23999">Image</text></svg>';
    img.alt = 'Image non disponible';
    img.style.backgroundColor = '#f9f9f9';
}

// Initialiser les événements
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
    
    // Événements pour la page détail
    setupDetailPageEvents();
}

// Configuration des événements de la page détail
function setupDetailPageEvents() {
    // Fermer le modal détail
    document.getElementById('close-detail')?.addEventListener('click', closeProductDetail);
    
    // Fermer en cliquant à l'extérieur
    document.getElementById('product-detail-modal')?.addEventListener('click', function(e) {
        if (e.target === this) closeProductDetail();
    });
    
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
    document.getElementById('add-to-cart-detail')?.addEventListener('click', function() {
        if (!currentProduct) return;
        
        const quantity = parseInt(document.querySelector('.qty-input').value);
        
        for (let i = 0; i < quantity; i++) {
            addToCart(currentProduct.id);
        }
        
        showNotification(`${quantity} ${currentProduct.name} ajouté${quantity > 1 ? 's' : ''} au panier`);
        closeProductDetail();
    });
    
    // Acheter maintenant
    document.getElementById('buy-now')?.addEventListener('click', function() {
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
    
    // Échappement pour fermer les modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductDetail();
        }
    });
}

// Afficher les détails du produit
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

// Mettre à jour la galerie du produit
function updateProductGallery() {
    const mainImage = document.getElementById('detail-main-image');
    const thumbnailsContainer = document.getElementById('image-thumbnails');
    
    thumbnailsContainer.innerHTML = '';
    
    // Image principale
    mainImage.src = currentProduct.image;
    mainImage.alt = currentProduct.name;
    
    // Miniatures (pour l'instant juste l'image principale)
    const thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail active';
    thumbnail.innerHTML = `<img src="${currentProduct.image}" alt="${currentProduct.name}">`;
    
    thumbnail.addEventListener('click', () => {
        mainImage.src = currentProduct.image;
        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
        thumbnail.classList.add('active');
    });
    
    thumbnailsContainer.appendChild(thumbnail);
}

// Fermer le modal détail
function closeProductDetail() {
    document.getElementById('product-detail-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// [RESTE DU CODE IDENTIQUE - fonctions filterProducts, addToCart, updateCartCount, etc.]
// ... (toutes les autres fonctions restent exactement les mêmes)

// Navigation du carousel
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

// Fonction pour aller au slide précédent
function prevSlide() {
    goToSlide(currentSlide - 1);
}

// Fonction pour aller au slide suivant
function nextSlide() {
    goToSlide(currentSlide + 1);
}

// Ajouter les flèches de navigation au carousel
function addCarouselNavigation() {
    const carousel = document.querySelector('.categories-carousel');
    
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
