// client/src/pages/ForFamilies-SP.tsx
import { Link } from "react-router-dom";
import { ChevronRight, Baby, Palmtree, MapPin, CheckCircle2, ExternalLink, Heart, Sun, Waves, Umbrella, Coffee } from "lucide-react";
import { SimpleOpenStreetMap } from "@/components/SimpleOpenStreetMap";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

/**
 * DATOS DE ATRACCIONES FAMILIARES
 * Integrado con coordenadas para el mapa y detalles en la barra lateral
 */
const attractions = [
    {
        name: "SeaQuarium Punta Cana",
        lat: 18.5122,
        lng: -68.3955,
        type: 'attraction' as const,
        description: "Experimenta el mundo submarino.",
        website: "https://seaquariumpuntacana.com/es/",
        image: "/images/families-SeaQuarium.png"
    },
    {
        name: "Dolphin Discovery",
        lat: 18.5714,
        lng: -68.3752,
        type: 'attraction' as const,
        description: "Parque marino interactivo donde las familias pueden nadar con delfines y vivir encuentros oceánicos inolvidables.",
        website: "https://www.dolphindiscovery.com",
        image: "/images/families-Dolphin.png"
    },
    {
        name: "Reserva Ecológica Ojos Indígenas",
        lat: 18.5105,
        lng: -68.3742,
        type: 'attraction' as const,
        description: "Reserva natural que cuenta con múltiples cenotes, senderos para caminatas y piscinas naturales prístinas rodeadas de bosque tropical.",
        website: "https://puntacana.org/es/medioambiente/reserva-ecologica-ojos-indigenas",
        image: "/images/families-ojosIndigenas.png"
    },
    {
        name: "Aventuras de Tirolesa",
        lat: 18.6432,
        lng: -68.4521,
        type: 'attraction' as const,
        description: "Emocionantes recorridos por el dosel de los bosques tropicales con múltiples circuitos de tirolesa adecuados para varios niveles de habilidad.",
        website: "https://www.runnersadventures.com/zip-lining/zip-line-adventures-monkeyland/",
        image: "/images/families-ZiplineAdventures.png"
    },
    {
        name: "Coco Bongo",
        lat: 18.5945,
        lng: -68.3812,
        type: 'attraction' as const,
        description: "Lugar de entretenimiento de primer nivel que presenta espectáculos acrobáticos, actuaciones en vivo y entretenimiento para toda la familia.",
        website: "https://www.cocobongo.com/show/punta-cana/?lang=es",
        image: "/images/families-CocoBongo.png"
    },
    {
        name: "Cosas que hacer en Bávaro",
        lat: 18.5945,
        lng: -68.3812,
        type: 'attraction' as const,
        description: "Lugar de entretenimiento de primer nivel que presenta espectáculos acrobáticos, actuaciones en vivo y entretenimiento para toda la familia.",
        website: "https://www.godominicanrepublic.com/es/destinos/punta-cana",
        image: "/images/families-goDR.png"
    },
];

// Función auxiliar para extraer el dominio de una URL
const getDomainFromUrl = (url: string): string => {
    return url.replace(/^(https?:\/\/)/, '').split('/')[0];
};

