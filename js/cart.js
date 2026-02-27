// Gestionnaire de commandes WhatsApp
const WhatsAppManager = {
    // Numéro WhatsApp (à configurer)
    phoneNumber: '237600000000', // À remplacer par le vrai numéro

    // Générer le message de commande
    generateOrderMessage: function(product, quantity, paymentMethod) {
        const message = `
*NOUVELLE COMMANDE KWAD*
━━━━━━━━━━━━━━━━━━
*Produit:* ${product.name}
*Quantité:* ${quantity}
*Prix:* Non spécifié
*Mode de paiement:* ${paymentMethod}
━━━━━━━━━━━━━━━━━━
*Récapitulatif*
Total articles: ${quantity}
Merci de votre confiance ! 🛍️
        `;
        return encodeURIComponent(message.trim());
    },

    // Rediriger vers WhatsApp
    redirectToWhatsApp: function(message) {
        const url = `https://wa.me/${this.phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    },

    // Commande depuis la page produit
    orderFromProduct: function(productId, quantity, paymentMethod) {
        const product = ProductManager.getById(productId);
        if (!product) {
            alert('Produit non trouvé');
            return;
        }

        const message = this.generateOrderMessage(product, quantity, paymentMethod);
        this.redirectToWhatsApp(message);
    },

    // Commande depuis la grille produits (quantité = 1 par défaut)
    quickOrder: function(productId, paymentMethod = 'MTN Money') {
        this.orderFromProduct(productId, 1, paymentMethod);
    }
};

// Fonction globale pour ajouter au panier (appelée depuis les boutons)
function addToCart(productId) {
    const product = ProductManager.getById(productId);
    if (product) {
        // Demander la quantité
        const quantity = prompt(`Quantité pour "${product.name}" :`, '1');
        if (quantity && !isNaN(quantity) && parseInt(quantity) > 0) {
            // Demander le mode de paiement
            const payment = confirm('Paiement par MTN Money ? (OK = MTN, Annuler = Airtel)');
            const paymentMethod = payment ? 'MTN Money' : 'Airtel Money';

            WhatsAppManager.orderFromProduct(productId, parseInt(quantity), paymentMethod);
        }
    }
}

// Initialisation des boutons de commande sur la page produit
document.addEventListener('DOMContentLoaded', function() {
    const orderBtn = document.getElementById('orderViaWhatsapp');
    if (orderBtn) {
        orderBtn.addEventListener('click', function() {
            const productId = new URLSearchParams(window.location.search).get('id');
            const quantity = document.getElementById('quantity')?.value || 1;
            const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || 'MTN Money';

            WhatsAppManager.orderFromProduct(productId, quantity, paymentMethod);
        });
    }
});