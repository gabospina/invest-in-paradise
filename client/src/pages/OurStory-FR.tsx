import { Link } from "react-router-dom";
import { HeartHandshake, GraduationCap, Home, Users, Trophy, Building2, ChevronRight, Heart, Sun, Waves, Umbrella, Coffee, MapPin, CheckCircle2, ExternalLink, Phone, Mail } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function OurStoryFR() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white font-sans">
            {/* 1. SECTION HÉROÏQUE - Moderne & Calme */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-100/50 shadow-sm">
                <nav className="container flex items-center justify-between py-5 px-4 md:px-6">
                    <Link to="/fr" className="text-2xl font-bold text-teal-700 tracking-tight hover:text-teal-800 transition-colors">
                        Invest in Paradise
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link to="/fr" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Accueil
                        </Link>
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
                        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                            <Link
                                to="/our-story"
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
                                to="/nuestra-historia"
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

            <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/villa-pool-garden.jpg"
                        className="w-full h-full object-cover"
                        alt="Notre histoire - Construire plus que des villas"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <HeartHandshake className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Notre Mission</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                        <span className="block">Construire Plus</span>
                        <span className="font-medium">Que des Villas</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Créer des propriétés de luxe tout en bâtissant un avenir meilleur pour les enfants de Punta Cana
                    </p>
                </div>
            </section>

            {/* 2. PRÉSENTATION DU PRÉSIDENT - Propre & Aérée */}
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
                                    Rencontrez Notre <span className="font-medium text-teal-700">Président</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    <strong className="font-medium text-gray-800">Simon Auger</strong>, fondateur et président de Villas Auger Punta Cana, est un promoteur immobilier visionnaire. Né et élevé à Montréal, Québec, Canada, la passion et la vision de Simon animent chaque projet.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-400 p-6 rounded-r-xl">
                                <p className="text-lg text-gray-700 italic">
                                    "Notre mission va au-delà de la construction de belles villas. Chaque propriété que nous vendons contribue à financer des opportunités éducatives pour les enfants locaux qui autrement ne pourraient pas se permettre d'aller à l'école."
                                </p>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Avec une expérience en développement durable et en construction communautaire, Simon veille à ce que chaque projet de villa de luxe contribue à la prospérité à long terme de Punta Cana et de ses résidents.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl -z-10"></div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/images/villasAuger-president.png"
                                    alt="Simon Auger - Président"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <p className="text-white text-lg font-medium">Simon Auger</p>
                                    <p className="text-white/80 text-sm">Président & Fondateur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SECTION IMPACT COMMUNAUTAIRE */}
            <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Programme d'Impact <span className="font-medium text-teal-700">Communautaire</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Chaque vente de villa parraine directement l'éducation d'enfants de familles à faible revenu
                        </p>
                    </div>

                    {/* Boîtes d'impact */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: <Home className="w-6 h-6" />,
                                title: "Vente de Villa",
                                description: "Chaque achat de villa de luxe inclut une contribution à notre fonds éducatif",
                                stats: "% du prix de vente",
                                color: "from-blue-50 to-cyan-50",
                                iconColor: "text-blue-600"
                            },
                            {
                                icon: <GraduationCap className="w-6 h-6" />,
                                title: "Parrainage Scolaire",
                                description: "Les fonds couvrent les frais de scolarité, uniformes, livres et repas pour un an",
                                stats: "1 enfant par villa",
                                color: "from-teal-50 to-emerald-50",
                                iconColor: "text-teal-600"
                            },
                            {
                                icon: <Users className="w-6 h-6" />,
                                title: "Croissance Communautaire",
                                description: "Bâtir un développement durable grâce à l'éducation et aux opportunités",
                                stats: "50+ enfants parrainés",
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

                    {/* Fonctionnement */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-lg mb-16">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-tight">
                                Comment Notre <span className="font-medium text-teal-700">Programme Fonctionne</span>
                            </h3>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Un processus simple et transparent qui crée un impact durable
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                {
                                    step: "1",
                                    title: "Achat de Villa",
                                    description: "Le client investit dans sa villa tropicale de rêve"
                                },
                                {
                                    step: "2",
                                    title: "% Contribution",
                                    description: "% du prix de vente alloué au fonds éducatif"
                                },
                                {
                                    step: "3",
                                    title: "Sélection des Enfants",
                                    description: "Les écoles locales identifient les enfants de familles à faible revenu"
                                },
                                {
                                    step: "4",
                                    title: "Parrainage Complet",
                                    description: "Couverture éducative complète pour une année"
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

                    {/* Photo des enfants à l'école */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl -z-10"></div>
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xl">
                            <img
                                src="/images/villasAuger-childrenSchool.jpeg"
                                alt="Enfants à l'école parrainés par notre programme éducatif"
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-6 text-center border-t border-gray-100">
                                <p className="text-sm text-gray-600">
                                    Enfants à l'école soutenus par notre programme de parrainage éducatif
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. HISTOIRES DE RÉUSSITE */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Histoires de <span className="font-medium text-teal-700">Réussite</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Impact réel de notre programme d'investissement communautaire
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                    <img
                                        src="/images/villasAuger-childrenSchool.jpeg"
                                        alt="Maria - Étudiante Parrainée"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Maria, 12 ans</h3>
                                    <p className="text-teal-600 text-sm">Parrainée depuis 3 ans</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                "Grâce au parrainage éducatif, je peux maintenant aller à l'école à temps plein. Je veux devenir enseignante et aider d'autres enfants dans ma communauté."
                            </p>
                            <div className="flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-amber-500" />
                                <span className="text-sm text-gray-700 font-medium">Première de sa classe en mathématiques</span>
                            </div>
                        </div>

                        <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                    <img
                                        src="/images/villa-owner.png"
                                        alt="John Smith - Propriétaire de Villa"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">John & Sarah Smith</h3>
                                    <p className="text-teal-600 text-sm">Propriétaires depuis 2026</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                "En achetant notre villa, nous avons aimé savoir que notre investissement aiderait également les enfants locaux à recevoir une éducation. Cela a rendu notre achat encore plus significatif."
                            </p>
                            <div className="flex items-center gap-2">
                                <HeartHandshake className="w-4 h-4 text-red-500" />
                                <span className="text-sm text-gray-700 font-medium">Parrainent l'éducation de Maria</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SECTION APPEL À L'ACTION - Doux & Invitant */}
            <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
                <div className="container px-4 md:px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <HeartHandshake className="w-8 h-8 text-teal-600" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Investissez dans le <span className="font-medium text-teal-700">Paradis</span>,<br />
                            Investissez dans des <span className="font-medium text-teal-700">Avenirs</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Votre investissement en villa de luxe crée des ondes de changement positif dans notre communauté
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/villas-project"
                                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
                            >
                                <div className="p-1.5 bg-teal-50 rounded-full group-hover:bg-teal-100">
                                    <Home className="w-5 h-5" />
                                </div>
                                Voir les Villas
                            </Link>
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
                        <p className="text-gray-600 mb-2">Votre partenaire Villas Auger pour les investissements en villas à Punta Cana</p>
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