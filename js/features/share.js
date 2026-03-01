// ==================== PARTAGE SUR LES RÉSEAUX SOCIAUX ====================

const ShareManager = {
    // Partager un produit
    shareProduct(product) {
        // Utiliser le nouveau générateur d'URL
        const shareUrl = URLHandler.generateShareUrl(product.id);

        console.log('🔗 URL de partage générée:', shareUrl); // Pour déboguer

        const shareData = {
            title: product.name,
            text: `Découvrez ce produit sur KWAD : ${product.name}`,
            url: shareUrl,
        };

        // URL de partage pour les réseaux sociaux
        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`,
            telegram: `https://t.me/share/url?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(shareData.text)}`,
            email: `mailto:?subject=${encodeURIComponent(product.name)}&body=${encodeURIComponent(shareData.text + '\n\n' + shareData.url)}`,
            copy: shareUrl
        };

        return shareUrls;
    },

    // Afficher les options de partage dans le modal produit
    addShareButtons(product) {
        const shareUrls = this.shareProduct(product);

        // Vérifier si le conteneur de partage existe déjà
        let shareContainer = document.querySelector('.product-share');

        if (!shareContainer) {
            shareContainer = document.createElement('div');
            shareContainer.className = 'product-share';
        }

        shareContainer.innerHTML = `
            <h3><i class="fas fa-share-alt"></i> Partager ce produit</h3>
            <div class="share-buttons">
                <a href="${shareUrls.facebook}" target="_blank" class="share-btn facebook" title="Partager sur Facebook" onclick="event.stopPropagation();">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="${shareUrls.twitter}" target="_blank" class="share-btn twitter" title="Partager sur Twitter" onclick="event.stopPropagation();">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="${shareUrls.whatsapp}" target="_blank" class="share-btn whatsapp" title="Partager sur WhatsApp" onclick="event.stopPropagation();">
                    <i class="fab fa-whatsapp"></i>
                </a>
                <a href="${shareUrls.linkedin}" target="_blank" class="share-btn linkedin" title="Partager sur LinkedIn" onclick="event.stopPropagation();">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <button onclick="ShareManager.copyLink('${shareUrls.copy}'); event.stopPropagation();" class="share-btn copy" title="Copier le lien">
                    <i class="fas fa-link"></i>
                </button>
            </div>

        `;

        // Ajouter au modal de détail (s'il n'existe pas déjà)
        const productInfo = document.querySelector('.product-detail-info');
        if (productInfo && !document.querySelector('.product-share')) {
            productInfo.appendChild(shareContainer);
        }
    },

    // Copier le lien
    copyLink(url) {
        navigator.clipboard.writeText(url).then(() => {
            showNotification('✅ Lien copié dans le presse-papier !', 'success');

            // Animation sur le bouton
            const activeElement = document.activeElement;
            if (activeElement && activeElement.classList.contains('share-btn')) {
                activeElement.classList.add('copy-success');
                setTimeout(() => {
                    activeElement.classList.remove('copy-success');
                }, 500);
            }
        }).catch(() => {
            showNotification('❌ Erreur lors de la copie', 'error');

            // Fallback pour les anciens navigateurs
            this.fallbackCopyLink(url);
        });
    },

    // Fallback pour la copie
    fallbackCopyLink(url) {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand('copy');
            showNotification('✅ Lien copié ! (fallback)', 'success');
        } catch (err) {
            showNotification('❌ Erreur lors de la copie', 'error');
            console.error('Erreur de copie:', err);
        }

        document.body.removeChild(textarea);
    }
};

window.ShareManager = ShareManager;