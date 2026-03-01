// ==================== CARROUSEL INFINI ====================

class InfiniteCarousel {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.options = {
            autoPlay: true,
            autoPlaySpeed: 5000,
            visibleSlides: this.getVisibleSlides(),
            gap: 30,
            ...options
        };

        this.currentIndex = 0;
        this.totalSlides = 0;
        this.isAnimating = false;
        this.autoPlayInterval = null;

        // Attendre que les catégories soient chargées
        setTimeout(() => this.init(), 200);
    }

    getVisibleSlides() {
        if (window.innerWidth < 600) return 1;
        if (window.innerWidth < 992) return 2;
        return 4;
    }

    init() {
        console.log('🔄 Initialisation du carrousel infini...');

        // Récupérer les slides originaux
        this.originalSlides = Array.from(this.container.children);
        this.totalSlides = this.originalSlides.length;

        if (this.totalSlides === 0) {
            console.log('⚠️ Aucune catégorie trouvée');
            return;
        }

        console.log(`📊 ${this.totalSlides} catégories trouvées`);

        // Vider le conteneur
        this.container.innerHTML = '';

        // Créer l'ordre infini
        this.createInfiniteOrder();

        // Configurer le conteneur
        this.setupContainer();

        // Créer la navigation
        this.createNavigation();

        // Position initiale
        this.currentIndex = this.options.visibleSlides;
        this.updatePosition(false);

        // Démarrer l'autoplay
        if (this.options.autoPlay) {
            this.startAutoPlay();
        }

        // Événements
        this.bindEvents();

        console.log('✅ Carrousel infini initialisé');
    }

    createInfiniteOrder() {
        // Cloner les derniers slides pour les mettre au début
        for (let i = this.totalSlides - this.options.visibleSlides; i < this.totalSlides; i++) {
            const clone = this.originalSlides[i].cloneNode(true);
            clone.classList.add('clone', 'clone-prev');
            this.container.appendChild(clone);
        }

        // Ajouter les originaux
        this.originalSlides.forEach(slide => {
            const clone = slide.cloneNode(true);
            clone.classList.add('original');
            this.container.appendChild(clone);
        });

        // Cloner les premiers slides pour les mettre à la fin
        for (let i = 0; i < this.options.visibleSlides; i++) {
            const clone = this.originalSlides[i].cloneNode(true);
            clone.classList.add('clone', 'clone-next');
            this.container.appendChild(clone);
        }

        this.allSlides = Array.from(this.container.children);
        console.log(`🔄 ${this.allSlides.length} slides au total (avec clones)`);
    }

    setupContainer() {
        this.container.style.display = 'flex';
        this.container.style.gap = `${this.options.gap}px`;
        this.container.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        this.container.style.willChange = 'transform';

        this.updateSlideWidth();
    }

    updateSlideWidth() {
        const containerWidth = this.container.parentElement.offsetWidth;
        const totalGap = this.options.gap * (this.options.visibleSlides - 1);
        this.slideWidth = (containerWidth - totalGap) / this.options.visibleSlides;

        this.allSlides.forEach(slide => {
            slide.style.flex = `0 0 ${this.slideWidth}px`;
            slide.style.maxWidth = `${this.slideWidth}px`;
        });
    }

    updatePosition(animate = true) {
        if (!animate) {
            this.container.style.transition = 'none';
        }

        const translateX = -(this.currentIndex * (this.slideWidth + this.options.gap));
        this.container.style.transform = `translateX(${translateX}px)`;

        if (!animate) {
            // Forcer le reflow
            this.container.offsetHeight;
            setTimeout(() => {
                this.container.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            }, 50);
        }

        this.updateActiveIndicators();
    }

    next() {
        if (this.isAnimating) return;
        this.isAnimating = true;

        this.currentIndex++;
        this.updatePosition(true);

        setTimeout(() => {
            // Si on est arrivé aux clones de fin, sauter au début
            if (this.currentIndex >= this.totalSlides + this.options.visibleSlides) {
                this.container.style.transition = 'none';
                this.currentIndex = this.options.visibleSlides;
                this.updatePosition(false);
            }
            this.isAnimating = false;
        }, 500);
    }

    prev() {
        if (this.isAnimating) return;
        this.isAnimating = true;

        this.currentIndex--;
        this.updatePosition(true);

        setTimeout(() => {
            // Si on est arrivé aux clones de début, sauter à la fin
            if (this.currentIndex < this.options.visibleSlides) {
                this.container.style.transition = 'none';
                this.currentIndex = this.totalSlides + this.options.visibleSlides - 1;
                this.updatePosition(false);
            }
            this.isAnimating = false;
        }, 500);
    }

    createNavigation() {
        const carousel = this.container.parentElement;

        // Supprimer les anciennes flèches si elles existent
        const oldArrows = carousel.querySelectorAll('.carousel-arrow');
        oldArrows.forEach(arrow => arrow.remove());

        // Créer les nouvelles flèches
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-arrow carousel-prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.addEventListener('click', () => this.prev());

        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-arrow carousel-next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.addEventListener('click', () => this.next());

        carousel.appendChild(prevBtn);
        carousel.appendChild(nextBtn);

        // Supprimer les anciens points de navigation
        const oldNav = carousel.querySelector('.carousel-nav');
        if (oldNav) oldNav.remove();

        // Créer les nouveaux points
        const navContainer = document.createElement('div');
        navContainer.className = 'carousel-nav';

        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            dot.dataset.index = i;
            dot.addEventListener('click', () => this.goToSlide(i));
            navContainer.appendChild(dot);
        }

        carousel.appendChild(navContainer);
        this.navDots = navContainer.children;
    }

    goToSlide(index) {
        if (this.isAnimating) return;

        this.stopAutoPlay();

        this.isAnimating = true;
        this.currentIndex = index + this.options.visibleSlides;
        this.updatePosition(true);

        setTimeout(() => {
            this.isAnimating = false;
            this.startAutoPlay();
        }, 500);
    }

    updateActiveIndicators() {
        if (!this.navDots) return;

        let realIndex = (this.currentIndex - this.options.visibleSlides) % this.totalSlides;
        if (realIndex < 0) realIndex += this.totalSlides;

        Array.from(this.navDots).forEach((dot, index) => {
            dot.classList.toggle('active', index === realIndex);
        });
    }

    bindEvents() {
        // Redimensionnement
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                const newVisibleSlides = this.getVisibleSlides();
                if (newVisibleSlides !== this.options.visibleSlides) {
                    this.rebuild();
                } else {
                    this.updateSlideWidth();
                    this.updatePosition(false);
                }
            }, 250);
        });

        // Pause autoplay au survol
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());
        this.container.addEventListener('touchstart', () => this.stopAutoPlay());
        this.container.addEventListener('touchend', () => this.startAutoPlay());
    }

    rebuild() {
        console.log('🔄 Reconstruction du carrousel...');
        const currentRealIndex = (this.currentIndex - this.options.visibleSlides) % this.totalSlides;

        this.container.innerHTML = '';
        this.createInfiniteOrder();
        this.setupContainer();
        this.currentIndex = (currentRealIndex + this.options.visibleSlides) % this.allSlides.length;
        this.updatePosition(false);
        this.updateActiveIndicators();
    }

    startAutoPlay() {
        if (!this.options.autoPlay) return;
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => this.next(), this.options.autoPlaySpeed);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialisation APRÈS que le DOM soit chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('categories-container')) {
            window.categoriesCarousel = new InfiniteCarousel('categories-container', {
                autoPlay: true,
                autoPlaySpeed: 5000,
                gap: 30
            });
        }
    });
} else {
    // DOM déjà chargé
    setTimeout(() => {
        if (document.getElementById('categories-container')) {
            window.categoriesCarousel = new InfiniteCarousel('categories-container', {
                autoPlay: true,
                autoPlaySpeed: 5000,
                gap: 30
            });
        }
    }, 300);
}

window.InfiniteCarousel = InfiniteCarousel;