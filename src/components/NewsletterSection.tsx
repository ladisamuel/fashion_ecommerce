import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift, Sparkles } from "lucide-react";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-gold/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="px-6 lg:px-[150px] relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8 fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
              <Mail className="h-5 w-5 text-accent" />
              <span className="text-accent font-medium">Stay Updated</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
              Join Our Fashion Community
            </h2>
            <p className="text-lg text-muted-foreground">
              Subscribe to our newsletter and get 10% off your first order, plus exclusive access to new collections and special offers
            </p>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Gift className="h-6 w-6 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">10% Off First Order</div>
                <div className="text-sm text-muted-foreground">Instant discount code</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-gold" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Early Access</div>
                <div className="text-sm text-muted-foreground">New collections first</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Exclusive Offers</div>
                <div className="text-sm text-muted-foreground">Member-only deals</div>
              </div>
            </div>
          </div>
          
          {/* Newsletter Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-lg border-2 border-border focus:border-accent transition-colors"
                  required
                />
              </div>
              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="h-12 px-8 whitespace-nowrap"
              >
                <Mail className="h-5 w-5 mr-2" />
                Subscribe & Save
              </Button>
            </form>
          ) : (
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 max-w-lg mx-auto animate-scale-in">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <div className="font-bold text-accent text-lg">Welcome to the family!</div>
                  <div className="text-muted-foreground">Check your email for your 10% discount code</div>
                </div>
              </div>
            </div>
          )}
          
          {/* Privacy Note */}
          <p className="text-sm text-muted-foreground mt-6">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}