// Données des catégories
const categories = [
    { id: 'electromenager', name: 'Électroménager', count: 24, image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'electricite', name: 'Électricité', count: 18, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'vetements', name: 'Vêtements', count: 42, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'chaussures', name: 'Chaussures', count: 31, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'accessoires', name: 'Accessoires', count: 27, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'beaute', name: 'Beauté', count: 36, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'complement', name: 'Compléments', count: 15, image: 'https://images.unsplash.com/photo-1585435557343-3b092031d5ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'fitness', name: 'Fitness', count: 22, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
];

// Données des produits - VERSION CORRIGÉE
const products = [
    { id: 1, name: 'Mixeur électrique 500W', price: 25000, category: 'electromenager', image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', rating: 4, badge: 'Nouveau' },
    { id: 2, name: 'Lampadaire LED moderne', price: 18000, category: 'electricite', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', rating: 5, badge: 'Populaire' },
    { id: 4, name: 'Chaussures de sport Nike', price: 35000, category: 'chaussures', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', rating: 5, badge: 'Promo' },
    { id: 5, name: 'Sac à main cuir véritable', price: 22000, category: 'accessoires', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', rating: 4, badge: null },
    { id: 6, name: 'Kit soins visage complet', price: 12000, category: 'beaute', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', rating: 4, badge: null },
    { id: 7, name: 'Vitamines et minéraux', price: 8000, category: 'complement', image: 'Image/came.jpeg', rating: 3, badge: null },
    { id: 8, name: 'Tapis de yoga premium', price: 15000, category: 'fitness', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', rating: 4, badge: null },
    
    // Vos produits vêtements avec images locales
    { id: 9, name: 'Robe africaine élégante - Modèle 1', price: 15000, category: 'vetements', image: 'Image/Vetement/Image1.jpeg', rating: 4, badge: null },
    { id: 10, name: 'Robe africaine élégante - Modèle 2', price: 18000, category: 'vetements', image: 'Image/Vetement/Image2.jpeg', rating: 5, badge: 'Nouveau' },
    { id: 11, name: 'Robe africaine élégante - Modèle 3', price: 22000, category: 'vetements', image: 'Image/Vetement/Image3.jpeg', rating: 4, badge: null },
    { id: 12, name: 'Robe africaine élégante - Modèle 4', price: 19000, category: 'vetements', image: 'Image/Vetement/Image4.jpeg', rating: 4, badge: null },
    { id: 13, name: 'Robe africaine élégante - Modèle 5', price: 25000, category: 'vetements', image: 'Image/Vetement/Image5.jpeg', rating: 5, badge: 'Populaire' },
    { id: 14, name: 'Robe africaine élégante - Modèle 6', price: 17000, category: 'vetements', image: 'Image/Vetement/Image6.jpeg', rating: 4, badge: null },
    { id: 15, name: 'Robe africaine élégante - Modèle 7', price: 21000, category: 'vetements', image: 'Image/Vetement/Image7.jpeg', rating: 4, badge: null },
    { id: 16, name: 'Robe africaine élégante - Modèle 8', price: 23000, category: 'vetements', image: 'Image/Vetement/Image8.jpeg', rating: 5, badge: 'Promo' },


    // Electro_menager
    { id: 17, name: 'Ouvre bière automatique', price: 2500, category: 'electromenager', image: 'Image/Electro_menager/Ouvre bière automatique.jpg', rating: 5, badge: 'Nouveau' },
    { id: 18, name: 'Tire bouchon rechargeable', price: 12000, category: 'electromenager', image: 'Image/Electro_menager/Tire bouchon.jpg', rating: 5, badge: 'Nouveau' },
    { id: 19, name: 'Thermos LED 1L', price: 8000, category: 'electromenager', image: 'Image/Electro_menager/Thermos LED.jpg', rating: 5, badge: 'Nouveau' },
    { id: 21, name: 'Carafe plus 4 verres(très Robuste)', price: 8000, category: 'electromenager', image: 'Image/Electro_menager/Carafe plus 4 verres.jpg', rating: 5, badge: 'Nouveau' },
    { id: 22, name: 'Chauffe eau 3L', price: 10000, category: 'electromenager', image: 'Image/Electro_menager/Chauffe eau 3L.jpg', rating: 5, badge: 'Nouveau' },
    { id: 23, name: 'Mixeur portatif', price: 8000, category: 'electromenager', image: 'Image/Electro_menager/Mixeur portatif.jpg', rating: 5, badge: 'Nouveau' },
    { id: 24, name: 'Tapie de Cuisson', price: 13000/3000, category: 'electromenager', image: 'Image/Electro_menager/Tapie de Cuisson.jpg', rating: 5, badge: 'Nouveau' },



    //Electricité
    { id: 20, name: 'Caisse à outils (électricien)', price: 120000, category: 'electricite', image: 'Image/Electricité/Caisse à outils (électricien).jpg', rating: 5, badge: 'Nouveau' },
    { id: 25, name: 'Caisse à outils (élctro-technicien)', price: 25000, category: 'electricite', image: 'Image/Electricité/Caisse élctro-technicien.jpg', rating: 5, badge: 'Nouveau' }
    
];


// Variables globales
let cart = [];
let currentSlide = 0;
const slidesToShow = 5;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initCategories();
    initProducts();
    initEventListeners();
    updateCartCount();
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
    grid.innerHTML = ''; // Vider la grille d'abord
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i></button>
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
    
    // Ajouter les événements pour les boutons d'ajout au panier
    document.querySelectorAll('.add-to-cart, .add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
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
}

// Filtrer les produits par catégorie
function filterProducts(categoryId) {
    const filteredProducts = products.filter(product => product.category === categoryId);
    const grid = document.getElementById('products-grid');
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
    document.querySelectorAll('.add-to-cart, .add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Ajouter au panier
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

// Mettre à jour le compteur du panier
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

// Mettre à jour l'affichage du panier
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('cart-subtotal');
    const totalElement = document.getElementById('cart-total');
    
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
    
    // Ajouter les événements pour les boutons de quantité
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

// Mettre à jour la quantité d'un article
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

// Définir la quantité d'un article
function setQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        updateCartCount();
        updateCartDisplay();
    }
}

// Retirer du panier
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
}

// Ouvrir le panier
function openCart() {
    document.getElementById('cart-modal').style.display = 'flex';
}

// Fermer le panier
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Afficher une notification
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

// Commander sur WhatsApp
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



// Fonction pour déterminer le nombre de slides à afficher selon l'écran
function getSlidesToShow() {
    const width = window.innerWidth;
    if (width >= 1200) return 5; // Desktop
    if (width >= 992) return 4;  // Large tablet
    if (width >= 768) return 3;  // Tablet
    if (width >= 576) return 2;  // Mobile landscape
    return 1; // Mobile portrait
}

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

// Modifier l'initialisation pour inclure la navigation
document.addEventListener('DOMContentLoaded', function() {
    initCategories();
    initProducts();
    initEventListeners();
    updateCartCount();
    addCarouselNavigation(); // Ajouter cette ligne
});
