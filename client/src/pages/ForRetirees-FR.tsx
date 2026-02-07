// client/src/pages/PourRetires.tsx - VERSION FRANÇAISE
import { Link } from "react-router-dom";
import { ChevronRight, Sun, Anchor, MapPin, CheckCircle2, ExternalLink, Waves, Umbrella, Coffee, Heart, Zap, Search, Sparkles, Shield, Building, Home, TrendingUp, Globe } from "lucide-react";
import { SimpleOpenStreetMap } from "@/components/SimpleOpenStreetMap";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

/**
 * Fonction d'aide pour extraire le domaine d'une URL
 */
const getDomainFromUrl = (url: string): string => {
  return url.replace(/^(https?:\/\/)/, '').split('/')[0];
};

/**
 * DONNÉES DE GOLF ET ATTRACTIONS
 * S'étendant de Playa Macao (Nord) au Sud de Cap Cana
 */
const golfLocations = [
  // ZONE NORD (Macao et Uvero Alto)
  {
    name: "Hard Rock Golf Club",
    lat: 18.7231,
    lng: -68.4735,
    type: 'golf' as const,
    description: "Conception Nicklaus Golf à Cana Bay, situé près de la plage de Macao.",
    url: "https://hotel.hardrock.com/punta-cana/hard-rock-golf.aspx",
    image: "/images/golf-HardRock.png"
  },
  {
    name: "Iberostar Golf Club",
    lat: 18.7089,
    lng: -68.4551,
    type: 'golf' as const,
    description: "Parcours championnat conçu par P.B. Dye avec une végétation luxuriante.",
    url: "https://www.iberostar.com/en-ca/golf/bavaro-golf-club/",
    image: "/images/golf-IberoStart-2.png"
  },
  {
    name: "Punta Blanca Golf Club",
    lat: 18.7011,
    lng: -68.4485,
    type: 'golf' as const,
    description: "Conçu par Nick Price, avec des défis tropicaux intérieurs.",
    url: "https://punta-blanca.com/en/club-de-golf/fact-sheet/",
    image: "/images/golf-PuntaBlanca.png"
  },
  // CENTRE BAVARO / COCOTAL
  {
    name: "Cocotal Golf & Country Club",
    lat: 18.6652,
    lng: -68.4122,
    type: 'golf' as const,
    description: "Parcours de 27 trous conçu par Jose 'Pepe' Gancedo.",
    url: "https://cocotalgolfclub.com/",
    image: "/images/golf-CocotalGolf.png"
  },
  // ZONE SUD (Puntacana Resort et Cap Cana)
  {
    name: "Corales Golf Course",
    lat: 18.5133,
    lng: -68.3532,
    type: 'golf' as const,
    description: "Destination exclusive du PGA TOUR avec des trous en bord de mer.",
    url: "https://www.puntacana.com/en/land-of-stories-golf",
    image: "/images/golf-CoralesGolf.png"
  },
  {
    name: "La Cana Golf Club",
    lat: 18.5284,
    lng: -68.3685,
    type: 'golf' as const,
    description: "Parcours de 27 trous avec vue sur la mer des Caraïbes.",
    url: "https://www.puntacana.com/golf/la-cana-golf-course",
    image: "/images/golf-LaCanaGolfClub.png"
  },
  {
    name: "Punta Espada Golf Club",
    lat: 18.4958,
    lng: -68.3912,
    type: 'golf' as const,
    description: "Parcours Signature Jack Nicklaus, classé n°1 dans les Caraïbes.",
    url: "https://www.puntaespadagolf.com/",
    image: "/images/golf-PuntaEspadaGolf.png"
  },
  {
    name: "Barcelo Bavaro Golf Club",
    lat: 18.6200,
    lng: -68.4032,
    type: 'golf' as const,
    description: "Magnifique parcours situé dans le complexe Barceló Bávaro.",
    url: "https://www.barcelo.com/en-us/barcelo-bavaro-palace/galleries/#golf",
    image: "/images/golf-BarceloBavaro.png"
  },
  {
    name: "Los Corales Golf Club",
    lat: 18.6800,
    lng: -68.4300,
    type: 'golf' as const,
    description: "Parcours stimulant avec des plans d'eau et un paysage tropical.",
    url: "https://www.puntacana.com/en/golf",
    image: "/images/golf-CoralesGolf.png"
  },
  {
    name: "Punta Cana",
    lat: 18.7000,
    lng: -68.4651,
    type: 'attraction' as const,
    description: "Parcours de golf championnat.",
    url: "https://golfscape.com/punta-cana-golf-courses",
    image: "/images/golf-GolfScape-golfCourses.png"
  },
  {
    name: "Cap Cana Marina",
    lat: 18.4547,
    lng: -68.4022,
    type: 'attraction' as const,
    description: "Marina ultramoderne à la pointe sud de Cap Cana.",
    url: "https://www.capcana.com/marina",
    // image: "/images/cap-cana-marina.jpg"
  },
  {
    name: "Cap Cana News",
    lat: 18.4557,
    lng: -68.4012,
    type: 'attraction' as const,
    description: "Dernières nouvelles et mises à jour de la communauté Cap Cana.",
    url: "https://news.capcana.com/",
    // image: "/images/cap-cana-community.jpg"
  },
  {
    name: "Cap Cana Website",
    lat: 18.4537,
    lng: -68.4032,
    type: 'attraction' as const,
    description: "Site officiel de la communauté de villégiature Cap Cana.",
    url: "https://capcana.com/",
    // image: "/images/cap-cana-resort.jpg"
  }
];

