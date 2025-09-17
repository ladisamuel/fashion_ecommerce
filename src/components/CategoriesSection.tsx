import { ArrowRight } from "lucide-react";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryKids from "@/assets/category-kids.jpg";
import categoryShoes from "@/assets/category-shoes.jpg";
import categoryBags from "@/assets/category-bags.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const categories = [
  {
    id: 1,
    name: "Men",
    image: categoryMen,
    description: "Discover modern menswear",
    itemCount: "250+ items"
  },
  {
    id: 2,
    name: "Women",
    image: categoryWomen,
    description: "Elegant women's fashion",
    itemCount: "400+ items"
  },
  {
    id: 3,
    name: "Children",
    image: categoryKids,
    description: "Fun styles for kids",
    itemCount: "180+ items"
  },
  {
    id: 4,
    name: "Shoes",
    image: categoryShoes,
    description: "Step up your style",
    itemCount: "150+ items"
  },
  {
    id: 5,
    name: "Bags",
    image: categoryBags,
    description: "Premium accessories",
    itemCount: "120+ items"
  },
  {
    id: 6,
    name: "Accessories",
    image: categoryAccessories,
    description: "Complete your look",
    itemCount: "200+ items"
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every style and occasion
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-xl bg-card shadow-soft hover:shadow-large transition-smooth hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              {/* Category Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-smooth">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-white/80 mb-2">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60">{category.itemCount}</span>
                  <div className="flex items-center gap-1 text-accent">
                    <span className="text-sm font-medium">Shop Now</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-smooth rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}