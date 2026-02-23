// ==================== PAGE CONTACT ====================

function showContact() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    const contactHTML = `
        <div class="contact-section" style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 50px; color: var(--primary); font-size: 36px; font-weight: 600;">
                <i class="fas fa-headset" style="margin-right: 10px;"></i>Contactez-Nous
            </h2>

            <!-- Grille centrée avec largeur fixe -->
            <div style="display: flex; justify-content: center; margin-bottom: 50px;">
                <div style="display: grid; grid-template-columns: repeat(2, minmax(400px, 500px)); gap: 40px; justify-content: center;">

                    <!-- INFORMATIONS DE CONTACT -->
                    <div style="background: white; padding: 35px; border-radius: 20px; box-shadow: var(--shadow); transition: transform 0.3s ease; width: 100%;">
                        <h3 style="color: var(--primary); margin-bottom: 30px; font-size: 24px; display: flex; align-items: center; gap: 10px; border-bottom: 2px solid var(--primary); padding-bottom: 15px;">
                            <i class="fas fa-address-card"></i> Nos Coordonnées
                        </h3>

                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <!-- Téléphone -->
                            <div style="display: flex; align-items: center; padding: 18px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-radius: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; flex-shrink: 0;">
                                    <i class="fas fa-phone-alt" style="font-size: 20px;"></i>
                                </div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 600; color: var(--secondary); font-size: 16px; margin-bottom: 5px;">Téléphone Principal</div>
                                    <div style="color: var(--primary); font-size: 20px; font-weight: 600;">+242 06 844 8698</div>
                                </div>
                            </div>

                            <!-- WhatsApp -->
                            <div style="display: flex; align-items: center; padding: 18px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-radius: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                <div style="background: #25D366; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; flex-shrink: 0;">
                                    <i class="fab fa-whatsapp" style="font-size: 24px;"></i>
                                </div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 600; color: var(--secondary); font-size: 16px; margin-bottom: 5px;">WhatsApp Business</div>
                                    <div style="color: #25D366; font-size: 20px; font-weight: 600;">+242 06 844 8698</div>
                                </div>
                            </div>

                            <!-- Email -->
                            <div style="display: flex; align-items: center; padding: 18px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-radius: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                <div style="background: var(--secondary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; flex-shrink: 0;">
                                    <i class="fas fa-envelope" style="font-size: 20px;"></i>
                                </div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 600; color: var(--secondary); font-size: 16px; margin-bottom: 5px;">Email</div>
                                    <div style="color: var(--secondary); font-size: 18px;">frediadaniella@gmail.com</div>
                                </div>
                            </div>

                            <!-- Adresse -->
                            <div style="display: flex; align-items: center; padding: 18px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-radius: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                <div style="background: var(--warning); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; flex-shrink: 0;">
                                    <i class="fas fa-map-marker-alt" style="font-size: 20px;"></i>
                                </div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 600; color: var(--secondary); font-size: 16px; margin-bottom: 5px;">Adresse</div>
                                    <div style="color: #666; font-size: 18px;">Pointe-Noire, République du Congo</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- HORAIRES D'OUVERTURE -->
                    <div style="background: white; padding: 35px; border-radius: 20px; box-shadow: var(--shadow); transition: transform 0.3s ease; width: 100%;">
                        <h3 style="color: var(--primary); margin-bottom: 30px; font-size: 24px; display: flex; align-items: center; gap: 10px; border-bottom: 2px solid var(--primary); padding-bottom: 15px;">
                            <i class="fas fa-clock"></i> Horaires d'Ouverture
                        </h3>

                        <div style="display: flex; flex-direction: column; gap: 20px;">
                            <!-- Lundi - Vendredi -->
                            <div style="display: flex; align-items: center; justify-content: space-between; padding: 15px 20px; background: #f8f9fa; border-radius: 12px; border-left: 4px solid var(--primary);">
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <div style="background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                        <i class="fas fa-calendar-day"></i>
                                    </div>
                                    <div>
                                        <div style="font-weight: 600; color: var(--secondary); font-size: 16px;">Lundi - Vendredi</div>
                                        <div style="color: #666; font-size: 13px;">Jours ouvrés</div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-weight: 700; color: var(--primary); font-size: 18px;">8h00 - 18h00</div>
                                    <div style="color: #27ae60; font-size: 12px;">✓ Service continu</div>
                                </div>
                            </div>

                            <!-- Samedi -->
                            <div style="display: flex; align-items: center; justify-content: space-between; padding: 15px 20px; background: #f8f9fa; border-radius: 12px; border-left: 4px solid #f39c12;">
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <div style="background: #f39c12; color: white; width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                        <i class="fas fa-calendar-week"></i>
                                    </div>
                                    <div>
                                        <div style="font-weight: 600; color: var(--secondary); font-size: 16px;">Samedi</div>
                                        <div style="color: #666; font-size: 13px;">Week-end</div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-weight: 700; color: #f39c12; font-size: 18px;">9h00 - 16h00</div>
                                    <div style="color: #e67e22; font-size: 12px;">✓ Ouvert</div>
                                </div>
                            </div>

                            <!-- Dimanche -->
                            <div style="display: flex; align-items: center; justify-content: space-between; padding: 15px 20px; background: #f8f9fa; border-radius: 12px; border-left: 4px solid #e74c3c;">
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <div style="background: #e74c3c; color: white; width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                        <i class="fas fa-calendar-times"></i>
                                    </div>
                                    <div>
                                        <div style="font-weight: 600; color: var(--secondary); font-size: 16px;">Dimanche</div>
                                        <div style="color: #666; font-size: 13px;">Jour férié</div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-weight: 700; color: #e74c3c; font-size: 18px;">Fermé</div>
                                    <div style="color: #c0392b; font-size: 12px;">✗ Repos</div>
                                </div>
                            </div>

                            <!-- Informations supplémentaires -->
                            <div style="margin-top: 10px; padding: 15px; background: #e8f4f8; border-radius: 12px;">
                                <div style="display: flex; gap: 12px; align-items: center;">
                                    <div style="background: var(--info); color: white; width: 35px; height: 35px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                        <i class="fas fa-info-circle"></i>
                                    </div>
                                    <div style="font-size: 13px; color: #2c3e50;">
                                        <strong>Horaires spéciaux :</strong> Ouverture exceptionnelle les jours fériés de 10h à 14h.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Conseil -->
                        <div style="margin-top: 25px; padding: 18px; background: #fff3e0; border-radius: 12px; border-left: 4px solid #ff9800;">
                            <div style="display: flex; gap: 12px;">
                                <div style="color: #ff9800; font-size: 22px;">
                                    <i class="fas fa-lightbulb"></i>
                                </div>
                                <div>
                                    <div style="color: #e65100; font-weight: 600; font-size: 14px; margin-bottom: 5px;">💡 ASTUCE CONTACT</div>
                                    <div style="color: #5d4037; font-size: 13px;">
                                        Pour une réponse immédiate, utilisez WhatsApp ! Réponse moyenne < 5 min.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ACTIONS DE CONTACT - Centré -->
            <div style="display: flex; justify-content: center;">
                <div style="background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); padding: 40px; border-radius: 25px; box-shadow: var(--shadow); text-align: center; max-width: 900px; width: 100%;">
                    <h3 style="color: var(--secondary); margin-bottom: 20px; font-size: 26px;">
                        <i class="fas fa-comments" style="color: var(--primary); margin-right: 10px;"></i>
                        Contactez-Nous Directement
                    </h3>
                    <p style="color: #666; margin-bottom: 30px; font-size: 15px;">
                        Notre équipe est disponible pour répondre à toutes vos questions.
                    </p>

                    <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                        <button onclick="openWhatsAppContact()" class="contact-action-btn" style="background: #25D366; color: white; border: none; padding: 15px 30px; border-radius: 50px; font-size: 16px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);">
                            <i class="fab fa-whatsapp"></i>
                            WhatsApp
                        </button>
                        <button onclick="makePhoneCall()" class="contact-action-btn" style="background: var(--primary); color: white; border: none; padding: 15px 30px; border-radius: 50px; font-size: 16px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; box-shadow: 0 5px 15px rgba(230, 126, 34, 0.3);">
                            <i class="fas fa-phone-alt"></i>
                            Appeler
                        </button>
                        <button onclick="sendEmail()" class="contact-action-btn" style="background: var(--secondary); color: white; border: none; padding: 15px 30px; border-radius: 50px; font-size: 16px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; box-shadow: 0 5px 15px rgba(44, 62, 80, 0.3);">
                            <i class="fas fa-envelope"></i>
                            Email
                        </button>
                    </div>

                    <p style="margin-top: 20px; color: #999; font-size: 13px;">
                        <i class="fas fa-clock"></i> Réponse : < 1h (WhatsApp), < 24h (Email)
                    </p>
                </div>
            </div>
        </div>

        <style>
            .contact-action-btn {
                transition: all 0.3s ease;
                min-width: 140px;
            }
            .contact-action-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
            }
            @media (max-width: 900px) {
                .contact-section > div:first-of-type > div {
                    grid-template-columns: minmax(350px, 450px) !important;
                }
            }
        </style>
    `;

    grid.innerHTML = contactHTML;
    updatePageTitle('Contact - KWAD');
}