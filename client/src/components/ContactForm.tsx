import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(), // Added phone field
    inquiryType: z.string().min(1, "Please select an inquiry type"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            inquiryType: "General Investment",
        }
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            // Using FormSubmit.co
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("phone", data.phone || "");
            formData.append("inquiryType", data.inquiryType);
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
                    toast.success("Message sent successfully!");
                    reset();
                } else {
                    throw new Error("Failed to send message");
                }
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-500">Your inquiry has been received. Our team will contact you shortly.</p>
                <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => setIsSuccess(false)}
                >
                    Send another message
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Full Name *</label>
                <Input
                    {...register("name")}
                    placeholder="John Doe"
                    className={errors.name ? "border-red-500" : "border-gray-200"}
                    required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Email Address *</label>
                <Input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                    className={errors.email ? "border-red-500" : "border-gray-200"}
                    required
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Phone Number</label>
                <Input
                    {...register("phone")}
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="border-gray-200"
                />
            </div>

            <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">I am interested in: *</label>
                <select
                    {...register("inquiryType")}
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                >
                    <option value="">Select an option</option>
                    <option value="General Investment">General Investment</option>
                    <option value="Retirement Property">Retirement & Golf Lifestyle</option>
                    <option value="Family Vacation Home">Family Vacation Homes</option>
                    <option value="Property Management">Property Management</option>
                    <option value="Villas Project">Villas Project</option>
                </select>
                {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType.message}</p>}
            </div>

            <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Your Message *</label>
                <Textarea
                    {...register("message")}
                    placeholder="How can we help you find your piece of paradise?"
                    rows={4}
                    className={errors.message ? "border-red-500" : "border-gray-200"}
                    required
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Inquiry
                    </>
                )}
            </Button>
        </form>
    );
}