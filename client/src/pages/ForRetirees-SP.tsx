// client/src/pages/ForRetirees-SP.tsx - SECCIÓN DE MAPA & CLUBES ACTUALIZADA
import { Link } from "react-router-dom";
import { ChevronRight, Sun, Anchor, MapPin, CheckCircle2, ExternalLink, Waves, Umbrella, Coffee, Heart, Zap, Search, Sparkles, Shield, Building, Home, TrendingUp, Globe } from "lucide-react";
import { SimpleOpenStreetMap } from "@/components/SimpleOpenStreetMap";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

/**
 * Función auxiliar para extraer dominio de URL
 */
const getDomainFromUrl = (url: string): string => {
  return url.replace(/^(https?:\/\/)/, '').split('/')[0];
};

/**
 * DATOS DE GOLF Y ATRACCIONES
 * Desde Playa Macao (Norte) hasta Cap Cana Sur
 */
const golfLocations = [
  // ÁREA NORTE (Macao y Uvero Alto)
  {
    name: "Hard Rock Golf Club",
    lat: 18.7231,
    lng: -68.4735,
    type: 'golf' as const,
    description: "Diseño de golf Nicklaus en Cana Bay, ubicado cerca de Playa Macao.",
    url: "https://hotel.hardrock.com/punta-cana/hard-rock-golf.aspx",
    image: "/images/golf-HardRock.png"
  },
  {
    name: "Iberostar Golf Club",
    lat: 18.7089,
    lng: -68.4551,
    type: 'golf' as const,
    description: "Campo de campeonato diseñado por P.B. Dye con exuberante vegetación.",
    url: "https://www.iberostar.com/en-ca/golf/bavaro-golf-club/",
    image: "/images/golf-IberoStart-2.png"
  },
  {
    name: "Punta Blanca Golf Club",
    lat: 18.7011,
    lng: -68.4485,
    type: 'golf' as const,
    description: "Diseñado por Nick Price, presenta desafíos tropicales en tierra adentro.",
    url: "https://punta-blanca.com/en/club-de-golf/fact-sheet/",
    image: "/images/golf-PuntaBlanca.png"
  },
  // CENTRO BÁVARO / COCOTAL
  {
    name: "Cocotal Golf & Country Club",
    lat: 18.6652,
    lng: -68.4122,
    type: 'golf' as const,
    description: "Campo de 27 hoyos diseñado por Jose 'Pepe' Gancedo.",
    url: "https://cocotalgolfclub.com/",
    image: "/images/golf-CocotalGolf.png"
  },
  // ÁREA SUR (Puntacana Resort y Cap Cana)
  {
    name: "Corales Golf Course",
    lat: 18.5133,
    lng: -68.3532,
    type: 'golf' as const,
    description: "Destino exclusivo del PGA TOUR con hoyos frente al océano.",
    url: "https://www.puntacana.com/en/land-of-stories-golf",
    image: "/images/golf-CoralesGolf.png"
  },
  {
    name: "La Cana Golf Club",
    lat: 18.5284,
    lng: -68.3685,
    type: 'golf' as const,
    description: "Campo de 27 hoyos con vistas al Mar Caribe.",
    url: "https://www.puntacana.com/golf/la-cana-golf-course",
    image: "/images/golf-LaCanaGolfClub.png"
  },
  {
    name: "Punta Espada Golf Club",
    lat: 18.4958,
    lng: -68.3912,
    type: 'golf' as const,
    description: "Campo Signature de Jack Nicklaus, clasificado #1 en el Caribe.",
    url: "https://www.puntaespadagolf.com/",
    image: "/images/golf-PuntaEspadaGolf.png"
  },
  {
    name: "Barcelo Bavaro Golf Club",
    lat: 18.6200,
    lng: -68.4032,
    type: 'golf' as const,
    description: "Hermoso campo ubicado dentro del complejo Barceló Bávaro.",
    url: "https://www.barcelo.com/en-us/barcelo-bavaro-palace/galleries/#golf",
    image: "/images/golf-BarceloBavaro.png"
  },
  {
    name: "Los Corales Golf Club",
    lat: 18.6800,
    lng: -68.4300,
    type: 'golf' as const,
    description: "Campo desafiante con características de agua y paisaje tropical.",
    url: "https://www.puntacana.com/en/golf",
    image: "/images/golf-CoralesGolf.png"
  },
  {
    name: "Punta Cana",
    lat: 18.7000,
    lng: -68.4651,
    type: 'attraction' as const,
    description: "Campos de golf de campeonato.",
    url: "https://golfscape.com/punta-cana-golf-courses",
    image: "/images/golf-GolfScape-golfCourses.png"
  },
  {
    name: "Cap Cana Marina",
    lat: 18.4547,
    lng: -68.4022,
    type: 'attraction' as const,
    description: "Marina de última generación en el extremo sur de Cap Cana.",
    url: "https://www.capcana.com/marina",
    // image: "/images/cap-cana-marina.jpg"
  },
  {
    name: "Cap Cana News",
    lat: 18.4557,
    lng: -68.4012,
    type: 'attraction' as const,
    description: "Últimas noticias y actualizaciones de la comunidad Cap Cana.",
    url: "https://news.capcana.com/",
    // image: "/images/cap-cana-community.jpg"
  },
  {
    name: "Cap Cana Website",
    lat: 18.4537,
    lng: -68.4032,
    type: 'attraction' as const,
    description: "Sitio web oficial de la comunidad turística Cap Cana.",
    url: "https://capcana.com/",
    // image: "/images/cap-cana-resort.jpg"
  }
];

