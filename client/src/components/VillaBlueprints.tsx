// File: src/components/VillaBlueprints.tsx or src/pages/VillaBlueprints.tsx
import { Link } from "react-router-dom";
import { ArrowLeft, Maximize2, Home } from "lucide-react";

export default function VillaBlueprints() {
    const blueprintImages = [
        {
            id: 1,
            title: "Frontal Elevation",
            description: "Front view of the villa showing architectural design",
            image: "/images/villasAuger-FrontalElevation.jpeg"  // Changed to .jpeg
        },
        {
            id: 2,
            title: "First Floor Plan",
            description: "Layout of ground floor including living areas and amenities",
            image: "/images/villasAuger-FirstFloor.jpeg"  // Changed to .jpeg
        },
        {
            id: 3,
            title: "Second Floor Plan",
            description: "Layout of upper floor with bedrooms and private spaces",
            image: "/images/villasAuger-SecondFloor.jpeg"  // Changed to .jpeg
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
                <nav className="container flex items-center justify-between py-4">
                    <Link to="/" className="text-2xl font-bold text-primary">
                        Invest in Paradise
                    </Link>
                    <div className="flex items-center gap-8">
                        <Link to="/villas-project" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Development Site
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-green-50 to-background">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Villa Blueprints
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Detailed architectural plans for the Auger Villas
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                        <Home className="w-4 h-4" />
                        <span>4-Bedroom Villa • 158 sq.mt.</span>
                    </div>
                </div>
            </section>

            {/* Blueprint Images Section */}
            <section className="py-12 bg-white">
                <div className="container">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                            Architectural Plans
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Complete set of blueprints for the proposed villa design
                        </p>
                    </div>

                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                        {blueprintImages.map((blueprint) => (
                            <div key={blueprint.id} className="bg-card border border-border rounded-xl p-6 shadow-lg">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-foreground mb-2">{blueprint.title}</h3>
                                    <p className="text-gray-600">{blueprint.description}</p>
                                </div>

                                <div className="relative bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
                                    <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
                                        <a
                                            href={blueprint.image}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative"
                                        >
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                                                    <Maximize2 className="w-4 h-4" />
                                                    <span className="text-sm font-medium">View Full Size</span>
                                                </div>
                                            </div>
                                            <div className="text-center p-12">
                                                <Maximize2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                                <span className="text-gray-400 text-sm">{blueprint.image.split('/').pop()}</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-4 text-sm text-gray-500">
                                    <p>Click on the image to view in full size</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Download/Print Section */}
                    <div className="mt-12 bg-green-50 border border-green-200 rounded-xl p-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-foreground mb-4">Need Printable Versions?</h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Contact us to receive high-resolution, printable versions of these blueprints or to discuss custom modifications to the villa design.
                            </p>
                            <Link
                                to="/villas-project"
                                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                            >
                                Return to Development Site
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-background border-t border-border py-12">
                <div className="container">
                    <div className="text-center text-muted-foreground mb-6">
                        <p className="font-serif text-xl mb-4">Auger Villas Development</p>
                        <p>A future project by Invest in Paradise</p>
                        <p className="text-sm mt-2">Bavaro, Punta Cana, Dominican Republic</p>
                    </div>
                    <div className="text-center text-xs text-gray-400">
                        <p>© 2026 Invest in Paradise. All rights reserved. | Blueprints are conceptual and subject to change.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}