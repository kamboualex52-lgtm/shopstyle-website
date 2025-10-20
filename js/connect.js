// ==================== SYSTÈME D'AUTHENTIFICATION ====================

// Données utilisateurs (en production, utiliser une base de données)
let users = JSON.parse(localStorage.getItem('kwad_users')) || [];
let currentUser = JSON.parse(localStorage.getItem('kwad_current_user')) || null;

// Initialisation de l'authentification
function initAuth() {
    console.log('🔄 Initialisation du système d\'authentification...');
    
    // Vérifier si un utilisateur est connecté
    if (currentUser) {
        showUserMenu();
    }
    
    // Événements pour les modals d'authentification
    document.getElementById('login-btn').addEventListener('click', (e) => {
        e.preventDefault();
        showLoginModal();
    });
    
    document.getElementById('register-btn').addEventListener('click', (e) => {
        e.preventDefault();
        showRegisterModal();
    });
    
    document.getElementById('switch-to-register').addEventListener('click', (e) => {
        e.preventDefault();
        hideLoginModal();
        showRegisterModal();
    });
    
    document.getElementById('switch-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        hideRegisterModal();
        showLoginModal();
    });
    
    // Fermeture des modals
    document.querySelectorAll('.close-auth').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllAuthModals();
        });
    });
    
    // Soumission des formulaires
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    
    // Déconnexion
    document.getElementById('logout-btn').addEventListener('click', handleLogout);
    
    // Lien vers le compte
    document.getElementById('user-profile').addEventListener('click', (e) => {
        e.preventDefault();
        showAccountPage();
    });
    
    console.log('✅ Système d\'authentification initialisé');
}

// Afficher le modal de connexion
function showLoginModal() {
    document.getElementById('login-modal').style.display = 'flex';
    document.getElementById('login-email').focus();
}

// Afficher le modal d'inscription
function showRegisterModal() {
    document.getElementById('register-modal').style.display = 'flex';
    document.getElementById('register-name').focus();
}

// Cacher tous les modals d'authentification
function hideAllAuthModals() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('register-modal').style.display = 'none';
    // Réinitialiser les formulaires
    document.getElementById('login-form').reset();
    document.getElementById('register-form').reset();
}

// Gestion de la connexion
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Validation
    if (!email || !password) {
        showNotification('Veuillez remplir tous les champs', 'error');
        return;
    }
    
    // Rechercher l'utilisateur
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('kwad_current_user', JSON.stringify(currentUser));
        showUserMenu();
        hideAllAuthModals();
        showNotification(`Bienvenue ${user.name} !`, 'success');
        
        // Rediriger vers la page compte si demandé
        if (window.location.hash === '#account') {
            showAccountPage();
        }
    } else {
        showNotification('Email ou mot de passe incorrect', 'error');
    }
}

// Gestion de l'inscription
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    // Validation
    if (!name || !email || !phone || !password || !confirmPassword) {
        showNotification('Veuillez remplir tous les champs', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Les mots de passe ne correspondent pas', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Le mot de passe doit contenir au moins 6 caractères', 'error');
        return;
    }
    
    // Vérifier si l'email existe déjà
    if (users.find(u => u.email === email)) {
        showNotification('Cet email est déjà utilisé', 'error');
        return;
    }
    
    // Créer le nouvel utilisateur
    const newUser = {
        id: generateUserId(),
        name: name,
        email: email,
        phone: phone,
        password: password,
        registrationDate: new Date().toISOString(),
        orders: [],
        wishlist: [],
        addresses: []
    };
    
    users.push(newUser);
    localStorage.setItem('kwad_users', JSON.stringify(users));
    
    // Connecter automatiquement l'utilisateur
    currentUser = newUser;
    localStorage.setItem('kwad_current_user', JSON.stringify(currentUser));
    
    showUserMenu();
    hideAllAuthModals();
    showNotification(`Compte créé avec succès ! Bienvenue ${name}`, 'success');
    showAccountPage();
}

// Générer un ID utilisateur
function generateUserId() {
    return 'user_' + Math.random().toString(36).substr(2, 9);
}

// Afficher le menu utilisateur
function showUserMenu() {
    document.getElementById('auth-buttons').style.display = 'none';
    document.getElementById('user-menu').style.display = 'flex';
    document.getElementById('username-display').textContent = currentUser.name.split(' ')[0]; // Premier prénom
}

// Afficher les boutons d'authentification
function showAuthButtons() {
    document.getElementById('auth-buttons').style.display = 'flex';
    document.getElementById('user-menu').style.display = 'none';
}

// Gestion de la déconnexion
function handleLogout(e) {
    e.preventDefault();
    
    currentUser = null;
    localStorage.removeItem('kwad_current_user');
    showAuthButtons();
    showNotification('Vous êtes déconnecté', 'success');
    showHomePage();
}

// Vérifier si l'utilisateur est connecté
function isUserLoggedIn() {
    return currentUser !== null;
}

// ==================== PAGES COMPTE UTILISATEUR ====================