/**
 * FONCTIONNALITÉS STRATÉGIQUES - Pourquoi choisir notre solution de retraite
 */
const STRATEGY_FEATURES = [
  {
    id: 'perf',
    title: 'Performance d\'Investissement Premium',
    description: 'Des emplacements stratégiques près des parcours de golf de classe mondiale garantissent des rendements locatifs élevés et une plus-value pour les investisseurs à la retraite.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 'seo',
    title: 'Portée Mondiale de la Retraite',
    description: 'Marketing ciblé vers les retraités aisés d\'Amérique du Nord et d\'Europe recherchant une vie de luxe dans les Caraïbes avec accès au golf.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 'ux',
    title: 'Expérience de Retraite Sur Mesure',
    description: 'Plans de villas et équipements conçus sur mesure pour le style de vie 55+, de la vie à un seul niveau aux communautés sans entretien.',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: 'security',
    title: 'Sécurité d\'Investissement Renforcée',
    description: 'Communautés fermées avec sécurité 24h/24, structures de propriété légales appropriées et gestion immobilière fiable pour une tranquillité d\'esprit.',
    icon: <Shield className="w-6 h-6" />
  }
];

/**
 * COMPARAISON DES OPTIONS DE RETRAITE
 */
const RETIREMENT_COMPARISON = [
  {
    feature: 'Accès aux Parcours de Golf',
    custom: 'Direct (Adjacent aux Parcours)',
    traditional: 'Limité (Adhésion Requise)',
    isCustomWinner: true
  },
  {
    feature: 'Gestion Immobilière',
    custom: 'Service Complet Inclus',
    traditional: 'Coût Supplémentaire/DIY',
    isCustomWinner: true
  },
  {
    feature: 'Installations Médicales',
    custom: 'Sur Site ou à Proximité',
    traditional: 'Emplacement Variable',
    isCustomWinner: true
  },
  {
    feature: 'Valeur de Revente',
    custom: 'Élevée (Emplacement Premium)',
    traditional: 'Standard (Dépend du Marché)',
    isCustomWinner: true
  }
];

