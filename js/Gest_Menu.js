// ==================== CORRECTION DE LA GESTION DU MENU ====================
function initNavigation() {
    // Gestion du menu responsive
    initMobileMenu();

    // Gestion des liens de navigation
    initNavLinks();

    // Gestion du sous-menu Catégories
    initCategoriesMenu();
}

// Menu mobile
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
            nav.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        }
    });
}

// Gestion des liens de navigation - VERSION CORRIGÉE
function initNavLinks() {
    // Sélectionner tous les liens de navigation principaux
    const navLinks = document.querySelectorAll('nav > ul > li > a');

    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Fermer le sous-menu des catégories s'il est ouvert
            const submenu = document.querySelector('.submenu');
            if (submenu) {
                submenu.classList.remove('active');
            }

            // Fermer le menu mobile s'il est ouvert
            const nav = document.querySelector('nav');
            if (nav) {
                nav.classList.remove('active');
            }
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }

            // Déterminer quelle page afficher selon l'index
            switch(index) {
                case 0: // Accueil
                    showHomePage();
                    break;
                case 1: // Catégories (géré par initCategoriesMenu)
                    // Ne rien faire ici, le sous-menu se gère séparément
                    break;
                case 2: // Nouveautés
                    showNewProducts();
                    break;
                case 3: // Promotions
                    showPromotions();
                    break;
                case 4: // À propos
                    showAbout();
                    break;
                case 5: // Contact
                    showContact();
                    break;
            }
        });
    });
}

// Gestion du sous-menu Catégories
function initCategoriesMenu() {
    const categoriesLink = document.querySelector('nav li:nth-child(2) > a');
    const submenu = document.querySelector('.submenu');

    if (categoriesLink && submenu) {
        // Ouvrir/fermer le sous-menu au clic
        categoriesLink.addEventListener('click', function(e) {
            e.preventDefault();
            submenu.classList.toggle('active');
        });

        // Fermer le sous-menu en cliquant ailleurs
        document.addEventListener('click', function(e) {
            if (!e.target.closest('nav li:nth-child(2)')) {
                submenu.classList.remove('active');
            }
        });

        // Gérer les clics sur les sous-catégories
        const submenuLinks = document.querySelectorAll('.submenu a');
        submenuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const categoryId = this.getAttribute('data-category');
                filterProducts(categoryId);

                // Fermer le sous-menu après sélection
                submenu.classList.remove('active');

                // Fermer le menu mobile
                const nav = document.querySelector('nav');
                if (nav) {
                    nav.classList.remove('active');
                }
                const menuToggle = document.querySelector('.menu-toggle');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
            });
        });
    }
}

// ==================== FONCTIONS DES PAGES AMÉLIORÉES ====================

// Page d'accueil
function showHomePage() {
    // Réinitialiser l'affichage des produits
    initProducts();

    // Afficher les catégories
    const categoriesSection = document.querySelector('.categories-section');
    if (categoriesSection) {
        categoriesSection.style.display = 'block';
    }

    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Mettre à jour le titre
    updatePageTitle('Accueil');

    console.log('Navigation: Accueil');
}

// Nouveautés - VERSION AMÉLIORÉE
function showNewProducts() {
    const newProducts = products.filter(product =>
        product.badge === 'Nouveau' || product.badge === 'Nouveauté' //|| product.badge === 'Populaire'
    );

    if (newProducts.length === 0) {
        // Si aucun produit "Nouveau", prendre les 8 premiers produits
        displayFilteredProducts(products.slice(0, 8), 'Nouveautés');
    } else {
        displayFilteredProducts(newProducts, 'Nouveautés');
    }

    console.log('Navigation: Nouveautés -', newProducts.length, 'produits');
}

// Promotions - VERSION AMÉLIORÉE
function showPromotions() {
    const promoProducts = products.filter(product =>
        product.badge === 'Promo' || product.badge === 'Promotion'
        //product.price < 15000// Produits à moins de 15,000 FCFA considérés en promo
    );

    displayFilteredProducts(promoProducts, 'Promotions');

    console.log('Navigation: Promotions -', promoProducts.length, 'produits');
    window.scrollTo({ top: 6, behavior: 'smooth' });
}

