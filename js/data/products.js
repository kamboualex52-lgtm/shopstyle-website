//products.js

// Données des produits COMPLÈTES avec médias
const defaultProducts = [
    // Vos produits vêtements avec images locales
    // Robe
    {
        id: 36,
        name: 'Robe de soiree',
        price: 15000,
        category: 'vetements',
        image: 'Image/Vetement/Femme/Robe/robe de soiree/IMG-20251228-WA0000(1).jpg',
        rating: 4.5,
        badge: "Top Vente",
        description: '2025 été élégant robe de soirée formelle haute fente robe de bal fête balayage Train paillettes Maxi longue Slip robes pour les femmes',
        features: [
            'Silhouette : A-Line',
            'Type de tissu : Organza bordé'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe de soiree/robe bege.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe de soiree/robe blanche.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe de soiree/robe noire.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe de soiree/robe rouge1.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe de soiree/robe rouge bordeau.jpeg' }
        ]
    },

//    {
//        id: 37,
//        name: 'Robe elegante',
//        price: 15000,
//        category: 'vetements',
//        image: 'Image/Vetement/Femme/Robe/robe_L/Rb0.jpeg',
//        rating: 4,
//        badge: "Top Vente",
//        description: '... en cours',
//        features: [
//            '... en cours'
//        ],
//        media: [
//            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_L/Rb1.jpg' },
//            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_L/Rb2.jpg' },
//            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_L/Rb3.jpg' }
//        ]
//    },

    {
        id: 37,
        name: 'Robe longue de soirée',
        price: 15000,
        category: 'vetements',
        image: 'Image/Vetement/Femme/Robe/robe_elegante/Rb0.jpeg',
        rating: 3,
        badge: "Top Vente",
        description: 'HANO-Robe longue de soirée africaine, tenue de grande taille, Dashiki Ankara, mariage pour femmes musulmanes turques, mousseline de soie',
        features: [
            'Type de tissu : Mousseline de soie',
            'Style : Formel',
            'Taille : XL, 2XL, 3XL, L',
            'Silhouette : Moulante',
            'Décoration : Cristal, Bouton, lace, Rivet, Zips'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_elegante/Rb1.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_elegante/Rb2.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_elegante/Rb3.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_L/Rb1.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_L/Rb2.jpg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_L/Rb3.jpg' }
        ]
    },



    {
        id: 38,
        name: 'robe de soirée',
        price: 15000,
        category: 'vetements',
        image: 'Image/Vetement/Femme/Robe/robe_evase/Rb0.jpeg',
        rating: 4,
        badge: "Top Vente",
        description: 'Robe bandage portefeuille col O imprimée avec surpiqûres, polyester, tailles S-3XL, pour femme/bureau',
        features: [
            'Taille : S à 3XL',
            'Type de tissu : Coton/polyester',
            'Silhouette : Asymétrique'
        ],
        media: [
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_evase/Rb1.jpeg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_evase/Rb2.jpeg' },
            { type: 'image', src: 'Image/Vetement/Femme/Robe/robe_evase/Rb3.jpeg' }

        ]
    },

    // Robe enfant
    {
        id: 39,
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

// Variable dynamique qui contiendra TOUS les produits (par défaut + personnalisés)
let products = [];

// Fonction pour recharger les produits (fusion)
function reloadProducts() {
    // Charger les produits personnalisés depuis localStorage
    const customProducts = typeof loadCustomProducts === 'function' ? loadCustomProducts() : [];

    // Fusionner les produits par défaut et personnalisés
    products = [...defaultProducts, ...customProducts];

    console.log(`📦 Produits chargés : ${products.length} (${defaultProducts.length} par défaut + ${customProducts.length} personnalisés)`);

    return products;
}

// Initialiser au chargement
reloadProducts();

// Rendre accessible globalement
window.defaultProducts = defaultProducts;
window.products = products;
window.reloadProducts = reloadProducts;