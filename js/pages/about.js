// ==================== PAGE À PROPOS ====================

function showAbout() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

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
}