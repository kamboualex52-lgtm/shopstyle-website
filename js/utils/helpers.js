// ==================== FONCTIONS UTILITAIRES ====================

// Gestion des erreurs d'images
function handleImageError(img) {
    console.log('Image non trouvée:', img.src);
    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><rect width="24" height="24" fill="%23f0f0f0"/><text x="12" y="12" font-family="Arial" font-size="12" text-anchor="middle" alignment-baseline="middle" fill="%23999">Image</text></svg>';
    img.alt = 'Image non disponible';
    img.style.backgroundColor = '#f9f9f9';
}

// Mettre à jour le titre de la page
function updatePageTitle(title) {
    document.title = `${title} - KWAD`;
}

// Cacher toutes les sections
function hideAllSections() {
    const categoriesSection = document.querySelector('.categories-section');
    const newsletterSection = document.querySelector('.newsletter');

    if (categoriesSection) categoriesSection.style.display = 'none';
    if (newsletterSection) newsletterSection.style.display = 'none';
}

// Fonction de sommeil (pour animations)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Surligner le terme de recherche
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}