import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import heroBanner from "@/assets/hero-banner-1.jpg";

const heroSlides = [
  {
    id: 1,
    title: "Redefine Your Style",
    subtitle: "Shop Men, Women & Kids",
    description: "Discover the latest trends in fashion with our exclusive collection of premium clothing, shoes, and accessories.",
    image: heroBanner,
    cta: "Shop Now",
    badge: "New Collection"
  },
  {
    id: 2,
    title: "Summer Collection 2024",
    subtitle: "Up to 50% Off",
    description: "Beat the heat with our stunning summer collection. Limited time offer on selected items.",
    image: heroBanner,
    cta: "Shop Sale",
    badge: "Limited Time"
  },
  {
    id: 3,
    title: "Premium Quality",
    subtitle: "Exceptional Comfort",
    description: "Experience luxury with our carefully curated selection of high-quality fashion pieces.",
    image: heroBanner,
    cta: "Explore",
    badge: "Premium"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative h-screen w-full px-6 lg:px-[150px] overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 backdrop-blur-sm">
              <Star className="h-4 w-4 text-accent" fill="currentColor" />
              <span className="text-sm font-medium text-white">
                {heroSlides[currentSlide].badge}
              </span>
            </div>
            
            {/* Main Content */}
            <div className="space-y-6 fade-in">
              <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
                {heroSlides[currentSlide].title}
              </h1>
              <h2 className="text-2xl font-semibold text-accent md:text-3xl">
                {heroSlides[currentSlide].subtitle}
              </h2>
              <p className="text-lg text-white/80 md:text-xl">
                {heroSlides[currentSlide].description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="hero" size="xl" className="group">
                  {heroSlides[currentSlide].cta}
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                  View Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-all ${
              index === currentSlide ? "bg-accent" : "bg-white/30"
            }`}
          />
        ))}
      </div>
      
      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-smooth hover:bg-white/20"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-smooth hover:bg-white/20"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </section>
  );
}