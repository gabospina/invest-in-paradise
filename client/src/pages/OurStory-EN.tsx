import { Link } from "react-router-dom";
import { HeartHandshake, GraduationCap, Home, Users, Trophy, Building2, ChevronRight, Heart, Sun, Waves, Umbrella, Coffee, MapPin, CheckCircle2, ExternalLink, Phone, Mail } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function OurStory() {
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
                                to="/notre-histoire"
                                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                                title="Français"
                            >
                                FR
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link
                                to="/nuestra-historia"
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
                        alt="Our story - Building more than villas"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <HeartHandshake className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Our Mission</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                        <span className="block">Building More</span>
                        <span className="font-medium">Than Villas</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Creating luxury properties while building a better future for Punta Cana's children
                    </p>
                </div>
            </section>

            {/* 2. PRESIDENT INTRODUCTION - Clean & Airy */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                                    Meet Our <span className="font-medium text-teal-700">President</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    <strong className="font-medium text-gray-800">Simon Auger</strong>, founder and president of Villas Auger Punta Cana, has been a visionary real estate developer. Born and raised in Montreal, Quebec, Canada, Simon's passion and vision drives every project.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-400 p-6 rounded-r-xl">
                                <p className="text-lg text-gray-700 italic">
                                    "Our mission extends beyond building beautiful villas. Every property we sell helps fund educational opportunities for local children who otherwise couldn't afford school."
                                </p>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                With a background in sustainable development and community building, Simon ensures that each luxury villa project contributes to the long-term prosperity of Punta Cana and its residents.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl -z-10"></div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/images/villasAuger-president.png"
                                    alt="Simon Auger - President"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <p className="text-white text-lg font-medium">Simon Auger</p>
                                    <p className="text-white/80 text-sm">President & Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. COMMUNITY IMPACT SECTION */}
            <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Community <span className="font-medium text-teal-700">Impact Program</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Every villa sale directly sponsors education for children from low-income families
                        </p>
                    </div>

                    {/* Impact Boxes */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: <Home className="w-6 h-6" />,
                                title: "Villa Sale",
                                description: "Each luxury villa purchase includes a contribution to our education fund",
                                stats: "% of sale price",
                                color: "from-blue-50 to-cyan-50",
                                iconColor: "text-blue-600"
                            },
                            {
                                icon: <GraduationCap className="w-6 h-6" />,
                                title: "School Sponsorship",
                                description: "Funds cover tuition, uniforms, books, and meals for one year",
                                stats: "1 child per villa",
                                color: "from-teal-50 to-emerald-50",
                                iconColor: "text-teal-600"
                            },
                            {
                                icon: <Users className="w-6 h-6" />,
                                title: "Community Growth",
                                description: "Building sustainable development through education and opportunity",
                                stats: "50+ children sponsored",
                                color: "from-violet-50 to-purple-50",
                                iconColor: "text-violet-600"
                            }
                        ].map((item, index) => (
                            <div key={index} className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform`}>
                                    <div className={item.iconColor}>
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-medium text-gray-800 mb-3 group-hover:text-teal-700 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="inline-block px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg font-medium text-sm">
                                    {item.stats}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* How It Works */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-lg mb-16">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-tight">
                                How Our <span className="font-medium text-teal-700">Program Works</span>
                            </h3>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                A simple, transparent process that creates lasting impact
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                {
                                    step: "1",
                                    title: "Villa Purchase",
                                    description: "Client invests in their dream tropical villa"
                                },
                                {
                                    step: "2",
                                    title: "% Contribution",
                                    description: "% of sale price allocated to education fund"
                                },
                                {
                                    step: "3",
                                    title: "Child Selection",
                                    description: "Local schools identify children from low-income families"
                                },
                                {
                                    step: "4",
                                    title: "Full Sponsorship",
                                    description: "Complete educational coverage for one year"
                                }
                            ].map((item, index) => (
                                <div key={index} className="relative text-center group">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 flex items-center justify-center font-bold text-lg mb-4 mx-auto group-hover:from-teal-200 group-hover:to-blue-200 transition-all group-hover:scale-110">
                                        {item.step}
                                    </div>
                                    <h4 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-600">
                                        {item.description}
                                    </p>
                                    {index < 3 && (
                                        <div className="hidden md:block absolute top-6 left-3/4 w-1/2 h-0.5 bg-gradient-to-r from-teal-100 to-blue-100"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* School Children Photo */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl -z-10"></div>
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xl">
                            <img
                                src="/images/villasAuger-childrenSchool.jpeg"
                                alt="Children at school sponsored by our education program"
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-6 text-center border-t border-gray-100">
                                <p className="text-sm text-gray-600">
                                    Children at school supported by our education sponsorship program
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SUCCESS STORIES */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Success <span className="font-medium text-teal-700">Stories</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Real impact from our community investment program
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                    <img
                                        src="/images/villasAuger-childrenSchool.jpeg"
                                        alt="Maria - Sponsored Student"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Maria, Age 12</h3>
                                    <p className="text-teal-600 text-sm">Sponsored for 3 years</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                "Thanks to the education sponsorship, I can now attend school full-time. I want to become a teacher and help other children in my community."
                            </p>
                            <div className="flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-amber-500" />
                                <span className="text-sm text-gray-700 font-medium">Top of her class in mathematics</span>
                            </div>
                        </div>

                        <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                    <img
                                        src="/images/villa-owner.png"
                                        alt="John Smith - Villa Owner"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">John & Sarah Smith</h3>
                                    <p className="text-teal-600 text-sm">Villa Owners since 2026</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                "We working to buy our villa, we loved knowing that our investment will also help local children get an education. It made our purchase even more meaningful."
                            </p>
                            <div className="flex items-center gap-2">
                                <HeartHandshake className="w-4 h-4 text-red-500" />
                                <span className="text-sm text-gray-700 font-medium">Sponsoring Maria's education</span>
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
                            <HeartHandshake className="w-8 h-8 text-teal-600" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Invest in <span className="font-medium text-teal-700">Paradise</span>,<br />
                            Invest in <span className="font-medium text-teal-700">Futures</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Your luxury villa investment creates ripples of positive change in our community
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/villas-project"
                                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
                            >
                                <div className="p-1.5 bg-teal-50 rounded-full group-hover:bg-teal-100">
                                    <Home className="w-5 h-5" />
                                </div>
                                View Villas
                            </Link>
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
                        <p className="text-gray-600 mb-2">Your Villas Auger partner for villa investments in Punta Cana</p>
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