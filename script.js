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
            { type: 'image', src: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
            { type: 'image', src: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
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
    // ... AJOUTEZ LE RESTE DE VOS PRODUITS AVEC LE MÊME FORMAT
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
    setupDetailPageEvents(); // IMPORTANT: Initialiser les événements de la page détail
});

// Initialiser les produits CORRIGÉ
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
    
    // Réattacher les événements
    attachProductEvents();
}

// Attacher les événements aux produits CORRIGÉ
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

// Configuration des événements de la page détail CORRIGÉ
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
    }
    
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

// Afficher les détails du produit CORRIGÉ
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

// Mettre à jour la galerie du produit CORRIGÉ
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

// Fermer le modal détail
function closeProductDetail() {
    const detailModal = document.getElementById('product-detail-modal');
    if (detailModal) {
        detailModal.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
}

// [GARDER TOUTES LES AUTRES FONCTIONS EXISTANTES COMME addToCart, updateCartCount, etc.]
// ... le reste de vos fonctions existantes

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
