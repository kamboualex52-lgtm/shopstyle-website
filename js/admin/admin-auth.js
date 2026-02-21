// ==================== AUTHENTIFICATION ADMIN ====================

function initAdminAuth() {
    // Créer le bouton admin dans le header
    addAdminButton();

    // Vérifier si déjà connecté
    checkAdminSession();
}

function addAdminButton() {
    const userActions = document.querySelector('.user-actions');
    if (!userActions) return;

    // Vérifier si le bouton existe déjà
    if (document.getElementById('admin-login-btn')) return;

    const adminBtn = document.createElement('a');
    adminBtn.href = '#';
    adminBtn.id = 'admin-login-btn';
    adminBtn.className = 'admin-btn';
    adminBtn.innerHTML = '<i class="fas fa-lock"></i> Admin';
    adminBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showAdminLoginModal();
    });

    userActions.appendChild(adminBtn);
}

function showAdminLoginModal() {
    // Créer le modal de connexion
    const modal = document.createElement('div');
    modal.className = 'admin-modal';
    modal.id = 'admin-login-modal';
    modal.innerHTML = `
        <div class="admin-modal-content">
            <div class="admin-modal-header">
                <h2><i class="fas fa-lock"></i> Connexion Administrateur</h2>
                <button class="close-admin-modal">&times;</button>
            </div>
            <div class="admin-modal-body">
                <form id="admin-login-form">
                    <div class="form-group">
                        <label><i class="fas fa-user"></i> Nom d'utilisateur</label>
                        <input type="text" id="admin-username" placeholder="Entrez votre nom d'utilisateur" required>
                    </div>
                    <div class="form-group">
                        <label><i class="fas fa-key"></i> Mot de passe</label>
                        <input type="password" id="admin-password" placeholder="Entrez votre mot de passe" required>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn btn-success">
                            <i class="fas fa-sign-in-alt"></i> Se connecter
                        </button>
                        <button type="button" class="btn btn-secondary" onclick="closeAdminModal()">
                            Annuler
                        </button>
                    </div>
                </form>
                <div class="admin-demo-credentials">
                    <p><small>Démo: admin / admin123</small></p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Gérer la fermeture
    modal.querySelector('.close-admin-modal').addEventListener('click', closeAdminModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeAdminModal();
    });

    // Gérer la soumission
    document.getElementById('admin-login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        handleAdminLogin();
    });
}

function closeAdminModal() {
    const modal = document.getElementById('admin-login-modal');
    if (modal) modal.remove();
}

function handleAdminLogin() {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Vérifier les identifiants
    const user = adminUsers.find(u => u.username === username && u.password === password);

    if (user) {
        currentAdmin = user;
        isAdminLoggedIn = true;

        // Sauvegarder la session
        sessionStorage.setItem('kwad_admin', JSON.stringify({
            id: user.id,
            username: user.username,
            role: user.role
        }));

        closeAdminModal();
        showNotification(`Bienvenue ${user.username} !`, 'success');
        showAdminDashboard();
    } else {
        showNotification('Identifiants incorrects', 'error');
    }
}

function checkAdminSession() {
    const saved = sessionStorage.getItem('kwad_admin');
    if (saved) {
        const userData = JSON.parse(saved);
        currentAdmin = adminUsers.find(u => u.id === userData.id);
        isAdminLoggedIn = true;

        // Ajouter le bouton de déconnexion
        updateAdminButton();
    }
}

function updateAdminButton() {
    const adminBtn = document.getElementById('admin-login-btn');
    if (adminBtn) {
        adminBtn.innerHTML = '<i class="fas fa-user-cog"></i> Dashboard';
        adminBtn.removeEventListener('click', showAdminLoginModal);
        adminBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showAdminDashboard();
        });
    }
}

function adminLogout() {
    currentAdmin = null;
    isAdminLoggedIn = false;
    sessionStorage.removeItem('kwad_admin');

    const adminBtn = document.getElementById('admin-login-btn');
    if (adminBtn) {
        adminBtn.innerHTML = '<i class="fas fa-lock"></i> Admin';
        adminBtn.removeEventListener('click', showAdminDashboard);
        adminBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showAdminLoginModal();
        });
    }

    showNotification('Déconnexion réussie', 'info');
    showHomePage();
}