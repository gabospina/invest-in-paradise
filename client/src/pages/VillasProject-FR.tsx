// client/src/pages/ProjetVillas.tsx (Style Moderne - Section Carte Mise à Jour)
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Heart, MapPin, CheckCircle2, Video, FileText, ExternalLink, LandPlot, Compass, Ruler, Calendar, Eye, Building, DollarSign, Home, Users, Umbrella } from "lucide-react";
import { SimpleOpenStreetMap } from "@/components/SimpleOpenStreetMap";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

import { WHATSAPP_CONFIG } from '../config/whatsapp';

<a href={WHATSAPP_CONFIG.getUrl('fr', 'api')}>
    Contactez-nous sur WhatsApp
</a>

/**
 * SITE DE DÉVELOPPEMENT DES VILLAS AUGER - DONNÉES DU TERRAIN
 */
const developmentSite = {
    id: 1,
    name: "Site de Développement des Villas Auger",
    type: 'terrain' as const,
    description: "Site de développement de premier choix à Bavaro, Punta Cana où la future communauté de luxe des Villas Auger sera construite. Ce développement planifié comprendra des villas exclusives avec un design durable.",
    // price: "$28,000,000",
    totalArea: "249,000 m²",
    buildableArea: "240,000 m²",
    zoning: "Résidentiel",
    status: "Phase de Développement",
    lat: 18.701456,
    lng: -68.469290,
    features: [
        "Design Durable",
        "Communauté Planifiée",
        "Sécurité Fermée",
    ],
    address: "Bavaro, Punta Cana 23000, République Dominicaine",
    terrainType: "Terrain Légèrement",
    elevation: "15-25 mètres au-dessus du niveau de la mer",
    soilType: "Limon sableux (idéal pour la construction)",
    utilities: "Eau, Électricité",
    timeline: "Construction Phase 1 : Q2 2026 - Q4 2026"
};

/**
 * PHOTOS DU TERRAIN ET DE LA ZONE
 */
const terrainPhotos = [
    {
        id: 1,
        title: "Vue Aérienne du Site de Développement",
        description: "Parcelle de 249,000 m² à Bavaro, Punta Cana",
        image: "/images/villasAuger-developmentSite.png",
        category: "Aérien"
    },
    {
        id: 2,
        title: "Topographie du Site",
        description: "Terrain légèrement idéal pour la construction de villas",
        image: "/images/villasAuger-areaViewDevelopment.png",
        category: "Aérien"
    },
    {
        id: 3,
        title: "Préparation de la zone",
        description: "Accès proche à la célèbre plage de Bavaro",
        image: "/images/villasAuger-levelingGround-1.mp4",
        category: "Terrain",
        isVideo: true
    },
    {
        id: 4,
        title: "Infrastructure Environnante",
        description: "Routes et services publics existants sur le site de développement",
        image: "/images/villasAuger-levelingGroundAllsite.mp4",
        category: "Terrain",
        isVideo: true
    },
    {
        id: 5,
        title: "Renderings du Plan Directeur",
        description: "Plan conceptuel des Villas Auger",
        image: "/images/villasAuger-1stFloor-JL-191225.jpeg",
        category: "Design"
    },
    {
        id: 6,
        title: "Renderings du Plan Directeur",
        description: "Plan conceptuel des Villas Auger",
        image: "/images/villasAuger-2ndFloor-JL-191225.jpeg",
        category: "Design"
    },
    {
        id: 7,
        title: "Renderings du Plan Directeur",
        description: "Conceptual plans for Auger Villas",
        image: "/images/villasAuger-FrontalElevation.jpeg",
        category: "Design"
    }
];

/**
 * TYPES DE VILLAS PROPOSÉS (pour référence)
 */
const proposedVillaTypes = [
    {
        type: "Villa",
        size: "158 m²",
        bedrooms: "4",
        price: "235 000 $ usd",
        features: ["Piscine", "Maison Intelligente"],
        renderVideo: "/images/villasAuger-villa-Render.mp4", // Add this line
        blueprints: [
            {
                name: "Plans Architecturaux Complets",
                pdf: "/images/villaAuger-Architect-Blueprint.pdf",
                label: "PDF"
            }
        ]
    },
    {
        type: "Townhouse",
        size: "140 m²",
        bedrooms: "3",
        price: "$210,000 usd",
        features: ["Jardin Privé", "Maison Intelligente"],
        blueprints: [] // Pas de plans pour le townhouse encore
    },
];

