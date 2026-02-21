// ==================== PAGES D'INFORMATION ====================

// Page Livraison
function showDeliveryInfo() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    const deliveryHTML = `
        <div class="info-page" style="padding: 40px 20px; max-width: 900px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">🚚 Informations de Livraison</h2>

            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow);">
                <!-- Zones -->
                <div style="margin-bottom: 40px;">
                    <h3 style="color: var(--primary); margin-bottom: 20px;">📍 Zones de Livraison</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        <div style="background: #e8f5e8; padding: 20px; border-radius: 10px; border-left: 4px solid var(--success);">
                            <h4>Pointe-Noire</h4>
                            <p>Livraison express en 24h</p>
                            <p style="color: var(--primary); font-weight: bold;">1 500 FCFA</p>
                        </div>
                        <div style="background: #fff3e0; padding: 20px; border-radius: 10px; border-left: 4px solid var(--warning);">
                            <h4>Brazzaville</h4>
                            <p>Livraison en 48h</p>
                            <p style="color: var(--primary); font-weight: bold;">2 500 FCFA</p>
                        </div>
                        <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border-left: 4px solid var(--info);">
                            <h4>Autres Villes</h4>
                            <p>Livraison en 3-5 jours</p>
                            <p style="color: var(--primary); font-weight: bold;">À partir de 3 500 FCFA</p>
                        </div>
                    </div>
                </div>

                <!-- Processus -->
                <div style="margin-bottom: 40px;">
                    <h3 style="color: var(--primary); margin-bottom: 20px;">📦 Processus de Livraison</h3>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;">
                        <div style="text-align: center;">
                            <div style="background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;">1</div>
                            <h4>Commande</h4>
                        </div>
                        <div style="text-align: center;">
                            <div style="background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;">2</div>
                            <h4>Confirmation</h4>
                        </div>
                        <div style="text-align: center;">
                            <div style="background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;">3</div>
                            <h4>Préparation</h4>
                        </div>
                        <div style="text-align: center;">
                            <div style="background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;">4</div>
                            <h4>Livraison</h4>
                        </div>
                    </div>
                </div>

                <!-- Actions -->
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="showHomePage()" class="btn">Retour à l'accueil</button>
                    <button onclick="openWhatsAppContact()" class="btn" style="background: #25D366;">Poser une question</button>
                </div>
            </div>
        </div>
    `;

    grid.innerHTML = deliveryHTML;
    updatePageTitle('Livraison - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Conditions générales
function showTerms() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    const termsHTML = `
        <div style="padding: 40px 20px; max-width: 900px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">📝 Conditions Générales de Vente</h2>

            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow);">

                <!-- En-tête -->
                <div style="text-align: center; margin-bottom: 40px;">
                    <div style="font-size: 80px; margin-bottom: 20px;">⚖️</div>
                    <h3 style="color: var(--primary); margin-bottom: 15px;">Conditions Générales de Vente KWAD</h3>
                    <p style="color: #666; font-size: 16px;">
                        Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}
                    </p>
                </div>

                <!-- Article 1 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">1</span>
                        Objet
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Les présentes conditions générales de vente régissent les relations contractuelles entre KWAD et ses clients.
                        Toute commande implique l'acceptation sans réserve de ces conditions.
                    </p>
                </div>

                <!-- Article 2 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">2</span>
                        Produits et Prix
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Les produits sont décrits avec la plus grande exactitude possible. Les prix sont en francs CFA (FCFA) toutes taxes comprises.
                        KWAD se réserve le droit de modifier ses prix à tout moment.
                    </p>
                </div>

                <!-- Article 3 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">3</span>
                        Commandes
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Les commandes sont passées via WhatsApp. Toute commande vaut acceptation des prix et des conditions de vente.
                        KWAD se réserve le droit d'annuler toute commande en cas de problème de stock.
                    </p>
                </div>

                <!-- Article 4 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">4</span>
                        Paiement
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Le paiement s'effectue par Mobile Money (MTN ou Airtel). La commande n'est validée qu'après confirmation du paiement.
                    </p>
                </div>

                <!-- Article 5 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">5</span>
                        Livraison
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Les délais de livraison sont indicatifs. En cas de retard, le client sera informé.
                        Les frais de livraison sont à la charge du client sauf indication contraire.
                    </p>
                </div>

                <!-- Article 6 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">6</span>
                        Retour et Remboursement
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Délai de rétractation de 7 jours. Les produits doivent être retournés dans leur état d'origine.
                        Les frais de retour sont à la charge du client sauf pour les produits défectueux.
                    </p>
                </div>

                <!-- Article 7 -->
                <div style="margin-bottom: 40px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">7</span>
                        Responsabilité
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        KWAD ne saurait être tenue responsable des dommages résultant d'une mauvaise utilisation des produits.
                    </p>
                </div>

                <!-- Section contact -->
                <div style="background: #e3f2fd; padding: 25px; border-radius: 10px; margin-bottom: 30px; text-align: center;">
                    <h4 style="color: #1565c0; margin-bottom: 15px;">📞 Questions sur nos conditions ?</h4>
                    <p style="color: #1565c0; margin: 0 0 15px 0;">
                        Notre équipe est à votre disposition pour toute clarification.
                    </p>
                    <button onclick="openWhatsAppContact()" class="btn" style="background: #25D366; color: white;">
                        <i class="fab fa-whatsapp"></i> Nous contacter
                    </button>
                </div>

                <!-- Boutons de navigation -->
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="showHomePage()" class="btn" style="background: var(--primary); color: white;">
                        <i class="fas fa-home"></i> Retour à l'accueil
                    </button>
                    <button onclick="showPrivacyPolicy()" class="btn" style="background: var(--secondary); color: white;">
                        <i class="fas fa-shield-alt"></i> Politique de confidentialité
                    </button>
                </div>
            </div>
        </div>
    `;

    grid.innerHTML = termsHTML;
    updatePageTitle('Conditions Générales - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Politique de confidentialité
function showPrivacyPolicy() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    const privacyHTML = `
    <div style="position: relative; padding: 40px 20px; max-width: 900px; margin: 0 auto;">
        <!-- Bouton de fermeture en position absolue (optionnel) -->
        <button onclick="showHomePage()" style="position: absolute; top: 20px; right: 20px; background: none; border: none; font-size: 24px; cursor: pointer; color: #999; z-index: 10;" title="Fermer">
            <i class="fas fa-times"></i>
        </button>

        <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">🔒 Politique de Confidentialité</h2>

        <div style="position: relative; background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow);">

            <!-- En-tête -->
            <div style="position: relative; text-align: center; margin-bottom: 40px;">
                <div style="position: relative; font-size: 80px; margin-bottom: 20px;">🛡️</div>
                <h3 style="color: var(--primary); margin-bottom: 15px;">Protection de Vos Données Personnelles</h3>
                <p style="color: #666; font-size: 16px;">
                    Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}
                </p>
            </div>

            <!-- Section 1 -->
            <div style="position: relative; margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                    <span style="position: relative; background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">1</span>
                    Données Collectées
                </h4>
                <p style="color: #666; line-height: 1.6; margin: 0;">
                    Nous collectons : nom, prénom, adresse, numéro de téléphone, adresse email.
                    Ces données sont nécessaires au traitement de votre commande et à la livraison.
                </p>
            </div>

            <!-- Section 2 -->
            <div style="position: relative; margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                    <span style="position: relative; background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">2</span>
                    Utilisation des Données
                </h4>
                <p style="color: #666; line-height: 1.6; margin: 0;">
                    Vos données sont utilisées pour : traiter votre commande, vous livrer, vous informer de l'état de votre commande,
                    et vous envoyer des offres promotionnelles (si vous y consentez).
                </p>
            </div>

            <!-- Section 3 -->
            <div style="position: relative; margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                    <span style="position: relative; background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">3</span>
                    Protection des Données
                </h4>
                <p style="color: #666; line-height: 1.6; margin: 0;">
                    Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données
                    contre tout accès non autorisé, modification ou destruction.
                </p>
            </div>

            <!-- Section 4 -->
            <div style="position: relative; margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                    <span style="position: relative; background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">4</span>
                    Partage des Données
                </h4>
                <p style="color: #666; line-height: 1.6; margin: 0;">
                    Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec nos prestataires
                    de livraison uniquement dans le cadre de l'exécution de votre commande.
                </p>
            </div>

            <!-- Section 5 -->
            <div style="position: relative; margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                    <span style="position: relative; background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">5</span>
                    Durée de Conservation
                </h4>
                <p style="color: #666; line-height: 1.6; margin: 0;">
                    Vos données sont conservées pendant la durée nécessaire à l'exécution de nos services,
                    et conformément aux obligations légales.
                </p>
            </div>

            <!-- Section 6 -->
            <div style="position: relative; margin-bottom: 40px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                    <span style="position: relative; background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">6</span>
                    Vos Droits
                </h4>
                <p style="color: #666; line-height: 1.6; margin: 0;">
                    Vous disposez des droits d'accès, de rectification, d'effacement, de limitation et d'opposition.
                    Pour exercer ces droits, contactez-nous aux coordonnées ci-dessous.
                </p>
            </div>

            <!-- Section contact -->
            <div style="position: relative; background: #e8f5e8; padding: 25px; border-radius: 10px; margin-bottom: 30px;">
                <h4 style="color: #2e7d32; margin-bottom: 15px; text-align: center;">📞 Contact Délégué à la Protection des Données</h4>
                <div style="position: relative; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; text-align: center;">
                    <div style="position: relative;">
                        <div style="font-size: 24px; margin-bottom: 10px;">📧</div>
                        <div style="font-weight: bold; color: #333;">Email</div>
                        <div style="color: #666;">frediadaniella@gmail.com</div>
                    </div>
                    <div style="position: relative;">
                        <div style="font-size: 24px; margin-bottom: 10px;">📞</div>
                        <div style="font-weight: bold; color: #333;">Téléphone</div>
                        <div style="color: #666;">+242 06 844 8698</div>
                    </div>
                    <div style="position: relative;">
                        <div style="font-size: 24px; margin-bottom: 10px;">💬</div>
                        <div style="font-weight: bold; color: #333;">WhatsApp</div>
                        <div style="color: #666;">+242 06 844 8698</div>
                    </div>
                </div>
            </div>

            <!-- Boutons de navigation -->
            <div style="position: relative; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button onclick="showHomePage()" class="btn" style="position: relative; background: var(--primary); color: white; padding: 12px 25px; border: none; border-radius: 25px; cursor: pointer; font-size: 16px; transition: all 0.3s ease;">
                    <i class="fas fa-home"></i> Retour à l'accueil
                </button>
                <button onclick="showTerms()" class="btn" style="position: relative; background: var(--secondary); color: white; padding: 12px 25px; border: none; border-radius: 25px; cursor: pointer; font-size: 16px; transition: all 0.3s ease;">
                    <i class="fas fa-file-contract"></i> Conditions générales
                </button>
            </div>
        </div>
    </div>
`;

    grid.innerHTML = privacyHTML;
    updatePageTitle('Politique de Confidentialité - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Politique de retour
function showReturnPolicy() {
    showDeliveryInfo(); // Similaire pour l'exemple
}

// Gestion des liens du footer
function initFooterLinks() {
    console.log('🔄 Initialisation des liens du footer...');

    const footerLinks = document.querySelectorAll('.footer-column a, footer a');

    footerLinks.forEach((link) => {
        const linkText = link.textContent.trim();

        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            if (linkText.includes('Conditions')) showTerms();
            else if (linkText.includes('Politique')) showPrivacyPolicy();
            else if (linkText.includes('Livraison')) showDeliveryInfo();
            else if (linkText.includes('Retour')) showReturnPolicy();
            else if (linkText.includes('À propos')) showAbout();
            else if (linkText.includes('Mon compte')) showAccountPage();
            else if (linkText.includes('Historique')) showOrderHistory();
            else if (linkText.includes('souhaits') || linkText.includes('Favoris')) showWishlist();
            else if (linkText.includes('Newsletter')) showNewsletterPage();
            else if (linkText.includes('Contact')) showContact();
            else showHomePage();
        });
    });
}