//NB id_end 33

// Données des catégories
const categories = [
    { id: 'electromenager', name: 'Électroménager', count: 10, image: 'https://cdn.futura-sciences.com/sources/images/soldes-hiver-electromenager.jpeg' },
    { id: 'electricite', name: 'Électricité', count: 2, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'vetements', name: 'Vêtements', count: 10, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'chaussures', name: 'Chaussures', count: 0, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'accessoires', name: 'Accessoires', count: 2, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'beaute', name: 'Beauté', count: 0, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'complement', name: 'Compléments', count: 0, image: 'data:image/jpeg;base64,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' },
    { id: 'fitness', name: 'Fitness', count: 0, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
];

// Données des produits COMPLÈTES avec médias
const products = [
    // Vos produits vêtements avec images locales
    // Sous vêtement
    {
        id: 26,
        name: 'Sous-vêtements pour femmes – Confort & Élégance',
        price: 9500,
        category: 'vetements',
        image: 'Image/Vetement/Sous_V_F/Sous_V.jpg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Sous-vêtements pour femmes alliant confort, élégance et confiance. Conçus avec des matières respirantes et douces pour un ajustement parfait en toute occasion.',
        features: [
            'Tissu doux et respirant',
            'Confortable pour un usage quotidien',
            'Coupe élégante et ajustée',
            'Finitions soignées',
            'Idéal pour toutes les occasions : travail, détente ou soirée'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Sous_V_F/Sous_V.jpg' },
            { type: 'image', src: 'Image/Vetement/Sous_V_F/Sous_V1.jpg' },
            { type: 'image', src: 'Image/Vetement/Sous_V_F/Sous_V2.jpg' },
            { type: 'image', src: 'Image/Vetement/Sous_V_F/Sous_V3.jpg' },
            { type: 'image', src: 'Image/Vetement/Sous_V_F/Sous_V4.jpg' }
        ]
    },

    //Crop top
    {
        id: 27,
        name: 'Crop Top tendance - Style urbain chic',
        price: 10000,
        category: 'vetements',
        image: 'Image/Vetement/Crop_Top/Crop_Top.jpg',
        rating: 5,
        badge: 'Populaire',
        description: 'Affirme ton style avec nos Crop Tops tendance ! Alliant confort, modernité et élégance, ils s’adaptent à toutes les occasions — du look décontracté au chic urbain.',
        features: [
            'Tissu doux et respirant',
            'Coupe moderne et féminine',
            'Disponible en plusieurs couleurs et tailles',
            'Confortable pour un usage quotidien',
            'Idéal pour un style décontracté ou urbain chic'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Crop_Top/Crop_Top.jpg' },
            { type: 'image', src: 'Image/Vetement/Crop_Top/Crop_Top1.jpg' },
            { type: 'image', src: 'Image/Vetement/Crop_Top/Crop_Top2.jpg' },
            { type: 'image', src: 'Image/Vetement/Crop_Top/Crop_Top3.jpg' }
        ]
    },

    
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

    


    //Sac
    //Pour bébé
    {
        id: 28,
        name: 'Sac de sortie multifonction pour bébé',
        price: 18000,
        category: 'accessoires',
        image: 'Image/Sacs/Sac_bébé/Sac_bébé.jpg',
        rating: 5,
        badge: 'Best-seller',
        description: 'Sac de sortie multifonction pour bébé, spacieux, étanche et élégant. Idéal pour les parents organisés, il permet de transporter facilement biberons, couches, lingettes et vêtements lors des sorties.',
        features: [
            'Tissu imperméable et résistant',
            'Multiples poches de rangement',
            'Design moderne et élégant',
            'Grande capacité de stockage',
            'Idéal pour les sorties, voyages et promenades'
        ],
        media: [
            { type: 'image', src: 'Image/Sacs/Sac_bébé/Sac_bébé.jpg' },
            { type: 'image', src: 'Image/Sacs/Sac_bébé/Sac_bébé1.jpg' }
        ]
    },


    //Etudiant
    {
        id: 29,
        name: 'Ensemble de sacs étanches pour étudiants',
        price: 20000,
        category: 'accessoires',
        image: 'Image/Sacs/Sac_Etudiant/Sac.jpg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Ensemble de sacs étanches pour étudiants alliant style, confort et protection. Parfait pour transporter ordinateurs, cahiers et accessoires en toute sécurité, même sous la pluie.',
        features: [
            'Matériaux résistants et imperméables',
            'Multiples compartiments de rangement',
            'Design moderne et ergonomique',
            'Idéal pour l’école, l’université ou les voyages',
            'Confortable et durable pour un usage quotidien'
        ],
        media: [
            { type: 'image', src: 'Image/Sacs/Sac_Etudiant/Sac.jpg' },
            { type: 'image', src: 'Image/Sacs/Sac_Etudiant/Sac1.jpg' },
            { type: 'image', src: 'Image/Sacs/Sac_Etudiant/Sac2.jpg' },
            { type: 'image', src: 'Image/Sacs/Sac_Etudiant/Sac3.jpg' },
            { type: 'image', src: 'Image/Sacs/Sac_Etudiant/Sac4.jpg' }
        ]
    },



    // Electro_menager
    // Ouvre bière
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

    //Tire bouchon
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

    //Thermos
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

    //Carafe
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

    //Chauffe eau
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

    //Mixeur portatif
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

    //Tapie de cuisson
    {
        id: 24,
        name: 'Tapie de Cuisson',
        price: 3000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Tapis_cuiss/Tapie de Cuisson.jpg',
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
            { type: 'image', src: 'Image/Electro_menager/Tapis_cuiss/Tapie de Cuisson.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Tapis_cuiss/Tapie_cuiss1.jpg' }
        ]
    },

    //Micro onde
    {
        id: 30,
        name: 'Micro-ondes 3 en 1 - Cuisson, Grill & Décongélation',
        price: 75000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Micro_onde/Micro_onde.jpg',
        rating: 5,
        badge: 'Top Vente',
        description: 'Micro-ondes 3 en 1 combinant cuisson, grill et décongélation rapide. Allie performance, rapidité et design moderne pour simplifier la préparation de vos repas au quotidien.',
        features: [
            'Fonction 3 en 1 : cuisson, grill et décongélation',
            'Puissance élevée pour une cuisson rapide et homogène',
            'Design élégant et compact',
            'Facile à utiliser et à nettoyer',
            'Idéal pour la maison, le bureau ou les étudiants'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Micro_onde/Micro_onde.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Micro_onde/Micro_onde1.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Micro_onde/Micro_onde2.jpg' }
        ]
    },

    //Fouet
    {
        id: 31,
        name: 'Fouet électrique rechargeable - Cuisine rapide et créative',
        price: 12000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Follet/Follet.jpg',
        rating: 5,
        badge: 'Coup de cœur',
        description: 'Fouet électrique rechargeable, léger et puissant, idéal pour monter crèmes, œufs, sauces ou cappuccinos en quelques secondes. Compact, silencieux et moderne, il allie efficacité et confort d’utilisation.',
        features: [
            'Batterie USB rechargeable longue durée',
            'Puissant et silencieux',
            'Design compact et ergonomique',
            'Facile à nettoyer et à utiliser',
            'Idéal pour crèmes, œufs, milkshakes et cappuccinos'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Follet/Follet.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Follet/Follet1.jpg' }
        ]
    },

    //Couteau
    {
        id: 32,
        name: 'Ensemble de couteaux multifonction - Précision & performance',
        price: 14000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Ensemble-Couteau1/Couteau.jpg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Ensemble de couteaux multifonction en acier inoxydable, idéal pour toutes vos découpes. Livré avec une râpeuse à main et un ciseau de cuisine, il allie précision, puissance et élégance pour sublimer chaque préparation.',
        features: [
            'Lames en acier inoxydable ultra-tranchantes',
            'Râpeuse à main incluse pour légumes et fromages',
            'Ciseau de cuisine solide et polyvalent',
            'Poignées ergonomiques pour une prise en main confortable',
            'Idéal pour la maison, le restaurant ou comme cadeau'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Ensemble-Couteau1/Couteau.jpg' }
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
    },



    //Véhicule
    //Moto Ninja
    {
        id: 33,
        name: 'Moto NINJA - Puissance & Style',
        price: 2500000,
        category: 'vehicules',
        image: 'Image/Véhicule/Moto_Ninja/Moto_Nja.jpg',
        rating: 5,
        badge: 'Star',
        description: 'Découvrez la moto NINJA, symbole de puissance et de performance. Avec son moteur essence ultra-performant, son design agressif et son confort exceptionnel, elle offre une expérience de conduite unique et pleine d’adrénaline.',
        features: [
            'Moteur essence haute performance',
            'Design sportif et agressif',
            'Confort optimal pour longs trajets',
            'Vitesse et maniabilité exceptionnelles',
            'Idéale pour les passionnés de sensations fortes'
        ],
        media: [
            { type: 'image', src: 'Image/Véhicule/Moto_Ninja/Moto_Nja.jpg' }
        ]
    }

];