/**
 * CARACTERÍSTICAS ESTRATÉGICAS - Por qué elegir nuestra solución de jubilación
 */
const STRATEGY_FEATURES = [
  {
    id: 'perf',
    title: 'Rendimiento Premium de Inversión',
    description: 'Ubicaciones estratégicas cerca de campos de golf de clase mundial garantizan altos rendimientos de alquiler y apreciación de capital para inversionistas jubilados.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 'seo',
    title: 'Alcance Global de Jubilación',
    description: 'Marketing dirigido a jubilados adinerados en Norteamérica y Europa que buscan vivir en el Caribe con acceso a golf.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 'ux',
    title: 'Experiencia de Jubilación Personalizada',
    description: 'Diseños de villas y comodidades personalizadas para el estilo de vida de 55+, desde viviendas de un solo nivel hasta comunidades sin mantenimiento.',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: 'security',
    title: 'Seguridad Fortificada de Inversión',
    description: 'Comunidades cerradas con seguridad 24/7, estructuras de propiedad legal adecuadas y gestión de propiedad confiable para tranquilidad.',
    icon: <Shield className="w-6 h-6" />
  }
];

/**
 * COMPARACIÓN DE OPCIONES DE JUBILACIÓN
 */
const RETIREMENT_COMPARISON = [
  {
    feature: 'Acceso a Campo de Golf',
    custom: 'Directo (Adyacente a Campos)',
    traditional: 'Limitado (Membresía Requerida)',
    isCustomWinner: true
  },
  {
    feature: 'Gestión de Propiedad',
    custom: 'Servicio Completo Incluido',
    traditional: 'Costo Extra/Hazlo Tú Mismo',
    isCustomWinner: true
  },
  {
    feature: 'Instalaciones Médicas',
    custom: 'En el Sitio o Cercanas',
    traditional: 'Ubicación Variable',
    isCustomWinner: true
  },
  {
    feature: 'Valor de Reventa',
    custom: 'Alto (Ubicación Premium)',
    traditional: 'Estándar (Dependiente del Mercado)',
    isCustomWinner: true
  }
];

