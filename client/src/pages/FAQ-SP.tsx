// File: src/pages/FAQ-SP.tsx
import { Link } from "react-router-dom";
import { ChevronRight, HelpCircle, FileText, DollarSign, Home, Shield, Globe, Phone, Mail, MapPin, CheckCircle2, ExternalLink, Heart, Sun, Waves, Umbrella, Coffee } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import ContactModal from "@/components/ContactModal";

export default function FAQSP() {
    useSEO({
        title: "Comprar Propiedad en Bávaro, República Dominicana | Preguntas Frecuentes | Invest in Paradise",
        description: "Preguntas frecuentes sobre la compra de bienes raíces en Bávaro, Punta Cana. Conozca sobre beneficios gubernamentales, impuestos y oportunidades de inversión.",
    });

    const faqCategories = [
        {
            title: "Proceso de Compra",
            icon: <FileText className="w-6 h-6" />,
            questions: [
                {
                    q: "¿Pueden los extranjeros comprar propiedad en la República Dominicana?",
                    a: "Sí, los extranjeros tienen los mismos derechos de propiedad que los ciudadanos dominicanos. Puede comprar propiedad a su nombre personal o a través de una corporación. No se requieren permisos especiales para la mayoría de las propiedades residenciales."
                },
                {
                    q: "¿Cuál es el proceso típico de compra?",
                    a: "1. Acuerdo de Reserva (10% de depósito)\n2. Due Diligence (30 días)\n3. Firma del Contrato de Compraventa\n4. Transferencia del título de propiedad en el Registro de Títulos\n5. Pago final y posesión\nEl proceso normalmente toma de 30 a 60 días."
                },
                {
                    q: "¿Necesito un abogado para comprar propiedad?",
                    a: "Sí, se recomienda encarecidamente contratar un abogado local de bienes raíces. Ellos realizarán la due diligence, verificarán que la propiedad esté libre de gravámenes y asegurarán el registro adecuado. Trabajamos con abogados de confianza que hablan inglés."
                }
            ]
        },
        {
            title: "Impuestos & Tarifas",
            icon: <DollarSign className="w-6 h-6" />,
            questions: [
                {
                    q: "¿Qué impuestos están involucrados en la compra de propiedad?",
                    a: "Impuesto de Transferencia de Propiedad: 3% del valor de la propiedad (normalmente compartido 50/50 entre comprador y vendedor)\nHonorarios Legales: 1-2% del valor de la propiedad\nHonorarios de Notario: Aproximadamente 1%\nTarifas de Registro: Alrededor del 0.5%\nLos costos de cierre totales típicamente oscilan entre el 3-5% del valor de la propiedad."
                },
                {
                    q: "¿Cuáles son los impuestos anuales de propiedad?",
                    a: "Los impuestos de propiedad son muy bajos en la República Dominicana. Para propiedades residenciales, el impuesto anual es aproximadamente el 1% del valor registrado de la propiedad, pero hay exenciones para propiedades valoradas por debajo de cierta cantidad. La mayoría de las propiedades residenciales pagan impuestos anuales mínimos o nulos."
                },
                {
                    q: "¿Hay impuestos sobre ganancias de capital cuando vendo?",
                    a: "Sí, el impuesto sobre ganancias de capital es del 25% sobre la ganancia de la venta de la propiedad. Sin embargo, si posee la propiedad por más de 2 años, puede calificar para reducciones. Siempre consulte con un profesional de impuestos para su situación específica."
                }
            ]
        },
        {
            title: "Beneficios Gubernamentales",
            icon: <Shield className="w-6 h-6" />,
            questions: [
                {
                    q: "¿Qué es la Ley de Inversión Extranjera?",
                    a: "La República Dominicana tiene la Ley No. 16-95 que garantiza igualdad de derechos para inversores extranjeros y locales. Los inversores extranjeros pueden:\n- Repatriar el 100% de las ganancias\n- Transferir capital libremente\n- Recibir igual protección legal\n- Acceder a opciones de financiamiento local"
                },
                {
                    q: "¿Hay beneficios de residencia para propietarios de propiedades?",
                    a: "Sí, comprar una propiedad valorada en $200,000 USD o más lo califica para Residencia Temporal, que puede conducir a Residencia Permanente después de 2 años. Esto proporciona:\n- Visa de múltiples entradas\n- Derecho legal a permanecer indefinidamente\n- Capacidad para abrir cuentas bancarias\n- Acceso a sistema de salud local"
                },
                {
                    q: "¿Qué hay sobre las opciones de visa para jubilados?",
                    a: "La Visa de Pensionado (Jubilado) está disponible para aquellos con una pensión mensual mínima de $1,500 USD. Los beneficios incluyen:\n- Visa renovable de 1 año\n- Sin impuesto sobre la renta en pensiones extranjeras\n- Exenciones de derechos de importación para bienes personales\n- Los miembros de la familia pueden ser incluidos"
                }
            ]
        },
        {
            title: "Gestión de Propiedad",
            icon: <Home className="w-6 h-6" />,
            questions: [
                {
                    q: "¿Puedo alquilar mi propiedad cuando no la esté usando?",
                    a: "Sí, los alquileres vacacionales son muy populares en Bávaro. Ofrecemos servicios de gestión de propiedades que típicamente cobran el 20-30% de los ingresos por alquiler. La República Dominicana tiene un mercado turístico en crecimiento con alta demanda de alquiler, especialmente durante la temporada alta (diciembre-abril)."
                },
                {
                    q: "¿Qué pasa con el mantenimiento y la seguridad?",
                    a: "La mayoría de las comunidades cerradas ofrecen servicios de seguridad 24/7, mantenimiento y jardinería. Los costos de mantenimiento de propiedad individual promedian $100-300/mes dependiendo del tamaño de la propiedad. Muchos desarrollos tienen asociaciones de propietarios que gestionan áreas comunes."
                },
                {
                    q: "¿Cómo manejo los servicios públicos?",
                    a: "Los servicios públicos (agua, electricidad, internet) pueden registrarse a su nombre o al nombre de su corporación. Costos mensuales promedio:\n- Electricidad: $100-300 (dependiendo del uso de aire acondicionado)\n- Agua: $20-50\n- Internet/TV: $50-100\nAyudamos con toda la configuración y conexión de servicios."
                }
            ]
        },
        {
            title: "Ubicación & Estilo de Vida",
            icon: <Globe className="w-6 h-6" />,
            questions: [
                {
                    q: "¿Por qué invertir en Bávaro específicamente?",
                    a: "Bávaro ofrece:\n- Proximidad al Aeropuerto Internacional de Punta Cana (15-20 minutos)\n- Acceso a más de 10 campos de golf campeonatos\n- La mundialmente famosa Playa Bávaro (32km de arena blanca)\n- Infraestructura turística en crecimiento\n- Comunidad de expatriados establecida\n- Precios más bajos que Cap Cana"
                },
                {
                    q: "¿Cómo es el sistema de salud?",
                    a: "Punta Cana tiene hospitales privados modernos (Hospiten, Centro Médico Punta Cana) con personal que habla inglés. Muchos doctores están entrenados en EE.UU./Europa. El seguro de salud es asequible ($100-300/mes) y muchos jubilados usan una combinación de seguro local y cobertura internacional."
                },
                {
                    q: "¿Es Bávaro seguro para inversores extranjeros?",
                    a: "Sí, Bávaro es considerado una de las áreas más seguras en la República Dominicana. Las comunidades cerradas tienen seguridad 24/7, y las áreas turísticas están bien patrulladas. La economía local depende en gran medida del turismo, por lo que la seguridad de los visitantes es una prioridad para las autoridades."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white font-sans">
            {/* 1. SECCIÓN HÉROE - Moderna & Calma */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-100/50 shadow-sm">
                <nav className="container flex items-center justify-between py-5 px-4 md:px-6">
                    <Link to="/es" className="text-2xl font-bold text-teal-700 tracking-tight hover:text-teal-800 transition-colors">
                        Invest in Paradise
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link to="/es" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Inicio
                        </Link>
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
                        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                            <Link
                                to="/faq-en"
                                className="text-xs text-gray-500 hover:text-teal-700 transition-colors"
                                title="English"
                            >
                                EN
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link
                                to="/faq-fr"
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
                        src="/images/villa-pool-garden.jpg"
                        className="w-full h-full object-cover"
                        alt="Preguntas frecuentes sobre comprar propiedad en Bávaro"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <HelpCircle className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Orientación Experta</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                        <span className="block">Preguntas</span>
                        <span className="font-medium">Frecuentes</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Todo lo que necesita saber sobre comprar propiedad en Bávaro, República Dominicana
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="#faq-section"
                            className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white"
                        >
                            Explorar Preguntas
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. SECCIÓN FAQ - Limpia & Aireada */}
            <section id="faq-section" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Comprar Propiedad en <span className="font-medium text-teal-700">Bávaro</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Obtenga respuestas a las preguntas más comunes sobre inversión en bienes raíces en uno de los mercados de más rápido crecimiento del Caribe.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Barra lateral de Datos Rápidos */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6">
                                <h3 className="text-2xl font-medium text-gray-800 mb-2 flex items-center gap-3">
                                    <div className="p-2 bg-white rounded-lg shadow-sm">
                                        <Shield className="w-5 h-5 text-teal-600" />
                                    </div>
                                    Datos Rápidos
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Información clave sobre inversión en propiedad en la República Dominicana
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-3xl font-bold text-teal-600 mb-2">30-60</div>
                                    <div className="text-sm font-medium text-gray-800">Días para Completar la Compra</div>
                                </div>
                                <div className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-3xl font-bold text-teal-600 mb-2">3-5%</div>
                                    <div className="text-sm font-medium text-gray-800">Costos de Cierre Promedio</div>
                                </div>
                                <div className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-3xl font-bold text-teal-600 mb-2">$200K</div>
                                    <div className="text-sm font-medium text-gray-800">Mínimo para Beneficios de Residencia</div>
                                </div>
                            </div>
                        </div>

                        {/* Categorías FAQ */}
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
                                                    <span className="text-teal-600 font-bold">P:</span> {item.q}
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

            {/* 3. SECCIÓN CTA DE CONTACTO - Suave & Atractiva */}
            <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <HelpCircle className="w-8 h-8 text-teal-600" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                                ¿Aún Tiene <span className="font-medium text-teal-700">Preguntas</span>?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Nuestros expertos en bienes raíces están aquí para ayudarlo con asesoramiento personalizado sobre invertir en Bávaro.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 p-12 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-medium text-gray-800 mb-6">Póngase en Contacto</h3>
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
                                            Programar una Consulta
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    } />
                                    <p className="text-sm text-gray-500 text-center">
                                        Respondemos dentro de 24 horas
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PIE DE PÁGINA - Limpio & Simple */}
            <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 py-16">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-300"></div>
                            <div className="w-3 h-3 rounded-full bg-teal-200"></div>
                        </div>
                        <p className="text-2xl font-light text-gray-800 mb-4 tracking-tight">Invest in Paradise</p>
                        <p className="text-gray-600 mb-2">Su inversión en propiedad Villas Auger Punta Cana en Bávaro, Punta Cana</p>
                        {/* <p className="text-sm text-gray-500">Bavaro, Punta Cana, Dominican Republic</p> */}
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