// src/config/whatsapp.ts

export const WHATSAPP_CONFIG = {
    // Your real WhatsApp number (no spaces, no +, with country code)
    phoneNumber: "15142367959",

    // Default messages in different languages
    messages: {
        en: "Hello! I am interested in learning more about the luxury villas in Punta Cana.",
        fr: "Bonjour ! Je suis intéressé(e) à en savoir plus sur les villas de luxe à Punta Cana.",
        es: "¡Hola! Estoy interesado/a en obtener más información sobre las villas de lujo en Punta Cana."
    },

    // Get WhatsApp URL in different formats
    getUrl: (language: 'en' | 'fr' | 'es' = 'en', format: 'api' | 'wame' = 'api') => {
        const message = encodeURIComponent(WHATSAPP_CONFIG.messages[language]);
        const phone = WHATSAPP_CONFIG.phoneNumber;

        if (format === 'wame') {
            return `https://wa.me/${phone}?text=${message}`;
        } else {
            // api.whatsapp.com format (what you're currently seeing)
            return `https://api.whatsapp.com/send/?phone=${phone}&text=${message}&type=phone_number&app_absent=0`;
        }
    },

    // Shortcut methods
    get apiUrl() {
        return WHATSAPP_CONFIG.getUrl('en', 'api');
    },

    get waMeUrl() {
        return WHATSAPP_CONFIG.getUrl('en', 'wame');
    }
};