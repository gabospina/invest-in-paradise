import { Link } from "react-router-dom";
import { ChevronRight, Home as HomeIcon, Users, TrendingUp, Play, Heart, Sun, Waves, Umbrella, Coffee, MapPin, CheckCircle2, ExternalLink, Phone, Mail, Building2 } from "lucide-react";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

/**
 * Design System: Elegant Coastal Sophistication
 * - Cormorant Garamond serif headlines for premium feel
 * - Raleway sans-serif body text for readability
 * - Ocean blue and warm sand accents
 * - Generous whitespace and refined layouts
 */

export default function HomePage() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  useSEO({
    title: "Luxury Villas for Sale in Punta Cana | Invest in Paradise",
    description: "Discover luxury tropical villas in Punta Cana, Dominican Republic. Perfect for real estate buyers, vacation renters, and investors. Contemporary villa designs with stunning ocean views.",
    keywords: "Punta Cana real estate, luxury villas, Dominican Republic investment, tropical homes"
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
            {/* Compact Language Switcher */}
            {/* French page language switcher */}
            <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
              {/* Current language in teal, others in gray with links */}
              <span className="text-xs text-teal-600 font-medium" title="English (Active)">
                EN
              </span>
              <span className="text-gray-300">|</span>
              <Link
                to="/fr"
                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                title="Français"
              >
                FR
              </Link>
              <span className="text-gray-300">|</span>
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
                Contact Us
              </button>
            } />
          </div>
        </nav>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-villa-exterior.jpg"
          alt="Luxury tropical villa with ocean view"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ fetchPriority: 'high' } as any}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <Heart className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">Luxury Living</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            <span className="block">Invest in</span>
            <span className="font-medium">Paradise Today</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover luxury tropical villas in Punta Cana, Dominican Republic
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#villas" className="group bg-white text-teal-700 px-8 py-3.5 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
              Explore Villas
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION - Clean & Airy */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              Our <span className="font-medium text-teal-700">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Whether you're a buyer, investor, or vacation seeker, we have the perfect tropical villa for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<HomeIcon className="w-6 h-6" />}
              title="Real Estate Buyers"
              desc="Discover sleek, modern villas nestled in lush tropical settings. Spacious interiors and floor-to-ceiling windows."
              color="from-teal-50 to-emerald-50"
              iconColor="text-teal-600"
            />
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Vacation Renters"
              desc="Enjoy sunset views and palm-lined gardens. Open-concept living spaces designed for relaxation and indulgence."
              color="from-amber-50 to-orange-50"
              iconColor="text-amber-600"
            />
            <ServiceCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Savvy Investors"
              desc="Premium properties with high rental appeal and strong ROI potential in the thriving Punta Cana market."
              color="from-blue-50 to-cyan-50"
              iconColor="text-blue-600"
            />
          </div>
        </div>
      </section>

      {/* 3. VILLA DESCRIPTION SECTION */}
      <section id="villas" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full">
                  <span className="text-teal-600 text-sm font-medium uppercase tracking-wide">Contemporary Design</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                  <span className="font-medium">Tropical Villa Retreat</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Welcome to your dream escape—a stunning two-story tropical villa that blends modern elegance with serene natural beauty. This architectural masterpiece features clean lines and expansive glass.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  "Clean modern architecture with natural materials",
                  "Expansive glass walls for panoramic ocean views",
                  "Open-concept living spaces flooded with natural light",
                  "Manicured tropical gardens with sunset vistas"
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
                  alt="Luxury villa interior with ocean view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              Villa <span className="font-medium text-teal-700">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore the stunning architecture and natural beauty of our villas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/villa-pool-garden.jpg"
                alt="Villa pool and garden with sunset view"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-lg font-medium">Infinity Pool & Garden</p>
                  <p className="text-sm opacity-90">Sunset view from the main villa</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative group rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/sunset-tropical-landscape.jpg"
                  alt="Tropical sunset landscape"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="relative group rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/modern-villa-entrance.jpg"
                  alt="Modern villa entrance"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="relative group rounded-xl overflow-hidden shadow-md col-span-2">
                <img
                  src="/images/hero-villa-exterior.jpg"
                  alt="Exterior view"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION - Gentle & Inviting */}
      <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <Umbrella className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
              Ready to Invest in<br />
              <span className="font-medium text-teal-700">Paradise</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Contact our team today to learn more about our exclusive villa offerings and investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#villas"
                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
              >
                <div className="p-1.5 bg-teal-50 rounded-full group-hover:bg-teal-100">
                  <HomeIcon className="w-5 h-5" />
                </div>
                View All Properties
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER - Clean & Simple */}
      <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-teal-400"></div>
              <div className="w-3 h-3 rounded-full bg-teal-300"></div>
              <div className="w-3 h-3 rounded-full bg-teal-200"></div>
            </div>
            <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
            <p className="text-gray-600 mb-2">Your Villa Auger Punta Cana seller in Bavaro, Punta Cana</p>
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