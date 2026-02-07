// client/src/pages/ForFamilies.tsx
import { Link } from "react-router-dom";
import { ChevronRight, Baby, Palmtree, MapPin, CheckCircle2, ExternalLink, Heart, Sun, Waves, Umbrella, Coffee } from "lucide-react";
import { SimpleOpenStreetMap } from "@/components/SimpleOpenStreetMap";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

/**
 * FAMILY ATTRACTIONS DATA
 * Integrated with coordinates for the map and sidebar details
 */
const attractions = [
    {
        name: "SeaQuarium Punta Cana",
        lat: 18.5122,
        lng: -68.3955,
        type: 'attraction' as const,
        description: "Experience the underwater world.",
        website: "https://seaquariumpuntacana.com/en/",
        image: "/images/families-SeaQuarium.png"
    },
    {
        name: "Dolphin Discovery",
        lat: 18.5714,
        lng: -68.3752,
        type: 'attraction' as const,
        description: "Interactive marine park where families can swim with dolphins and experience unforgettable ocean encounters.",
        website: "https://www.dolphindiscovery.com",
        image: "/images/families-Dolphin.png"
    },
    {
        name: "Indigenous Eyes Ecological Park",
        lat: 18.5105,
        lng: -68.3742,
        type: 'attraction' as const,
        description: "Nature reserve featuring multiple cenotes, hiking trails, and pristine natural pools surrounded by tropical forest.",
        website: "https://puntacana.org/es/medioambiente/reserva-ecologica-ojos-indigenas",
        image: "/images/families-ojosIndigenas.png"
    },
    {
        name: "Zip-lining Adventures",
        lat: 18.6432,
        lng: -68.4521,
        type: 'attraction' as const,
        description: "Thrilling canopy tours through tropical forests with multiple zip-line courses suitable for various skill levels.",
        website: "https://www.runnersadventures.com/zip-lining/zip-line-adventures-monkeyland/",
        image: "/images/families-ZiplineAdventures.png"
    },
    {
        name: "Coco Bongo",
        lat: 18.5945,
        lng: -68.3812,
        type: 'attraction' as const,
        description: "Premier entertainment venue featuring acrobatic shows, live performances, and family-friendly entertainment.",
        website: "https://www.cocobongo.com/show/punta-cana/?lang=en",
        image: "/images/families-CocoBongo.png"
    },
    {
        name: "Bavaro things to do",
        lat: 18.5945,
        lng: -68.3812,
        type: 'attraction' as const,
        description: "Premier entertainment venue featuring acrobatic shows, live performances, and family-friendly entertainment.",
        website: "https://www.godominicanrepublic.com/destinations/punta-cana",
        image: "/images/families-goDR.png"
    },
];

// Helper function to extract domain from URL
const getDomainFromUrl = (url: string): string => {
    return url.replace(/^(https?:\/\/)/, '').split('/')[0];
};

export default function Families() {
    useSEO({
        title: "Family Life in Punta Cana | Modern Luxury Living",
        description: "Discover modern family living with world-class amenities, safety, and education in Punta Cana. The perfect Caribbean destination for families.",
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white font-sans">
            {/* 1. HERO SECTION - Modern & Calm */}
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
                        <Link to="/villas-project" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Villas Project
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
                                to="/pour-familles"
                                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                                title="Français"
                            >
                                FR
                            </Link>
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
                                Contact Us
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
                        alt="Family adventure in Punta Cana"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <Heart className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Family Living</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                        <span className="block">Modern Family</span>
                        <span className="font-medium">Living in Paradise</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Safety, education, and endless adventures await your family in Punta Cana
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="#map-section"
                            className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white"
                        >
                            View Map & Attractions
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. MAP SECTION - FULL WIDTH with Attractions Below in Grid */}
            <section id="map-section" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Adventure for <span className="font-medium text-teal-700">All Ages</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Discover top-rated adventure parks, ecological reserves, and family entertainment centers
                        </p>
                    </div>

                    {/* Full Width Map */}
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
                            <span>Click on markers to explore locations. Zoom to see details.</span>
                        </div>
                    </div>

                    {/* Family Attractions Grid - Below Map */}
                    <div className="mt-16">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-tight">
                                Family <span className="font-medium text-teal-700">Attractions</span>
                            </h3>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Explore top family-friendly destinations and activities in the region
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {attractions.map((place, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                                    onClick={() => window.open(place.website, '_blank')}
                                >
                                    {/* Image Section */}
                                    {place.image && (
                                        <div className="h-48 w-full overflow-hidden">
                                            <img
                                                src={place.image}
                                                alt={place.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    // Fallback if image doesn't exist
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

            {/* 3. LIFESTYLE SECTION - Relaxed & Inviting */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full">
                                    <span className="text-teal-600 text-sm font-medium uppercase tracking-wide">Family-First Living</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                                    <span className="font-medium">Safety, Education, & Fun</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    Punta Cana offers a unique blend of safety, modern infrastructure, and vibrant outdoor living. From private bilingual schools to championship sports academies, your children will have access to the best resources in the Caribbean.
                                </p>
                            </div>

                            <div className="space-y-5">
                                {[
                                    "Gated communities with 24/7 private security",
                                    "Top-tier international schools with IB curriculum",
                                    "Modern pediatric care and medical facilities",
                                    "Safe bike paths and kid-friendly outdoor spaces"
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

                        {/* Grid of feature cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FeatureCard
                                icon={<Baby className="w-6 h-6" />}
                                title="Child Safety"
                                desc="Living in gated communities offers peace of mind for parents."
                                color="from-teal-50 to-emerald-50"
                                iconColor="text-teal-600"
                            />
                            <FeatureCard
                                icon={<Palmtree className="w-6 h-6" />}
                                title="Tropical Fun"
                                desc="Endless weekends at water parks and pristine beaches."
                                color="from-amber-50 to-orange-50"
                                iconColor="text-amber-600"
                            />
                            <FeatureCard
                                icon={<Sun className="w-6 h-6" />}
                                title="Quality Education"
                                desc="Access to top international schools with IB curriculum."
                                color="from-blue-50 to-cyan-50"
                                iconColor="text-blue-600"
                            />
                            <FeatureCard
                                icon={<Coffee className="w-6 h-6" />}
                                title="Community Living"
                                desc="Vibrant international community with family-friendly events."
                                color="from-violet-50 to-purple-50"
                                iconColor="text-violet-600"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA SECTION - Gentle & Inviting */}
            <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
                <div className="container px-4 md:px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <Umbrella className="w-8 h-8 text-teal-600" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Ready to Create Your<br />
                            <span className="font-medium text-teal-700">Family Paradise</span>?
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Join families from around the world who have found their perfect home in Punta Cana. Let us help you create lasting memories in paradise.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="tel:+18001234567"
                                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
                            >
                                <div className="p-1.5 bg-teal-50 rounded-full group-hover:bg-teal-100">
                                    {/* Phone icon placeholder */}
                                </div>
                                Call: (800) 123-4567
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FOOTER - Clean & Simple */}
            <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-300"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-200"></div>
                        </div>
                        <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
                        <p className="text-gray-600 mb-2">Your Villas Auger Punta Cana family living in Punta Cana</p>
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

/**
 * FEATURE CARD COMPONENT
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