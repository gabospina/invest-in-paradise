// client/src/pages/ForFamilies.tsx
import { Link } from "react-router-dom";
import { ChevronRight, Baby, Palmtree, MapPin, CheckCircle2, ExternalLink, Heart, Sun, Waves, Umbrella, Coffee } from "lucide-react";
import { SimpleOpenStreetMap } from "@/components/SimpleOpenStreetMap";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

/**
 * DONNÉES DES ATTRACTIONS FAMILIALES
 * Intégrées avec les coordonnées pour la carte et les détails dans la barre latérale
 */
const attractions = [
    {
        name: "SeaQuarium Punta Cana",
        lat: 18.5122,
        lng: -68.3955,
        type: 'attraction' as const,
        description: "Découvrez le monde sous-marin.",
        website: "https://seaquariumpuntacana.com/en/",
        image: "/images/families-SeaQuarium.png"
    },
    {
        name: "Dolphin Discovery",
        lat: 18.5714,
        lng: -68.3752,
        type: 'attraction' as const,
        description: "Parc marin interactif où les familles peuvent nager avec les dauphins et vivre des rencontres océaniques inoubliables.",
        website: "https://www.dolphindiscovery.com",
        image: "/images/families-Dolphin.png"
    },
    {
        name: "Parc Écologique Indigenous Eyes",
        lat: 18.5105,
        lng: -68.3742,
        type: 'attraction' as const,
        description: "Réserve naturelle comportant plusieurs cenotes, sentiers de randonnée et piscines naturelles vierges entourées de forêt tropicale.",
        website: "https://puntacana.org/es/medioambiente/reserva-ecologica-ojos-indigenas",
        image: "/images/families-ojosIndigenas.png"
    },
    {
        name: "Aventures en Tyrolienne",
        lat: 18.6432,
        lng: -68.4521,
        type: 'attraction' as const,
        description: "Visites passionnantes dans la canopée à travers les forêts tropicales avec plusieurs parcours de tyrolienne adaptés à différents niveaux de compétence.",
        website: "https://www.runnersadventures.com/zip-lining/zip-line-adventures-monkeyland/",
        image: "/images/families-ZiplineAdventures.png"
    },
    {
        name: "Coco Bongo",
        lat: 18.5945,
        lng: -68.3812,
        type: 'attraction' as const,
        description: "Lieu de divertissement de premier ordre proposant des spectacles acrobatiques, des performances live et des divertissements adaptés aux familles.",
        website: "https://www.cocobongo.com/show/punta-cana/?lang=en",
        image: "/images/families-CocoBongo.png"
    },
    {
        name: "Choses à faire à Bavaro",
        lat: 18.5945,
        lng: -68.3812,
        type: 'attraction' as const,
        description: "Activités et divertissements de premier ordre pour toute la famille.",
        website: "https://www.godominicanrepublic.com/destinations/punta-cana",
        image: "/images/familes-goDR.png"
    },
];

// Fonction d'aide pour extraire le domaine d'une URL
const getDomainFromUrl = (url: string): string => {
    return url.replace(/^(https?:\/\/)/, '').split('/')[0];
};

