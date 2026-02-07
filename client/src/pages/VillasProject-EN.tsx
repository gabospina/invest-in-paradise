// client/src/pages/VillasProject.tsx (Modern Style - Updated Map Section)
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Heart, MapPin, CheckCircle2, FileText, Video, ExternalLink, LandPlot, Compass, Ruler, Calendar, Eye, Building, DollarSign, Home, Users, Umbrella } from "lucide-react";
import { SimpleOpenStreetMap } from "@/components/SimpleOpenStreetMap";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

import { WHATSAPP_CONFIG } from '../config/whatsapp';

<a href={WHATSAPP_CONFIG.getUrl('en', 'api')}>
    Chat on WhatsApp
</a>

/**
 * AUGER VILLAS DEVELOPMENT SITE - TERRAIN DATA
 */
const developmentSite = {
    id: 1,
    name: "Auger Villas Development Site",
    type: 'terrain' as const,
    description: "Prime development site in Bavaro, Punta Cana where the future Auger Villas luxury community will be built. This master-planned development will feature exclusive villas with sustainable design.",
    // price: "$28,000,000",
    totalArea: "249,000 sq.mt.",
    buildableArea: "240,000 sq.mt.",
    zoning: "Residential",
    status: "Development Phase",
    lat: 18.701456,
    lng: -68.469290,
    features: [
        "Sustainable Design",
        "Master-Planned Community",
        "Gated Security",
    ],
    address: "Bavaro, Punta Cana 23000, Dominican Republic",
    terrainType: "Gently",
    elevation: "16-21 feet above sea level",
    soilType: "Sandy loam (ideal for construction)",
    utilities: "Water, Electricity",
    timeline: "Phase 1 Construction: Q2 2026 - Q4 2026"
};

/**
 * SITE PHOTOS - TERRAIN AND AREA
 */
const terrainPhotos = [
    {
        id: 1,
        title: "Aerial View of Development Site",
        description: "249,000 sq.mt. parcel in Bavaro, Punta Cana",
        image: "/images/villasAuger-developmentSite.png",
        category: "Aerial"
    },
    {
        id: 2,
        title: "Site Topography",
        description: "Gently terrain ideal for villa construction",
        image: "/images/villasAuger-areaViewDevelopment.png",
        category: "Aerial"
    },
    {
        id: 3,
        title: "Preparing the area",
        description: "Nearby access to world-famous Bavaro Beach",
        image: "/images/villasAuger-levelingGround-1.mp4",
        category: "Terrain",
        isVideo: true
    },
    {
        id: 4,
        title: "Surrounding Infrastructure",
        description: "Existing roads and utilities at development site",
        image: "/images/villasAuger-levelingGroundAllsite.mp4",
        category: "Terrain",
        isVideo: true
    },
    {
        id: 5,
        title: "Master Plan Renderings",
        description: "Conceptual blueprint of Auger Villas",
        image: "/images/villasAuger-1stFloor-JL-191225.jpeg",
        category: "Design"
    },
    {
        id: 6,
        title: "Master Plan Renderings",
        description: "Conceptual blueprint of Auger Villas",
        image: "/images/villasAuger-2ndFloor-JL-191225.jpeg",
        category: "Design"
    },
    {
        id: 7,
        title: "Master Plan Renderings",
        description: "Conceptual plans for Auger Villas",
        image: "/images/villasAuger-FrontalElevation.jpeg",
        category: "Design"
    }
];

/**
 * PROPOSED VILLA TYPES (for reference)
 */
const proposedVillaTypes = [
    {
        type: "Villa",
        size: "158 sq.mt.",
        bedrooms: "4",
        price: "$235,000 usd",
        features: ["Pool", "Smart Home"],
        renderVideo: "/images/villasAuger-villa-Render.mp4", // Added render video
        blueprints: [
            {
                name: "Complete Architectural Blueprints",
                pdf: "/images/villaAuger-Architect-Blueprint.pdf",
                label: "PDF"
            }
        ]
    },
    {
        type: "Townhouse",
        size: "140 sq.mt.",
        bedrooms: "3",
        price: "$220,000 usd",
        features: ["Private Garden", "Smart Home"],
        blueprints: [] // No blueprints for townhouse yet
    },
];

