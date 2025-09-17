import { Button } from "@/components/ui/button";
import { Clock, Zap, Gift, Percent } from "lucide-react";
import { useState, useEffect } from "react";

export default function PromotionalSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-20 bg-gradient-accent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Zap className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Limited Time Offer</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 md:text-6xl">
            Flash Sale Event
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Don't miss out! Get up to 60% off on selected premium items
          </p>
        </div>
        
        {/* Countdown Timer */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Clock className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">Sale Ends In:</span>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            {[
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={item.label} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px] shadow-large">
                  <div className="text-3xl font-bold text-white mb-1">
                    {formatTime(item.value)}
                  </div>
                  <div className="text-sm text-white/80 uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
                {index < 2 && (
                  <div className="text-2xl font-bold text-white mx-2">:</div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Promotional Deals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover-scale">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Percent className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Up to 60% Off</h3>
            <p className="text-white/80 mb-4">Selected fashion items</p>
            <Button variant="hero" size="lg" className="bg-white text-accent hover:bg-white/90">
              Shop Now
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover-scale">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Buy 2 Get 1 Free</h3>
            <p className="text-white/80 mb-4">On accessories collection</p>
            <Button variant="hero" size="lg" className="bg-white text-accent hover:bg-white/90">
              Claim Offer
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover-scale">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Flash Deals</h3>
            <p className="text-white/80 mb-4">Limited quantity items</p>
            <Button variant="hero" size="lg" className="bg-white text-accent hover:bg-white/90">
              Grab Now
            </Button>
          </div>
        </div>
        
        {/* Main CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="bg-white text-accent hover:bg-white/90 shadow-large">
            <Zap className="h-6 w-6 mr-2" />
            Shop All Sale Items
          </Button>
        </div>
      </div>
    </section>
  );
}