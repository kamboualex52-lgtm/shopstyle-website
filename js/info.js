// ==================== FONCTIONS INFORMATIONS - VERSION CORRIGÉE ====================

// Gestion des liens du footer - VERSION COMPLÈTE ET FONCTIONNELLE
// REMPLACEZ la gestion des cas dans initFooterLinks() par ceci :
function initFooterLinks() {
    console.log('🔄 Initialisation des liens du footer...');

    const footerLinks = document.querySelectorAll('.footer-column a, footer a');

    footerLinks.forEach((link) => {
        const linkText = link.textContent.trim();

        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            console.log(`🎯 Clic sur le lien: "${linkText}"`);

            // Gestion spécifique pour les liens problématiques
            if (linkText.includes('Conditions générales') || linkText === 'Conditions générales') {
                console.log('🚀 Navigation vers Conditions générales');
                showTerms();
            }
            else if (linkText.includes('Politique de confidentialité') || linkText === 'Politique de confidentialité') {
                console.log('🚀 Navigation vers Politique de confidentialité');
                showPrivacyPolicy();
            }
            else if (linkText.includes('Livraison')) {
                showDeliveryInfo();
            }
            else if (linkText.includes('Retour')) {
                showReturnPolicy();
            }
            else if (linkText.includes('À propos')) {
                showAbout();
            }
            else if (linkText.includes('Mon compte')) {
                showAccountPage();
            }
            else if (linkText.includes('Historique')) {
                showOrderHistory();
            }
            else if (linkText.includes('souhaits') || linkText.includes('Favoris')) {
                showWishlist();
            }
            else if (linkText.includes('Newsletter')) {
                showNewsletterPage();
            }
            else if (linkText.includes('Contact')) {
                showContact();
            }
            else {
                console.log('🔍 Lien non reconnu, navigation vers accueil');
                showHomePage();
            }
        });
    });

    console.log(`✅ ${footerLinks.length} liens du footer initialisés`);

}

// Fonction utilitaire pour cacher toutes les sections
function hideAllSections() {
    const categoriesSection = document.querySelector('.categories-section');
    const newsletterSection = document.querySelector('.newsletter');

    if (categoriesSection) categoriesSection.style.display = 'none';
    if (newsletterSection) newsletterSection.style.display = 'none';
}

