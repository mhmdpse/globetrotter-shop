import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="font-bold text-2xl bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              FBM Store
            </div>
            <p className="text-muted opacity-80 leading-relaxed">
              Your premier destination for quality products across fashion, electronics, 
              and lifestyle categories. Quality meets innovation in every purchase.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted hover:text-background">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted hover:text-background">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted hover:text-background">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted hover:text-background">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Contact", "FAQ", "Size Guide", "Shipping Info", "Returns"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background">Categories</h3>
            <ul className="space-y-2">
              {["Electronics", "Fashion", "Beauty", "Home & Garden", "Sports", "Food & Beverages"].map((category) => (
                <li key={category}>
                  <a href="#" className="text-muted hover:text-background transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary-glow flex-shrink-0" />
                <span className="text-muted text-sm">
                  123 Business Street, Commerce City, CC 12345
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-glow flex-shrink-0" />
                <span className="text-muted text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-glow flex-shrink-0" />
                <span className="text-muted text-sm">support@fbmstore.com</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-4">
              <h4 className="font-medium text-background mb-2">Business Hours</h4>
              <div className="text-sm text-muted space-y-1">
                <div>Mon - Fri: 9:00 AM - 8:00 PM</div>
                <div>Sat: 10:00 AM - 6:00 PM</div>
                <div>Sun: 12:00 PM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-muted/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            © {currentYear} FBM Store. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-muted hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted hover:text-background transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;