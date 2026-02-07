// File: src/pages/Privacy.tsx
import { Link } from "react-router-dom";
import { Shield, ChevronRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function Privacy() {
    useSEO({
        title: "Privacy Policy | Invest in Paradise",
        description: "Privacy Policy outlining how Invest in Paradise collects, uses, and protects your personal information.",
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
                        <Link to="/terms" className="text-sm hover:text-primary transition-colors">
                            Terms
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-blue-50 to-background">
                <div className="container text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Shield className="w-12 h-12 text-primary" />
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
                            Privacy Policy
                        </h1>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Last Updated: January 2025
                    </p>
                </div>
            </section>

            {/* Privacy Content */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2>Privacy Policy</h2>
                        <p>This Privacy Policy outlines how Sunset Real Estate ("we," "our," or "us") collects, uses, discloses, and protects the personal information of users ("you" or "your") who visit our website.</p>

                        <h3>1. Information We Collect:</h3>

                        <h4>a. Personal Information:</h4>
                        <p>We may collect personal information, such as your name, contact details, and other identifying information when you voluntarily submit it through forms on our website or by corresponding with us via email or other means.</p>

                        <h4>b. Usage Data:</h4>
                        <p>We may collect information about how you use our website, including your IP address, browser type, pages viewed, and other usage statistics.</p>

                        <h3>2. How We Use Your Information:</h3>

                        <h4>a. Property Inquiries:</h4>
                        <p>We use the information you provide to respond to your property inquiries, facilitate property viewings, and communicate with you throughout the real estate transaction process.</p>

                        <h4>b. Marketing Communication:</h4>
                        <p>With your consent, we may use your contact information to send you marketing communications about our services, promotions, and relevant real estate information.</p>

                        <h4>c. Website Improvement:</h4>
                        <p>We analyze usage data to improve our website's functionality, user experience, and to identify areas for enhancement.</p>

                        <h3>3. Information Sharing:</h3>

                        <h4>a. Service Providers:</h4>
                        <p>We may share your information with third-party service providers who assist us in providing and improving our services, such as website hosting, analytics, and communication tools.</p>

                        <h4>b. Legal Compliance:</h4>
                        <p>We may disclose your information when required by law, court order, or government regulation.</p>

                        <h3>4. Data Security:</h3>
                        <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no online data transmission is entirely secure, and we cannot guarantee the security of your information.</p>

                        <h3>5. Your Choices:</h3>
                        <p>You have the right to opt-out of receiving marketing communications from us at any time. You can do this by following the unsubscribe instructions provided in our emails or contacting us directly.</p>

                        <h3>6. Cookies:</h3>
                        <p>We use cookies and similar tracking technologies to enhance your experience on our website. You can manage cookie preferences through your browser settings.</p>

                        <h3>7. Changes to the Privacy Policy:</h3>
                        <p>We reserve the right to update this privacy policy to reflect changes in our information practices. We encourage you to review this policy periodically for any updates.</p>

                        <h3>8. Contact Us:</h3>
                        <p>If you have any questions, concerns, or requests regarding your personal information or this privacy policy, please contact us at sales@sunsetrealestate.ca.</p>

                        <div className="bg-gray-50 p-6 rounded-lg mt-8">
                            <p className="font-semibold">By using our website, you consent to the terms outlined in this Privacy Policy.</p>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-between items-center">
                        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                            Back to Home
                        </Link>
                        <Link to="/terms" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
                            View Terms and Conditions
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