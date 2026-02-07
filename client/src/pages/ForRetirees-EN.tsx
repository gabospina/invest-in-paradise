// client/src/pages/ForRetirees.tsx - UPDATED MAP & CLUBS SECTION
import { Link } from "react-router-dom";
import { ChevronRight, Sun, Anchor, MapPin, CheckCircle2, ExternalLink, Waves, Umbrella, Coffee, Heart, Zap, Search, Sparkles, Shield, Building, Home, TrendingUp, Globe } from "lucide-react";
import { SimpleOpenStreetMap } from "@/components/SimpleOpenStreetMap";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

/**
 * Helper function to extract domain from URL
 */
const getDomainFromUrl = (url: string): string => {
  return url.replace(/^(https?:\/\/)/, '').split('/')[0];
};

/**
 * GOLF AND ATTRACTION DATA
 * Spanning from Playa Macao (North) to South Cap Cana
 */
const golfLocations = [
  // NORTH AREA (Macao and Uvero Alto)
  {
    name: "Hard Rock Golf Club",
    lat: 18.7231,
    lng: -68.4735,
    type: 'golf' as const,
    description: "Nicklaus Golf design at Cana Bay, located near Macao Beach.",
    url: "https://hotel.hardrock.com/punta-cana/hard-rock-golf.aspx",
    image: "/images/golf-HardRock.png"
  },
  {
    name: "Iberostar Golf Club",
    lat: 18.7089,
    lng: -68.4551,
    type: 'golf' as const,
    description: "Championship course designed by P.B. Dye with lush vegetation.",
    url: "https://www.iberostar.com/en-ca/golf/bavaro-golf-club/",
    image: "/images/golf-IberoStart-2.png"
  },
  {
    name: "Punta Blanca Golf Club",
    lat: 18.7011,
    lng: -68.4485,
    type: 'golf' as const,
    description: "Designed by Nick Price, featuring inland tropical challenges.",
    url: "https://punta-blanca.com/en/club-de-golf/fact-sheet/",
    image: "/images/golf-PuntaBlanca.png"
  },
  // CENTRAL BAVARO / COCOTAL
  {
    name: "Cocotal Golf & Country Club",
    lat: 18.6652,
    lng: -68.4122,
    type: 'golf' as const,
    description: "27-hole course designed by Jose 'Pepe' Gancedo.",
    url: "https://cocotalgolfclub.com/",
    image: "/images/golf-CocotalGolf.png"
  },
  // SOUTH AREA (Puntacana Resort and Cap Cana)
  {
    name: "Corales Golf Course",
    lat: 18.5133,
    lng: -68.3532,
    type: 'golf' as const,
    description: "Exclusive PGA TOUR destination with oceanfront holes.",
    url: "https://www.puntacana.com/en/land-of-stories-golf",
    image: "/images/golf-CoralesGolf.png"
  },
  {
    name: "La Cana Golf Club",
    lat: 18.5284,
    lng: -68.3685,
    type: 'golf' as const,
    description: "27-hole course featuring views of the Caribbean Sea.",
    url: "https://www.puntacana.com/golf/la-cana-golf-course",
    image: "/images/golf-LaCanaGolfClub.png"
  },
  {
    name: "Punta Espada Golf Club",
    lat: 18.4958,
    lng: -68.3912,
    type: 'golf' as const,
    description: "Jack Nicklaus Signature course, ranked #1 in the Caribbean.",
    url: "https://www.puntaespadagolf.com/",
    image: "/images/golf-PuntaEspadaGolf.png"
  },
  {
    name: "Barcelo Bavaro Golf Club",
    lat: 18.6200,
    lng: -68.4032,
    type: 'golf' as const,
    description: "Beautiful course located within Barceló Bávaro complex.",
    url: "https://www.barcelo.com/en-us/barcelo-bavaro-palace/galleries/#golf",
    image: "/images/golf-BarceloBavaro.png"
  },
  {
    name: "Los Corales Golf Club",
    lat: 18.6800,
    lng: -68.4300,
    type: 'golf' as const,
    description: "Challenging course with water features and tropical landscape.",
    url: "https://www.puntacana.com/en/golf",
    image: "/images/golf-CoralesGolf.png"
  },
  {
    name: "Punta Cana",
    lat: 18.7000,
    lng: -68.4651,
    type: 'attraction' as const,
    description: "Championship Golf courses.",
    url: "https://golfscape.com/punta-cana-golf-courses",
    image: "/images/golf-GolfScape-golfCourses.png"
  },
  {
    name: "Cap Cana Marina",
    lat: 18.4547,
    lng: -68.4022,
    type: 'attraction' as const,
    description: "State-of-the-art marina at the Southern tip of Cap Cana.",
    url: "https://www.capcana.com/marina",
    // image: "/images/cap-cana-marina.jpg"
  },
  {
    name: "Cap Cana News",
    lat: 18.4557,
    lng: -68.4012,
    type: 'attraction' as const,
    description: "Latest news and updates from Cap Cana community.",
    url: "https://news.capcana.com/",
    // image: "/images/cap-cana-community.jpg"
  },
  {
    name: "Cap Cana Website",
    lat: 18.4537,
    lng: -68.4032,
    type: 'attraction' as const,
    description: "Official website for the Cap Cana resort community.",
    url: "https://capcana.com/",
    // image: "/images/cap-cana-resort.jpg"
  }
];

/**
 * STRATEGY FEATURES - Why Choose Our Retirement Solution
 */
