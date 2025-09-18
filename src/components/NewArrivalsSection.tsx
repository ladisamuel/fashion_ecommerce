import { Button } from "@/components/ui/button";
import { Sparkles, Eye, ShoppingCart } from "lucide-react";

// Mock new arrivals data
const newArrivals = [
  {
    id: 1,
    name: "Minimalist Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Accessories",
    justDropped: true
  },
  {
    id: 2,
    name: "Vintage Leather Jacket",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    category: "Men",
    justDropped: true
  },
  {
    id: 3,
    name: "Floral Print Blouse",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=400&fit=crop",
    category: "Women",
    justDropped: false
  },
  {
    id: 4,
    name: "Kids Rainbow Sneakers",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop",
    category: "Children",
    justDropped: true
  },
  {
    id: 5,
    name: "Designer Crossbody Bag",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Bags",
    justDropped: false
  },
  {
    id: 6,
    name: "Athletic Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    category: "Shoes",
    justDropped: true
  }
];

export default function NewArrivalsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="px-6 lg:px-[150px]">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-5 w-5 text-gold" />
            <span className="text-gold font-medium">Just Arrived</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            New Arrivals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be the first to discover our latest collection of premium fashion pieces
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newArrivals.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-xl shadow-soft hover:shadow-large transition-smooth hover-lift overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                
                {/* Just Dropped Badge */}
                {product.justDropped && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-gold-glow animate-pulse">
                      Just Dropped
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                </div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-3">
                  <Button size="sm" variant="hero" className="backdrop-blur-sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Quick View
                  </Button>
                  <Button size="sm" variant="cta" className="backdrop-blur-sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.justDropped && (
                    <div className="flex items-center gap-1 text-gold">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-sm font-medium">New</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <Button variant="gold" size="lg" className="group">
            <Sparkles className="h-5 w-5 mr-2" />
            See All New Arrivals
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}