// 🚚 PAGE LIVRAISON - VERSION COMPLÈTE
function showDeliveryInfo() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    const deliveryHTML = `
        <div class="info-page" style="padding: 40px 20px; max-width: 900px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">🚚 Informations de Livraison</h2>

            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow);">
                <!-- Section Zones de Livraison -->
                <div style="margin-bottom: 40px;">
                    <h3 style="color: var(--primary); margin-bottom: 20px; font-size: 22px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">📍 Zones de Livraison</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 20px;">
                        <div style="background: #e8f5e8; padding: 20px; border-radius: 10px; border-left: 4px solid var(--success);">
                            <h4 style="color: #2e7d32; margin-bottom: 10px;">🏙️ Pointe-Noire</h4>
                            <p style="color: #666; margin: 0;">Livraison express en 24h</p>
                            <p style="color: var(--primary); font-weight: bold; margin: 5px 0 0 0;">1 500 FCFA</p>
                        </div>
                        <div style="background: #fff3e0; padding: 20px; border-radius: 10px; border-left: 4px solid var(--warning);">
                            <h4 style="color: #ef6c00; margin-bottom: 10px;">🏙️ Brazzaville</h4>
                            <p style="color: #666; margin: 0;">Livraison en 48h</p>
                            <p style="color: var(--primary); font-weight: bold; margin: 5px 0 0 0;">2 500 FCFA</p>
                        </div>
                        <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; border-left: 4px solid var(--info);">
                            <h4 style="color: #1565c0; margin-bottom: 10px;">🏘️ Autres Villes</h4>
                            <p style="color: #666; margin: 0;">Livraison en 3-5 jours</p>
                            <p style="color: var(--primary); font-weight: bold; margin: 5px 0 0 0;">À partir de 3 500 FCFA</p>
                        </div>
                    </div>
                </div>

                <!-- Section Processus de Livraison -->
                <div style="margin-bottom: 40px;">
                    <h3 style="color: var(--primary); margin-bottom: 20px; font-size: 22px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">📦 Processus de Livraison</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        <div style="text-align: center; padding: 20px;">
                            <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: bold;">1</div>
                            <h4 style="color: #333; margin-bottom: 10px;">Commande</h4>
                            <p style="color: #666; font-size: 14px;">Passez votre commande via WhatsApp</p>
                        </div>
                        <div style="text-align: center; padding: 20px;">
                            <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: bold;">2</div>
                            <h4 style="color: #333; margin-bottom: 10px;">Confirmation</h4>
                            <p style="color: #666; font-size: 14px;">Nous confirmons votre commande</p>
                        </div>
                        <div style="text-align: center; padding: 20px;">
                            <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: bold;">3</div>
                            <h4 style="color: #333; margin-bottom: 10px;">Préparation</h4>
                            <p style="color: #666; font-size: 14px;">Préparation de votre colis</p>
                        </div>
                        <div style="text-align: center; padding: 20px;">
                            <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: bold;">4</div>
                            <h4 style="color: #333; margin-bottom: 10px;">Livraison</h4>
                            <p style="color: #666; font-size: 14px;">Livraison à votre adresse</p>
                        </div>
                    </div>
                </div>

                <!-- Section Délais -->
                <div style="margin-bottom: 40px;">
                    <h3 style="color: var(--primary); margin-bottom: 20px; font-size: 22px; border-bottom: 2px solid var(--primary); padding-bottom: 10px;">⏰ Délais de Livraison</h3>
                    <div style="background: #f8f9fa; padding: 25px; border-radius: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="background: var(--primary); color: white;">
                                    <th style="padding: 12px; text-align: left;">Zone</th>
                                    <th style="padding: 12px; text-align: left;">Délai</th>
                                    <th style="padding: 12px; text-align: left;">Frais</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom: 1px solid #eee;">
                                    <td style="padding: 12px;">Pointe-Noire</td>
                                    <td style="padding: 12px;">24-48 heures</td>
                                    <td style="padding: 12px; font-weight: bold;">1 500 FCFA</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #eee;">
                                    <td style="padding: 12px;">Brazzaville</td>
                                    <td style="padding: 12px;">2-3 jours</td>
                                    <td style="padding: 12px; font-weight: bold;">2 500 FCFA</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #eee;">
                                    <td style="padding: 12px;">Dolisie, Nkayi</td>
                                    <td style="padding: 12px;">3-4 jours</td>
                                    <td style="padding: 12px; font-weight: bold;">3 500 FCFA</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px;">Autres villes</td>
                                    <td style="padding: 12px;">4-7 jours</td>
                                    <td style="padding: 12px; font-weight: bold;">Sur devis</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Section Informations Importantes -->
                <div style="background: #fff3cd; padding: 20px; border-radius: 10px; border-left: 4px solid #ffc107; margin-bottom: 30px;">
                    <h4 style="color: #856404; margin-bottom: 10px;">💡 Informations Importantes</h4>
                    <ul style="color: #856404; padding-left: 20px; margin: 0;">
                        <li>Les délais commencent à partir de la confirmation de commande</li>
                        <li>Livraison offerte à partir de 50 000 FCFA d'achat</li>
                        <li>Suivi de commande disponible par téléphone</li>
                        <li>Horaires de livraison : 8h00 - 18h00 du lundi au samedi</li>
                    </ul>
                </div>

                <!-- Boutons d'action -->
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="showHomePage()" class="btn" style="background: var(--primary); color: white; padding: 12px 25px; border: none; border-radius: 25px; cursor: pointer; font-size: 16px;">
                        <i class="fas fa-home"></i> Retour à l'accueil
                    </button>
                    <button onclick="openWhatsAppContact()" class="btn" style="background: #25D366; color: white; padding: 12px 25px; border: none; border-radius: 25px; cursor: pointer; font-size: 16px;">
                        <i class="fab fa-whatsapp"></i> Poser une question
                    </button>
                </div>
            </div>
        </div>
    `;

    grid.innerHTML = deliveryHTML;
    updatePageTitle('Livraison - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// 📄 CONDITIONS GÉNÉRALES - VERSION COMPLÈTE ET TESTÉE
function showTerms() {
    console.log('🔧 showTerms() appelée - Affichage des conditions générales');

    const grid = document.getElementById('products-grid');
    if (!grid) {
        console.error('❌ Element products-grid non trouvé');
        return;
    }

    // Cacher les autres sections
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

    console.log('✅ Conditions générales affichées avec succès');
}



// 🔒 POLITIQUE DE CONFIDENTIALITÉ - VERSION COMPLÈTE ET TESTÉE
function showPrivacyPolicy() {
    console.log('🔧 showPrivacyPolicy() appelée - Affichage de la politique de confidentialité');

    const grid = document.getElementById('products-grid');
    if (!grid) {
        console.error('❌ Element products-grid non trouvé');
        return;
    }

    // Cacher les autres sections
    hideAllSections();

    const privacyHTML = `
        <div style="padding: 40px 20px; max-width: 900px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">🔒 Politique de Confidentialité</h2>

            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow);">

                <!-- En-tête -->
                <div style="text-align: center; margin-bottom: 40px;">
                    <div style="font-size: 80px; margin-bottom: 20px;">🛡️</div>
                    <h3 style="color: var(--primary); margin-bottom: 15px;">Protection de Vos Données Personnelles</h3>
                    <p style="color: #666; font-size: 16px;">
                        Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}
                    </p>
                </div>

                <!-- Section 1 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">1</span>
                        Données Collectées
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Nous collectons : nom, prénom, adresse, numéro de téléphone, adresse email.
                        Ces données sont nécessaires au traitement de votre commande et à la livraison.
                    </p>
                </div>

                <!-- Section 2 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">2</span>
                        Utilisation des Données
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Vos données sont utilisées pour : traiter votre commande, vous livrer, vous informer de l'état de votre commande,
                        et vous envoyer des offres promotionnelles (si vous y consentez).
                    </p>
                </div>

                <!-- Section 3 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">3</span>
                        Protection des Données
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données
                        contre tout accès non autorisé, modification ou destruction.
                    </p>
                </div>

                <!-- Section 4 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">4</span>
                        Partage des Données
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec nos prestataires
                        de livraison uniquement dans le cadre de l'exécution de votre commande.
                    </p>
                </div>

                <!-- Section 5 -->
                <div style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">5</span>
                        Durée de Conservation
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Vos données sont conservées pendant la durée nécessaire à l'exécution de nos services,
                        et conformément aux obligations légales.
                    </p>
                </div>

                <!-- Section 6 -->
                <div style="margin-bottom: 40px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <span style="background: var(--primary); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">6</span>
                        Vos Droits
                    </h4>
                    <p style="color: #666; line-height: 1.6; margin: 0;">
                        Vous disposez des droits d'accès, de rectification, d'effacement, de limitation et d'opposition.
                        Pour exercer ces droits, contactez-nous aux coordonnées ci-dessous.
                    </p>
                </div>

                <!-- Section contact -->
                <div style="background: #e8f5e8; padding: 25px; border-radius: 10px; margin-bottom: 30px;">
                    <h4 style="color: #2e7d32; margin-bottom: 15px; text-align: center;">📞 Contact Délégué à la Protection des Données</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 24px; margin-bottom: 10px;">📧</div>
                            <div style="font-weight: bold; color: #333;">Email</div>
                            <div style="color: #666;">frediadaniella@gmail.com</div>
                        </div>
                        <div>
                            <div style="font-size: 24px; margin-bottom: 10px;">📞</div>
                            <div style="font-weight: bold; color: #333;">Téléphone</div>
                            <div style="color: #666;">+242 06 844 8698</div>
                        </div>
                        <div>
                            <div style="font-size: 24px; margin-bottom: 10px;">💬</div>
                            <div style="font-weight: bold; color: #333;">WhatsApp</div>
                            <div style="color: #666;">+242 06 844 8698</div>
                        </div>
                    </div>
                </div>

                <!-- Boutons de navigation -->
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="showHomePage()" class="btn" style="background: var(--primary); color: white;">
                        <i class="fas fa-home"></i> Retour à l'accueil
                    </button>
                    <button onclick="showTerms()" class="btn" style="background: var(--secondary); color: white;">
                        <i class="fas fa-file-contract"></i> Conditions générales
                    </button>
                </div>
            </div>
        </div>
    `;

    grid.innerHTML = privacyHTML;
    updatePageTitle('Politique de Confidentialité - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    console.log('✅ Politique de confidentialité affichée avec succès');
}



// FONCTIONS MANQUANTES À AJOUTER

// Page Mon Compte
function showAccountPage() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    grid.innerHTML = `
        <div style="padding: 40px 20px; max-width: 600px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">👤 Mon Compte</h2>
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow); text-align: center;">
                <div style="font-size: 64px; color: #ddd; margin-bottom: 20px;">
                    <i class="fas fa-user-circle"></i>
                </div>
                <h3 style="color: #666; margin-bottom: 20px;">Espace Client</h3>
                <p style="color: #999; margin-bottom: 30px;">
                    Pour accéder à votre espace personnel, veuillez nous contacter via WhatsApp.
                </p>
                <button onclick="openWhatsAppContact()" class="btn" style="background: #25D366; color: white; padding: 15px 30px; font-size: 16px;">
                    <i class="fab fa-whatsapp"></i> Contacter le Service Client
                </button>
            </div>
        </div>
    `;
    updatePageTitle('Mon Compte - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Historique des commandes
function showOrderHistory() {
    showAccountPage(); // Redirige vers la page compte pour l'instant
    updatePageTitle('Historique des Commandes - KWAD');
}

// Liste de souhaits
function showWishlist() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    grid.innerHTML = `
        <div style="padding: 40px 20px; max-width: 600px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">❤️ Liste de Souhaits</h2>
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow); text-align: center;">
                <div style="font-size: 64px; color: #ddd; margin-bottom: 20px;">
                    <i class="fas fa-heart"></i>
                </div>
                <h3 style="color: #666; margin-bottom: 20px;">Vos Produits Favoris</h3>
                <p style="color: #999; margin-bottom: 30px;">
                    Fonctionnalité en cours de développement. Revenez bientôt !
                </p>
                <button onclick="showHomePage()" class="btn" style="padding: 15px 30px; font-size: 16px;">
                    <i class="fas fa-shopping-bag"></i> Découvrir nos produits
                </button>
            </div>
        </div>
    `;
    updatePageTitle('Liste de Souhaits - KWAD');
}

// Page Newsletter
function showNewsletterPage() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    grid.innerHTML = `
        <div style="padding: 40px 20px; max-width: 600px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; color: var(--primary);">📧 Newsletter</h2>
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow); text-align: center;">
                <div style="font-size: 64px; color: var(--primary); margin-bottom: 20px;">
                    <i class="fas fa-newspaper"></i>
                </div>
                <h3 style="color: #333; margin-bottom: 15px;">Restez Informé !</h3>
                <p style="color: #666; margin-bottom: 30px; line-height: 1.6;">
                    Inscrivez-vous à notre newsletter pour recevoir en avant-première nos offres exclusives,
                    nouveautés et promotions spéciales.
                </p>

                <form class="newsletter-form" style="max-width: 400px; margin: 0 auto;">
                    <input type="email" placeholder="Votre adresse email" required
                           style="width: 100%; padding: 12px 15px; border: 2px solid #eee; border-radius: 25px; margin-bottom: 15px; font-size: 16px;">
                    <button type="submit" class="btn" style="width: 100%; padding: 12px; font-size: 16px;">
                        <i class="fas fa-paper-plane"></i> S'inscrire
                    </button>
                </form>

                <p style="color: #999; font-size: 14px; margin-top: 20px;">
                    🔒 Nous respectons votre vie privée. Désinscription à tout moment.
                </p>
            </div>
        </div>
    `;
    updatePageTitle('Newsletter - KWAD');
}

// FONCTIONS DE CONTACT AMÉLIORÉES
function openWhatsAppContact() {
    const message = "Bonjour KWAD, j'aimerais avoir des informations supplémentaires sur...";
    const phoneNumber = '+242068448698';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function makePhoneCall() {
    const phoneNumber = '+242068448698';
    window.open(`tel:${phoneNumber}`);
}

// ==================== FONCTIONS UTILITAIRES AJOUTÉES ===================

// Fonction pour envoyer un email
function sendEmail() {
    const email = 'frediadaniella@gmail.com';
    const subject = 'Demande d\'information - KWAD';
    const body = 'Bonjour KWAD,\n\nJe suis intéressé(e) par vos produits et j\'aimerais avoir plus d\'informations.\n\nCordialement,';
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
}

// Afficher les produits filtrés - VERSION AMÉLIORÉE
function displayFilteredProducts(filteredProducts, title) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Cacher la section catégories
    const categoriesSection = document.querySelector('.categories-section');
    if (categoriesSection) {
        categoriesSection.style.display = 'none';
    }
    
    grid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px;">
                <div style="font-size: 80px; color: #ddd; margin-bottom: 20px;">😔</div>
                <h3 style="color: #666; margin-bottom: 15px; font-size: 24px;">Aucun produit trouvé</h3>
                <p style="color: #999; margin-bottom: 30px; font-size: 16px; max-width: 400px; margin-left: auto; margin-right: auto;">
                    Nous n'avons pas de produits dans cette section pour le moment. 
                    Revenez bientôt pour découvrir nos nouvelles arrivées !
                </p>
                <button class="btn" onclick="showHomePage()" style="padding: 12px 30px; font-size: 16px;">
                    <i class="fas fa-home"></i> Retour à l'accueil
                </button>
            </div>
        `;
        return;
    }
    
    // En-tête de section amélioré
    const sectionHeader = document.createElement('div');
    sectionHeader.style.cssText = `
        grid-column: 1/-1;
        margin-bottom: 30px;
        padding: 25px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
        border-radius: 15px;
        text-align: center;
        box-shadow: var(--shadow);
    `;
    sectionHeader.innerHTML = `
        <h2 style="margin: 0 0 10px 0; font-size: 28px; font-weight: bold;">${title}</h2>
        <p style="margin: 0; opacity: 0.9; font-size: 16px;">
            ${filteredProducts.length} produit${filteredProducts.length > 1 ? 's' : ''} disponible${filteredProducts.length > 1 ? 's' : ''}
        </p>
    `;
    grid.appendChild(sectionHeader);
    
    // Afficher les produits
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
    updatePageTitle(title);
}

// Mettre à jour le titre de la page
function updatePageTitle(title) {
    document.title = `${title} - KWAD`;
}
