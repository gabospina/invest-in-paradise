import { Link } from "react-router-dom";
import { HeartHandshake, GraduationCap, Home, Users, Trophy, Building2, ChevronRight, Heart, Sun, Waves, Umbrella, Coffee, MapPin, CheckCircle2, ExternalLink, Phone, Mail } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function OurStorySP() {
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
                        <Link to="/faq-sp" className="text-sm text-gray-600 hover:text-teal-700 transition-colors">
                            Preguntas Frecuentes
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
                            <Link
                                to="/notre-histoire"
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
                        alt="Nuestra historia - Construyendo más que villas"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-teal-800/15 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <HeartHandshake className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Nuestra Misión</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                        <span className="block">Construyendo Más</span>
                        <span className="font-medium">Que Villas</span>
                    </h1>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Creando propiedades de lujo mientras construimos un futuro mejor para los niños de Punta Cana
                    </p>
                </div>
            </section>

            {/* 2. INTRODUCCIÓN DEL PRESIDENTE - Limpia & Aireada */}
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
                                    Conozca a Nuestro <span className="font-medium text-teal-700">Presidente</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    <strong className="font-medium text-gray-800">Simon Auger</strong>, fundador y presidente de Villas Auger Punta Cana, ha sido un desarrollador inmobiliario visionario. Nacido y criado en Montreal, Quebec, Canadá, la pasión y visión de Simon impulsan cada proyecto.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-400 p-6 rounded-r-xl">
                                <p className="text-lg text-gray-700 italic">
                                    "Nuestra misión va más allá de construir hermosas villas. Cada propiedad que vendemos ayuda a financiar oportunidades educativas para niños locales que de otra manera no podrían pagar la escuela."
                                </p>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Con experiencia en desarrollo sostenible y construcción comunitaria, Simon asegura que cada proyecto de villa de lujo contribuya a la prosperidad a largo plazo de Punta Cana y sus residentes.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl -z-10"></div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/images/villasAuger-president.png"
                                    alt="Simon Auger - Presidente"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <p className="text-white text-lg font-medium">Simon Auger</p>
                                    <p className="text-white/80 text-sm">Presidente & Fundador</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SECCIÓN DE IMPACTO COMUNITARIO */}
            <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Programa de Impacto <span className="font-medium text-teal-700">Comunitario</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Cada venta de villa patrocina directamente la educación de niños de familias de bajos ingresos
                        </p>
                    </div>

                    {/* Cajas de Impacto */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: <Home className="w-6 h-6" />,
                                title: "Venta de Villa",
                                description: "Cada compra de villa de lujo incluye una contribución a nuestro fondo educativo",
                                stats: "% del precio de venta",
                                color: "from-blue-50 to-cyan-50",
                                iconColor: "text-blue-600"
                            },
                            {
                                icon: <GraduationCap className="w-6 h-6" />,
                                title: "Patrocinio Escolar",
                                description: "Los fondos cubren matrícula, uniformes, libros y comidas por un año",
                                stats: "1 niño por villa",
                                color: "from-teal-50 to-emerald-50",
                                iconColor: "text-teal-600"
                            },
                            {
                                icon: <Users className="w-6 h-6" />,
                                title: "Crecimiento Comunitario",
                                description: "Construyendo desarrollo sostenible a través de la educación y la oportunidad",
                                stats: "50+ niños patrocinados",
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

                    {/* Cómo Funciona */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-lg mb-16">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-tight">
                                Cómo Funciona Nuestro <span className="font-medium text-teal-700">Programa</span>
                            </h3>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Un proceso simple y transparente que crea un impacto duradero
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                {
                                    step: "1",
                                    title: "Compra de Villa",
                                    description: "El cliente invierte en su villa tropical soñada"
                                },
                                {
                                    step: "2",
                                    title: "% Contribución",
                                    description: "% del precio de venta asignado al fondo educativo"
                                },
                                {
                                    step: "3",
                                    title: "Selección del Niño",
                                    description: "Las escuelas locales identifican niños de familias de bajos ingresos"
                                },
                                {
                                    step: "4",
                                    title: "Patrocinio Completo",
                                    description: "Cobertura educativa completa por un año"
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

                    {/* Foto de Niños en la Escuela */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl -z-10"></div>
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xl">
                            <img
                                src="/images/villasAuger-childrenSchool.jpeg"
                                alt="Niños en la escuela patrocinados por nuestro programa educativo"
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-6 text-center border-t border-gray-100">
                                <p className="text-sm text-gray-600">
                                    Niños en la escuela apoyados por nuestro programa de patrocinio educativo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. HISTORIAS DE ÉXITO */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Historias de <span className="font-medium text-teal-700">Éxito</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Impacto real de nuestro programa de inversión comunitaria
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                    <img
                                        src="/images/villasAuger-childrenSchool.jpeg"
                                        alt="Maria - Estudiante Patrocinada"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">María, 12 años</h3>
                                    <p className="text-teal-600 text-sm">Patrocinada por 3 años</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                "Gracias al patrocinio educativo, ahora puedo asistir a la escuela a tiempo completo. Quiero convertirme en maestra y ayudar a otros niños en mi comunidad."
                            </p>
                            <div className="flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-amber-500" />
                                <span className="text-sm text-gray-700 font-medium">Primera de su clase en matemáticas</span>
                            </div>
                        </div>

                        <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                    <img
                                        src="/images/villa-owner.png"
                                        alt="John Smith - Propietario de Villa"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">John & Sarah Smith</h3>
                                    <p className="text-teal-600 text-sm">Propietarios desde 2026</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                "Al comprar nuestra villa, nos encantó saber que nuestra inversión también ayudaría a los niños locales a recibir una educación. Eso hizo que nuestra compra fuera aún más significativa."
                            </p>
                            <div className="flex items-center gap-2">
                                <HeartHandshake className="w-4 h-4 text-red-500" />
                                <span className="text-sm text-gray-700 font-medium">Patrocinando la educación de María</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SECCIÓN LLAMADA A LA ACCIÓN - Suave & Atractiva */}
            <section className="py-20 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
                <div className="container px-4 md:px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <HeartHandshake className="w-8 h-8 text-teal-600" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-tight">
                            Invierta en el <span className="font-medium text-teal-700">Paraíso</span>,<br />
                            Invierta en <span className="font-medium text-teal-700">Futuros</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Su inversión en villa de lujo crea ondas de cambio positivo en nuestra comunidad
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/villas-project"
                                className="group border-2 border-teal-200 text-teal-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
                            >
                                <div className="p-1.5 bg-teal-50 rounded-full group-hover:bg-teal-100">
                                    <Home className="w-5 h-5" />
                                </div>
                                Ver Villas
                            </Link>
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
                        <p className="text-gray-600 mb-2">Su socio Villas Auger para inversiones en villas en Punta Cana</p>
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