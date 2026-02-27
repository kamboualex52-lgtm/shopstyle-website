// Gestionnaire de produits
const ProductManager = {
    // Récupérer tous les produits
    getAll: function() {
        const products = localStorage.getItem('kwad_products');
        if (products) {
            return JSON.parse(products);
        }
        // Données par défaut
        const defaultProducts = [
            {
                id: 1,
                name: 'Robe de soirée',
                category: 'vetements',
                image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                rating: 4.5,
                badge: 'Top Vente',
                description: '2025 été élégant robe de soirée formelle haute fente robe de bal fête balayage Train paillettes Maxi longue Slip robes pour les femmes',
                features: ['Silhouette : A-Line', 'Type de tissu : Organza bordé'],
                media: [
                    { type: 'image', src: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
                ]
            }
        ];
        localStorage.setItem('kwad_products', JSON.stringify(defaultProducts));
        return defaultProducts;
    },

    // Récupérer un produit par ID
    getById: function(id) {
        const products = this.getAll();
        return products.find(p => p.id == id);
    },

    // Récupérer les produits d'une catégorie
    getByCategory: function(categoryId) {
        const products = this.getAll();
        return products.filter(p => p.category === categoryId);
    },

    // Ajouter un produit
    add: function(product) {
        const products = this.getAll();
        product.id = Date.now(); // ID unique basé sur le timestamp
        products.push(product);
        localStorage.setItem('kwad_products', JSON.stringify(products));
        return product;
    },

    // Modifier un produit
    update: function(id, updatedProduct) {
        const products = this.getAll();
        const index = products.findIndex(p => p.id == id);
        if (index !== -1) {
            updatedProduct.id = id;
            products[index] = updatedProduct;
            localStorage.setItem('kwad_products', JSON.stringify(products));
            return true;
        }
        return false;
    },

    // Supprimer un produit
    delete: function(id) {
        const products = this.getAll();
        const filtered = products.filter(p => p.id != id);
        localStorage.setItem('kwad_products', JSON.stringify(filtered));
        return true;
    },

    // Rechercher des produits
    search: function(query) {
        const products = this.getAll();
        query = query.toLowerCase();
        return products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }
};

// Gestionnaire de catégories
const CategoryManager = {
    getAll: function() {
        const categories = localStorage.getItem('kwad_categories');
        if (categories) {
            return JSON.parse(categories);
        }
        // Données par défaut
        const defaultCategories = [
            { id: 'electromenager', name: 'Électroménager', count: 10, image: 'https://cdn.futura-sciences.com/sources/images/soldes-hiver-electromenager.jpeg' },
            { id: 'electricite', name: 'Électricité', count: 2, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
            { id: 'vetements', name: 'Vêtements', count: 8, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
        ];
        localStorage.setItem('kwad_categories', JSON.stringify(defaultCategories));
        return defaultCategories;
    },

    add: function(category) {
        const categories = this.getAll();
        categories.push(category);
        localStorage.setItem('kwad_categories', JSON.stringify(categories));
        return category;
    },

    update: function(id, updatedCategory) {
        const categories = this.getAll();
        const index = categories.findIndex(c => c.id === id);
        if (index !== -1) {
            categories[index] = { ...categories[index], ...updatedCategory };
            localStorage.setItem('kwad_categories', JSON.stringify(categories));
            return true;
        }
        return false;
    },

    delete: function(id) {
        const categories = this.getAll();
        const filtered = categories.filter(c => c.id !== id);
        localStorage.setItem('kwad_categories', JSON.stringify(filtered));
        return true;
    },

    updateProductCount: function(categoryId, increment = true) {
        const categories = this.getAll();
        const category = categories.find(c => c.id === categoryId);
        if (category) {
            category.count = increment ? category.count + 1 : Math.max(0, category.count - 1);
            localStorage.setItem('kwad_categories', JSON.stringify(categories));
        }
    }
};