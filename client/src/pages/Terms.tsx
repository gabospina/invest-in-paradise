// File: src/pages/Terms.tsx
import { Link } from "react-router-dom";
import { FileText, ChevronRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function Terms() {
    useSEO({
        title: "Terms and Conditions | Invest in Paradise",
        description: "Terms and Conditions of Use for Invest in Paradise real estate services in Bavaro, Punta Cana.",
    });

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
                <nav className="container flex items-center justify-between py-4">
                    <Link to="/" className="text-2xl font-bold text-primary">
                        Invest in Paradise
                    </Link>
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-sm hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link to="/faq" className="text-sm hover:text-primary transition-colors">
                            FAQ
                        </Link>
                        <Link to="/privacy" className="text-sm hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-blue-50 to-background">
                <div className="container text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <FileText className="w-12 h-12 text-primary" />
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
                            Terms and Conditions
                        </h1>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Last Updated: January 2025
                    </p>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2>Terms and Conditions of Use</h2>

                        <h3>Acceptance of Terms:</h3>
                        <p>By accessing and using this website, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use the website.</p>

                        <h3>Website Content:</h3>
                        <p>The content provided on this website, including but not limited to property descriptions, is for informational purposes only. The Villas Auger does not guarantee the accuracy, completeness, or suitability of the information and shall not be held liable for any errors or omissions.</p>

                        <h3>User Registration:</h3>
                        <p>Certain features of the website may require user registration. You agree to provide accurate and current information and to update it promptly if there are any changes. You are responsible for maintaining the confidentiality of your account and password.</p>

                        <h3>Property Listings:</h3>
                        <p>Property pricess on the website are subject to change without notice. Villas Auger reserves the right to modify or remove villas and prices, and makes no warranties regarding the availability, pricing, or features of any listed properties.</p>

                        <h3>Intellectual Property:</h3>
                        <p>All content and materials on the website, including logos, text, images, and software, are the property of Villas Auger and are protected by intellectual property laws. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.</p>

                        <h3>Privacy Policy:</h3>
                        <p>Our Privacy Policy governs the collection, use, and disclosure of personal information provided by users. By using the website, you consent to the terms of our Privacy Policy.</p>

                        <h3>Limitation of Liability:</h3>
                        <p>Villas Auger shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use the website, including but not limited to errors, viruses, or interruptions in service.</p>

                        <h3>Termination of Access:</h3>
                        <p>Villas Auger reserves the right to terminate or restrict your access to the website at any time, without notice, for any reason.</p>

                        <h3>Governing Law:</h3>
                        <p>These terms and conditions are governed by and construed in accordance with the laws of the Dominican Republic. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in the Dominican Republic.</p>

                        <h3>Changes to Terms:</h3>
                        <p>Villas Auger reserves the right to modify these terms and conditions at any time. Continued use of the website after any such changes constitutes acceptance of the new terms.</p>

                        <div className="bg-gray-50 p-6 rounded-lg mt-8">
                            <p className="font-semibold">By using this website, you acknowledge that you have read, understood, and agree to these terms and conditions. If you have any questions or concerns, please contact us at villasaugerpuntacana@gmail.com</p>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-between items-center">
                        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                            Back to Home
                        </Link>
                        <Link to="/privacy" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
                            View Privacy Policy
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-background border-t border-border py-12">
                <div className="container">
                    <div className="text-center text-muted-foreground mb-6">
                        <p className="font-serif text-xl mb-4">Invest in Paradise</p>
                        <p>Your trusted real estate partner in Bavaro, Punta Cana</p>
                        <p className="text-sm mt-2">Bavaro, Punta Cana, Dominican Republic</p>
                    </div>

                    <div className="text-center text-xs text-gray-400">
                        <p className="mb-4">© Copyright © 2025 Sunset Real Estate. All rights reserved.</p>
                        <div className="flex justify-center space-x-6 mt-4">
                            <Link to="/terms" className="hover:text-primary transition-colors text-sm">
                                Terms and Conditions
                            </Link>
                            <Link to="/privacy" className="hover:text-primary transition-colors text-sm">
                                Privacy Policy
                            </Link>
                            <Link to="/faq" className="hover:text-primary transition-colors text-sm">
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}