export default function Families() {
    useSEO({
        title: "Vie Familiale à Punta Cana | Vie de Luxe Moderne",
        description: "Découvrez la vie familiale moderne avec des équipements de classe mondiale, la sécurité et l'éducation à Punta Cana. La destination caribéenne parfaite pour les familles.",
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white font-sans">
            {/* 1. SECTION HÉRO - Moderne et calme */}
            {/* In PourFamilles.tsx header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-100/50 shadow-sm">
                <nav className="container flex items-center justify-between py-5 px-4 md:px-6">
                    <Link to="/fr" className="text-2xl font-bold text-teal-700 tracking-tight hover:text-teal-800 transition-colors">
                        Invest in Paradise
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link to="/fr" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Accueil
                        </Link>
                        <Link to="/notre-histoire" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Notre Histoire
                        </Link>
                        <Link to="/pour-retires" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Pour Retraités
                        </Link>
                        <Link to="/pour-familles" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Pour Familles
                        </Link>
                        <Link to="/projet-villas" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Projet de Villas
                        </Link>
                        <Link to="/faq-fr" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            FAQ
                        </Link>
                        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                            <Link
                                to="/for-families"
                                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                                title="English"
                            >
                                EN
                            </Link>
                            <span className="text-gray-300">|</span>
                            <span className="text-xs text-teal-600 font-medium" title="Français (Actif)">
                                FR
                            </span>
                            <span className="text-gray-300">|</span>
                            <Link
                                to="/para-familias"
                                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                                title="Español"
                            >
                                ES
                            </Link>
                        </div>
                        <ContactModal trigger={
                            <button className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-2.5 rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium">
                                Contactez-nous
                            </button>
                        } />
                    </div>
                </nav>
            </header>

            <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/villa-pool-garden.jpg"
                        className="w-full h-full object-cover"
                        alt="Aventure familiale à Punta Cana"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <Heart className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Vie Familiale</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                        <span className="block">Vie Familiale</span>
                        <span className="font-medium">Moderne au Paradis</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Sécurité, éducation et aventures sans fin attendent votre famille à Punta Cana
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="#map-section"
                            className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white"
                        >
                            Voir Carte & Attractions
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. SECTION CARTE - Pleine largeur avec attractions en grille en dessous */}
            <section id="map-section" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Aventure pour <span className="font-medium text-teal-700">Tous les Âges</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Découvrez les parcs d'aventure, les réserves écologiques et les centres de divertissement familiaux les mieux notés
                        </p>
                    </div>

                    {/* Carte pleine largeur */}
                    <div className="mb-12">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl -z-10"></div>
                            <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-lg h-[600px] relative z-10">
                                <SimpleOpenStreetMap
                                    locations={attractions}
                                    zoomControl={true}
                                />
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-4 text-sm text-gray-500 justify-center">
                            <MapPin className="w-4 h-4" />
                            <span>Cliquez sur les marqueurs pour explorer les lieux. Zoomez pour voir les détails.</span>
                        </div>
                    </div>

                    {/* Grille des attractions familiales - En dessous de la carte */}
                    <div className="mt-16">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-tight">
                                Attractions <span className="font-medium text-teal-700">Familiales</span>
                            </h3>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Explorez les meilleures destinations et activités adaptées aux familles dans la région
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {attractions.map((place, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                                    onClick={() => window.open(place.website, '_blank')}
                                >
                                    {/* Section Image */}
                                    {place.image && (
                                        <div className="h-48 w-full overflow-hidden">
                                            <img
                                                src={place.image}
                                                alt={place.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    // Image de secours si elle n'existe pas
                                                    e.currentTarget.src = "/images/attraction-placeholder.jpg";
                                                }}
                                            />
                                        </div>
                                    )}

                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-100">
                                                {place.type}
                                            </span>
                                            <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-teal-50 transition-colors">
                                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-600" />
                                            </div>
                                        </div>
                                        <h4 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-teal-700 transition-colors">
                                            {place.name}
                                        </h4>
                                        <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                            {place.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <a
                                                href={place.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-gray-400 font-mono truncate max-w-[120px] hover:text-teal-600 transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                                title={place.website}
                                            >
                                                {getDomainFromUrl(place.website)}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SECTION STYLE DE VIE - Détendu et invitant */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full">
                                    <span className="text-teal-600 text-sm font-medium uppercase tracking-wide">Vie Axée sur la Famille</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                                    <span className="font-medium">Sécurité, Éducation & Divertissement</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    Punta Cana offre un mélange unique de sécurité, d'infrastructure moderne et de vie en plein air dynamique. Des écoles bilingues privées aux académies sportives de championnat, vos enfants auront accès aux meilleures ressources des Caraïbes.
                                </p>
                            </div>

                            <div className="space-y-5">
                                {[
                                    "Communautés fermées avec sécurité privée 24h/24",
                                    "Écoles internationales de premier ordre avec programme IB",
                                    "Soins pédiatriques modernes et installations médicales",
                                    "Pistes cyclables sécurisées et espaces extérieurs adaptés aux enfants"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-teal-200 transition-colors">
                                        <div className="p-2 bg-gradient-to-r from-teal-50 to-green-50 rounded-lg">
                                            <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                        </div>
                                        <span className="font-medium text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Grille de cartes de fonctionnalités */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FeatureCard
                                icon={<Baby className="w-6 h-6" />}
                                title="Sécurité des Enfants"
                                desc="Vivre dans des communautés fermées offre une tranquillité d'esprit aux parents."
                                color="from-teal-50 to-emerald-50"
                                iconColor="text-teal-600"
                            />
                            <FeatureCard
                                icon={<Palmtree className="w-6 h-6" />}
                                title="Divertissement Tropical"
                                desc="Des week-ends sans fin dans les parcs aquatiques et sur les plages immaculées."
                                color="from-amber-50 to-orange-50"
                                iconColor="text-amber-600"
                            />
                            <FeatureCard
                                icon={<Sun className="w-6 h-6" />}
                                title="Éducation de Qualité"
                                desc="Accès aux meilleures écoles internationales avec programme IB."
                                color="from-blue-50 to-cyan-50"
                                iconColor="text-blue-600"
                            />
                            <FeatureCard
                                icon={<Coffee className="w-6 h-6" />}
                                title="Vie Communautaire"
                                desc="Communauté internationale dynamique avec des événements adaptés aux familles."
                                color="from-violet-50 to-purple-50"
                                iconColor="text-violet-600"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SECTION APPEL À L'ACTION - Douce et invitante */}
            <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
                <div className="container px-4 md:px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <Umbrella className="w-8 h-8 text-teal-600" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Prêt à Créer Votre<br />
                            <span className="font-medium text-teal-700">Paradis Familial</span> ?
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Rejoignez les familles du monde entier qui ont trouvé leur maison idéale à Punta Cana. Laissez-nous vous aider à créer des souvenirs durables au paradis.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="tel:+18001234567"
                                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
                            >
                                <div className="p-1.5 bg-teal-50 rounded-full group-hover:bg-teal-100">
                                    {/* Icône téléphone */}
                                </div>
                                Appeler : (800) 123-4567
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PIED DE PAGE - Propre et simple */}
            <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-300"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-200"></div>
                        </div>
                        <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
                        <p className="text-gray-600 mb-2">Votre Villas Auger Punta Cana pour la vie familiale à Punta Cana</p>
                        <p className="text-sm text-gray-500">Bavaro, Punta Cana, République Dominicaine</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-8">
                        <div className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Villas Auger Punta Cana. Tous droits réservés.
                        </div>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <Link to="/terms" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                                Termes et Conditions
                            </Link>
                            <Link to="/privacy" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                                Politique de Confidentialité
                            </Link>
                            <Link to="/faq" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

/**
 * COMPOSANT CARTE DE FONCTIONNALITÉ
 */
function FeatureCard({ icon, title, desc, color, iconColor }: {
    icon: any,
    title: string,
    desc: string,
    color: string,
    iconColor: string
}) {
    return (
        <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                <div className={iconColor}>
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-3 group-hover:text-teal-700 transition-colors">
                {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
                {desc}
            </p>
        </div>
    );
}