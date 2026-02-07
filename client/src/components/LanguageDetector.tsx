// components/LanguageDetector.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LanguageDetector() {
    const navigate = useNavigate();

    useEffect(() => {
        // Check for stored language preference
        const savedLang = localStorage.getItem('preferred-language');

        if (savedLang) {
            if (savedLang === 'fr' && window.location.pathname === '/for-families') {
                navigate('/pour-familles', { replace: true });
            } else if (savedLang === 'en' && window.location.pathname === '/pour-familles') {
                navigate('/for-families', { replace: true });
            }
        } else {
            // Detect browser language
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'fr' && window.location.pathname === '/for-families') {
                navigate('/pour-familles', { replace: true });
            }
        }
    }, [navigate]);

    return null;
}