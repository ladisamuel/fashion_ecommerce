import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star, Flame } from "lucide-react";
import { useState } from "react";

// Mock trending products data
const trendingProducts = [
  {
    id: 1,
    name: "Designer Denim Jacket",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 124,
    badge: "Hot Pick",
    isNew: false,
    onSale: true
  },
  {
    id: 2,
    name: "Premium Sneakers",
    price: 159.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 89,
    badge: "Bestseller",
    isNew: true,
    onSale: false
  },
  {
    id: 3,
    name: "Elegant Summer Dress",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    badge: "Hot Pick",
    isNew: false,
    onSale: true
  },
  {
    id: 4,
    name: "Luxury Handbag",
    price: 249.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    rating: 5.0,
    reviews: 67,
    badge: "Premium",
    isNew: true,
    onSale: false
  },
  {
    id: 5,
    name: "Casual Polo Shirt",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 203,
    badge: "Hot Pick",
    isNew: false,
    onSale: true
  }
];

export default function TrendingSection() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="px-6 lg:px-[150px]">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Flame className="h-5 w-5 text-accent" />
            <span className="text-accent font-medium">Trending Now</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            What's Hot Right Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular items loved by our customers this week
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {trendingProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-xl shadow-soft hover:shadow-large transition-smooth hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                  {product.onSale && (
                    <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Sale
                    </span>
                  )}
                </div>
                
                {/* Trust Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    {product.badge === "Hot Pick" && <Flame className="h-3 w-3 text-accent" />}
                    {product.badge === "Bestseller" && <Star className="h-3 w-3 text-gold" fill="currentColor" />}
                    {product.badge === "Premium" && <Star className="h-3 w-3 text-primary" fill="currentColor" />}
                    <span className="text-xs font-medium text-primary">{product.badge}</span>
                  </div>
                </div>
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-medium hover:bg-white transition-smooth"
                >
                  <Heart 
                    className={`h-4 w-4 transition-colors ${
                      favorites.includes(product.id) 
                        ? "text-destructive fill-current" 
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
                
                {/* Hover Actions */}
                <div className="absolute bottom-3 left-3 right-16 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button size="sm" variant="cta" className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating) 
                            ? "text-gold fill-current" 
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Trending Items
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}