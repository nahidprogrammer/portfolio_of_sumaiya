import { FiStar } from "react-icons/fi";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    text: "SUMIYA delivered an exceptional website that exceeded our expectations. Her attention to detail and creative approach made our project a success.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    text: "Working with SUMIYA was a pleasure. She understood our vision perfectly and created a stunning, responsive design that our users love.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Founder, DesignHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    text: "Highly professional and incredibly talented. SUMIYA transformed our outdated website into a modern, user-friendly platform.",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
    text: "SUMIYA's work speaks for itself. Fast delivery, great communication, and outstanding results. Will definitely work with her again.",
  },
];

function Reviews() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-left mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-medium">Testimonials</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">Customer Reviews</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            What my clients say about working with me
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FiStar key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {review.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