// Page À propos - VERSION AMÉLIORÉE
function showAbout() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    // Cacher la section catégories
    const categoriesSection = document.querySelector('.categories-section');
    if (categoriesSection) {
        categoriesSection.style.display = 'none';
    }

    const aboutHTML = `
        <div class="about-section" style="padding: 40px 20px; max-width: 900px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">À Propos de KWAD</h2>

            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow); width: 800px; height: 1270px">
                <div style="text-align: center; margin-bottom: 40px;">
                    <div style="font-size: 64px; color: var(--primary); margin-bottom: 20px;">
                        🛍️
                    </div>
                    <h3 style="color: #333; margin-bottom: 15px; font-size: 28px;">Votre Boutique en Ligne de Confiance</h3>
                    <p style="color: #666; font-size: 18px; line-height: 1.6;">
                        Découvrez une expérience de shopping exceptionnelle avec KWAD
                    </p>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px;">
                    <div>
                        <h4 style="color: var(--primary); margin-bottom: 20px; font-size: 22px;">📖 Notre Histoire</h4>
                        <p style="line-height: 1.7; color: #666; font-size: 16px;">
                            Fondée en 2024, <strong>KWAD</strong> est née de la passion pour offrir des produits de qualité
                            à des prix accessibles pour tous les Congolais. Notre mission est de révolutionner
                            le commerce en ligne au Congo Brazzaville en proposant une plateforme fiable,
                            sécurisée et conviviale.
                        </p>
                    </div>

                    <div>
                        <h4 style="color: var(--primary); margin-bottom: 20px; font-size: 22px;">🎯 Notre Mission</h4>
                        <p style="line-height: 1.7; color: #666; font-size: 16px;">
                            Rendre le shopping en ligne <strong>simple, sécurisé et agréable</strong>. Nous sélectionnons
                            rigoureusement chaque produit pour vous garantir qualité, durabilité et satisfaction.
                            Votre bonheur est notre priorité absolue.
                        </p>
                    </div>
                </div>

                <div style="margin-bottom: 40px;">
                    <h4 style="color: var(--primary); margin-bottom: 25px; font-size: 22px; text-align: center;">⭐ Nos Valeurs</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        <div style="text-align: center; padding: 25px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid var(--primary);">
                            <div style="font-size: 32px; margin-bottom: 15px;">👍</div>
                            <h5 style="color: #333; margin-bottom: 10px;">Qualité Garantie</h5>
                            <p style="color: #666; font-size: 14px;">Des produits rigoureusement sélectionnés et testés</p>
                        </div>
                        <div style="text-align: center; padding: 25px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid var(--success);">
                            <div style="font-size: 32px; margin-bottom: 15px;">🚚</div>
                            <h5 style="color: #333; margin-bottom: 10px;">Livraison Rapide</h5>
                            <p style="color: #666; font-size: 14px;">Expédition express</p>
                        </div>
                        <div style="text-align: center; padding: 25px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid var(--dark);">
                            <div style="font-size: 32px; margin-bottom: 15px;">💬</div>
                            <h5 style="color: #333; margin-bottom: 10px;">Service Client</h5>
                            <p style="color: #666; font-size: 14px;">Support réactif et attentionné 6j/7</p>
                        </div>
                        <div style="text-align: center; padding: 25px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid var(--danger);">
                            <div style="font-size: 32px; margin-bottom: 15px;">🛡️</div>
                            <h5 style="color: #333; margin-bottom: 10px;">Confiance & Sécurité</h5>
                            <p style="color: #666; font-size: 14px;">Transactions 100% sécurisées et transparentes</p>
                        </div>
                    </div>
                </div>

                <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; padding: 30px; border-radius: 10px; text-align: center;">
                    <h4 style="margin-bottom: 20px; font-size: 24px;">📊 Notre Impact</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px;">
                        <div>
                            <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;">${products.length}+</div>
                            <div>Produits</div>
                        </div>
                        <div>
                            <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;">${categories.length}</div>
                            <div>Catégories</div>
                        </div>
                        <div>
                            <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;">100%</div>
                            <div>Satisfaction Client</div>
                        </div>
                        <div>
                            <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;">24/7</div>
                            <div>Support Client</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    grid.innerHTML = aboutHTML;
    updatePageTitle('À Propos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Navigation: À Propos');
}

// Page Contact - VERSION AMÉLIORÉE
function showContact() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    // Cacher la section catégories
    const categoriesSection = document.querySelector('.categories-section');
    if (categoriesSection) {
        categoriesSection.style.display = 'none';
    }

    const contactHTML = `
        <div class="contact-section" style="padding: 40px 20px; max-width: 1000px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 40px; color: var(--primary); font-size: 32px;">Contactez-Nous</h2>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px;">
                <!-- Informations de contact -->
                <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: var(--shadow); width: 400px; height: 570px">
                    <h3 style="color: var(--primary); margin-bottom: 25px; font-size: 24px;">📞 Informations de Contact</h3>

                    <div style="space-y-4">
                        <div style="display: flex; align-items: center; margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                            <div style="background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div>
                                <div style="font-weight: bold; color: #333; font-size: 16px;">Téléphone Principal</div>
                                <div style="color: #666; font-size: 18px;">+242 06 844 8698</div>
                            </div>
                        </div>

                        <div style="display: flex; align-items: center; margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                            <div style="background: #25D366; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <div>
                                <div style="font-weight: bold; color: #333; font-size: 16px;">WhatsApp Business</div>
                                <div style="color: #666; font-size: 18px;">+242 06 844 8698</div>
                            </div>
                        </div>

                        <div style="display: flex; align-items: center; margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                            <div style="background: var(--secondary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <div style="font-weight: bold; color: #333; font-size: 16px;">Email</div>
                                <div style="color: #666; font-size: 18px;">frediadaniella@gmail.com</div>
                            </div>
                        </div>

                        <div style="display: flex; align-items: center; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                            <div style="background: var(--warning); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <div style="font-weight: bold; color: #333; font-size: 16px;">Adresse</div>
                                <div style="color: #666; font-size: 18px;">Pointe-Noire, République du Congo</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Horaires d'ouverture -->
                <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: var(--shadow); width: 400px; height: 570px">
                    <h3 style="color: var(--primary); margin-bottom: 25px; font-size: 24px;">🕒 Horaires d'Ouverture</h3>

                    <div style="color: #666; space-y-3">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                            <span style="font-weight: 500;">Lundi - Vendredi</span>
                            <span style="font-weight: bold; color: var(--primary);">8h00 - 18h00</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                            <span style="font-weight: 500;">Samedi</span>
                            <span style="font-weight: bold; color: var(--primary);">9h00 - 16h00</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="font-weight: 500;">Dimanche</span>
                            <span style="font-weight: bold; color: #dc3545;">Fermé</span>
                        </div>
                    </div>

                    <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-radius: 10px; border-left: 4px solid #ffc107;">
                        <div style="color: #856404; font-size: 15px; line-height: 1.5;">
                            <strong>💡 Conseil :</strong> Pour une réponse rapide, contactez-nous via WhatsApp !
                            Notre équipe est disponible pour vous accompagner dans vos achats.
                        </div>
                    </div>
                </div>
            </div>

            <!-- Actions de contact -->
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow); text-align: center;">
                <h3 style="color: var(--primary); margin-bottom: 30px; font-size: 26px;">📍 Contactez-Nous Directement</h3>
                <p style="color: #666; margin-bottom: 30px; font-size: 16px; max-width: 600px; margin-left: auto; margin-right: auto;">
                    Nous sommes là pour vous aider ! Choisissez le moyen de contact qui vous convient le mieux.
                </p>

                <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                    <button class="btn" onclick="openWhatsAppContact()" style="padding: 15px 30px; font-size: 16px; display: flex; align-items: center; gap: 10px;">
                        <i class="fab fa-whatsapp" style="font-size: 20px;"></i> WhatsApp
                    </button>
                    <button class="btn" onclick="makePhoneCall()" style="padding: 15px 30px; font-size: 16px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-phone" style="font-size: 18px;"></i> Appeler
                    </button>
                    <button class="btn" onclick="sendEmail()" style="padding: 15px 30px; font-size: 16px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-envelope" style="font-size: 18px;"></i> Email
                    </button>
                </div>
            </div>
        </div>
    `;

    grid.innerHTML = contactHTML;
    updatePageTitle('Contact');
    console.log('Navigation: Contact');
}