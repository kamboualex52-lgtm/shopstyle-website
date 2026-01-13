//NB id_end 41

// Données des catégories
const categories = [
    { id: 'electromenager', name: 'Électroménager', count: 10, image: 'https://cdn.futura-sciences.com/sources/images/soldes-hiver-electromenager.jpeg' },
    { id: 'electricite', name: 'Électricité', count: 2, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'vetements', name: 'Vêtements', count: 8, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'chaussures', name: 'Chaussures', count: 0, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'accessoires', name: 'Accessoires', count: 2, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'beaute', name: 'Beauté', count: 0, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'complement', name: 'Compléments', count: 0, image: 'data:image/jpeg;base64,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' },
    { id: 'fitness', name: 'Fitness', count: 0, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 'vehicules', name: 'Véhicules', count: 1, image: 'data:image/jpeg;base64,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' }

];

// Données des produits COMPLÈTES avec médias
const products = [
    // Vos produits vêtements avec images locales
    // Robe
    {
        id: 36,
        name: 'Robe de soiree',
        price: 15000,
        category: 'vetements',
        image: 'Image/Vetement/Femme/Robe/robe de soiree/IMG-20251228-WA0000(1).jpg',
        rating: 4,
        badge: "Top Vente",
        description: '... en cours',
        features: [
            '... en cours'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe de soiree/robe bege.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe de soiree/robe blanche.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe de soiree/robe noire.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe de soiree/robe rouge1.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe de soiree/robe rouge bordeau.jpeg' }
        ]
    },

    {
        id: 37,
        name: 'Robe elegante',
        price: 15000,
        category: 'vetements',
        image: 'Image/Vetement/Femme/Robe/robe_L/Rb0.jpeg',
        rating: 4,
        badge: "Top Vente",
        description: '... en cours',
        features: [
            '... en cours'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_L/Rb1.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_L/Rb2.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_L/Rb3.jpg' }
        ]
    },

    {
        id: 38,
        name: 'Robe elegante',
        price: 15000,
        category: 'vetements',
        image: 'Image/Vetement/Femme/Robe/robe_elegante/Rb0.jpeg',
        rating: 4,
        badge: "Top Vente",
        description: '... en cours',
        features: [
            '... en cours'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_elegante/Rb1.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_elegante/Rb2.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_elegante/Rb3.jpg' }
        ]
    },

    {
        id: 39,
        name: 'Robe confortable',
        price: 15000,
        category: 'vetements',
        image: 'Image/Vetement/Femme/Robe/robe_simple/Rb0.jpeg',
        rating: 4,
        badge: "Top Vente",
        description: '... en cours',
        features: [
            '... en cours'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_simple/Rb0.jpeg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_simple/Rb1.jpeg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_simple/Rb2.jpeg' }
        ]
    },

    {
        id: 40,
        name: 'Robe evase',
        price: 15000,
        category: 'vetements',
        image: 'Image/Vetement/Femme/Robe/robe_evase/Rb0.jpeg',
        rating: 4,
        badge: "Top Vente",
        description: '... en cours',
        features: [
            '... en cours'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_evase/Rb1.jpeg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_evase/Rb2.jpeg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_evase/Rb3.jpeg' }
        ]
    },

    // Robe enfant
    {
        id: 41,
        name: 'Robe enfant',
        price: 15000,
        category: 'vetements',
        image: 'Image/Vetement/robe_enfant/Rb0.jpg',
        rating: 4,
        badge: "Top Vente",
        description: '... en cours',
        features: [
            '... en cours'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/robe_enfant/Rb1.jpg' },
            { type: 'image', src: 'Image/Vetement/robe_enfant/Rb2.jpg' },
            { type: 'image', src: 'Image/Vetement/robe_enfant/Rb3.jpg' },
            { type: 'image', src: 'Image/Vetement/robe_enfant/Rb4.jpg' },
            { type: 'image', src: 'Image/Vetement/robe_enfant/Rb5.jpg' },
            { type: 'image', src: 'Image/Vetement/robe_enfant/Rb6.jpg' },
            { type: 'image', src: 'Image/Vetement/robe_enfant/Rb0.jpg' }
        ]
    },

    // Sous vêtement
    {
        id: 26,
        name: 'Sous-vêtements pour femmes – Confort & Élégance',
        price: 6500,
        category: 'vetements',
        image: 'Image/Vetement/Sous_V_F/Sous_V.jpg',
        rating: 5,
        badge: 'Offre Spéciale',
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
        price: 7000,
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


    //Sac
    //Pour bébé
    {
        id: 28,
        name: 'Sac de sortie multifonction pour bébé',
        price: 15000,
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
        price: 15000,
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
    {
        id: 46,
        name: 'Tapis chauffant electronique',
        price: 50000,
        category: 'electromenager',
        image: 'Image/Electro_menager/tapie chafond/WhatsApp Image 2026-01-11 at 14.21.24.jpeg',
        rating: 5,
        badge: 'Best-seller',
        description: "Rechauffer vos repas partout et a tout moment",
        features: [
            'Voltage: 110 - 220V',
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/tapie chafond/WhatsApp Image 2026-01-11 at 14.21.24.jpeg' },
            { type: 'image', src: 'Image/Electro_menager/tapie chafond/WhatsApp Image 2026-01-11 at 14.21.26.jpeg' }
        ]
    },

    {
        id: 45,
        name: 'presse fruit electrique',
        price: 50000,
        category: 'electromenager',
        image: 'Image/Electro_menager/presse fruit/Pres_fruit0.jpeg',
        rating: 5,
        badge: 'Best-seller',
        description: "Obtener vos jus de fruit fais maison sans trop d'effort",
        features: [
            'Voltage: 110 - 220V',
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/presse fruit/Pres_fruit0.jpeg' },
            { type: 'image', src: 'Image/Electro_menager/presse fruit/Pres_fruit1.jpeg' },
            { type: 'image', src: 'Image/Electro_menager/presse fruit/Pres_fruit2.jpeg' },
            { type: 'image', src: 'Image/Electro_menager/presse fruit/Pres_fruit3.jpeg' },
        ]
    },

    {
        id: 44,
        name: '2 en 1 mixeur multifonction',
        price: 50000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Mixer/WhatsApp Image 2026-01-11 at 14.21.04.jpeg',
        rating: 5,
        badge: 'Best-seller',
        description: "Ranger tout ce qui vous fais plaisir, optimier plus d'espace",
        features: [
            'Voltage: 110 - 220V',
            'Nombre de lames: 6',
            'coleur : argent'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Mixer/WhatsApp Image 2026-01-11 at 14.21.04.jpeg' },
            { type: 'image', src: 'Image/Electro_menager/Mixer/WhatsApp Image 2026-01-11 at 14.20.18.jpeg' }
        ]
    },

    {
        id: 43,
        name: 'Etager de rengement',
        price: 50000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Etagere/Etag0.jpeg',
        rating: 5,
        badge: 'Top Vente',
        description: "Ranger tout ce qui vous fais plaisir, optimier plus d'espace",
        features: [
            '... en cours'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Etagere/Etag0.jpeg' },
            { type: 'image', src: 'Image/Electro_menager/Etagere/Etag1.jpeg' },
            { type: 'image', src: 'Image/Electro_menager/Etagere/Etag2.jpeg' },
            { type: 'image', src: 'Image/Electro_menager/Etagere/Etag3.jpeg' },
            { type: 'image', src: 'Image/Electro_menager/Etagere/Etag4.jpeg' }
        ]
    },

    {
        id: 42,
        name: 'Air conditionnee portable',
        price: 50000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Clim/WhatsApp Image 2026-01-11 at 14.19.37.jpeg',
        rating: 5,
        badge: 'Nouveau',
        description: 'Profiter de votre air conditionnee partout chef vous grace',
        features: [
            "reservoir d'eau 3L",
            'energie eolienne froid 45 W',
            'energie eolienne chaude 18000 W'

        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Clim/WhatsApp Image 2026-01-11 at 14.19.37.jpeg' }
        ]
    },

    // Machine à glaçons
    {
        id: 35,
        name: 'Machine à glaçons ultra rapide - Fraîcheur instantanée',
        price: 50000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Machine_Glaçons/Machine_Glaçons.jpg',
        rating: 5,
        badge: 'Offre Spéciale',
        description: 'Machine à glaçons ultra rapide, compacte et silencieuse. Préparez vos glaçons en quelques minutes pour vos cocktails, jus ou cafés glacés. Idéale pour la maison, le bureau ou vos événements.',
        features: [
            'Production rapide de glaçons en quelques minutes',
            'Compacte, silencieuse et facile à utiliser',
            'Capacité suffisante pour un usage quotidien',
            'Design moderne et élégant',
            'Idéale pour maison, bureau ou fêtes'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Machine_Glaçons/Machine_Glaçons.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Machine_Glaçons/Machine_Glaçons1.jpg' }
        ]
    },

    // Friteuse électrique
    {
        id: 34,
        name: 'Friteuse électrique - Croustillant parfait & cuisson rapide',
        price: 50000,
        category: 'electromenager',
        image: 'Image/Electro_menager/Friteuse/Friteuse.jpg',
        rating: 5,
        badge: 'Offre Spéciale',
        description: 'Friteuse électrique puissante et sécurisée pour des cuissons rapides et croustillantes. Parfaite pour préparer frites, beignets ou poulet doré à la perfection, elle est facile à utiliser et à nettoyer.',
        features: [
            'Puissante et rapide pour une cuisson homogène',
            'Système de sécurité intégré',
            'Cuve antiadhésive facile à nettoyer',
            'Design moderne et compact',
            'Idéale pour la maison, les fêtes ou repas en famille'
        ],
        media: [
            { type: 'image', src: 'Image/Electro_menager/Friteuse/Friteuse.jpg' }
        ]
    },

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
        price: 15000,
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
        price: 40000,
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
            { type: 'image', src: 'Image/Electro_menager/Follet/Follet1.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Follet/Fouet.jpg' }
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
            { type: 'image', src: 'Image/Electro_menager/Ensemble-Couteau1/Couteau.jpg' },
            { type: 'image', src: 'Image/Electro_menager/Ensemble-Couteau1/Couteau1.jpg' }
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





