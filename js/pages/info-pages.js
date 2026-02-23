// ==================== PAGES D'INFORMATION ====================

// Page Livraison
function showDeliveryInfo() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    const deliveryHTML = `
        <div class="info-page" style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 40px; color: var(--primary); font-size: 36px; font-weight: 600;">
                <i class="fas fa-truck" style="margin-right: 10px;"></i>Informations de Livraison
            </h2>

            <!-- Conteneur principal centré -->
            <div style="display: flex; justify-content: center;">
                <div style="background: white; padding: 50px; border-radius: 25px; box-shadow: var(--shadow); max-width: 1000px; width: 100%;">

                    <!-- Zones de livraison -->
                    <div style="margin-bottom: 50px;">
                        <h3 style="color: var(--primary); margin-bottom: 30px; font-size: 24px; display: flex; align-items: center; gap: 10px; border-bottom: 2px solid var(--primary); padding-bottom: 15px;">
                            <i class="fas fa-map-marker-alt"></i> Zones de Livraison
                        </h3>

                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px;">
                            <!-- Pointe-Noire -->
                            <div style="background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%); padding: 25px; border-radius: 15px; border-left: 5px solid var(--success); box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                                    <i class="fas fa-city" style="color: var(--success); font-size: 24px;"></i>
                                    <h4 style="margin: 0; color: #2e7d32; font-size: 20px;">Pointe-Noire</h4>
                                </div>
                                <p style="color: #555; margin-bottom: 10px; display: flex; align-items: center; gap: 5px;">
                                    <i class="fas fa-clock" style="color: var(--success);"></i> Livraison express en 24h
                                </p>
                                <div style="background: white; padding: 10px 15px; border-radius: 8px; display: inline-block;">
                                    <span style="font-weight: bold; color: var(--primary); font-size: 20px;">1 500 FCFA</span>
                                </div>
                            </div>

                            <!-- Brazzaville -->
                            <div style="background: linear-gradient(135deg, #fff3e0 0%, #ffe4c4 100%); padding: 25px; border-radius: 15px; border-left: 5px solid var(--warning); box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                                    <i class="fas fa-city" style="color: var(--warning); font-size: 24px;"></i>
                                    <h4 style="margin: 0; color: #ef6c00; font-size: 20px;">Brazzaville</h4>
                                </div>
                                <p style="color: #555; margin-bottom: 10px; display: flex; align-items: center; gap: 5px;">
                                    <i class="fas fa-clock" style="color: var(--warning);"></i> Livraison en 48h
                                </p>
                                <div style="background: white; padding: 10px 15px; border-radius: 8px; display: inline-block;">
                                    <span style="font-weight: bold; color: var(--primary); font-size: 20px;">2 500 FCFA</span>
                                </div>
                            </div>

                            <!-- Autres villes -->
                            <div style="background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); padding: 25px; border-radius: 15px; border-left: 5px solid var(--info); box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                                    <i class="fas fa-globe" style="color: var(--info); font-size: 24px;"></i>
                                    <h4 style="margin: 0; color: #1565c0; font-size: 20px;">Autres Villes</h4>
                                </div>
                                <p style="color: #555; margin-bottom: 10px; display: flex; align-items: center; gap: 5px;">
                                    <i class="fas fa-clock" style="color: var(--info);"></i> Livraison en 3-5 jours
                                </p>
                                <div style="background: white; padding: 10px 15px; border-radius: 8px; display: inline-block;">
                                    <span style="font-weight: bold; color: var(--primary); font-size: 20px;">À partir de 3 500 FCFA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Processus de livraison -->
                    <div style="margin-bottom: 50px;">
                        <h3 style="color: var(--primary); margin-bottom: 30px; font-size: 24px; display: flex; align-items: center; gap: 10px; border-bottom: 2px solid var(--primary); padding-bottom: 15px;">
                            <i class="fas fa-box-open"></i> Processus de Livraison
                        </h3>

                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
                            <!-- Étape 1 -->
                            <div style="text-align: center; padding: 25px 15px; background: #f8f9fa; border-radius: 15px; position: relative;">
                                <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-size: 20px; font-weight: bold; box-shadow: 0 5px 10px rgba(230,126,34,0.3);">
                                    1
                                </div>
                                <i class="fas fa-shopping-cart" style="font-size: 24px; color: var(--primary); margin-bottom: 10px; display: block;"></i>
                                <h4 style="color: #333; margin-bottom: 5px; font-size: 16px;">Commande</h4>
                                <p style="color: #666; font-size: 13px; margin: 0;">Passée via WhatsApp</p>
                            </div>

                            <!-- Étape 2 -->
                            <div style="text-align: center; padding: 25px 15px; background: #f8f9fa; border-radius: 15px;">
                                <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-size: 20px; font-weight: bold; box-shadow: 0 5px 10px rgba(230,126,34,0.3);">
                                    2
                                </div>
                                <i class="fas fa-check-circle" style="font-size: 24px; color: var(--primary); margin-bottom: 10px; display: block;"></i>
                                <h4 style="color: #333; margin-bottom: 5px; font-size: 16px;">Confirmation</h4>
                                <p style="color: #666; font-size: 13px; margin: 0;">Par notre équipe</p>
                            </div>

                            <!-- Étape 3 -->
                            <div style="text-align: center; padding: 25px 15px; background: #f8f9fa; border-radius: 15px;">
                                <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-size: 20px; font-weight: bold; box-shadow: 0 5px 10px rgba(230,126,34,0.3);">
                                    3
                                </div>
                                <i class="fas fa-box" style="font-size: 24px; color: var(--primary); margin-bottom: 10px; display: block;"></i>
                                <h4 style="color: #333; margin-bottom: 5px; font-size: 16px;">Préparation</h4>
                                <p style="color: #666; font-size: 13px; margin: 0;">Emballage soigné</p>
                            </div>

                            <!-- Étape 4 -->
                            <div style="text-align: center; padding: 25px 15px; background: #f8f9fa; border-radius: 15px;">
                                <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-size: 20px; font-weight: bold; box-shadow: 0 5px 10px rgba(230,126,34,0.3);">
                                    4
                                </div>
                                <i class="fas fa-truck" style="font-size: 24px; color: var(--primary); margin-bottom: 10px; display: block;"></i>
                                <h4 style="color: #333; margin-bottom: 5px; font-size: 16px;">Livraison</h4>
                                <p style="color: #666; font-size: 13px; margin: 0;">À votre adresse</p>
                            </div>
                        </div>
                    </div>

                    <!-- Informations supplémentaires -->
                    <div style="margin-bottom: 40px; padding: 25px; background: #fff3cd; border-radius: 15px; border-left: 5px solid #ffc107;">
                        <div style="display: flex; gap: 15px; align-items: flex-start;">
                            <i class="fas fa-info-circle" style="color: #856404; font-size: 28px;"></i>
                            <div>
                                <h4 style="color: #856404; margin-bottom: 10px; font-size: 18px;">Informations importantes</h4>
                                <ul style="color: #856404; margin: 0; padding-left: 20px;">
                                    <li style="margin-bottom: 5px;">Livraison gratuite à partir de 50 000 FCFA d'achat</li>
                                    <li style="margin-bottom: 5px;">Suivi de commande disponible par téléphone</li>
                                    <li>Livraison du lundi au samedi de 8h à 18h</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 30px;">
                        <button onclick="showHomePage()" class="btn" style="background: var(--primary); color: white; padding: 15px 35px; border: none; border-radius: 30px; font-size: 16px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; transition: all 0.3s ease;">
                            <i class="fas fa-home"></i> Retour à l'accueil
                        </button>
                        <button onclick="openWhatsAppContact()" class="btn" style="background: #25D366; color: white; padding: 15px 35px; border: none; border-radius: 30px; font-size: 16px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; transition: all 0.3s ease;">
                            <i class="fab fa-whatsapp"></i> Poser une question
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .info-page button:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            @media (max-width: 900px) {
                .info-page [style*="grid-template-columns: repeat(3,"] {
                    grid-template-columns: repeat(2, 1fr) !important;
                }
                .info-page [style*="grid-template-columns: repeat(4,"] {
                    grid-template-columns: repeat(2, 1fr) !important;
                }
            }

            @media (max-width: 600px) {
                .info-page [style*="grid-template-columns: repeat(3,"] {
                    grid-template-columns: 1fr !important;
                }
                .info-page [style*="grid-template-columns: repeat(4,"] {
                    grid-template-columns: 1fr !important;
                }
                .info-page > div > div {
                    padding: 25px !important;
                }
            }
        </style>
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
        <div class="info-page" style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 40px; color: var(--primary); font-size: 36px; font-weight: 600;">
                <i class="fas fa-file-contract" style="margin-right: 10px;"></i>Conditions Générales de Vente
            </h2>

            <!-- Conteneur principal centré -->
            <div style="display: flex; justify-content: center;">
                <div style="background: white; padding: 50px; border-radius: 25px; box-shadow: var(--shadow); max-width: 1000px; width: 100%;">

                    <!-- En-tête -->
                    <div style="text-align: center; margin-bottom: 40px;">
                        <div style="font-size: 80px; margin-bottom: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); width: 120px; height: 120px; border-radius: 60px; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px;">
                            ⚖️
                        </div>
                        <h3 style="color: var(--primary); margin-bottom: 10px; font-size: 24px;">Conditions Générales de Vente KWAD</h3>
                        <p style="color: #666; font-size: 14px; background: #f8f9fa; padding: 8px 20px; border-radius: 20px; display: inline-block;">
                            <i class="far fa-calendar-alt"></i> Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}
                        </p>
                    </div>

                    <!-- Articles -->
                    <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 40px;">
                        ${[
                            { num: 1, title: 'Objet', text: 'Les présentes conditions générales de vente régissent les relations contractuelles entre KWAD et ses clients. Toute commande implique l\'acceptation sans réserve de ces conditions.' },
                            { num: 2, title: 'Produits et Prix', text: 'Les produits sont décrits avec la plus grande exactitude possible. Les prix sont en francs CFA (FCFA) toutes taxes comprises. KWAD se réserve le droit de modifier ses prix à tout moment.' },
                            { num: 3, title: 'Commandes', text: 'Les commandes sont passées via WhatsApp. Toute commande vaut acceptation des prix et des conditions de vente. KWAD se réserve le droit d\'annuler toute commande en cas de problème de stock.' },
                            { num: 4, title: 'Paiement', text: 'Le paiement s\'effectue par Mobile Money (MTN ou Airtel). La commande n\'est validée qu\'après confirmation du paiement.' },
                            { num: 5, title: 'Livraison', text: 'Les délais de livraison sont indicatifs. En cas de retard, le client sera informé. Les frais de livraison sont à la charge du client sauf indication contraire.' },
                            { num: 6, title: 'Retour et Remboursement', text: 'Délai de rétractation de 7 jours. Les produits doivent être retournés dans leur état d\'origine. Les frais de retour sont à la charge du client sauf pour les produits défectueux.' },
                            { num: 7, title: 'Responsabilité', text: 'KWAD ne saurait être tenue responsable des dommages résultant d\'une mauvaise utilisation des produits.' }
                        ].map(article => `
                            <div style="background: #f8f9fa; padding: 25px; border-radius: 15px; border-left: 4px solid var(--primary); transition: transform 0.3s ease;">
                                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                                    <span style="background: var(--primary); color: white; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">${article.num}</span>
                                    <h4 style="color: var(--primary); margin: 0; font-size: 18px;">Article ${article.num} : ${article.title}</h4>
                                </div>
                                <p style="color: #555; line-height: 1.6; margin: 0 0 0 50px;">${article.text}</p>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Section contact -->
                    <div style="background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); padding: 30px; border-radius: 15px; margin-bottom: 30px; text-align: center;">
                        <i class="fas fa-question-circle" style="font-size: 48px; color: #1976d2; margin-bottom: 15px;"></i>
                        <h4 style="color: #1976d2; margin-bottom: 10px; font-size: 20px;">Une question sur nos conditions ?</h4>
                        <p style="color: #0d47a1; margin-bottom: 20px;">Notre équipe est à votre disposition pour toute clarification.</p>
                        <button onclick="openWhatsAppContact()" class="btn" style="background: #25D366; color: white; padding: 12px 30px; border: none; border-radius: 25px; font-size: 16px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                            <i class="fab fa-whatsapp"></i> Nous contacter
                        </button>
                    </div>

                    <!-- Boutons de navigation -->
                    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                        <button onclick="showHomePage()" class="btn" style="background: var(--primary); color: white; padding: 12px 30px; border: none; border-radius: 25px; font-size: 16px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                            <i class="fas fa-home"></i> Accueil
                        </button>
                        <button onclick="showPrivacyPolicy()" class="btn" style="background: var(--secondary); color: white; padding: 12px 30px; border: none; border-radius: 25px; font-size: 16px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                            <i class="fas fa-shield-alt"></i> Confidentialité
                        </button>
                    </div>
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
        <div class="info-page" style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
            <!-- Bouton de fermeture flottant -->
            <button onclick="showHomePage()" style="position: fixed; top: 100px; right: 30px; background: var(--primary); color: white; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 20px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2); z-index: 1000; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;">
                <i class="fas fa-times"></i>
            </button>

            <h2 style="text-align: center; margin-bottom: 40px; color: var(--primary); font-size: 36px; font-weight: 600;">
                <i class="fas fa-shield-alt" style="margin-right: 10px;"></i>Politique de Confidentialité
            </h2>

            <!-- Conteneur principal centré -->
            <div style="display: flex; justify-content: center;">
                <div style="background: white; padding: 50px; border-radius: 25px; box-shadow: var(--shadow); max-width: 1000px; width: 100%;">

                    <!-- En-tête -->
                    <div style="text-align: center; margin-bottom: 40px;">
                        <div style="font-size: 80px; margin-bottom: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); width: 120px; height: 120px; border-radius: 60px; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px;">
                            🛡️
                        </div>
                        <h3 style="color: var(--primary); margin-bottom: 10px; font-size: 24px;">Protection de Vos Données Personnelles</h3>
                        <p style="color: #666; font-size: 14px; background: #f8f9fa; padding: 8px 20px; border-radius: 20px; display: inline-block;">
                            <i class="far fa-calendar-alt"></i> Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}
                        </p>
                    </div>

                    <!-- Sections -->
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 40px;">
                        ${[
                            { num: 1, title: 'Données Collectées', text: 'Nous collectons : nom, prénom, adresse, numéro de téléphone, adresse email. Ces données sont nécessaires au traitement de votre commande et à la livraison.', icon: '📋' },
                            { num: 2, title: 'Utilisation des Données', text: 'Vos données sont utilisées pour : traiter votre commande, vous livrer, vous informer et vous envoyer des offres promotionnelles (avec votre consentement).', icon: '🔧' },
                            { num: 3, title: 'Protection des Données', text: 'Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé.', icon: '🔒' },
                            { num: 4, title: 'Partage des Données', text: 'Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec nos prestataires de livraison uniquement.', icon: '🤝' },
                            { num: 5, title: 'Durée de Conservation', text: 'Vos données sont conservées pendant la durée nécessaire à l\'exécution de nos services, et conformément aux obligations légales.', icon: '⏱️' },
                            { num: 6, title: 'Vos Droits', text: 'Vous disposez des droits d\'accès, de rectification, d\'effacement, de limitation et d\'opposition. Contactez-nous pour les exercer.', icon: '⚖️' }
                        ].map(section => `
                            <div style="background: #f8f9fa; padding: 25px; border-radius: 15px; border-top: 4px solid var(--primary); transition: transform 0.3s ease;">
                                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                                    <span style="font-size: 28px;">${section.icon}</span>
                                    <h4 style="color: var(--primary); margin: 0; font-size: 18px;">${section.num}. ${section.title}</h4>
                                </div>
                                <p style="color: #555; line-height: 1.6; margin: 0; font-size: 14px;">${section.text}</p>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Section contact DPO -->
                    <div style="background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%); padding: 35px; border-radius: 15px; margin-bottom: 30px;">
                        <h4 style="color: #2e7d32; margin-bottom: 25px; text-align: center; font-size: 22px;">
                            <i class="fas fa-user-shield"></i> Délégué à la Protection des Données
                        </h4>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                            <div style="text-align: center; background: white; padding: 20px; border-radius: 12px;">
                                <div style="font-size: 32px; margin-bottom: 10px; color: #2e7d32;">📧</div>
                                <div style="font-weight: bold; color: #333;">Email</div>
                                <div style="color: #2e7d32; word-break: break-all;">frediadaniella@gmail.com</div>
                            </div>
                            <div style="text-align: center; background: white; padding: 20px; border-radius: 12px;">
                                <div style="font-size: 32px; margin-bottom: 10px; color: #2e7d32;">📞</div>
                                <div style="font-weight: bold; color: #333;">Téléphone</div>
                                <div style="color: #2e7d32;">+242 06 844 8698</div>
                            </div>
                            <div style="text-align: center; background: white; padding: 20px; border-radius: 12px;">
                                <div style="font-size: 32px; margin-bottom: 10px; color: #2e7d32;">💬</div>
                                <div style="font-weight: bold; color: #333;">WhatsApp</div>
                                <div style="color: #2e7d32;">+242 06 844 8698</div>
                            </div>
                        </div>
                    </div>

                    <!-- Boutons de navigation -->
                    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                        <button onclick="showHomePage()" class="btn" style="background: var(--primary); color: white; padding: 12px 30px; border: none; border-radius: 25px; font-size: 16px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                            <i class="fas fa-home"></i> Accueil
                        </button>
                        <button onclick="showTerms()" class="btn" style="background: var(--secondary); color: white; padding: 12px 30px; border: none; border-radius: 25px; font-size: 16px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                            <i class="fas fa-file-contract"></i> Conditions
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .info-page [style*="transition"]:hover {
                transform: translateY(-5px);
            }

            @media (max-width: 900px) {
                .info-page [style*="grid-template-columns: repeat(2,"] {
                    grid-template-columns: 1fr !important;
                }
                .info-page [style*="grid-template-columns: repeat(3,"] {
                    grid-template-columns: repeat(2, 1fr) !important;
                }
                .info-page button[style*="position: fixed"] {
                    top: 80px !important;
                    right: 15px !important;
                    width: 40px !important;
                    height: 40px !important;
                }
            }

            @media (max-width: 600px) {
                .info-page [style*="grid-template-columns: repeat(3,"] {
                    grid-template-columns: 1fr !important;
                }
                .info-page > div > div {
                    padding: 25px !important;
                }
            }
        </style>
    `;

    grid.innerHTML = privacyHTML;
    updatePageTitle('Politique de Confidentialité - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Politique de retour
function showReturnPolicy() {
    showDeliveryInfo(); // Similaire pour l'exemple
}

// Gestion des liens du footer (inchangé)
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