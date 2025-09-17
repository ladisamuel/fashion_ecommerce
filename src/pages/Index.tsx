import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import TrendingSection from "@/components/TrendingSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import PromotionalSection from "@/components/PromotionalSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import USPSection from "@/components/USPSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Categories */}
      <CategoriesSection />
      
      {/* Trending Products */}
      <TrendingSection />
      
      {/* New Arrivals */}
      <NewArrivalsSection />
      
      {/* Promotional Deals */}
      <PromotionalSection />
      
      {/* Customer Testimonials */}
      <TestimonialsSection />
      
      {/* Why Shop With Us */}
      <USPSection />
      
      {/* Newsletter Signup */}
      <NewsletterSection />
    </div>
  );
};

export default Index;
