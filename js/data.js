// Données des catégories
const categories = [
    { id: 'electromenager', name: 'Électroménager', count: 7, image: 'https://cdn.futura-sciences.com/sources/images/soldes-hiver-electromenager.jpeg' },
    { id: 'electricite', name: 'Électricité', count: 2, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'vetements', name: 'Vêtements', count: 8, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'chaussures', name: 'Chaussures', count: 0, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'accessoires', name: 'Accessoires', count: 0, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'beaute', name: 'Beauté', count: 0, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'complement', name: 'Compléments', count: 0, image: 'https://images.unsplash.com/photo-1585435557343-3b092031d5ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'fitness', name: 'Fitness', count: 0, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
];

// Données des produits COMPLÈTES avec médias
const products = [
    // Vos produits vêtements avec images locales
    {
        id: 9,
        name: 'Robe africaine élégante - Modèle 1',
        price: 15000,
        category: 'vetements',
        image: 'Image/Vetement/Image1.jpeg',
        rating: 4,
        badge: null,
        description: 'Robe africaine élégante en tissu wax de haute qualité. Design unique et confortable pour toutes occasions.',
        features: [
            'Tissu wax 100% coton',
            'Coupe ajustée',
            'Manches courtes',
            'Longueur mi-mollet',
            'Lavable en machine'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image1.jpeg' }
        ]
    },
    {
        id: 10,
        name: 'Robe africaine élégante - Modèle 2',
        price: 18000,
        category: 'vetements',
        image: 'Image/Vetement/Image2.jpeg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Robe africaine moderne avec motifs traditionnels. Parfaite pour les cérémonies et événements spéciaux.',
        features: [
            'Tissu wax premium',
            'Design contemporain',
            'Encolure en V',
            'Ceinture assortie',
            'Taille unique'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image2.jpeg' }
        ]
    },
    {
        id: 11,
        name: 'Robe africaine élégante - Modèle 3',
        price: 22000,
        category: 'vetements',
        image: 'Image/Vetement/Image3.jpeg',
        rating: 4,
        badge: null,
        description: 'Robe africaine sophistiquée avec broderies artisanales. Pièce unique et élégante.',
        features: [
            'Broderies artisanales',
            'Tissu de qualité supérieure',
            'Coupe fluide',
            'Manches trois-quarts',
            'Élégante et raffinée'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image3.jpeg' }
        ]
    },
    {
        id: 12,
        name: 'Robe africaine élégante - Modèle 4',
        price: 19000,
        category: 'vetements',
        image: 'Image/Vetement/Image4.jpeg',
        rating: 4,
        badge: null,
        description: 'Robe africaine colorée avec imprimés vibrants. Confort et style pour votre garde-robe.',
        features: [
            'Imprimés vibrants',
            'Tissu léger et respirant',
            'Coupe droite',
            'Encolure ronde',
            'Entretien facile'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image4.jpeg' }
        ]
    },
    {
        id: 13,
        name: 'Robe africaine élégante - Modèle 5',
        price: 25000,
        category: 'vetements',
        image: 'Image/Vetement/Image5.jpeg',
        rating: 5,
        badge: 'Populaire',
        description: 'Robe africaine de luxe avec détails perlés. Création exclusive pour les occasions spéciales.',
        features: [
            'Détails perlés',
            'Tissu de soie africaine',
            'Coupe sur mesure',
            'Longueur longue',
            'Pièce exclusive'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image5.jpeg' }
        ]
    },
    {
        id: 14,
        name: 'Robe africaine élégante - Modèle 6',
        price: 17000,
        category: 'vetements',
        image: 'Image/Vetement/Image6.jpeg',
        rating: 4,
        badge: null,
        description: 'Robe africaine décontractée pour usage quotidien. Style et confort réunis.',
        features: [
            'Style décontracté',
            'Tissu stretch confortable',
            'Poches fonctionnelles',
            'Ceinture élastique',
            'Usage quotidien'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image6.jpeg' }
        ]
    },
    {
        id: 15,
        name: 'Robe africaine élégante - Modèle 7',
        price: 21000,
        category: 'vetements',
        image: 'Image/Vetement/Image7.jpeg',
        rating: 4,
        badge: null,
        description: 'Robe africaine élégante avec motifs géométriques. Modernité et tradition harmonieusement mêlées.',
        features: [
            'Motifs géométriques',
            'Tissu wax imprimé',
            'Coupe A-line',
            'Manches ballon',
            'Style moderne'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image7.jpeg' }
        ]
    },
    {
        id: 16,
        name: 'Robe africaine élégante - Modèle 8',
        price: 23000,
        category: 'vetements',
        image: 'Image/Vetement/Image8.jpeg',
        rating: 5,
        badge: 'Promo',
        description: 'Robe africaine cérémoniale avec accessoires assortis. Élégance et tradition pour grands événements.',
        features: [
            'Set complet',
            'Tissu premium',
            'Accessoires inclus',
            'Coupe traditionnelle',
            'Pour cérémonies'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Image8.jpeg' }
        ]
    },

    // Electro_menager
    {
        id: 17,
        name: 'Ouvre bière automatique',
        price: 2500,
        category: 'electromenager',
        image: 'Image/Electro_menager/Ouvre_auto/Ouvre bière automatique.jpg',
        rating: 4,
        badge: 'Nouveau',
        description: 'Ouvre-bouteille automatique fonctionnant sur piles. Simple d\'utilisation et efficace.',
        features: [
            'Fonctionnement automatique',
            'Alimentation piles',
            'Design compact',
            'Facile à utiliser',
            'Pour bouteilles standards'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Ouvre_auto/Ouvre bière automatique.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Ouvre_auto/Ouvre1.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Ouvre_auto/Ouvre2.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Ouvre_auto/Ouvre3.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Ouvre_auto/Ouvre4.jpg' }

        ]
    },
    {
        id: 19,
        name: 'Tire bouchon rechargeable',
        price: 12000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Tire_bouch/Tire bouchon.jpg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Tire-bouchon électrique rechargeable. Retire les bouchons en quelques secondes sans effort.',
        features: [
            'Rechargeable USB',
            'Fonctionnement silencieux',
            'Batterie lithium',
            'Automatique',
            'Charge rapide'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Tire_bouch/Tire bouchon.jpg' },
            { type: 'video', src: 'Image/Electro_menager/Tire_bouch/Tire bouchon-VID.mp4' }

        ]
    },
    {
        id: 18,
        name: 'Thermos LED 1L',
        price: 8000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Therm_L/Thermos LED.jpg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Thermos isotherme avec affichage LED de la température. Garde les boissons chaudes ou froides pendant des heures.',
        features: [
            'Capacité 1L',
            'Affichage LED température',
            'Isolation 12 heures',
            'Bouchon étanche',
            'Design moderne'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Therm_L/Thermos LED.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Therm_L/Thermo1.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Therm_L/Thermo2.jpg' }
        ]
    },
    {
        id: 21,
        name: 'Carafe plus 4 verres (très Robuste)',
        price: 10000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Carafe plus 4 verres.jpg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Set carafe et verres en verre trempé très robuste. Idéal pour jus, eau et boissons.',
        features: [
            'Verre trempé robuste',
            'Set 5 pièces',
            'Capacité carafe: 1.5L',
            'Design élégant',
            'Lavable au lave-vaisselle'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Carafe plus 4 verres.jpg' }
        ]
    },
    {
        id: 22,
        name: 'Chauffe eau 2L',
        price: 10000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Chauffe eau 3L.jpg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Bouilloire électrique 3L avec arrêt automatique. Chauffe l\'eau rapidement et en toute sécurité.',
        features: [
            'Capacité 2L',
            'Arrêt automatique',
            'Base rotative 360°',
            'Indicateur niveau eau',
            'Chauffe rapide'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Chauffe eau 3L.jpg' }
        ]
    },
    {
        id: 23,
        name: 'Mixeur portatif',
        price: 8000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Mixeur_p/Mixeur portatif.jpg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Mixeur plongeant portable pour smoothies et soupes. Léger et facile à utiliser.',
        features: [
            'Mixeur plongeant',
            'Portable et léger',
            'Lames inoxydables',
            'Facile à nettoyer',
            'Parfait pour smoothies'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Mixeur_p/Mixeur portatif.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Mixeur_p/Mixeur_color.jpg' }
        ]
    },
    {
        id: 24,
        name: 'Tapie de Cuisson',
        price: 3000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Tapie de Cuisson.jpg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Tapis de cuisson silicone réutilisable. Anti-adhésif et résistant à la chaleur.',
        features: [
            'Silicone alimentaire',
            'Résistant à 230°C',
            'Anti-adhésif',
            'Réutilisable',
            'Facile à nettoyer'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Tapie de Cuisson.jpg' }
        ]
    },

    // Electricité
    {
        id: 20,
        name: 'Caisse à outils (électricien)',
        price: 110000,
        category: 'electricite',
        image: 'Image/Electricité/Cais_élec/Caisse à outils (électricien).jpg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Caisse à outils complète pour électricien professionnel. Tous les outils essentiels pour travaux électriques.',
        features: [
            '499 pièces complètes',
            'Outils isolés',
            'Testeur de tension',
            'Multimètre digital',
            'Caisse robuste'
        ],
        media: [
            { type: 'image', src: 'Image/Electricité/Cais_élec/Caisse à outils (électricien).jpg' },
            { type: 'image', src: 'Image/Electricité/Cais_élec/Contenue1.jpg' },
            { type: 'image', src: 'Image/Electricité/Cais_élec/Contenue2.jpg' },
            { type: 'image', src: 'Image/Electricité/Cais_élec/Contenue3.jpg' },
            { type: 'image', src: 'Image/Electricité/Cais_élec/Contenue4.jpg' }
        ]
    },
    {
        id: 25,
        name: 'Caisse à outils (électro-technicien)',
        price: 30000,
        category: 'electricite',
        image: 'Image/Electricité/Caisse élctro-technicien.jpg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Caisse à outils électro-technicien avec instruments de mesure. Parfaite pour dépannage et maintenance.',
        features: [
            'Instruments de mesure',
            'Tournevis isolés',
            'Pinces diverses',
            'Matériel de test',
            'Porte-documents inclus'
        ],
        media: [
            { type: 'image', src: 'Image/Electricité/Caisse élctro-technicien.jpg' }
        ]
    }
];
