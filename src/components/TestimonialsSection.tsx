import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Absolutely love the quality and style! The customer service is exceptional, and shipping was super fast. I've found my new go-to fashion store.",
    verified: true
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The men's collection is outstanding. Perfect fit, premium materials, and the designs are exactly what I was looking for. Highly recommended!",
    verified: true
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Such a diverse and beautiful collection! From casual to formal wear, they have everything. The quality is consistent across all price ranges.",
    verified: true
  },
  {
    id: 4,
    name: "David Kim",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Great experience shopping for my family. The kids' section has adorable and durable clothes. Easy returns and excellent customer support.",
    verified: true
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "I'm impressed by the attention to detail and the eco-friendly packaging. The clothes are beautiful and the entire shopping experience is seamless.",
    verified: true
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-surface">
      <div className="px-6 lg:px-[150px]">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who love our fashion collection
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-8"
                >
                  <div className="bg-card rounded-2xl p-8 shadow-medium text-center relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 text-accent/20">
                      <Quote className="h-12 w-12" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-gold fill-current"
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-lg text-card-foreground mb-8 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Customer Info */}
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                      />
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-card-foreground">
                            {testimonial.name}
                          </h4>
                          {testimonial.verified && (
                            <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? "bg-accent scale-125" 
                    : "bg-muted hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-accent mb-2">10K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">1M+</div>
            <div className="text-muted-foreground">Products Sold</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">99%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}