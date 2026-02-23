//categories.js

// ==================== GESTION DES CATÉGORIES ET CAROUSEL ====================

// Initialiser les catégories
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

// Fonctions du carousel
function goToSlide(slideIndex) {
    const container = document.getElementById('categories-container');
    if (!container || !container.children.length) return;

    const cards = container.children;
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

    // Calculer le décalage
    const cardWidth = cards[0].offsetWidth;
    const gap = parseInt(getComputedStyle(container).gap) || 0;
    const offset = currentSlide * slidesToShow * (cardWidth + gap);

    container.style.transform = `translateX(-${offset}px)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

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

    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);
}

// Auto-carousel
let autoCarouselInterval = null;

function startCarousel() {
    stopCarousel();

    autoCarouselInterval = setInterval(() => {
        const totalSlides = Math.ceil(categories.length / slidesToShow);
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }, 5000);
}

function stopCarousel() {
    if (autoCarouselInterval) {
        clearInterval(autoCarouselInterval);
        autoCarouselInterval = null;
    }
}

// Swipe tactile
function enableSwipe() {
    const container = document.querySelector('.categories-carousel');
    if (!container) return;

    let startX = 0;
    let endX = 0;

    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const delta = endX - startX;
        const threshold = 50;

        if (delta > threshold) {
            prevSlide();
        } else if (delta < -threshold) {
            nextSlide();
        }
    });
}

function addCarouselPauseEvents() {
    const carousel = document.querySelector('.categories-carousel');
    if (!carousel) return;

    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
    carousel.addEventListener('touchstart', stopCarousel, { passive: true });
    carousel.addEventListener('touchend', startCarousel);
}

// Fonction de filtrage par catégorie
function filterProducts(categoryId) {
    const filteredProducts = ProductManager.getByCategory(categoryId);
    const category = categories.find(c => c.id === categoryId);
    displayFilteredProducts(filteredProducts, `Catégorie: ${category?.name || categoryId}`);
}

// Gestion du redimensionnement
window.addEventListener('resize', () => {
    slidesToShow = getSlidesToShow();
    const totalSlides = Math.ceil(categories.length / slidesToShow);
    if (currentSlide >= totalSlides) {
        currentSlide = totalSlides - 1;
    }
    goToSlide(currentSlide);
});