// Données des catégories
const categories = [
    { id: 'electromenager', name: 'Électroménager', count: 7, image: 'https://cdn.futura-sciences.com/sources/images/soldes-hiver-electromenager.jpeg' },
    { id: 'electricite', name: 'Électricité', count: 2, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'vetements', name: 'Vêtements', count: 8, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'chaussures', name: 'Chaussures', count: 0, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'accessoires', name: 'Accessoires', count: 0, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'beaute', name: 'Beauté', count: 0, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'complement', name: 'Compléments', count: 0, image: 'data:image/jpeg;base64,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' },
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