export default function ForRetireesSP() {
  useSEO({
    title: "Jubilación de Lujo en Punta Cana | Invest in Paradise",
    description: "Explora campos de golf de clase mundial y vida de alta gama desde Macao hasta Cap Cana. Descubre el estilo de vida de jubilación definitivo en la República Dominicana.",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white font-sans">
      {/* 1. SECCIÓN HÉROE - Moderna & Calma */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-100/50 shadow-sm">
        <nav className="container flex items-center justify-between py-5 px-4 md:px-6">
          <Link to="/" className="text-2xl font-bold text-teal-700 tracking-tight hover:text-teal-800 transition-colors">
            Invest in Paradise
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/es" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
              Inicio
            </Link>
            <Link to="/nuestra-historia" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
              Nuestra Historia
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
                to="/for-retirees"
                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                title="English"
              >
                EN
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/pour-retires"
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
            src="/images/sunset-tropical-landscape.jpg"
            className="w-full h-full object-cover"
            alt="Vista de atardecer de jubilación de lujo"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <Heart className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">Vida de Jubilación</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            <span className="block">Jubílese en el</span>
            <span className="font-medium">Paraíso</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Golf de clase mundial, comodidades de lujo y una comunidad vibrante lo esperan en Punta Cana
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#map-section"
              className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white"
            >
              Ver Mapa y Ubicaciones
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE MAPA - ANCHO COMPLETO con Clubes Abajo en Cuadrícula */}
      <section id="map-section" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              Desde <span className="font-medium text-teal-700">Macao</span> hasta <span className="font-medium text-teal-700">Cap Cana</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Descubre campos de golf de primer nivel y comodidades de lujo a lo largo de la impresionante costa de Punta Cana
            </p>
          </div>

          {/* Mapa de Ancho Completo */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl -z-10"></div>
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-lg h-[600px] relative z-10">
                <SimpleOpenStreetMap
                  locations={golfLocations}
                  zoomControl={true}
                />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500 justify-center">
              <MapPin className="w-4 h-4" />
              <span>Haga clic en los marcadores para explorar ubicaciones. Zoom para ver detalles.</span>
            </div>
          </div>

          {/* Cuadrícula de Clubes y Atracciones de Primera - Debajo del Mapa */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-tight">
                Clubes y Atracciones <span className="font-medium text-teal-700">de Primera</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Explora campos de golf de clase mundial y comodidades exclusivas en la región
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {golfLocations.map((location, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                  onClick={() => window.open(location.url, '_blank')}
                >
                  {/* Agregar imagen en la parte superior de la tarjeta */}
                  {location.image && (
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback si la imagen no existe
                          e.currentTarget.src = "/images/golf-placeholder.jpg";
                        }}
                      />
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${location.type === 'golf'
                        ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-100'
                        : 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-100'
                        }`}>
                        {location.type}
                      </span>
                      <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-teal-50 transition-colors">
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-600" />
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-teal-700 transition-colors">
                      {location.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {location.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <a
                        href={location.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-400 font-mono truncate max-w-[120px] hover:text-teal-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        title={location.url}
                      >
                        {getDomainFromUrl(location.url)}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN CARACTERÍSTICAS ESTRATÉGICAS - NUEVA */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              La Ventaja de la <span className="font-medium text-teal-700">Jubilación Premium</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Por qué los jubilados exigentes eligen nuestro enfoque estratégico para vivir en el Caribe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STRATEGY_FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-teal-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-teal-200 group-hover:to-blue-200 transition-all">
                  <div className="text-teal-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-3 group-hover:text-teal-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN ESTILO DE VIDA - Relajada & Atractiva */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full">
                  <span className="text-teal-600 text-sm font-medium uppercase tracking-wide">Estilo de Vida de Lujo</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                  <span className="font-medium">Vida de Campeonato</span><br />
                  En Tus Términos
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Jubílese con estilo con acceso a algunos de los campos de golf más prestigiosos del mundo. Punta Cana ofrece atención médica privada de clase mundial, importantes beneficios fiscales para residentes extranjeros y una comunidad vibrante de jubilados internacionales.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  "Acceso exclusivo a campos Signature de Jack Nicklaus",
                  "Incentivos fiscales de residencia para compradores internacionales",
                  "Instalaciones médicas privadas de última generación",
                  "Clubes sociales y asociaciones internacionales activas"
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
                icon={<Sun className="w-6 h-6" />}
                title="Verano Eterno"
                desc="Disfruta del clima tropical y la vida al aire libre todo el año en nuestro paraíso soleado."
                color="from-amber-50 to-orange-50"
                iconColor="text-amber-600"
              />
              <FeatureCard
                icon={<Anchor className="w-6 h-6" />}
                title="Acceso a Marina"
                desc="Amarres seguros para embarcaciones grandes en el corazón de la marina de clase mundial de Cap Cana."
                color="from-blue-50 to-cyan-50"
                iconColor="text-blue-600"
              />
              <FeatureCard
                icon={<Waves className="w-6 h-6" />}
                title="Vida Frente a la Playa"
                desc="A pocos pasos de 32 km de la prístina Playa Bávaro con aguas turquesas."
                color="from-teal-50 to-emerald-50"
                iconColor="text-teal-600"
              />
              <FeatureCard
                icon={<Coffee className="w-6 h-6" />}
                title="Ocio y Cultura"
                desc="Experiencias vibrantes de gastronomía, entretenimiento y cultura justo en tu puerta."
                color="from-violet-50 to-purple-50"
                iconColor="text-violet-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECCIÓN CTA - Suave & Atractiva */}
      <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <Umbrella className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              ¿Listo para Comenzar Su<br />
              <span className="font-medium text-teal-700">Jubilación en el Paraíso</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Únase a cientos de jubilados satisfechos que encontraron su hogar perfecto en Punta Cana. Permítanos guiarlo hacia su jubilación soñada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+18001234567"
                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
              >
                <div className="p-1.5 bg-teal-50 rounded-full group-hover:bg-teal-100">
                  {/* <Phone className="w-4 h-4" /> */}
                </div>
                Llame: (800) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PIE DE PÁGINA - Limpio & Simple */}
      <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-teal-400"></div>
              <div className="w-3 h-3 rounded-full bg-teal-300"></div>
              <div className="w-3 h-3 rounded-full bg-teal-200"></div>
            </div>
            <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
            <p className="text-gray-600 mb-2">Su socio Villas Auger Punta Cana para la jubilación en Punta Cana</p>
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
                Preguntas Frecuentes
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * COMPONENTE TARJETA DE CARACTERÍSTICA
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