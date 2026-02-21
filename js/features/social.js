// ==================== GESTION DES RÉSEAUX SOCIAUX ====================

function initSocialLinks() {
    console.log('🔄 Initialisation des liens sociaux...');

    const socialLinks = document.querySelectorAll('.social-icons a, .social-link');

    socialLinks.forEach(link => {
        link.removeEventListener('click', handleSocialClick);
        link.addEventListener('click', handleSocialClick);

        const href = link.href;
        const platform = getPlatformFromUrl(href);
        link.setAttribute('data-platform', platform);
        link.setAttribute('title', `Suivez-nous sur ${platform}`);
    });
}

function handleSocialClick(e) {
    e.preventDefault();

    const link = e.currentTarget;
    const href = link.href;
    const platform = getPlatformFromUrl(href);

    console.log(`🔗 Clic sur: ${platform}`);

    const confirmed = confirm(`Ouvrir ${platform} ?`);
    if (confirmed) {
        window.open(href, '_blank', 'noopener,noreferrer');
        trackSocialClick(platform);
        showNotification(`🔗 Ouverture de ${platform}...`, 'info');
    }
}

function getPlatformFromUrl(url) {
    if (url.includes('facebook.com')) return 'Facebook';
    if (url.includes('instagram.com')) return 'Instagram';
    if (url.includes('mailto:')) return 'Email';
    if (url.includes('whatsapp.com') || url.includes('wa.me')) return 'WhatsApp';
    if (url.includes('twitter.com')) return 'Twitter';
    if (url.includes('youtube.com')) return 'YouTube';
    return 'social media';
}

function trackSocialClick(platform) {
    console.log(`📊 Social click: ${platform}`);

    const socialStats = JSON.parse(localStorage.getItem('kwad_social_stats')) || {};
    socialStats[platform] = (socialStats[platform] || 0) + 1;
    socialStats.last_click = new Date().toISOString();
    localStorage.setItem('kwad_social_stats', JSON.stringify(socialStats));
}

// Fonctions de contact
function openWhatsAppContact() {
    const message = "Bonjour KWAD, j'aimerais avoir des informations supplémentaires sur...";
    const phoneNumber = '+242068448698';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function makePhoneCall() {
    window.open(`tel:+242068448698`);
}

function sendEmail() {
    const email = 'frediadaniella@gmail.com';
    const subject = 'Demande d\'information - KWAD';
    const body = 'Bonjour KWAD,\n\nJe suis intéressé(e) par vos produits.\n\nCordialement,';
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
}