const STRATEGY_FEATURES = [
  {
    id: 'perf',
    title: 'Premium Investment Performance',
    description: 'Strategic locations near world-class golf courses ensure high rental yields and capital appreciation for retirement investors.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 'seo',
    title: 'Global Retirement Reach',
    description: 'Targeted marketing to affluent retirees in North America and Europe seeking luxury Caribbean living with golf access.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 'ux',
    title: 'Bespoke Retirement Experience',
    description: 'Custom-designed villa layouts and amenities tailored for the 55+ lifestyle, from single-level living to maintenance-free communities.',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: 'security',
    title: 'Fortified Investment Security',
    description: 'Gated communities with 24/7 security, proper legal ownership structures, and reliable property management for peace of mind.',
    icon: <Shield className="w-6 h-6" />
  }
];

/**
 * RETIREMENT OPTIONS COMPARISON
 */
const RETIREMENT_COMPARISON = [
  {
    feature: 'Golf Course Access',
    custom: 'Direct (Adjacent to Courses)',
    traditional: 'Limited (Membership Required)',
    isCustomWinner: true
  },
  {
    feature: 'Property Management',
    custom: 'Full-Service Included',
    traditional: 'Extra Cost/DIY',
    isCustomWinner: true
  },
  {
    feature: 'Medical Facilities',
    custom: 'On-Site or Nearby',
    traditional: 'Variable Location',
    isCustomWinner: true
  },
  {
    feature: 'Resale Value',
    custom: 'High (Premium Location)',
    traditional: 'Standard (Market Dependent)',
    isCustomWinner: true
  }
];

export default function ForRetirees() {
  useSEO({
    title: "Luxury Retirement in Punta Cana | Invest in Paradise",
    description: "Explore world-class golf and high-end living from Macao to Cap Cana. Discover the ultimate retirement lifestyle in the Dominican Republic.",
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
            <Link to="/en" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
              Home
            </Link>
            <Link to="/our-story" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
              Our Story
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
                to="/pour-retires"
                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                title="Français"
              >
                FR
              </Link>
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
                Contact Us
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
            alt="Luxury retirement sunset view"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <Heart className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">Retirement Living</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            <span className="block">Retire in</span>
            <span className="font-medium">Paradise</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            World-class golf, luxury amenities, and a vibrant community await you in Punta Cana
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#map-section"
              className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white"
            >
              View Map & Locations
            </a>
          </div>
        </div>
      </section>

      {/* 2. MAP SECTION - FULL WIDTH with Clubs Below in Grid */}
      <section id="map-section" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              From <span className="font-medium text-teal-700">Macao</span> to <span className="font-medium text-teal-700">Cap Cana</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover premier golf courses and luxury amenities along Punta Cana's breathtaking coastline
            </p>
          </div>

          {/* Full Width Map */}
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
              <span>Click on markers to explore locations. Zoom to see details.</span>
            </div>
          </div>

          {/* Premier Clubs & Attractions Grid - Below Map */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-tight">
                Premier <span className="font-medium text-teal-700">Clubs & Attractions</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Explore world-class golf courses and exclusive amenities in the region
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {golfLocations.map((location, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                  onClick={() => window.open(location.url, '_blank')}
                >
                  {/* Add image at the top of the card */}
                  {location.image && (
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback if image doesn't exist
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

      {/* 3. STRATEGY FEATURES SECTION - NEW */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              The <span className="font-medium text-teal-700">Premium Retirement</span> Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Why discerning retirees choose our strategic approach to Caribbean living
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

      {/* 6. LIFESTYLE SECTION - Relaxed & Inviting */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full">
                  <span className="text-teal-600 text-sm font-medium uppercase tracking-wide">Luxury Lifestyle</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                  <span className="font-medium">Championship Living</span><br />
                  On Your Terms
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Retire in style with access to some of the world's most prestigious golf courses. Punta Cana offers world-class private healthcare, significant tax benefits for foreign residents, and a vibrant community of international retirees.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  "Exclusive access to Jack Nicklaus Signature courses",
                  "Residency tax incentives for international buyers",
                  "State-of-the-art private medical facilities",
                  "Active international social clubs and associations"
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
                icon={<Sun className="w-6 h-6" />}
                title="Endless Summer"
                desc="Enjoy tropical weather and outdoor living year-round in our sunny paradise."
                color="from-amber-50 to-orange-50"
                iconColor="text-amber-600"
              />
              <FeatureCard
                icon={<Anchor className="w-6 h-6" />}
                title="Marina Access"
                desc="Secure slips for large vessels in the heart of Cap Cana's world-class marina."
                color="from-blue-50 to-cyan-50"
                iconColor="text-blue-600"
              />
              <FeatureCard
                icon={<Waves className="w-6 h-6" />}
                title="Beachfront Living"
                desc="Steps away from 32km of pristine Bavaro Beach with turquoise waters."
                color="from-teal-50 to-emerald-50"
                iconColor="text-teal-600"
              />
              <FeatureCard
                icon={<Coffee className="w-6 h-6" />}
                title="Leisure & Culture"
                desc="Vibrant dining, entertainment, and cultural experiences right at your doorstep."
                color="from-violet-50 to-purple-50"
                iconColor="text-violet-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION - Gentle & Inviting */}
      <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <Umbrella className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              Ready to Start Your<br />
              <span className="font-medium text-teal-700">Paradise Retirement</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Join hundreds of satisfied retirees who found their perfect home in Punta Cana. Let us guide you to your dream retirement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+18001234567"
                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
              >
                <div className="p-1.5 bg-teal-50 rounded-full group-hover:bg-teal-100">
                  {/* <Phone className="w-4 h-4" /> */}
                </div>
                Call: (800) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER - Clean & Simple */}
      <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-teal-400"></div>
              <div className="w-3 h-3 rounded-full bg-teal-300"></div>
              <div className="w-3 h-3 rounded-full bg-teal-200"></div>
            </div>
            <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
            <p className="text-gray-600 mb-2">Your Villas Auger Punta cana partner for retirement in Punta Cana</p>
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