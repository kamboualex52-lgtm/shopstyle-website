// checkout.js - VERSION CORRIGÉE (sans prix)

// ==================== SYSTÈME DE COMMANDE WHATSAPP SANS PRIX ====================

const WhatsAppOrder = {
    // Numéro WhatsApp (configurable)
    phoneNumber: '242068448698',

    // Générer le message de commande complet (SANS PRIX)
    generateOrderMessage(cart, paymentMethod, customerInfo = {}) {
        const now = new Date();
        const orderDate = now.toLocaleDateString('fr-FR');
        const orderTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        const orderNumber = 'CMD' + now.getTime().toString().slice(-6);

        let message = `🛒 *NOUVELLE COMMANDE KWAD* 🛒\n\n`;
        message += `📋 *Numéro:* ${orderNumber}\n`;
        message += `📅 *Date:* ${orderDate} à ${orderTime}\n\n`;
        message += `━━━━━━━━━━━━━━━━━━\n`;
        message += `*DÉTAILS DE LA COMMANDE*\n`;
        message += `━━━━━━━━━━━━━━━━━━\n\n`;

        // Liste des articles (sans prix)
        cart.forEach((item, index) => {
            message += `*${index + 1}. ${item.name}*\n`;
            message += `   • Quantité: ${item.quantity}\n\n`;
        });

        // Calcul des totaux (SUPPRIMÉ)
        // const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        // const shipping = 1500;
        // const total = subtotal + shipping;

        // message += `━━━━━━━━━━━━━━━━━━\n`;
        // message += `*RÉCAPITULATIF*\n`;
        // message += `━━━━━━━━━━━━━━━━━━\n`;
        // message += `Sous-total: ${subtotal.toLocaleString()} FCFA\n`;
        // message += `Livraison: ${shipping.toLocaleString()} FCFA\n`;
        // message += `*TOTAL: ${total.toLocaleString()} FCFA*\n\n`;

        message += `━━━━━━━━━━━━━━━━━━\n`;
        message += `*PAIEMENT*\n`;
        message += `━━━━━━━━━━━━━━━━━━\n`;
        message += `Mode: ${paymentMethod}\n\n`;

        // Informations client si fournies
        if (customerInfo.name || customerInfo.address || customerInfo.phone) {
            message += `━━━━━━━━━━━━━━━━━━\n`;
            message += `*INFORMATIONS CLIENT*\n`;
            message += `━━━━━━━━━━━━━━━━━━\n`;
            if (customerInfo.name) message += `Nom: ${customerInfo.name}\n`;
            if (customerInfo.phone) message += `Téléphone: ${customerInfo.phone}\n`;
            if (customerInfo.address) message += `Adresse: ${customerInfo.address}\n`;
        }

        message += `\n_Merci de me donner le prix total et de confirmer ma commande._\n\n`;
        message += `📞 *Service Client KWAD*`;

        return encodeURIComponent(message);
    },

    // Rediriger vers WhatsApp
    redirectToWhatsApp(message) {
        const url = `https://wa.me/${this.phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    },

    // Commander depuis le panier
    orderFromCart(cart, paymentMethod) {
        if (!cart || cart.length === 0) {
            showNotification('Votre panier est vide', 'error');
            return false;
        }

        // Informations client optionnelles
        const customerInfo = {};

        // Animation de chargement
        showNotification('Préparation de votre commande...', 'info');

        setTimeout(() => {
            const message = this.generateOrderMessage(cart, paymentMethod, customerInfo);
            this.redirectToWhatsApp(message);

            // Vider le panier après un délai
            setTimeout(() => {
                if (confirm('Commande envoyée ! Voulez-vous vider votre panier ?')) {
                    cart = [];
                    updateCartCount();
                    updateCartDisplay();
                    showNotification('Panier vidé', 'success');
                }
            }, 2000);
        }, 500);

        return true;
    },

    // Commande rapide depuis la page produit
    quickOrder(product, quantity, paymentMethod) {
        const tempCart = [{
            id: product.id,
            name: product.name,
            quantity: quantity,
            image: product.image
        }];

        return this.orderFromCart(tempCart, paymentMethod);
    }
};

window.WhatsAppOrder = WhatsAppOrder;