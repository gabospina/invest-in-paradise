// File: src/pages/FAQ.tsx
import { Link } from "react-router-dom";
import { ChevronRight, HelpCircle, FileText, DollarSign, Home, Shield, Globe, Phone, Mail, MapPin, CheckCircle2, ExternalLink, Heart, Sun, Waves, Umbrella, Coffee } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

export default function FAQ() {
    useSEO({
        title: "Buying Property in Bavaro, Dominican Republic | FAQ | Invest in Paradise",
        description: "Frequently asked questions about purchasing real estate in Bavaro, Punta Cana. Learn about government benefits, taxes, and investment opportunities.",
    });

    const faqCategories = [
        {
            title: "Purchase Process",
            icon: <FileText className="w-6 h-6" />,
            questions: [
                {
                    q: "Can foreigners buy property in the Dominican Republic?",
                    a: "Yes, foreign nationals have the same property rights as Dominican citizens. You can purchase property in your personal name or through a corporation. No special permits are required for most residential properties."
                },
                {
                    q: "What is the typical purchase process?",
                    a: "1. Reservation Agreement (10% deposit)\n2. Due Diligence (30 days)\n3. Purchase Agreement signing\n4. Property title transfer at the Title Registry\n5. Final payment and possession\nThe process typically takes 30-60 days."
                },
                {
                    q: "Do I need a lawyer to buy property?",
                    a: "Yes, hiring a local real estate attorney is highly recommended. They will conduct due diligence, verify the property is free of liens, and ensure proper registration. We work with trusted English-speaking attorneys."
                }
            ]
        },
        {
            title: "Taxes & Fees",
            icon: <DollarSign className="w-6 h-6" />,
            questions: [
                {
                    q: "What taxes are involved in purchasing property?",
                    a: "Property Transfer Tax: 3% of the property value (typically shared 50/50 between buyer and seller)\nLegal Fees: 1-2% of property value\nNotary Fees: Approximately 1%\nRegistration Fees: About 0.5%\nTotal closing costs typically range from 3-5% of property value."
                },
                {
                    q: "What are the annual property taxes?",
                    a: "Property taxes are very low in the Dominican Republic. For residential properties, the annual tax is approximately 1% of the registered property value, but there are exemptions for properties valued under a certain amount. Most residential properties pay minimal or no annual property tax."
                },
                {
                    q: "Are there capital gains taxes when I sell?",
                    a: "Yes, capital gains tax is 25% on the profit from property sales. However, if you own the property for more than 2 years, you may qualify for reductions. Always consult with a tax professional for your specific situation."
                }
            ]
        },
        {
            title: "Government Benefits",
            icon: <Shield className="w-6 h-6" />,
            questions: [
                {
                    q: "What is the Foreign Investment Law?",
                    a: "The Dominican Republic has Law No. 16-95 which guarantees equal rights for foreign and local investors. Foreign investors can:\n- Repatriate 100% of profits\n- Transfer capital freely\n- Receive equal legal protection\n- Access local financing options"
                },
                {
                    q: "Are there residency benefits for property owners?",
                    a: "Yes, purchasing property valued at $200,000 USD or more qualifies you for Temporary Residency, which can lead to Permanent Residency after 2 years. This provides:\n- Multiple entry visa\n- Legal right to stay indefinitely\n- Ability to open bank accounts\n- Access to local healthcare"
                },
                {
                    q: "What about retirement visa options?",
                    a: "The Pensionado (Retiree) Visa is available for those with a minimum monthly pension of $1,500 USD. Benefits include:\n- Renewable 1-year visa\n- No income tax on foreign pensions\n- Import duty exemptions for personal goods\n- Family members can be included"
                }
            ]
        },
        {
            title: "Property Management",
            icon: <Home className="w-6 h-6" />,
            questions: [
                {
                    q: "Can I rent out my property when I'm not using it?",
                    a: "Yes, vacation rentals are very popular in Bavaro. We offer property management services that typically charge 20-30% of rental income. The Dominican Republic has a growing tourism market with high rental demand, especially during peak season (December-April)."
                },
                {
                    q: "What about maintenance and security?",
                    a: "Most gated communities offer 24/7 security, maintenance, and landscaping services. Individual property maintenance costs average $100-300/month depending on property size. Many developments have homeowners associations that manage common areas."
                },
                {
                    q: "How do I handle utilities and services?",
                    a: "Utilities (water, electricity, internet) can be registered in your name or your corporation's name. Average monthly costs:\n- Electricity: $100-300 (depending on AC usage)\n- Water: $20-50\n- Internet/TV: $50-100\nWe assist with all utility setup and connections."
                }
            ]
        },
        {
            title: "Location & Lifestyle",
            icon: <Globe className="w-6 h-6" />,
            questions: [
                {
                    q: "Why invest in Bavaro specifically?",
                    a: "Bavaro offers:\n- Proximity to Punta Cana International Airport (15-20 minutes)\n- Access to 10+ championship golf courses\n- World-famous Bavaro Beach (32km of white sand)\n- Growing tourism infrastructure\n- Established expat community\n- Lower prices than Cap Cana"
                },
                {
                    q: "What is the healthcare system like?",
                    a: "Punta Cana has modern private hospitals (Hospiten, Centro Medico Punta Cana) with English-speaking staff. Many doctors are US/European trained. Health insurance is affordable ($100-300/month) and many retirees use a combination of local insurance and international coverage."
                },
                {
                    q: "Is Bavaro safe for foreign investors?",
                    a: "Yes, Bavaro is considered one of the safest areas in the Dominican Republic. Gated communities have 24/7 security, and tourist areas are well-patrolled. The local economy heavily depends on tourism, so visitor safety is a priority for authorities."
                }
            ]
        }
    ];

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
                        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                            <span className="text-xs text-teal-600 font-medium" title="English (Active)">
                                EN
                            </span>
                            <span className="text-gray-300">|</span>
                            <Link
                                to="/faq-fr"
                                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                                title="Français"
                            >
                                FR
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link
                                to="/faq-sp"
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
                        alt="FAQ about buying property in Bavaro"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <HelpCircle className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Expert Guidance</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                        <span className="block">Frequently Asked</span>
                        <span className="font-medium">Questions</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Everything you need to know about buying property in Bavaro, Dominican Republic
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="#faq-section"
                            className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white"
                        >
                            Explore FAQs
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. FAQ SECTION - Clean & Airy */}
            <section id="faq-section" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Buying Property in <span className="font-medium text-teal-700">Bavaro</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Get answers to the most common questions about real estate investment in one of the Caribbean's fastest-growing markets.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Quick Facts Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6">
                                <h3 className="text-2xl font-medium text-gray-800 mb-2 flex items-center gap-3">
                                    <div className="p-2 bg-white rounded-lg shadow-sm">
                                        <Shield className="w-5 h-5 text-teal-600" />
                                    </div>
                                    Quick Facts
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Key information about property investment in the Dominican Republic
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-3xl font-bold text-teal-600 mb-2">30-60</div>
                                    <div className="text-sm font-medium text-gray-800">Days to Complete Purchase</div>
                                </div>
                                <div className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-3xl font-bold text-teal-600 mb-2">3-5%</div>
                                    <div className="text-sm font-medium text-gray-800">Average Closing Costs</div>
                                </div>
                                <div className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-3xl font-bold text-teal-600 mb-2">$200K</div>
                                    <div className="text-sm font-medium text-gray-800">Minimum for Residency Benefits</div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Categories */}
                        <div className="lg:col-span-2 space-y-8">
                            {faqCategories.map((category, index) => (
                                <div key={index} className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-teal-200 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl text-teal-600">
                                            {category.icon}
                                        </div>
                                        <h3 className="text-2xl font-medium text-gray-800">{category.title}</h3>
                                    </div>

                                    <div className="space-y-6">
                                        {category.questions.map((item, qIndex) => (
                                            <div key={qIndex} className="border-l-4 border-teal-200 pl-6 py-2">
                                                <h4 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                                                    <span className="text-teal-600 font-bold">Q:</span> {item.q}
                                                </h4>
                                                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                                                    {item.a}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CONTACT CTA SECTION - Gentle & Inviting */}
            <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <HelpCircle className="w-8 h-8 text-teal-600" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                                Still Have <span className="font-medium text-teal-700">Questions</span>?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our real estate experts are here to help you with personalized advice about investing in Bavaro.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 p-12 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-medium text-gray-800 mb-6">Get in Touch</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Phone className="w-5 h-5 text-teal-600" />
                                            <span>(800) 123-4567</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Mail className="w-5 h-5 text-teal-600" />
                                            <a href="mailto:info@investinparadise.com" className="text-teal-600 hover:text-teal-700 transition-colors">
                                                villasaugerpuntacana@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="space-y-4">
                                    <ContactModal trigger={
                                        <button className="group bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full font-medium hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center gap-3 w-full justify-center">
                                            <Phone className="w-5 h-5" />
                                            Schedule a Consultation
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    } />
                                    <p className="text-sm text-gray-500 text-center">
                                        We respond within 24 hours
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FOOTER - Clean & Simple */}
            <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-300"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-200"></div>
                        </div>
                        <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
                        <p className="text-gray-600 mb-2">Your Villas Auger Punta Cana property investment in Bavaro, Punta Cana</p>
                        {/* <p className="text-sm text-gray-500">Bavaro, Punta Cana, Dominican Republic</p> */}
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