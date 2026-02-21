// ==================== FONCTIONNALITÉ DE RECHERCHE ====================

function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    if (searchInput && searchButton) {
        searchButton.addEventListener('click', performSearch);

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') performSearch();
        });

        searchInput.addEventListener('input', function() {
            if (this.value.length >= 3) {
                performSearch();
            } else if (this.value.length === 0) {
                initProducts();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === '') {
        initProducts();
        return;
    }

    const filteredProducts = products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        const descriptionMatch = product.description?.toLowerCase().includes(searchTerm);
        const categoryMatch = product.category.toLowerCase().includes(searchTerm);
        const featuresMatch = product.features?.some(f => f.toLowerCase().includes(searchTerm));

        return nameMatch || descriptionMatch || categoryMatch || featuresMatch;
    });

    displaySearchResults(filteredProducts, searchTerm);
}

function displaySearchResults(filteredProducts, searchTerm) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <div style="font-size: 48px; color: #ccc; margin-bottom: 20px;">
                    <i class="fas fa-search"></i>
                </div>
                <h3 style="color: #666;">Aucun résultat trouvé</h3>
                <p style="color: #999;">Aucun produit ne correspond à "${searchTerm}"</p>
                <button class="btn" onclick="clearSearch()" style="margin-top: 20px;">
                    Voir tous les produits
                </button>
            </div>
        `;
        return;
    }

    const resultsHeader = document.createElement('div');
    resultsHeader.style.cssText = `
        grid-column: 1/-1;
        margin-bottom: 20px;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid var(--primary);
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
    resultsHeader.innerHTML = `
        <div>
            <h3 style="margin: 0; color: #333;">Résultats de recherche</h3>
            <p style="margin: 5px 0 0 0; color: #666;">
                ${filteredProducts.length} produit${filteredProducts.length > 1 ? 's' : ''} trouvé${filteredProducts.length > 1 ? 's' : ''} pour "${searchTerm}"
            </p>
        </div>
        <button class="btn btn-outline" onclick="clearSearch()">
            <i class="fas fa-times"></i> Effacer
        </button>
    `;
    grid.appendChild(resultsHeader);

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        const titleElement = card.querySelector('.product-title');
        if (titleElement) {
            titleElement.innerHTML = highlightSearchTerm(product.name, searchTerm);
        }
        grid.appendChild(card);
    });

    attachProductEvents();
}

function clearSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) searchInput.value = '';
    initProducts();
}