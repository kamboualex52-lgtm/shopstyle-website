//cart.js

// ==================== GESTION DU PANIER ====================

// Ajouter au panier
function addToCart(productId) {
    const product = ProductManager.getById(productId);
    if (!product) {
        showNotification('Produit non trouvé', 'error');
        return;
    }

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
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = count;
    }
}

// Mettre à jour l'affichage du panier
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

    attachCartEventListeners();
}

// Attacher les événements du panier
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

// Mettre à jour la quantité
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

// Checkout via WhatsApp
function checkout() {
    if (cart.length === 0) {
        showNotification('Votre panier est vide');
        return;
    }

    const selectedMethod = document.querySelector('.payment-method.selected');
    if (!selectedMethod) {
        showNotification('Veuillez sélectionner un mode de paiement', 'warning');
        return;
    }

    const methodName = selectedMethod.getAttribute('data-method') === 'momo' ? 'MTN Mobile Money' : 'Airtel Money';

    const now = new Date();
    const orderDate = now.toLocaleDateString('fr-FR');
    const orderTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    const orderNumber = 'CMD' + now.getTime().toString().slice(-6);

    let message = `🛒 *NOUVELLE COMMANDE KWAD* 🛒%0A%0A`;
    message += `*Numéro:* ${orderNumber}%0A`;
    message += `*Date:* ${orderDate} à ${orderTime}%0A%0A`;
    message += `*DÉTAILS:*%0A═════════════════════%0A%0A`;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        message += `*${index + 1}. ${item.name}*%0A`;
        message += `   Qté: ${item.quantity}%0A`;
        message += `   Prix: ${item.price.toLocaleString()} FCFA%0A`;
        message += `   Total: ${itemTotal.toLocaleString()} FCFA%0A%0A`;
    });

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 1500;
    const total = subtotal + shipping;

    message += `*TOTAL:*%0A═════════════════════%0A`;
    message += `Sous-total: ${subtotal.toLocaleString()} FCFA%0A`;
    message += `Livraison: ${shipping.toLocaleString()} FCFA%0A`;
    message += `*TOTAL: ${total.toLocaleString()} FCFA*%0A%0A`;

    message += `*Paiement:* ${methodName}%0A%0A`;
    message += `_Merci de confirmer ma commande._%0A%0A`;
    message += `📞 *Service Client KWAD*`;

    const phoneNumber = '+242068448698';
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, '_blank');
}