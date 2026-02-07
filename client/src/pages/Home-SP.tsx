// client/src/pages/home-SP.tsx
import { Link } from "react-router-dom";
import { ChevronRight, Home as HomeIcon, Users, TrendingUp, Play, Heart, Sun, Waves, Umbrella, Coffee, MapPin, CheckCircle2, ExternalLink, Phone, Mail, Building2 } from "lucide-react";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

export default function HomePageSP() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  useSEO({
    title: "Villas de lujo en venta en Punta Cana | Invest in Paradise",
    description: "Descubre villas tropicales de lujo en Punta Cana, República Dominicana. Perfectas para compradores inmobiliarios, vacacionistas e inversionistas. Diseños contemporáneos de villas con impresionantes vistas al océano.",
    keywords: "bienes raíces Punta Cana, villas de lujo, inversión República Dominicana, casas tropicales"
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
            {/* Selector de idioma compacto */}
            <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
              <span className="text-gray-300">|</span>
              <Link
                to="/en"
                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                title="English"
              >
                EN
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/fr"
                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                title="French"
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

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-villa-exterior.jpg"
          alt="Villa tropical de lujo con vista al océan"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ fetchPriority: 'high' } as any}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <Heart className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">Vida de Lujo</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            <span className="block">Invierta en nuestro</span>
            <span className="font-medium">Paraíso Hoy</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubre villas tropicales de lujo en Punta Cana, República Dominicana
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#villas" className="group bg-white text-teal-700 px-8 py-3.5 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
              Explorar Villas
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white">
              Saber Más
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN SERVICIOS - Limpia & Aireada */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              Nuestros <span className="font-medium text-teal-700">Servicios</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ya sea que seas comprador, inversionista o buscador de vacaciones, tenemos la villa tropical perfecta para ti.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<HomeIcon className="w-6 h-6" />}
              title="Compradores Inmobiliarios"
              desc="Descubre villas modernas y elegantes ubicadas en exuberantes entornos tropicales. Interiores espaciosos y ventanales de piso a techo."
              color="from-teal-50 to-emerald-50"
              iconColor="text-teal-600"
            />
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Vacacionistas"
              desc="Disfruta de vistas al atardecer y jardines rodeados de palmeras. Espacios de vida abiertos diseñados para la relajación y el disfrute."
              color="from-amber-50 to-orange-50"
              iconColor="text-amber-600"
            />
            <ServiceCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Inversionistas Astutos"
              desc="Propiedades premium con alto atractivo de alquiler y fuerte potencial de ROI en el próspero mercado de Punta Cana."
              color="from-blue-50 to-cyan-50"
              iconColor="text-blue-600"
            />
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DESCRIPCIÓN DE VILLAS */}
      <section id="villas" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full">
                  <span className="text-teal-600 text-sm font-medium uppercase tracking-wide">Diseño Contemporáneo</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                  <span className="font-medium">Retiro Villa Tropical</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Bienvenido a tu escape soñado: una impresionante villa tropical de dos pisos que combina la elegancia moderna con la serena belleza natural. Esta obra maestra arquitectónica presenta líneas limpias y amplias superficies de vidrio.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  "Arquitectura moderna limpia con materiales naturales",
                  "Paredes de vidrio expansivas para vistas panorámicas al océano",
                  "Espacios de vida abiertos inundados de luz natural",
                  "Jardines tropicales cuidados con vistas al atardecer"
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

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl -z-10"></div>
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                <img
                  src="/images/villa-interior-living.jpg"
                  alt="Interior de villa de lujo con vista al océano"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN GALERÍA */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              Galería de <span className="font-medium text-teal-700">Villas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explora la impresionante arquitectura y belleza natural de nuestras villas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/villa-pool-garden.jpg"
                alt="Piscina y jardín de villa con vista al atardecer"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-lg font-medium">Piscina Infinita & Jardín</p>
                  <p className="text-sm opacity-90">Vista al atardecer desde la villa principal</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative group rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/sunset-tropical-landscape.jpg"
                  alt="Paisaje tropical al atardecer"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="relative group rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/modern-villa-entrance.jpg"
                  alt="Entrada de villa moderna"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="relative group rounded-xl overflow-hidden shadow-md col-span-2">
                <img
                  src="/images/hero-villa-exterior.jpg"
                  alt="Vista exterior"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN CTA - Suave & Atractiva */}
      <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <Umbrella className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              ¿Listo para Invertir en<br />
              nuestro <span className="font-medium text-teal-700">Paraíso</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Contacte a nuestro equipo hoy para obtener más información sobre nuestras ofertas exclusivas de villas y oportunidades de inversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#villas"
                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
              >
                <div className="p-1.5 bg-teal-50 rounded-full group-hover:bg-teal-100">
                  <HomeIcon className="w-5 h-5" />
                </div>
                Ver Todas las Propiedades
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PIE DE PÁGINA - Limpio & Simple */}
      <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-teal-400"></div>
              <div className="w-3 h-3 rounded-full bg-teal-300"></div>
              <div className="w-3 h-3 rounded-full bg-teal-200"></div>
            </div>
            <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
            <p className="text-gray-600 mb-2">Su vendedor Villas Auger Punta Cana en Bávaro, Punta Cana</p>
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

function ServiceCard({ icon, title, desc, color, iconColor }: { icon: any, title: string, desc: string, color: string, iconColor: string }) {
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