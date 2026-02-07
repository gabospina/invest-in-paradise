// components/LanguageSwitcher.tsx
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
    const currentPath = window.location.pathname;

    const getAlternateLanguageLink = () => {
        if (currentPath === '/for-families') return '/pour-familles';
        if (currentPath === '/pour-familles') return '/for-families';
        return currentPath;
    };

    const getAlternateLanguageText = () => {
        if (currentPath === '/for-families') return 'Français';
        if (currentPath === '/pour-familles') return 'English';
        return 'Language';
    };

    return (
        <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-400" />
            <Link
                to={getAlternateLanguageLink()}
                className="text-sm text-gray-600 hover:text-teal-700 transition-colors"
            >
                {getAlternateLanguageText()}
            </Link>
        </div>
    );
}