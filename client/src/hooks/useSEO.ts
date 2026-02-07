import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
}

export function useSEO({ title, description, keywords }: SEOProps) {
    useEffect(() => {
        document.title = `${title} | Invest in Paradise`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute('content', description);

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords && keywords) metaKeywords.setAttribute('content', keywords);

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);
    }, [title, description, keywords]);
}