export default function ProjetVillas() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
    useSEO({
        title: "Projet de Développement des Villas Auger | Invest in Paradise",
        description: "Découvrez l'avenir de la vie de luxe à Bavaro, Punta Cana. Explorez notre communauté planifiée avec des villas durables et des équipements modernes.",
    });

    // Filtrer les photos du terrain par catégorie
    const filteredPhotos = selectedCategory === "Tous"
        ? terrainPhotos
        : terrainPhotos.filter(photo => photo.category === selectedCategory);

    // Obtenir les catégories uniques
    const categories = ["Tous", ...Array.from(new Set(terrainPhotos.map(photo => photo.category)))];

    // Préparer l'emplacement pour la carte
    const mapLocations = [
        {
            name: "Site de Développement des Villas Auger",
            lat: 18.701456,
            lng: -68.469290,
            type: 'villa' as const,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white font-sans">
            {/* 1. EN-TÊTE - Moderne et calme */}
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
                        <Link to="/faq-fr" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            FAQ
                        </Link>
                        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                            <Link
                                to="/villas-project"
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
                                to="/proyecto-villas"
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

            {/* 2. SECTION HÉRO - Style Moderne */}
            <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-villa-exterior.jpg"
                        className="w-full h-full object-cover"
                        alt="Site de Développement des Villas Auger"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <Heart className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Développement Futur</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                        <span className="block">Villas Auger</span>
                        <span className="font-medium">Site de Développement</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Futur lieu des villas de luxe à Bavaro, Punta Cana
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="#map-section"
                            className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white"
                        >
                            Voir Emplacement du Site
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. SECTION CARTE & DÉTAILS DU SITE - Mise en page demandée */}
            <section id="map-section" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            <span className="font-medium text-teal-700">Aperçu</span> du Site de Développement
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Carte - 2/3 largeur */}
                        <div className="lg:col-span-2 relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl -z-10"></div>
                            <div className="rounded-xl overflow-hidden border border-blue-100 shadow-lg h-[500px] relative z-10">
                                <SimpleOpenStreetMap
                                    locations={mapLocations}
                                    center={[18.701456, -68.469290]}
                                    zoom={12}
                                    zoomControl={true}
                                />
                            </div>
                        </div>

                        {/* Détails compacts du site - 1/3 largeur */}
                        <div className="space-y-4">
                            {/* Carte Résumé du Site */}
                            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                                        <LandPlot className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-800">Résumé du Site</h3>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        {/* <span className="text-sm text-gray-600">Prix:</span>
                                        <span className="font-bold text-teal-700">{developmentSite.price}</span> */}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Superficie Totale:</span>
                                        <span className="font-medium text-gray-800">{developmentSite.totalArea}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Zonage:</span>
                                        <span className="font-medium text-gray-800">{developmentSite.zoning}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Statut:</span>
                                        <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded text-xs font-medium">
                                            {developmentSite.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Carte Actions Rapides */}
                            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                                <h4 className="text-sm font-medium text-gray-800 mb-3">Actions Rapides</h4>
                                <div className="space-y-2">
                                    <a
                                        href="/images/villasAuger-developmentSite.png"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors text-center"
                                    >
                                        Voir Plan du Site
                                    </a>
                                </div>
                            </div>

                            {/* Carte Résumé des Types de Villas */}
                            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                                <h4 className="text-sm font-medium text-gray-800 mb-3">Types de Villas</h4>
                                <div className="space-y-2">
                                    {proposedVillaTypes.map((villa, index) => (
                                        <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                                            <div>
                                                <div className="font-medium text-gray-800">{villa.type}</div>
                                                <div className="text-xs text-gray-500">{villa.bedrooms} ch • {villa.size}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold text-teal-700">{villa.price}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Informations Détaillées Ci-Dessous - Seulement Si Nécessaire */}
                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                        {/* Caractéristiques du Site */}
                        <div className="bg-white rounded-xl border border-gray-100 p-5">
                            <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                                <Compass className="w-4 h-4 text-teal-600" />
                                Détails du Site
                            </h4>
                            <div className="text-sm text-gray-600 space-y-2">
                                <div className="font-bold text-teal-700 text-base mb-2">Coconut - Villas Auger Punta Cana</div>
                                <div className="mb-3">
                                    <div className="text-xs text-gray-500">Nom du Projet</div>
                                </div>
                                <div><strong>Adresse :</strong> {developmentSite.address}</div>
                                <div><strong>Terrain :</strong> {developmentSite.terrainType}</div>
                                <div><strong>Altitude :</strong> {developmentSite.elevation}</div>
                                <div><strong>Type de Sol :</strong> {developmentSite.soilType}</div>
                                <div><strong>Calendrier :</strong> {developmentSite.timeline}</div>
                            </div>
                        </div>

                        {/* Accès aux Plans */}
                        <div className="bg-white rounded-xl border border-gray-100 p-5">
                            <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                                <Building className="w-4 h-4 text-teal-600" />
                                Plans & Rendu de la Villa Auger
                            </h4>
                            {/* PDF Blueprint Link */}
                            <div className="mb-6">
                                <a
                                    href="/images/villaAuger-Architect-Blueprint.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 bg-green-50 text-green-800 rounded-lg hover:bg-green-100 transition-colors group"
                                >
                                    <div className="flex items-center gap-3">
                                        <FileText className="w-5 h-5 text-teal-600" />
                                        <div>
                                            <div className="font-medium">Plans Architecturaux Complets</div>
                                            <div className="text-xs text-green-600">Télécharger PDF</div>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>

                            {/* Render Video Section */}
                            <div>
                                <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                    <Video className="w-4 h-4 text-teal-600" />
                                    Vidéo de Rendu 3D
                                </h5>
                                <div className="rounded-lg overflow-hidden border border-gray-200">
                                    <video
                                        src="/images/villasAuger-villa-Render.mp4"
                                        controls
                                        className="w-full h-auto"
                                    >
                                        Votre navigateur ne prend pas en charge la balise vidéo.
                                    </video>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                    Regardez une vidéo de rendu 3D de la conception et de la disposition de la Villa Auger.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. GALERIE DE PHOTOS DU TERRAIN - Style Moderne */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            <span className="font-medium text-teal-700">Photos, Vidéos & Renderings</span> du Site
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Explorez le terrain et les designs conceptuels pour les Villas Auger
                        </p>
                    </div>

                    {/* Filtre de Catégorie - Style Moderne */}
                    <div className="flex flex-wrap gap-2 justify-center mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Grille Photo/Vidéo - Style Moderne */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPhotos.map(photo => (
                            <div
                                key={photo.id}
                                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                {/* Zone Photo/Vidéo - Taille augmentée */}
                                <div className="relative h-80 overflow-hidden flex-shrink-0">
                                    {(photo as any).isVideo ? (
                                        <video
                                            src={photo.image}
                                            controls
                                            className="w-full h-full object-cover"
                                            title={photo.title}
                                            poster="/images/placeholder-video.jpg"
                                        >
                                            Votre navigateur ne supporte pas la balise vidéo.
                                        </video>
                                    ) : (
                                        <img
                                            src={photo.image}
                                            alt={photo.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = "/images/placeholder-image.jpg";
                                            }}
                                        />
                                    )}

                                    {(photo as any).isVideo && (
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                                            VIDÉO
                                        </div>
                                    )}
                                </div>

                                {/* Zone d'Information Texte - Taille réduite */}
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-lg font-medium text-gray-800 line-clamp-1">{photo.title}</h3>
                                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 rounded-full">
                                            {photo.category}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">{photo.description}</p>

                                    <a
                                        href={photo.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1 mt-auto"
                                        download={(photo as any).isVideo ? undefined : true}
                                    >
                                        {(photo as any).isVideo ? "Regarder en Plein Écran" : "Télécharger"}
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. STATISTIQUES DE DÉVELOPPEMENT - Style Moderne */}
            <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            <span className="font-medium text-teal-700">Aperçu</span> du Développement
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { value: "249,000", label: "m² Total", icon: <Ruler className="w-8 h-8" /> },
                            { value: "240,000", label: "m² Constructible", icon: <Home className="w-8 h-8" /> },
                            { value: "120", label: "Villas Proposées", icon: <Users className="w-8 h-8" /> },
                            { value: "2026-27", label: "Calendrier de Construction", icon: <Calendar className="w-8 h-8" /> },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl mb-6 mx-auto">
                                    <div className="text-teal-600">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-4xl font-bold text-teal-700 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SECTION APPEL À L'ACTION - Style Moderne */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <Umbrella className="w-10 h-10 text-teal-600" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Investissez dans l'<span className="font-medium text-teal-700">Avenir</span> de Bavaro
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Faites partie du nouveau développement de villas le plus exclusif de Punta Cana
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <ContactModal trigger={
                                <button className="group bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full font-medium hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center gap-3">
                                    Demander les Détails du Développement
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            } />
                            <Link
                                to="/pour-retires"
                                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
                            >
                                Voir les Propriétés Existantes
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. PIED DE PAGE - Style Moderne */}
            <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-300"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-200"></div>
                        </div>
                        <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
                        <p className="text-gray-600 mb-2">Votre partenaire de confiance pour le développement de luxe à Punta Cana</p>
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
                            <Link to="/faq-fr" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}