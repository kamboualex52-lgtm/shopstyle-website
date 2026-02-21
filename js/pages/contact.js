// ==================== PAGE CONTACT ====================

function showContact() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    hideAllSections();

    const contactHTML = `
        <div class="contact-section" style="padding: 40px 20px; max-width: 1000px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 40px; color: var(--primary); font-size: 32px;">Contactez-Nous</h2>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px;">
                <!-- Informations de contact -->
                <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: var(--shadow);">
                    <h3 style="color: var(--primary); margin-bottom: 25px;">📞 Informations de Contact</h3>

                    <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px; display: flex; align-items: center;">
                        <div style="background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div>
                            <div style="font-weight: bold;">Téléphone</div>
                            <div>+242 06 844 8698</div>
                        </div>
                    </div>

                    <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px; display: flex; align-items: center;">
                        <div style="background: #25D366; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <i class="fab fa-whatsapp"></i>
                        </div>
                        <div>
                            <div style="font-weight: bold;">WhatsApp</div>
                            <div>+242 06 844 8698</div>
                        </div>
                    </div>

                    <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px; display: flex; align-items: center;">
                        <div style="background: var(--secondary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div>
                            <div style="font-weight: bold;">Email</div>
                            <div>frediadaniella@gmail.com</div>
                        </div>
                    </div>

                    <div style="padding: 15px; background: #f8f9fa; border-radius: 10px; display: flex; align-items: center;">
                        <div style="background: var(--warning); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <div style="font-weight: bold;">Adresse</div>
                            <div>Pointe-Noire, République du Congo</div>
                        </div>
                    </div>
                </div>

                <!-- Horaires -->
                <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: var(--shadow);">
                    <h3 style="color: var(--primary); margin-bottom: 25px;">🕒 Horaires d'Ouverture</h3>

                    <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
                        <span>Lundi - Vendredi</span>
                        <span style="font-weight: bold; color: var(--primary);">8h00 - 18h00</span>
                    </div>
                    <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
                        <span>Samedi</span>
                        <span style="font-weight: bold; color: var(--primary);">9h00 - 16h00</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span>Dimanche</span>
                        <span style="font-weight: bold; color: #dc3545;">Fermé</span>
                    </div>

                    <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-radius: 10px;">
                        <div style="color: #856404;">
                            <strong>💡 Conseil :</strong> Pour une réponse rapide, contactez-nous via WhatsApp !
                        </div>
                    </div>
                </div>
            </div>

            <!-- Actions -->
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: var(--shadow); text-align: center;">
                <h3 style="color: var(--primary); margin-bottom: 30px;">📍 Contactez-Nous Directement</h3>

                <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                    <button class="btn" onclick="openWhatsAppContact()" style="background: #25D366; padding: 15px 30px;">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                    <button class="btn" onclick="makePhoneCall()" style="background: var(--primary); padding: 15px 30px;">
                        <i class="fas fa-phone"></i> Appeler
                    </button>
                    <button class="btn" onclick="sendEmail()" style="background: var(--secondary); padding: 15px 30px;">
                        <i class="fas fa-envelope"></i> Email
                    </button>
                </div>
            </div>
        </div>
    `;

    grid.innerHTML = contactHTML;
    updatePageTitle('Contact');
}