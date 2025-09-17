import { Truck, Shield, RefreshCw, Headphones, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free & Fast Delivery",
    description: "Free shipping on orders over $50. Express delivery available.",
    color: "text-accent"
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance for all your fashion needs.",
    color: "text-gold"
  },
  {
    icon: RefreshCw,
    title: "Easy Returns & Refunds",
    description: "30-day hassle-free returns with full refund guarantee.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Secure Online Payment",
    description: "SSL encrypted checkout with multiple payment options.",
    color: "text-accent"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully selected materials and craftsmanship.",
    color: "text-gold"
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Orders processed within 24 hours on business days.",
    color: "text-primary"
  }
];

export default function USPSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Why Shop With Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience possible
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  {/* Icon Background */}
                  <div className="w-20 h-20 mx-auto bg-muted rounded-2xl flex items-center justify-center group-hover:bg-card transition-smooth shadow-soft group-hover:shadow-medium">
                    <Icon className={`h-10 w-10 ${feature.color} transition-smooth group-hover:scale-110`} />
                  </div>
                  
                  {/* Animated Ring */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-transparent group-hover:border-accent/20 transition-smooth" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-gold" />
              <span className="font-medium">Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-6 w-6 text-accent" />
              <span className="font-medium">Fast Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-6 w-6 text-primary" />
              <span className="font-medium">Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}