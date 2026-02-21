// ==================== PAGES COMPTE ET WISHLIST ====================

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
                <button onclick="openWhatsAppContact()" class="btn" style="background: #25D366;">
                    <i class="fab fa-whatsapp"></i> Service Client
                </button>
            </div>
        </div>
    `;
    updatePageTitle('Mon Compte - KWAD');
}

// Historique des commandes
function showOrderHistory() {
    showAccountPage();
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
                <button onclick="showHomePage()" class="btn">
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
                <p style="color: #666; margin-bottom: 30px;">
                    Inscrivez-vous pour recevoir nos offres exclusives et nouveautés.
                </p>

                <form class="newsletter-form" onsubmit="event.preventDefault(); showNotification('Fonctionnalité à venir', 'info');">
                    <input type="email" placeholder="Votre adresse email" required
                           style="width: 100%; padding: 12px; border: 2px solid #eee; border-radius: 25px; margin-bottom: 15px;">
                    <button type="submit" class="btn" style="width: 100%;">
                        <i class="fas fa-paper-plane"></i> S'inscrire
                    </button>
                </form>

                <p style="color: #999; font-size: 14px; margin-top: 20px;">
                    🔒 Nous respectons votre vie privée.
                </p>
            </div>
        </div>
    `;
    updatePageTitle('Newsletter - KWAD');
}