export default function Families() {
    useSEO({
        title: "Vida Familiar en Punta Cana | Vida de Lujo Moderna",
        description: "Descubra una vida familiar moderna con amenidades de clase mundial, seguridad y educación en Punta Cana. El destino caribeño perfecto para familias.",
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white font-sans">
            {/* 1. SECCIÓN HERO - Moderna y Calma */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-100/50 shadow-sm">
                <nav className="container flex items-center justify-between py-5 px-4 md:px-6">
                    <Link to="/es" className="text-2xl font-bold text-teal-700 tracking-tight hover:text-teal-800 transition-colors">
                        Invest in Paradise
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link to="/es" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Inicio
                        </Link>
                        <Link to="/nuestra-historia" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Nuestra Historia
                        </Link>
                        <Link to="/para-jubilados" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Para Jubilados
                        </Link>
                        <Link to="/para-familias" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Para Familias
                        </Link>
                        <Link to="/proyecto-villas" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Proyecto de Villas
                        </Link>
                        <Link to="/faq-sp" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Preguntas Frecuentes
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
                            <Link
                                to="/pour-familles"
                                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                                title="Français"
                            >
                                FR
                            </Link>
                            <span className="text-gray-300">|</span>
                            <span className="text-xs text-teal-600 font-medium" title="Español (Activo)">
                                ES
                            </span>
                        </div>
                        <ContactModal trigger={
                            <button className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-2.5 rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium">
                                Contáctenos
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
                        alt="Aventura familiar en Punta Cana"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <Heart className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Vida Familiar</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                        <span className="block">Vida Familiar</span>
                        <span className="font-medium">Moderna en el Paraíso</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Seguridad, educación y aventuras sin fin esperan a su familia en Punta Cana
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="#map-section"
                            className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white"
                        >
                            Ver Mapa y Atracciones
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. SECCIÓN DEL MAPA - Ancho completo con atracciones debajo en cuadrícula */}
            <section id="map-section" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Aventura para <span className="font-medium text-teal-700">Todas las Edades</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Descubra parques de aventura de primera categoría, reservas ecológicas y centros de entretenimiento familiar
                        </p>
                    </div>

                    {/* Mapa de Ancho Completo */}
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
                            <span>Haga clic en los marcadores para explorar lugares. Use el zoom para ver detalles.</span>
                        </div>
                    </div>

                    {/* Cuadrícula de Atracciones Familiares - Debajo del Mapa */}
                    <div className="mt-16">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-tight">
                                Atracciones <span className="font-medium text-teal-700">Familiares</span>
                            </h3>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Explore los mejores destinos y actividades para familias en la región
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {attractions.map((place, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                                    onClick={() => window.open(place.website, '_blank')}
                                >
                                    {/* Sección de Imagen */}
                                    {place.image && (
                                        <div className="h-48 w-full overflow-hidden">
                                            <img
                                                src={place.image}
                                                alt={place.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    // Respaldar si la imagen no existe
                                                    e.currentTarget.src = "/images/attraction-placeholder.jpg";
                                                }}
                                            />
                                        </div>
                                    )}

                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-100">
                                                {place.type === 'attraction' ? 'atracción' : place.type}
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

            {/* 3. SECCIÓN DE ESTILO DE VIDA - Relajada e Invitadora */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full">
                                    <span className="text-teal-600 text-sm font-medium uppercase tracking-wide">Vida Enfocada en la Familia</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                                    <span className="font-medium">Seguridad, Educación y Diversión</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    Punta Cana ofrece una combinación única de seguridad, infraestructura moderna y una vibrante vida al aire libre. Desde escuelas bilingües privadas hasta academias deportivas de campeonato, sus hijos tendrán acceso a los mejores recursos del Caribe.
                                </p>
                            </div>

                            <div className="space-y-5">
                                {[
                                    "Comunidades cerradas con seguridad privada 24/7",
                                    "Escuelas internacionales de primer nivel con currículo IB",
                                    "Atención pediátrica moderna e instalaciones médicas",
                                    "Ciclovías seguras y espacios al aire libre aptos para niños"
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

                        {/* Cuadrícula de tarjetas de características */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FeatureCard
                                icon={<Baby className="w-6 h-6" />}
                                title="Seguridad Infantil"
                                desc="Vivir en comunidades cerradas ofrece tranquilidad para los padres."
                                color="from-teal-50 to-emerald-50"
                                iconColor="text-teal-600"
                            />
                            <FeatureCard
                                icon={<Palmtree className="w-6 h-6" />}
                                title="Diversión Tropical"
                                desc="Fines de semana interminables en parques acuáticos y playas prístinas."
                                color="from-amber-50 to-orange-50"
                                iconColor="text-amber-600"
                            />
                            <FeatureCard
                                icon={<Sun className="w-6 h-6" />}
                                title="Educación de Calidad"
                                desc="Acceso a las mejores escuelas internacionales con currículo IB."
                                color="from-blue-50 to-cyan-50"
                                iconColor="text-blue-600"
                            />
                            <FeatureCard
                                icon={<Coffee className="w-6 h-6" />}
                                title="Vida Comunitaria"
                                desc="Vibrante comunidad internacional con eventos familiares."
                                color="from-violet-50 to-purple-50"
                                iconColor="text-violet-600"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SECCIÓN CTA - Suave e Invitadora */}
            <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
                <div className="container px-4 md:px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <Umbrella className="w-8 h-8 text-teal-600" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            ¿Listo para Crear su<br />
                            <span className="font-medium text-teal-700">Paraíso Familiar</span>?
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Únase a familias de todo el mundo que han encontrado su hogar perfecto en Punta Cana. Permítanos ayudarle a crear recuerdos duraderos en el paraíso.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="tel:+18001234567"
                                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
                            >
                                <div className="p-1.5 bg-teal-50 rounded-full group-hover:bg-teal-100">
                                    <Coffee className="w-4 h-4 text-teal-600" />
                                </div>
                                Llamar: (800) 123-4567
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PIE DE PÁGINA - Limpio y Simple */}
            <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-300"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-200"></div>
                        </div>
                        <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
                        <p className="text-gray-600 mb-2">Su vida familiar con Villas Auger Punta Cana en Punta Cana</p>
                        <p className="text-sm text-gray-500">Bávaro, Punta Cana, República Dominicana</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-8">
                        <div className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Villas Auger Punta Cana. Todos los derechos reservados.
                        </div>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <Link to="/terms" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                                Términos y Condiciones
                            </Link>
                            <Link to="/privacy" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                                Política de Privacidad
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
 * COMPONENTE DE TARJETA DE CARACTERÍSTICA
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