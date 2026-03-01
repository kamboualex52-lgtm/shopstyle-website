// ==================== PAGE DE DÉTAIL PRODUIT ====================

function setupDetailPageEvents() {
    const closeDetail = document.getElementById('close-detail');
    if (closeDetail) {
        closeDetail.addEventListener('click', closeProductDetail);
    }

    const detailModal = document.getElementById('product-detail-modal');
    if (detailModal) {
        detailModal.addEventListener('click', function(e) {
            if (e.target === this) closeProductDetail();
        });
    }

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

    const buyNow = document.getElementById('buy-now');
    if (buyNow) {
        buyNow.addEventListener('click', function() {
            if (!currentProduct) return;

            const quantity = parseInt(document.querySelector('.qty-input').value);

            cart = [];
            for (let i = 0; i < quantity; i++) {
                addToCart(currentProduct.id);
            }

            closeProductDetail();
            openCart();
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeProductDetail();
    });
}

function showProductDetail(productId) {
    currentProduct = ProductManager.getById(productId);
    if (!currentProduct) return;

    // === CORRECTION: Gestion du badge ===
    // Supprimer l'ancien badge s'il existe pour éviter les doublons
    const existingBadge = document.querySelector('.product-detail-badge');
    if (existingBadge) {
        existingBadge.remove();
    }

     // Ajouter le badge si le produit en a un
    if (currentProduct.badge) {
        const badgeContainer = document.createElement('div');
        badgeContainer.className = 'product-detail-badge';

        // Créer une classe CSS sécurisée à partir du nom du badge
        const badgeClass = currentProduct.badge
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');

        badgeContainer.innerHTML = `<span class="badge-${badgeClass}">${currentProduct.badge}</span>`;

        // Insérer le badge avant le titre
        const titleElement = document.getElementById('detail-product-name');
        if (titleElement) {
            titleElement.parentNode.insertBefore(badgeContainer, titleElement);
        }
    }

    document.getElementById('detail-product-name').textContent = currentProduct.name;

    // Utiliser la fonction generateFloatStars pour les notes décimales
    const rating = currentProduct.rating || 0;
    document.getElementById('detail-product-rating').innerHTML = generateFloatStars(rating);

//    document.getElementById('detail-product-price').textContent = currentProduct.price.toLocaleString() + ' FCFA';
    document.getElementById('detail-product-description').textContent = currentProduct.description || 'Description non disponible.';

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

    updateProductGallery();

    // AJOUTER LES BOUTONS DE PARTAGE
    ShareManager.addShareButtons(currentProduct);

    document.querySelector('.qty-input').value = 1;

    document.getElementById('product-detail-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function updateProductGallery() {
    const mainImage = document.getElementById('detail-main-image');
    const thumbnailsContainer = document.getElementById('image-thumbnails');
    const playVideoBtn = document.getElementById('play-video-btn');
    const videoModal = document.getElementById('video-modal');
    const productVideo = document.getElementById('product-video');

    if (!mainImage || !thumbnailsContainer) return;

    thumbnailsContainer.innerHTML = '';
    currentMediaIndex = 0;

    // Utiliser media array ou créer un tableau par défaut
    const mediaItems = currentProduct.media || [{ type: 'image', src: currentProduct.image }];

    // Afficher la première image/vidéo
    if (mediaItems[0].type === 'video') {
        mainImage.src = mediaItems[0].thumbnail || 'https://via.placeholder.com/600x600?text=Video';
        playVideoBtn.style.display = 'flex';
        playVideoBtn.onclick = () => {
            productVideo.src = mediaItems[0].src;
            videoModal.style.display = 'flex';
        };
    } else {
        mainImage.src = mediaItems[0].src;
        playVideoBtn.style.display = 'none';
    }

    // Créer les miniatures
    mediaItems.forEach((media, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;

        if (media.type === 'video') {
            thumbnail.innerHTML = `
                <div class="thumbnail-video-indicator">
                    <img src="${media.thumbnail || 'https://via.placeholder.com/80'}" alt="">
                    <i class="fas fa-play-circle"></i>
                </div>
            `;
        } else {
            thumbnail.innerHTML = `<img src="${media.src}" alt="" onerror="handleImageError(this)">`;
        }

        thumbnail.addEventListener('click', () => {
            if (media.type === 'video') {
                mainImage.src = media.thumbnail || 'https://via.placeholder.com/600x600?text=Video';
                playVideoBtn.style.display = 'flex';
                playVideoBtn.onclick = () => {
                    productVideo.src = media.src;
                    videoModal.style.display = 'flex';
                };
            } else {
                mainImage.src = media.src;
                playVideoBtn.style.display = 'none';
            }

            currentMediaIndex = index;
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

// === CORRECTION: Fonction pour générer des étoiles avec demi-étoiles ===
function generateFloatStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // Étoiles pleines
    for (let i = 1; i <= fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    // Demi-étoile si nécessaire
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    // Étoiles vides
    for (let i = 1; i <= emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    // Ajouter la valeur numérique entre parenthèses
    return stars + ` <span class="rating-value">(${rating.toFixed(1)})</span>`;
}