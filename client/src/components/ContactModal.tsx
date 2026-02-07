import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, Send, Mail, User, MessageSquare, Phone } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    subject: z.string().min(1, "Please select a subject"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactModalProps {
    // Make trigger optional if you want to use the modal directly
    trigger?: React.ReactElement;
}

export default function ContactModal({ trigger }: ContactModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject: "Villa Inquiry",
        }
    });

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        setIsSuccess(false);
        setError(null);
        reset();
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            // Using FormSubmit.co
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("phone", data.phone || "");
            formData.append("subject", data.subject);
            formData.append("message", data.message);
            formData.append("_subject", "New Inquiry from Villas Auger Website");
            formData.append("_captcha", "false");
            formData.append("_template", "table");

            const response = await fetch("https://formsubmit.co/ajax/villasaugerpuntacana@gmail.com", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                if (result.success === "true" || result.success === true) {
                    setIsSuccess(true);
                } else {
                    throw new Error("Failed to send message");
                }
            } else {
                throw new Error("Failed to send message");
            }
        } catch (err) {
            console.error("Form submission error:", err);
            setError(
                "Unable to send message at this time. Please email us directly at villasaugerpuntacana@gmail.com or try again later."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Render trigger with onClick or use default button */}
            {trigger ? (
                React.cloneElement(trigger, { onClick: openModal } as any)
            ) : (
                <button
                    onClick={openModal}
                    className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                    Contact Us
                </button>
            )}

            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm pt-100 p-4">
                    <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        {/* Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <h2 className="text-xl font-bold text-gray-900">Contact Villas Auger</h2>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        {/* Form Content */}
                        <div className="p-6">
                            {isSuccess ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Thank you for contacting Villas Auger Punta Cana. We'll respond within 24 hours.
                                    </p>
                                    <button
                                        onClick={closeModal}
                                        className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <p className="text-gray-600 mb-6">
                                        Fill out the form below and we'll contact you shortly.
                                    </p>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                        {/* Hidden fields for FormSubmit.co */}
                                        <input type="hidden" name="_subject" value="New Inquiry from Villas Auger Website" />
                                        <input type="hidden" name="_captcha" value="false" />
                                        <input type="hidden" name="_template" value="table" />

                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                <User className="inline w-4 h-4 mr-1" />
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                {...register("name")}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="Enter your full name"
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                <Mail className="inline w-4 h-4 mr-1" />
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                {...register("email")}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="your@email.com"
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                <Phone className="inline w-4 h-4 mr-1" />
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                {...register("phone")}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="(123) 456-7890"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                                Subject *
                                            </label>
                                            <select
                                                id="subject"
                                                {...register("subject")}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="Villa Inquiry">Villa Inquiry</option>
                                                <option value="Property Investment">Property Investment</option>
                                                <option value="Development Project">Development Project</option>
                                                <option value="General Question">General Question</option>
                                                <option value="Partnership Opportunity">Partnership Opportunity</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                                <MessageSquare className="inline w-4 h-4 mr-1" />
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                {...register("message")}
                                                rows={4}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="Tell us about your inquiry..."
                                            ></textarea>
                                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                                        </div>

                                        {error && (
                                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                                {error}
                                            </div>
                                        )}

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-5 h-5" />
                                                        Send Message
                                                    </>
                                                )}
                                            </button>
                                            <p className="text-xs text-gray-500 mt-3 text-center">
                                                By submitting, you agree to receive emails from Villas Auger Punta Cana.
                                            </p>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}