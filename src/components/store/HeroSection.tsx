import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Premium fashion collection hero banner"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-2xl text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">Premium Collection 2024</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Discover
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Premium Style
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore our curated collection of premium fashion, electronics, and lifestyle products.
            Quality meets innovation in every piece.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="btn-hero group">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg"
            >
              View Lookbook
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm text-blue-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-blue-200">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9</div>
              <div className="text-sm text-blue-200">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 hidden lg:block animate-float">
        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20" />
      </div>
    </section>
  );
};

export default HeroSection;