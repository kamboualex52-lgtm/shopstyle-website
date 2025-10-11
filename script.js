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
        name: 'Tire bouchon', 
        price: 25000, 
        category: 'electromenager', 
        image: 'Image/Electro_menager/Tire bouchon.jpg', 
        rating: 4, 
        badge: 'Nouveau',
        description: '🍷✨ Ouvrez vos bouteilles sans effort avec notre tire-bouchon électronique ! Rechargeable, rapide et élégant, il ouvre votre vin en quelques secondes.Fini les bouchons coincés ou les efforts inutiles 😎🎁 Idéal pour vos soirées, vos dîners ou un cadeau stylé..',
        features: [
            'Moteur puissant de 500W',
            '5 vitesses variables + fonction pulse',
            'Lames en acier inoxydable',
            'Capacité: 1.5L',
            'Design anti-dérapant',
            'Facile à nettoyer'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Tire bouchon.jpg' },
            { type: 'video', src: 'Image/Electro_menager/Tire bouchon-VID.mp4' }
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
        id: 3, 
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
    // AJOUTEZ TOUS VOS AUTRES PRODUITS ICI...
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
    updateCartCount();
    addCarouselNavigation();
    setupDetailPageEvents();
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
