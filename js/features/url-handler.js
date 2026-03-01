// ==================== GESTIONNAIRE D'URL POUR LE PARTAGE ====================

const URLHandler = {
    // Initialiser le gestionnaire d'URL
    init() {
        this.checkForProductInURL();
        this.setupHistoryListener();
    },

    // Obtenir l'URL de base correcte (fonctionne en local et en ligne)
    getBaseUrl() {
        // Essayer de construire une URL complète
        if (window.location.origin && window.location.origin !== 'null') {
            return window.location.origin + window.location.pathname;
        }

        // Fallback pour les environnements locaux (file://)
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1);

        // Si on est à la racine ou si le fichier est index.html
        if (filename === '' || filename === 'index.html' || filename.endsWith('.html')) {
            return path;
        }

        // Fallback ultime
        return window.location.href.split('?')[0];
    },

    // Générer une URL de partage pour un produit
    generateShareUrl(productId) {
        const baseUrl = this.getBaseUrl();
        const separator = baseUrl.includes('?') ? '&' : '?';
        return `${baseUrl}${separator}product=${productId}`;
    },

    // Vérifier si l'URL contient un paramètre 'product'
    checkForProductInURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('product');

        if (productId) {
            console.log(`🔍 Produit trouvé dans l'URL: ${productId}`);
            // Attendre que les produits soient chargés
            this.waitForProductsAndShow(parseInt(productId));
        }
    },

    // Attendre que les produits soient disponibles
    waitForProductsAndShow(productId) {
        // Si les produits sont déjà disponibles
        if (typeof ProductManager !== 'undefined' && ProductManager.getById(productId)) {
            this.showProductFromUrl(productId);
            return;
        }

        // Sinon, attendre qu'ils soient chargés
        let attempts = 0;
        const maxAttempts = 50; // 5 secondes max (100ms * 50)

        const checkInterval = setInterval(() => {
            attempts++;

            if (typeof ProductManager !== 'undefined' && ProductManager.getById(productId)) {
                clearInterval(checkInterval);
                this.showProductFromUrl(productId);
            } else if (attempts >= maxAttempts) {
                clearInterval(checkInterval);
                console.log('❌ Produit non trouvé après plusieurs tentatives');
            }
        }, 100);
    },

    // Afficher le produit depuis l'URL
    showProductFromUrl(productId) {
        console.log(`🔗 Ouverture du produit depuis l'URL: ${productId}`);

        // Petite attente pour que tout soit prêt
        setTimeout(() => {
            if (typeof showProductDetail === 'function') {
                showProductDetail(productId);

                // Nettoyer l'URL sans recharger la page (optionnel)
                // this.cleanUrl();
            } else {
                console.error('❌ Fonction showProductDetail non disponible');
            }
        }, 500);
    },

    // Nettoyer l'URL en enlevant le paramètre 'product'
    cleanUrl() {
        const url = new URL(window.location.href);
        url.searchParams.delete('product');

        // Mettre à jour l'URL sans recharger la page
        window.history.replaceState({}, '', url);
    },

    // Écouter les changements d'URL (pour la navigation)
    setupHistoryListener() {
        window.addEventListener('popstate', () => {
            this.checkForProductInURL();
        });
    }
};

// Exporter pour utilisation globale
window.URLHandler = URLHandler;