// Page Mon Compte - Version améliorée avec onglets
function showAccountPage() {
    if (!isUserLoggedIn()) {
        showLoginModal();
        return;
    }
    
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    const accountHTML = `
        <div class="account-section" style="display: block;">
            <div class="account-container">
                <div class="account-header">
                    <h2 style="color: var(--primary); margin-bottom: 10px;">👤 Mon Compte</h2>
                    <p style="color: var(--gray);">Bienvenue, ${currentUser.name}</p>
                </div>

                <div class="account-tabs">
                    <button class="tab-btn active" data-tab="profile">Profil</button>
                    <button class="tab-btn" data-tab="orders">Commandes</button>
                    <button class="tab-btn" data-tab="wishlist">Favoris</button>
                    <button class="tab-btn" data-tab="addresses">Adresses</button>
                </div>

                <!-- Onglet Profil -->
                <div class="tab-content active" id="profile-tab">
                    <div class="account-card">
                        <h3 style="color: var(--secondary); margin-bottom: 20px;">Informations Personnelles</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                            <div>
                                <label style="font-weight: bold; color: var(--gray);">Nom complet</label>
                                <p>${currentUser.name}</p>
                            </div>
                            <div>
                                <label style="font-weight: bold; color: var(--gray);">Email</label>
                                <p>${currentUser.email}</p>
                            </div>
                            <div>
                                <label style="font-weight: bold; color: var(--gray);">Téléphone</label>
                                <p>${currentUser.phone}</p>
                            </div>
                            <div>
                                <label style="font-weight: bold; color: var(--gray);">Membre depuis</label>
                                <p>${new Date(currentUser.registrationDate).toLocaleDateString('fr-FR')}</p>
                            </div>
                        </div>
                        <button class="btn" style="margin-top: 20px;" onclick="editProfile()">
                            <i class="fas fa-edit"></i> Modifier le profil
                        </button>
                    </div>
                </div>

                <!-- Onglet Commandes -->
                <div class="tab-content" id="orders-tab">
                    <div class="account-card">
                        <h3 style="color: var(--secondary); margin-bottom: 20px;">Historique des Commandes</h3>
                        ${currentUser.orders && currentUser.orders.length > 0 ? 
                            currentUser.orders.map(order => `
                                <div class="order-item">
                                    <div>
                                        <strong>Commande #${order.id}</strong>
                                        <p style="color: var(--gray); margin: 5px 0;">${new Date(order.date).toLocaleDateString('fr-FR')}</p>
                                        <p>${order.items.length} article(s) - ${order.total.toLocaleString()} FCFA</p>
                                    </div>
                                    <div>
                                        <span class="order-status status-${order.status}">${getStatusText(order.status)}</span>
                                    </div>
                                </div>
                            `).join('') : 
                            '<p style="text-align: center; color: var(--gray); padding: 40px;">Aucune commande pour le moment</p>'
                        }
                    </div>
                </div>

                <!-- Onglet Favoris -->
                <div class="tab-content" id="wishlist-tab">
                    <div class="account-card">
                        <h3 style="color: var(--secondary); margin-bottom: 20px;">Mes Favoris</h3>
                        <div class="wishlist-grid">
                            ${currentUser.wishlist && currentUser.wishlist.length > 0 ? 
                                currentUser.wishlist.map(productId => {
                                    const product = products.find(p => p.id === productId);
                                    return product ? `
                                        <div class="product-card wishlist-item">
                                            <div class="product-image">
                                                <img src="${product.image}" alt="${product.name}">
                                            </div>
                                            <div class="product-info">
                                                <h3 class="product-title">${product.name}</h3>
                                                <div class="product-price">${product.price.toLocaleString()} FCFA</div>
                                                <button class="btn" onclick="addToCart(${product.id})">Ajouter au panier</button>
                                            </div>
                                            <button class="remove-wishlist" onclick="removeFromWishlist(${product.id})">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                    ` : '';
                                }).join('') : 
                                '<p style="grid-column: 1/-1; text-align: center; color: var(--gray); padding: 40px;">Aucun produit dans vos favoris</p>'
                            }
                        </div>
                    </div>
                </div>

                <!-- Onglet Adresses -->
                <div class="tab-content" id="addresses-tab">
                    <div class="account-card">
                        <h3 style="color: var(--secondary); margin-bottom: 20px;">Mes Adresses</h3>
                        ${currentUser.addresses && currentUser.addresses.length > 0 ? 
                            currentUser.addresses.map((address, index) => `
                                <div style="border: 1px solid #eee; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                                    <h4>${address.name}</h4>
                                    <p>${address.street}</p>
                                    <p>${address.city}, ${address.postalCode}</p>
                                    <p>${address.phone}</p>
                                    ${address.isDefault ? '<span style="background: var(--success); color: white; padding: 2px 8px; border-radius: 10px; font-size: 12px;">Par défaut</span>' : ''}
                                </div>
                            `).join('') : 
                            '<p style="text-align: center; color: var(--gray); padding: 20px;">Aucune adresse enregistrée</p>'
                        }
                        <button class="btn" onclick="showAddAddressForm()">
                            <i class="fas fa-plus"></i> Ajouter une adresse
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    grid.innerHTML = accountHTML;
    initAccountTabs();
    updatePageTitle('Mon Compte - KWAD');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialiser les onglets du compte
function initAccountTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Désactiver tous les onglets
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Activer l'onglet courant
            btn.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Obtenir le texte du statut de commande
function getStatusText(status) {
    const statusMap = {
        'pending': 'En attente',
        'confirmed': 'Confirmée',
        'shipped': 'Expédiée',
        'delivered': 'Livrée',
        'cancelled': 'Annulée'
    };
    return statusMap[status] || status;
}

// Ajouter aux favoris
function addToWishlist(productId) {
    if (!isUserLoggedIn()) {
        showNotification('Veuillez vous connecter pour ajouter aux favoris', 'error');
        showLoginModal();
        return;
    }
    
    if (!currentUser.wishlist) {
        currentUser.wishlist = [];
    }
    
    if (!currentUser.wishlist.includes(productId)) {
        currentUser.wishlist.push(productId);
        updateUserData();
        showNotification('Produit ajouté aux favoris', 'success');
    } else {
        showNotification('Produit déjà dans les favoris', 'info');
    }
}

// Retirer des favoris
function removeFromWishlist(productId) {
    if (currentUser.wishlist) {
        currentUser.wishlist = currentUser.wishlist.filter(id => id !== productId);
        updateUserData();
        showNotification('Produit retiré des favoris', 'success');
        // Recharger l'onglet favoris si actif
        if (document.getElementById('wishlist-tab')?.classList.contains('active')) {
            showAccountPage();
        }
    }
}

// Mettre à jour les données utilisateur
function updateUserData() {
    // Mettre à jour l'utilisateur dans le tableau des utilisateurs
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('kwad_users', JSON.stringify(users));
        localStorage.setItem('kwad_current_user', JSON.stringify(currentUser));
    }
}

// Éditer le profil
function editProfile() {
    // Implémentation simplifiée - en production, créer un modal d'édition
    const newName = prompt('Nouveau nom complet:', currentUser.name);
    const newPhone = prompt('Nouveau téléphone:', currentUser.phone);
    
    if (newName && newPhone) {
        currentUser.name = newName;
        currentUser.phone = newPhone;
        updateUserData();
        showNotification('Profil mis à jour avec succès', 'success');
        showAccountPage();
    }
}

// ==================== MODIFICATIONS DES FONCTIONS EXISTANTES ====================

// Mettre à jour la fonction showNotification pour supporter les types
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const backgroundColor = type === 'error' ? '#e74c3c' : type === 'warning' ? '#f39c12' : '#27ae60';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${backgroundColor};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: var(--shadow);
        z-index: 3000;
        transition: all 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Mettre à jour la fonction initFooterLinks pour utiliser le nouveau système
function initFooterLinks() {
    console.log('🔄 Initialisation des liens du footer...');

    const footerLinks = document.querySelectorAll('.footer-column a, footer a');

    footerLinks.forEach((link) => {
        const linkText = link.textContent.trim();

        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            console.log(`🎯 Clic sur le lien: "${linkText}"`);

            if (linkText.includes('Conditions générales') || linkText === 'Conditions générales') {
                showTerms();
            }
            else if (linkText.includes('Politique de confidentialité') || linkText === 'Politique de confidentialité') {
                showPrivacyPolicy();
            }
            else if (linkText.includes('Livraison')) {
                showDeliveryInfo();
            }
            else if (linkText.includes('Retour')) {
                showReturnPolicy();
            }
            else if (linkText.includes('À propos')) {
                showAbout();
            }
            else if (linkText.includes('Mon compte')) {
                showAccountPage(); // Utilise la nouvelle fonction
            }
            else if (linkText.includes('Historique de commandes')) {
                if (isUserLoggedIn()) {
                    showAccountPage();
                    // Activer l'onglet commandes
                    setTimeout(() => {
                        document.querySelector('[data-tab="orders"]').click();
                    }, 100);
                } else {
                    showLoginModal();
                }
            }
            else if (linkText.includes('Liste de souhaits') || linkText.includes('Favoris')) {
                if (isUserLoggedIn()) {
                    showAccountPage();
                    // Activer l'onglet favoris
                    setTimeout(() => {
                        document.querySelector('[data-tab="wishlist"]').click();
                    }, 100);
                } else {
                    showLoginModal();
                }
            }
            else if (linkText.includes('Newsletter')) {
                showNewsletterPage();
            }
            else if (linkText.includes('Contact')) {
                showContact();
            }
            else {
                showHomePage();
            }
        });
    });

    console.log(`✅ ${footerLinks.length} liens du footer initialisés`);
}

// Mettre à jour la fonction d'initialisation principale
document.addEventListener('DOMContentLoaded', function() {
    initCategories();
    initProducts();
    initEventListeners();
    initAuth(); // Initialiser l'authentification
    initFooterLinks();
    updateCartCount();
    
    // Vérifier si on doit rediriger vers le compte
    if (window.location.hash === '#account' && isUserLoggedIn()) {
        showAccountPage();
    }
});
