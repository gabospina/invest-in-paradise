import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    // Replace with your actual WhatsApp number (include country code, no + or spaces)
    const phoneNumber = "18095551234";
    const message = encodeURIComponent("Hello! I am interested in learning more about the luxury villas in Punta Cana.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors"
            aria-label="Chat on WhatsApp"
        >
            {/* Heartbeat pulse effect */}
            <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 rounded-full bg-[#25D366] opacity-50"
            />
            <MessageCircle className="w-8 h-8 relative z-10" fill="currentColor" />
        </motion.a>
    );
}