export default function VillasProject() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    useSEO({
        title: "Auger Villas Development Project | Invest in Paradise",
        description: "Discover the future of luxury living in Bavaro, Punta Cana. Explore our master-planned community with sustainable villas and modern amenities.",
    });

    // Filter terrain photos by category
    const filteredPhotos = selectedCategory === "All"
        ? terrainPhotos
        : terrainPhotos.filter(photo => photo.category === selectedCategory);

    // Get unique categories
    const categories = ["All", ...Array.from(new Set(terrainPhotos.map(photo => photo.category)))];

    // Prepare location for the map
    const mapLocations = [
        {
            name: "Auger Villas Development Site",
            lat: 18.701456,
            lng: -68.469290,
            type: 'villa' as const,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white font-sans">
            {/* 1. HEADER - Modern & Calm */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-100/50 shadow-sm">
                <nav className="container flex items-center justify-between py-5 px-4 md:px-6">
                    <Link to="/" className="text-2xl font-bold text-teal-700 tracking-tight hover:text-teal-800 transition-colors">
                        Invest in Paradise
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link to="/" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Home
                        </Link>
                        <Link to="/our-story" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Our Story
                        </Link>
                        <Link to="/for-retirees" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            For Retirees
                        </Link>
                        <Link to="/for-families" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            For Families
                        </Link>
                        <Link to="/faq-en" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            FAQ
                        </Link>
                        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                            <span className="text-xs text-teal-600 font-medium" title="English (Active)">
                                EN
                            </span>
                            <span className="text-gray-300">|</span>
                            <Link
                                to="/projet-villas"
                                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                                title="Français"
                            >
                                FR
                            </Link>
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
                                Contact Us
                            </button>
                        } />
                    </div>
                </nav>
            </header>

            {/* 2. HERO SECTION - Modern Style */}
            <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-villa-exterior.jpg"
                        className="w-full h-full object-cover"
                        alt="Auger Villas Development Site"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <Heart className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Future Development</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                        <span className="block">Auger Villas</span>
                        <span className="font-medium">Development Site</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Future home of luxury villas in Bavaro, Punta Cana
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {/* <ContactModal trigger={
                            <button className="bg-white text-teal-700 px-8 py-3.5 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
                                Explore Investment Opportunities
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        } /> */}
                        <a
                            href="#map-section"
                            className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white"
                        >
                            View Aerial Site Location
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. MAP & SITE DETAILS SECTION - Your Requested Layout */}
            <section id="map-section" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Development Site <span className="font-medium text-teal-700">Overview</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Map - 2/3 width */}
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

                        {/* Compact Site Details - 1/3 width */}
                        <div className="space-y-4">
                            {/* Site Summary Card */}
                            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                                        <LandPlot className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-800">Site Summary</h3>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        {/* <span className="text-sm text-gray-600">Price:</span>
                                        <span className="font-bold text-teal-700">{developmentSite.price}</span> */}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Total Area:</span>
                                        <span className="font-medium text-gray-800">{developmentSite.totalArea}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Zoning:</span>
                                        <span className="font-medium text-gray-800">{developmentSite.zoning}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Status:</span>
                                        <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded text-xs font-medium">
                                            {developmentSite.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions Card */}
                            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                                <h4 className="text-sm font-medium text-gray-800 mb-3">Quick Actions</h4>
                                <div className="space-y-2">
                                    {/* <ContactModal trigger={
                                        <button className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-2.5 rounded-lg text-sm font-medium hover:from-teal-700 hover:to-teal-600 transition-all duration-300">
                                            Inquire
                                        </button>
                                    } /> */}
                                    <a
                                        href="/images/villasAuger-developmentSite.png"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors text-center"
                                    >
                                        View Aerial Site Location
                                    </a>
                                </div>
                            </div>

                            {/* Villa Types Summary Card */}
                            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                                <h4 className="text-sm font-medium text-gray-800 mb-3">Villa Types</h4>
                                <div className="space-y-2">
                                    {proposedVillaTypes.map((villa, index) => (
                                        <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                                            <div>
                                                <div className="font-medium text-gray-800">{villa.type}</div>
                                                <div className="text-xs text-gray-500">{villa.bedrooms} bed • {villa.size}</div>
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

                    {/* Detailed Information Below - Only When Needed */}
                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                        {/* Site Characteristics */}
                        <div className="bg-white rounded-xl border border-gray-100 p-5">
                            <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                                <Compass className="w-4 h-4 text-teal-600" />
                                Site Details
                            </h4>
                            <div className="text-sm text-gray-600 space-y-2">
                                <div className="font-bold text-teal-700 text-base mb-2">Coconut - Villas Auger Punta Cana</div>
                                <div className="mb-3">
                                    <div className="text-xs text-gray-500">Project Name</div>
                                </div>
                                <div><strong>Address:</strong> {developmentSite.address}</div>
                                <div><strong>Terrain:</strong> {developmentSite.terrainType}</div>
                                <div><strong>Elevation:</strong> {developmentSite.elevation}</div>
                                <div><strong>Soil Type:</strong> {developmentSite.soilType}</div>
                                <div><strong>Timeline:</strong> {developmentSite.timeline}</div>
                            </div>
                        </div>

                        {/* Blueprints & Render Video Access */}
                        <div className="bg-white rounded-xl border border-gray-100 p-5">
                            <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                                <Building className="w-4 h-4 text-teal-600" />
                                Villa Auger - Blueprints & Render
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
                                            <div className="font-medium">Complete Architectural Blueprints</div>
                                            <div className="text-xs text-green-600">Download PDF</div>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>

                            {/* Render Video Section */}
                            <div>
                                <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                    <Video className="w-4 h-4 text-teal-600" />
                                    3D Render Video
                                </h5>
                                <div className="rounded-lg overflow-hidden border border-gray-200">
                                    <video
                                        src="/images/villasAuger-villa-Render.mp4"
                                        controls
                                        className="w-full h-auto"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                    Watch a 3D render video of the Villa Auger design and layout.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TERRAIN PHOTOS GALLERY - Modern Style */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Site <span className="font-medium text-teal-700">Photos, Videos & Renderings</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Explore the terrain and conceptual designs for Auger Villas
                        </p>
                    </div>

                    {/* Category Filter - Modern Style */}
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

                    {/* Photo/Video Grid - Modern Style */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPhotos.map(photo => (
                            <div
                                key={photo.id}
                                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                {/* Photo/Video Area - Increased size */}
                                <div className="relative h-80 overflow-hidden flex-shrink-0">
                                    {(photo as any).isVideo ? (
                                        <video
                                            src={photo.image}
                                            controls
                                            className="w-full h-full object-cover"
                                            title={photo.title}
                                            poster="/images/placeholder-video.jpg"
                                        >
                                            Your browser does not support the video tag.
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
                                            VIDEO
                                        </div>
                                    )}
                                </div>

                                {/* Text Information Area - Reduced size */}
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
                                        {(photo as any).isVideo ? "Watch Full Screen" : "Download"}
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. DEVELOPMENT STATS - Modern Style */}
            <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Development <span className="font-medium text-teal-700">Overview</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { value: "249,000", label: "sq.mt. Total", icon: <Ruler className="w-8 h-8" /> },
                            { value: "240,000", label: "Buildable sq.mt", icon: <Home className="w-8 h-8" /> },
                            { value: "120", label: "Proposed Villas", icon: <Users className="w-8 h-8" /> },
                            { value: "2026-27", label: "Construction Timeline", icon: <Calendar className="w-8 h-8" /> },
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

            {/* 6. CTA SECTION - Modern Style */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <Umbrella className="w-10 h-10 text-teal-600" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Invest in the <span className="font-medium text-teal-700">Future</span> of Bavaro
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Be part of Punta Cana's most exclusive new villa development
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <ContactModal trigger={
                                <button className="group bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full font-medium hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center gap-3">
                                    Request Development Details
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            } />
                            <Link
                                to="/for-retirees"
                                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
                            >
                                View Existing Properties
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FOOTER - Modern Style */}
            <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-300"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-200"></div>
                        </div>
                        <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
                        <p className="text-gray-600 mb-2">Your trusted partner for luxury development in Punta Cana</p>
                        <p className="text-sm text-gray-500">Bavaro, Punta Cana, Dominican Republic</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-8">
                        <div className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Villas Auger Punta Cana. All rights reserved.
                        </div>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <Link to="/terms" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                                Terms and Conditions
                            </Link>
                            <Link to="/privacy" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                                Privacy Policy
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