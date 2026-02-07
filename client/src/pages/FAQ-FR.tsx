// File: src/pages/FAQ-Fr.tsx
import { Link } from "react-router-dom";
import { ChevronRight, HelpCircle, FileText, DollarSign, Home, Shield, Globe, Phone, Mail, MapPin, CheckCircle2, ExternalLink, Heart, Sun, Waves, Umbrella, Coffee } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

export default function FAQFR() {
    useSEO({
        title: "Acheter une Propriété à Bavaro, République Dominicaine | FAQ | Invest in Paradise",
        description: "Questions fréquemment posées sur l'achat immobilier à Bavaro, Punta Cana. Apprenez-en plus sur les avantages gouvernementaux, les taxes et les opportunités d'investissement.",
    });

    const faqCategories = [
        {
            title: "Processus d'Achat",
            icon: <FileText className="w-6 h-6" />,
            questions: [
                {
                    q: "Les étrangers peuvent-ils acheter une propriété en République Dominicaine ?",
                    a: "Oui, les ressortissants étrangers ont les mêmes droits de propriété que les citoyens dominicains. Vous pouvez acheter une propriété à votre nom personnel ou via une société. Aucun permis spécial n'est requis pour la plupart des propriétés résidentielles."
                },
                {
                    q: "Quel est le processus d'achat typique ?",
                    a: "1. Accord de Réservation (10% d'acompte)\n2. Vérification préalable (30 jours)\n3. Signature du Contrat d'Achat\n4. Transfert du titre de propriété au Registre des Titres\n5. Paiement final et prise de possession\nLe processus prend généralement 30 à 60 jours."
                },
                {
                    q: "Ai-je besoin d'un avocat pour acheter une propriété ?",
                    a: "Oui, engager un avocat immobilier local est fortement recommandé. Il effectuera la vérification préalable, vérifiera que la propriété est exempte de privilèges et assurera un enregistrement approprié. Nous travaillons avec des avocats anglophones de confiance."
                }
            ]
        },
        {
            title: "Taxes & Frais",
            icon: <DollarSign className="w-6 h-6" />,
            questions: [
                {
                    q: "Quelles taxes sont impliquées dans l'achat d'une propriété ?",
                    a: "Taxe de Transfert de Propriété : 3% de la valeur de la propriété (généralement partagée 50/50 entre acheteur et vendeur)\nFrais d'Avocat : 1-2% de la valeur de la propriété\nFrais de Notaire : Environ 1%\nFrais d'Enregistrement : Environ 0,5%\nLes frais de clôture totaux varient généralement de 3 à 5% de la valeur de la propriété."
                },
                {
                    q: "Quelles sont les taxes foncières annuelles ?",
                    a: "Les taxes foncières sont très basses en République Dominicaine. Pour les propriétés résidentielles, la taxe annuelle est d'environ 1% de la valeur enregistrée de la propriété, mais il existe des exonérations pour les propriétés évaluées en dessous d'un certain montant. La plupart des propriétés résidentielles paient peu ou pas de taxe foncière annuelle."
                },
                {
                    q: "Y a-t-il des taxes sur les plus-values lors de la vente ?",
                    a: "Oui, la taxe sur les plus-values est de 25% sur le bénéfice des ventes de propriétés. Cependant, si vous possédez la propriété depuis plus de 2 ans, vous pouvez bénéficier de réductions. Consultez toujours un professionnel fiscal pour votre situation spécifique."
                }
            ]
        },
        {
            title: "Avantages Gouvernementaux",
            icon: <Shield className="w-6 h-6" />,
            questions: [
                {
                    q: "Qu'est-ce que la Loi sur l'Investissement Étranger ?",
                    a: "La République Dominicaine a la Loi n° 16-95 qui garantit des droits égaux aux investisseurs étrangers et locaux. Les investisseurs étrangers peuvent :\n- Répattrier 100% des bénéfices\n- Transférer librement du capital\n- Recevoir une protection juridique égale\n- Accéder aux options de financement local"
                },
                {
                    q: "Y a-t-il des avantages de résidence pour les propriétaires ?",
                    a: "Oui, l'achat d'une propriété d'une valeur de 200 000 USD ou plus vous donne droit à une Résidence Temporaire, qui peut mener à une Résidence Permanente après 2 ans. Cela fournit :\n- Visa à entrées multiples\n- Droit légal de séjour indéfini\n- Capacité d'ouvrir des comptes bancaires\n- Accès aux soins de santé locaux"
                },
                {
                    q: "Qu'en est-il des options de visa de retraite ?",
                    a: "Le Visa Pensionado (Retraité) est disponible pour ceux ayant une pension mensuelle minimale de 1 500 USD. Les avantages incluent :\n- Visa renouvelable d'un an\n- Pas de taxe sur le revenu des pensions étrangères\n- Exonérations de droits de douane pour les biens personnels\n- Les membres de la famille peuvent être inclus"
                }
            ]
        },
        {
            title: "Gestion Immobilière",
            icon: <Home className="w-6 h-6" />,
            questions: [
                {
                    q: "Puis-je louer ma propriété quand je ne l'utilise pas ?",
                    a: "Oui, les locations de vacances sont très populaires à Bavaro. Nous offrons des services de gestion immobilière qui facturent généralement 20 à 30% du revenu locatif. La République Dominicaine a un marché touristique en croissance avec une forte demande de location, surtout pendant la haute saison (décembre-avril)."
                },
                {
                    q: "Qu'en est-il de l'entretien et de la sécurité ?",
                    a: "La plupart des communautés fermées offrent des services de sécurité 24h/24, d'entretien et de paysagisme. Les coûts d'entretien individuels des propriétés sont en moyenne de 100 à 300 USD/mois selon la taille de la propriété. De nombreux développements ont des associations de propriétaires qui gèrent les espaces communs."
                },
                {
                    q: "Comment gérer les services publics et les services ?",
                    a: "Les services publics (eau, électricité, internet) peuvent être enregistrés à votre nom ou au nom de votre société. Coûts mensuels moyens :\n- Électricité : 100-300 USD (selon l'utilisation de la climatisation)\n- Eau : 20-50 USD\n- Internet/TV : 50-100 USD\nNous aidons avec toute la configuration et les connexions des services publics."
                }
            ]
        },
        {
            title: "Emplacement & Style de Vie",
            icon: <Globe className="w-6 h-6" />,
            questions: [
                {
                    q: "Pourquoi investir spécifiquement à Bavaro ?",
                    a: "Bavaro offre :\n- Proximité de l'aéroport international de Punta Cana (15-20 minutes)\n- Accès à 10+ parcours de golf championnat\n- La célèbre plage de Bavaro (32km de sable blanc)\n- Une infrastructure touristique croissante\n- Une communauté d'expatriés établie\n- Des prix inférieurs à Cap Cana"
                },
                {
                    q: "À quoi ressemble le système de santé ?",
                    a: "Punta Cana a des hôpitaux privés modernes (Hospiten, Centro Medico Punta Cana) avec un personnel anglophone. De nombreux médecins sont formés aux États-Unis/Europe. L'assurance maladie est abordable (100-300 USD/mois) et de nombreux retraités utilisent une combinaison d'assurance locale et de couverture internationale."
                },
                {
                    q: "Bavaro est-il sûr pour les investisseurs étrangers ?",
                    a: "Oui, Bavaro est considéré comme l'une des zones les plus sûres de la République Dominicaine. Les communautés fermées ont une sécurité 24h/24 et les zones touristiques sont bien patrouillées. L'économie locale dépend fortement du tourisme, donc la sécurité des visiteurs est une priorité pour les autorités."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white font-sans">
            {/* 1. SECTION HÉRO - Moderne et calme */}
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
                        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                            <Link
                                to="/faq-en"
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
                                to="/faq-sp"
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
                        alt="FAQ sur l'achat d'une propriété à Bavaro"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <HelpCircle className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Conseils d'Expert</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                        <span className="block">Questions</span>
                        <span className="font-medium">Fréquemment Posées</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Tout ce que vous devez savoir sur l'achat d'une propriété à Bavaro, République Dominicaine
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="#faq-section"
                            className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white"
                        >
                            Explorer les FAQ
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. SECTION FAQ - Propre et aéré */}
            <section id="faq-section" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Acheter une Propriété à <span className="font-medium text-teal-700">Bavaro</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Obtenez des réponses aux questions les plus courantes sur l'investissement immobilier dans l'un des marchés à la croissance la plus rapide des Caraïbes.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Barre latérale des faits rapides */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6">
                                <h3 className="text-2xl font-medium text-gray-800 mb-2 flex items-center gap-3">
                                    <div className="p-2 bg-white rounded-lg shadow-sm">
                                        <Shield className="w-5 h-5 text-teal-600" />
                                    </div>
                                    Faits Rapides
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Informations clés sur l'investissement immobilier en République Dominicaine
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-3xl font-bold text-teal-600 mb-2">30-60</div>
                                    <div className="text-sm font-medium text-gray-800">Jours pour Compléter l'Achat</div>
                                </div>
                                <div className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-3xl font-bold text-teal-600 mb-2">3-5%</div>
                                    <div className="text-sm font-medium text-gray-800">Frais de Clôture Moyens</div>
                                </div>
                                <div className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-3xl font-bold text-teal-600 mb-2">200K$</div>
                                    <div className="text-sm font-medium text-gray-800">Minimum pour les Avantages de Résidence</div>
                                </div>
                            </div>
                        </div>

                        {/* Catégories FAQ */}
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
                                                    <span className="text-teal-600 font-bold">Q :</span> {item.q}
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

            {/* 3. SECTION CONTACT APPEL À L'ACTION - Douce et invitante */}
            <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <HelpCircle className="w-8 h-8 text-teal-600" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                                Vous Avez Encore des <span className="font-medium text-teal-700">Questions</span> ?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Nos experts immobiliers sont là pour vous aider avec des conseils personnalisés sur l'investissement à Bavaro.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 p-12 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-medium text-gray-800 mb-6">Entrez en Contact</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Phone className="w-5 h-5 text-teal-600" />
                                            <span>(800) 123-4567</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Mail className="w-5 h-5 text-teal-600" />
                                            <a href="mailto:villasaugerpuntacana@gmail.com" className="text-teal-600 hover:text-teal-700 transition-colors">
                                                villasaugerpuntacana@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PIED DE PAGE - Propre et simple */}
            <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-300"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-200"></div>
                        </div>
                        <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
                        <p className="text-gray-600 mb-2">Votre Villas Auger Punta Cana pour l'investissement immobilier à Bavaro, Punta Cana</p>
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
                            <Link to="/faq-fr" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}