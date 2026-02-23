//about.js

// ==================== PAGE À PROPOS ====================

function showAbout() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    const aboutHTML = `
        <div class="about-section" style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 40px; color: var(--primary); font-size: 36px; font-weight: 600;">
                <i class="fas fa-store" style="margin-right: 10px;"></i>À Propos de KWAD
            </h2>

            <!-- Conteneur principal centré -->
            <div style="display: flex; justify-content: center;">
                <div style="background: white; padding: 50px; border-radius: 25px; box-shadow: var(--shadow); max-width: 1000px; width: 100%;">

                    <!-- En-tête avec logo -->
                    <div style="text-align: center; margin-bottom: 50px;">
                        <div style="font-size: 80px; color: var(--primary); margin-bottom: 20px; background: linear-gradient(135deg, #fff5e6 0%, #ffe4cc 100%); width: 120px; height: 120px; border-radius: 60px; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px;">
                            🛍️
                        </div>
                        <h3 style="color: #333; margin-bottom: 15px; font-size: 32px; font-weight: 600;">Votre Boutique en Ligne de Confiance</h3>
                        <p style="color: #666; font-size: 18px; line-height: 1.6; max-width: 700px; margin: 0 auto;">
                            Découvrez une expérience de shopping exceptionnelle avec KWAD, votre partenaire shopping au Congo.
                        </p>
                    </div>

                    <!-- Grille Histoire & Mission -->
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; margin-bottom: 50px;">
                        <!-- Notre Histoire -->
                        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); padding: 30px; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                                <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                                    📖
                                </div>
                                <h4 style="color: var(--primary); font-size: 24px; margin: 0;">Notre Histoire</h4>
                            </div>
                            <p style="line-height: 1.8; color: #555; font-size: 16px; text-align: justify;">
                                Fondée en <strong style="color: var(--primary);">2024</strong>, <strong>KWAD</strong> est née de la passion pour offrir des produits de qualité
                                à des prix accessibles pour tous les Congolais. Notre mission est de révolutionner
                                le commerce en ligne au Congo Brazzaville en proposant une plateforme fiable,
                                sécurisée et conviviale.
                            </p>
                        </div>

                        <!-- Notre Mission -->
                        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); padding: 30px; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                                <div style="background: var(--success); color: white; width: 50px; height: 50px; border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                                    🎯
                                </div>
                                <h4 style="color: var(--success); font-size: 24px; margin: 0;">Notre Mission</h4>
                            </div>
                            <p style="line-height: 1.8; color: #555; font-size: 16px; text-align: justify;">
                                Rendre le shopping en ligne <strong style="color: var(--success);">simple, sécurisé et agréable</strong>. Nous sélectionnons
                                rigoureusement chaque produit pour vous garantir qualité, durabilité et satisfaction.
                                Votre bonheur est notre priorité absolue.
                            </p>
                        </div>
                    </div>

                    <!-- Nos Valeurs -->
                    <div style="margin-bottom: 50px;">
                        <h4 style="color: var(--primary); margin-bottom: 30px; font-size: 28px; text-align: center; position: relative;">
                            ⭐ Nos Valeurs
                            <span style="display: block; width: 80px; height: 3px; background: var(--primary); margin: 10px auto 0;"></span>
                        </h4>

                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
                            <!-- Qualité -->
                            <div style="text-align: center; padding: 25px 15px; background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
                                <div style="font-size: 40px; margin-bottom: 15px; color: var(--primary);">👍</div>
                                <h5 style="color: #333; margin-bottom: 10px; font-size: 18px;">Qualité Garantie</h5>
                                <p style="color: #666; font-size: 13px; line-height: 1.5;">Des produits rigoureusement sélectionnés et testés</p>
                            </div>

                            <!-- Livraison -->
                            <div style="text-align: center; padding: 25px 15px; background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
                                <div style="font-size: 40px; margin-bottom: 15px; color: var(--success);">🚚</div>
                                <h5 style="color: #333; margin-bottom: 10px; font-size: 18px;">Livraison Rapide</h5>
                                <p style="color: #666; font-size: 13px; line-height: 1.5;">Expédition express dans tout le Congo</p>
                            </div>

                            <!-- Service Client -->
                            <div style="text-align: center; padding: 25px 15px; background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
                                <div style="font-size: 40px; margin-bottom: 15px; color: var(--dark);">💬</div>
                                <h5 style="color: #333; margin-bottom: 10px; font-size: 18px;">Service Client</h5>
                                <p style="color: #666; font-size: 13px; line-height: 1.5;">Support réactif et attentionné 6j/7</p>
                            </div>

                            <!-- Sécurité -->
                            <div style="text-align: center; padding: 25px 15px; background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
                                <div style="font-size: 40px; margin-bottom: 15px; color: var(--danger);">🛡️</div>
                                <h5 style="color: #333; margin-bottom: 10px; font-size: 18px;">Confiance & Sécurité</h5>
                                <p style="color: #666; font-size: 13px; line-height: 1.5;">Transactions 100% sécurisées et transparentes</p>
                            </div>
                        </div>
                    </div>

                    <!-- Notre Impact -->
                    <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; padding: 40px; border-radius: 20px; text-align: center;">
                        <h4 style="margin-bottom: 30px; font-size: 28px; display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <i class="fas fa-chart-line"></i> Notre Impact
                        </h4>

                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;">
                            <!-- Produits -->
                            <div>
                                <div style="font-size: 40px; font-weight: bold; margin-bottom: 5px; background: rgba(255,255,255,0.2); padding: 15px; border-radius: 15px;">
                                    ${products.length}+
                                </div>
                                <div style="font-size: 16px; opacity: 0.9;">Produits</div>
                            </div>

                            <!-- Catégories -->
                            <div>
                                <div style="font-size: 40px; font-weight: bold; margin-bottom: 5px; background: rgba(255,255,255,0.2); padding: 15px; border-radius: 15px;">
                                    ${categories.length}
                                </div>
                                <div style="font-size: 16px; opacity: 0.9;">Catégories</div>
                            </div>

                            <!-- Satisfaction -->
                            <div>
                                <div style="font-size: 40px; font-weight: bold; margin-bottom: 5px; background: rgba(255,255,255,0.2); padding: 15px; border-radius: 15px;">
                                    100%
                                </div>
                                <div style="font-size: 16px; opacity: 0.9;">Satisfaction</div>
                            </div>

                            <!-- Support -->
                            <div>
                                <div style="font-size: 40px; font-weight: bold; margin-bottom: 5px; background: rgba(255,255,255,0.2); padding: 15px; border-radius: 15px;">
                                    24/7
                                </div>
                                <div style="font-size: 16px; opacity: 0.9;">Support Client</div>
                            </div>
                        </div>

                        <!-- Message supplémentaire -->
                        <p style="margin-top: 30px; font-size: 16px; opacity: 0.9; border-top: 1px solid rgba(255,255,255,0.3); padding-top: 20px;">
                            <i class="fas fa-heart" style="color: #ff6b6b;"></i>
                            Merci de nous faire confiance. Ensemble, construisons un shopping meilleur au Congo.
                        </p>
                    </div>

                    <!-- Bouton de retour -->
                    <div style="text-align: center; margin-top: 40px;">
                        <button onclick="showHomePage()" class="btn" style="background: var(--primary); color: white; padding: 15px 40px; border: none; border-radius: 30px; font-size: 16px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; transition: all 0.3s ease;">
                            <i class="fas fa-home"></i>
                            Retour à l'accueil
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <style>
            /* Animations */
            .about-section [style*="transition"]:hover {
                transform: translateY(-5px);
            }

            /* Responsive Design */
            @media (max-width: 900px) {
                .about-section > div > div {
                    padding: 30px !important;
                }

                .about-section .grid-cols-2 {
                    grid-template-columns: 1fr !important;
                    gap: 20px !important;
                }

                .about-section .grid-cols-4 {
                    grid-template-columns: repeat(2, 1fr) !important;
                    gap: 15px !important;
                }

                .about-section .grid-cols-4 > div {
                    padding: 15px !important;
                }

                .about-section .grid-cols-4 > div > div:first-child {
                    font-size: 30px !important;
                }
            }

            @media (max-width: 600px) {
                .about-section > div > div {
                    padding: 20px !important;
                }

                .about-section h2 {
                    font-size: 28px !important;
                }

                .about-section h3 {
                    font-size: 22px !important;
                }

                .about-section .grid-cols-4 {
                    grid-template-columns: 1fr !important;
                }

                .about-section [style*="font-size: 80px"] {
                    font-size: 60px !important;
                    width: 100px !important;
                    height: 100px !important;
                }

                .about-section .grid-cols-2 {
                    gap: 15px !important;
                }

                .about-section .grid-cols-2 > div {
                    padding: 20px !important;
                }
            }

            @media (max-width: 480px) {
                .about-section > div > div {
                    padding: 15px !important;
                }

                .about-section h2 {
                    font-size: 24px !important;
                    margin-bottom: 20px !important;
                }

                .about-section .btn {
                    padding: 12px 25px !important;
                    font-size: 14px !important;
                }
            }
        </style>
    `;

    grid.innerHTML = aboutHTML;
    updatePageTitle('À Propos - KWAD');
}