export default function PourRetires() {
  useSEO({
    title: "Retraite de Luxe à Punta Cana | Invest in Paradise",
    description: "Découvrez le golf de classe mondiale et la vie haut de gamme de Macao à Cap Cana. Explorez le style de vie de retraite ultime en République Dominicaine.",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white font-sans">
      {/* 1. SECTION HÉRO - Moderne et calme */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-100/50 shadow-sm">
        <nav className="container flex items-center justify-between py-5 px-4 md:px-6">
          <Link to="/" className="text-2xl font-bold text-teal-700 tracking-tight hover:text-teal-800 transition-colors">
            Invest in Paradise
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/fr" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
              Accueil
            </Link>
            <Link to="/our-story" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
              Notre Histoire
            </Link>
            <Link to="/pour-familles" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
              Pour Familles
            </Link>
            <Link to="/villas-project" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
              Projet de Villas
            </Link>
            <Link to="/faq-fr" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
              FAQ
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
              <span className="text-xs text-teal-600 font-medium" title="Français (Actif)">
                FR
              </span>
              <span className="text-gray-300">|</span>
              <Link
                to="/para-jubilados"
                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                title="Español"
              >
                ES
              </Link>
            </div>
            <ContactModal trigger={
              <button className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-2.5 rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium">
                Contactez-Nous
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
            alt="Vue du coucher de soleil pour une retraite de luxe"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <Heart className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">Vie de Retraite</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            <span className="block">Retraite au</span>
            <span className="font-medium">Paradis</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Golf de classe mondiale, équipements de luxe et une communauté dynamique vous attendent à Punta Cana
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#map-section"
              className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white"
            >
              Voir Carte & Emplacements
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECTION CARTE - Pleine largeur avec clubs en grille en dessous */}
      <section id="map-section" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              De <span className="font-medium text-teal-700">Macao</span> à <span className="font-medium text-teal-700">Cap Cana</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez les parcours de golf de premier ordre et les équipements de luxe le long de la côte à couper le souffle de Punta Cana
            </p>
          </div>

          {/* Carte pleine largeur */}
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
              <span>Cliquez sur les marqueurs pour explorer les lieux. Zoomez pour voir les détails.</span>
            </div>
          </div>

          {/* Grille des clubs et attractions de premier ordre - En dessous de la carte */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-tight">
                <span className="font-medium text-teal-700">Clubs & Attractions</span> de Premier Ordre
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Explorez les parcours de golf de classe mondiale et les équipements exclusifs de la région
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {golfLocations.map((location, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                  onClick={() => window.open(location.url, '_blank')}
                >
                  {/* Ajouter l'image en haut de la carte */}
                  {location.image && (
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          // Image de secours si elle n'existe pas
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

      {/* 3. SECTION FONCTIONNALITÉS STRATÉGIQUES - NOUVEAU */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              L'<span className="font-medium text-teal-700">Avantage Premium</span> de la Retraite
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pourquoi les retraités avisés choisissent notre approche stratégique de la vie caribéenne
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

      {/* 6. SECTION STYLE DE VIE - Détendu et invitant */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full">
                  <span className="text-teal-600 text-sm font-medium uppercase tracking-wide">Style de Vie Luxueux</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                  <span className="font-medium">Vivre comme un Champion</span><br />
                  À Vos Conditions
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Prenez votre retraite avec style en ayant accès à certains des parcours de golf les plus prestigieux au monde. Punta Cana offre des soins de santé privés de classe mondiale, des avantages fiscaux importants pour les résidents étrangers et une communauté dynamique de retraités internationaux.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  "Accès exclusif aux parcours Signature Jack Nicklaus",
                  "Incitations fiscales à la résidence pour les acheteurs internationaux",
                  "Installations médicales privées ultramodernes",
                  "Clubs sociaux internationaux actifs et associations"
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
                icon={<Sun className="w-6 h-6" />}
                title="Été Sans Fin"
                desc="Profitez d'un climat tropical et d'une vie en plein air toute l'année dans notre paradis ensoleillé."
                color="from-amber-50 to-orange-50"
                iconColor="text-amber-600"
              />
              <FeatureCard
                icon={<Anchor className="w-6 h-6" />}
                title="Accès à la Marina"
                desc="Postes d'amarrage sécurisés pour les grands navires au cœur de la marina de classe mondiale de Cap Cana."
                color="from-blue-50 to-cyan-50"
                iconColor="text-blue-600"
              />
              <FeatureCard
                icon={<Waves className="w-6 h-6" />}
                title="Vie en Front de Mer"
                desc="À quelques pas de 32 km de plage de Bavaro immaculée avec des eaux turquoise."
                color="from-teal-50 to-emerald-50"
                iconColor="text-teal-600"
              />
              <FeatureCard
                icon={<Coffee className="w-6 h-6" />}
                title="Loisirs & Culture"
                desc="Expériences de restauration, de divertissement et culturelles dynamiques à votre porte."
                color="from-violet-50 to-purple-50"
                iconColor="text-violet-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION APPEL À L'ACTION - Douce et invitante */}
      <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <Umbrella className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              Prêt à Commencer Votre<br />
              <span className="font-medium text-teal-700">Retraite au Paradis</span> ?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Rejoignez des centaines de retraités satisfaits qui ont trouvé leur maison idéale à Punta Cana. Laissez-nous vous guider vers la retraite de vos rêves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+18001234567"
                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
              >
                <div className="p-1.5 bg-teal-50 rounded-full group-hover:bg-teal-100">
                  {/* <Phone className="w-4 h-4" /> */}
                </div>
                Appeler : (800) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PIED DE PAGE - Propre et simple */}
      <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-teal-400"></div>
              <div className="w-3 h-3 rounded-full bg-teal-300"></div>
              <div className="w-3 h-3 rounded-full bg-teal-200"></div>
            </div>
            <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
            <p className="text-gray-600 mb-2">Votre Villas Auger Punta Cana partenaire pour la retraite à Punta Cana</p>
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