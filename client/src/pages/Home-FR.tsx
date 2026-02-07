// client/src/pages/home-FR.tsx
import { Link } from "react-router-dom";
import { ChevronRight, Home as HomeIcon, Users, TrendingUp, Play, Heart, Sun, Waves, Umbrella, Coffee, MapPin, CheckCircle2, ExternalLink, Phone, Mail, Building2 } from "lucide-react";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

export default function HomePageFR() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  useSEO({
    title: "Villas de luxe à vendre à Punta Cana | Invest in Paradise",
    description: "Découvrez des villas tropicales de luxe à Punta Cana, République Dominicaine. Parfait pour les acheteurs immobiliers, les vacanciers et les investisseurs. Designs de villas contemporains avec des vues imprenables sur l'océan.",
    keywords: "immobilier Punta Cana, villas de luxe, investissement République Dominicaine, maisons tropicales"
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white font-sans">
      {/* 1. SECTION HÉROÏQUE - Moderne & Calme */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-100/50 shadow-sm">
        <nav className="container flex items-center justify-between py-5 px-4 md:px-6">
          <Link to="/" className="text-2xl font-bold text-teal-700 tracking-tight hover:text-teal-800 transition-colors">
            Invest in Paradise
          </Link>
          <div className="flex items-center gap-6">
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
            {/* Sélecteur de langue compact */}
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
              <span className="text-xs text-teal-600 font-medium" title="Français (Actif)">
                FR
              </span>
              <Link
                to="/es"
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

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-villa-exterior.jpg"
          alt="Villa tropicale de luxe avec vue sur l'océan"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ fetchPriority: 'high' } as any}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <Heart className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">Vie de Luxe</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            <span className="block">Investissez dans le</span>
            <span className="font-medium">Paradis Aujourd'hui</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez des villas tropicales de luxe à Punta Cana, République Dominicaine
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#villas" className="group bg-white text-teal-700 px-8 py-3.5 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
              Explorer les Villas
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white">
              En Savoir Plus
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECTION SERVICES - Propre & Aérée */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              Nos <span className="font-medium text-teal-700">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Que vous soyez acheteur, investisseur ou en quête de vacances, nous avons la villa tropicale parfaite pour vous.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<HomeIcon className="w-6 h-6" />}
              title="Acheteurs Immobiliers"
              desc="Découvrez des villas modernes et élégantes nichées dans des cadres tropicaux luxuriants. Intérieurs spacieux et fenêtres du sol au plafond."
              color="from-teal-50 to-emerald-50"
              iconColor="text-teal-600"
            />
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Vacanciers"
              desc="Profitez de vues sur le coucher de soleil et de jardins bordés de palmiers. Espaces de vie ouverts conçus pour la détente et l'indulgence."
              color="from-amber-50 to-orange-50"
              iconColor="text-amber-600"
            />
            <ServiceCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Investisseurs Avertis"
              desc="Propriétés premium avec un fort potentiel de location et un excellent retour sur investissement sur le marché florissant de Punta Cana."
              color="from-blue-50 to-cyan-50"
              iconColor="text-blue-600"
            />
          </div>
        </div>
      </section>

      {/* 3. SECTION DESCRIPTION DES VILLAS */}
      <section id="villas" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full">
                  <span className="text-teal-600 text-sm font-medium uppercase tracking-wide">Design Contemporain</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                  <span className="font-medium">Retraite Villa Tropicale</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Bienvenue dans votre échappatoire rêvée - une magnifique villa tropicale à deux étages qui allie l'élégance moderne à la beauté naturelle sereine. Ce chef-d'œuvre architectural présente des lignes épurées et de grandes surfaces vitrées.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  "Architecture moderne épurée avec des matériaux naturels",
                  "Murs de verre expansifs pour des vues panoramiques sur l'océan",
                  "Espaces de vie ouverts baignés de lumière naturelle",
                  "Jardins tropicaux entretenus avec vues sur le coucher de soleil"
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
                  alt="Intérieur de villa de luxe avec vue sur l'océan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION GALERIE */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              Galerie de <span className="font-medium text-teal-700">Villas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explorez l'architecture étonnante et la beauté naturelle de nos villas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/villa-pool-garden.jpg"
                alt="Piscine et jardin de villa avec vue sur le coucher de soleil"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-lg font-medium">Piscine à débordement & Jardin</p>
                  <p className="text-sm opacity-90">Vue sur le coucher de soleil depuis la villa principale</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative group rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/sunset-tropical-landscape.jpg"
                  alt="Paysage tropical au coucher du soleil"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="relative group rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/modern-villa-entrance.jpg"
                  alt="Entrée de villa moderne"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="relative group rounded-xl overflow-hidden shadow-md col-span-2">
                <img
                  src="/images/hero-villa-exterior.jpg"
                  alt="Vue extérieure"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION CTA - Douce & Attrayante */}
      <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <Umbrella className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              Prêt à Investir dans<br />
              le <span className="font-medium text-teal-700">Paradis</span> ?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Contactez notre équipe dès aujourd'hui pour en savoir plus sur nos offres de villas exclusives et nos opportunités d'investissement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#villas"
                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
              >
                <div className="p-1.5 bg-teal-50 rounded-full group-hover:bg-teal-100">
                  <HomeIcon className="w-5 h-5" />
                </div>
                Voir Toutes les Propriétés
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PIED DE PAGE - Propre & Simple */}
      <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-teal-400"></div>
              <div className="w-3 h-3 rounded-full bg-teal-300"></div>
              <div className="w-3 h-3 rounded-full bg-teal-200"></div>
            </div>
            <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
            <p className="text-gray-600 mb-2">Votre vendeur Villas Auger Punta Cana à Bávaro, Punta Cana</p>
            <p className="text-sm text-gray-500">Bavaro, Punta Cana, République Dominicaine</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-8">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Villas Auger Punta Cana. Tous droits réservés.
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/terms" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                Conditions Générales
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