interface Testimonial {
    name: string;
    role: string;
    content: string;
    image: string;
}

export function Testimonials() {
    const testimonials: Testimonial[] = [
        {
            name: "Carlos Rodriguez",
            role: "Local School Principal",
            content: "The education sponsorship program has transformed our school. We've seen attendance rates increase by 40% since partnering with Invest in Paradise.",
            image: "/images/principal.jpg"
        },
        {
            name: "Ana Martinez",
            role: "Community Leader",
            content: "This is the first real estate company in Punta Cana that truly invests back into our community. Their impact goes far beyond construction.",
            image: "/images/community-leader.jpg"
        }
    ];

    return (
        <div className="py-12">
            <h3 className="text-3xl font-bold text-center mb-8">Community Feedback</h3>
            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold">{testimonial.name}</h4>
                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 italic">"{testimonial.content}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
}