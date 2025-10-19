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
