import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Heart, Share2, Star, Shield, Truck, RotateCcw, Check, Minus, Plus } from "lucide-react";
import { sampleProducts } from "@/data/products";
import { Product } from "@/components/store/ProductCard";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/store/Header";
import Footer from "@/components/store/Footer";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock additional product data
  const [productDetails] = useState({
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy", "Gray"],
    images: [
      product?.image || "",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=600&fit=crop"
    ],
    description: "Experience premium quality with this carefully crafted item. Made from the finest materials and designed with attention to detail, this product combines style, comfort, and durability.",
    features: [
      "Premium materials and construction",
      "Sustainable and eco-friendly",
      "30-day return policy",
      "Free shipping on orders over $100"
    ],
    specifications: {
      "Material": "100% Premium Cotton",
      "Care Instructions": "Machine wash cold, tumble dry low",
      "Made In": "Responsibly sourced",
      "Weight": "350g"
    }
  });

  useEffect(() => {
    if (id) {
      const foundProduct = sampleProducts.find(p => p.id === parseInt(id));
      setProduct(foundProduct || null);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    if (productDetails.sizes.length > 0 && !selectedSize) {
      toast({
        title: "Size Required",
        description: "Please select a size before adding to cart.",
        variant: "destructive"
      });
      return;
    }

    if (productDetails.colors.length > 0 && !selectedColor) {
      toast({
        title: "Color Required", 
        description: "Please select a color before adding to cart.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const calculatePrice = () => {
    if (!product) return 0;
    let basePrice = product.price;
    
    // Size pricing adjustments
    if (selectedSize === "XL") basePrice += 10;
    if (selectedSize === "XXL") basePrice += 20;
    
    return basePrice * quantity;
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          cartItems={0} 
          onCartClick={() => navigate("/cart")} 
          onMenuClick={() => {}}
        />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Store
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItems={0} 
        onCartClick={() => navigate("/cart")} 
        onMenuClick={() => {}}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <button onClick={() => navigate("/")} className="hover:text-primary transition-colors">
            Home
          </button>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")} 
          className="mb-6 -ml-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Store
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={productDetails.images[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {productDetails.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={image || product.image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {product.isNew && <Badge className="bg-green-500">New</Badge>}
                {product.isSale && <Badge variant="destructive">Sale</Badge>}
              </div>
              
              <h1 className="text-3xl font-bold">{product.name}</h1>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">${calculatePrice().toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${(product.originalPrice * quantity).toFixed(2)}
                </span>
              )}
              {product.discount && (
                <Badge variant="destructive" className="text-sm">
                  {product.discount}% OFF
                </Badge>
              )}
            </div>

            {/* Options */}
            <div className="space-y-4">
              {/* Size Selection */}
              {productDetails.sizes.length > 0 && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Size</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {productDetails.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Color Selection */}
              {productDetails.colors.length > 0 && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Color</label>
                  <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      {productDetails.colors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Quantity */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1"
                  size="lg"
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-red-500 border-red-200" : ""}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <Shield className="h-6 w-6 mx-auto text-green-600" />
                  <p className="text-sm font-medium">Secure Payment</p>
                </div>
                <div className="space-y-2">
                  <Truck className="h-6 w-6 mx-auto text-blue-600" />
                  <p className="text-sm font-medium">Fast Shipping</p>
                </div>
                <div className="space-y-2">
                  <RotateCcw className="h-6 w-6 mx-auto text-purple-600" />
                  <p className="text-sm font-medium">Easy Returns</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {productDetails.description}
              </p>
              
              <Separator className="my-4" />
              
              <div className="space-y-3">
                <h4 className="font-medium">Features</h4>
                <ul className="space-y-2">
                  {productDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="my-4" />
              
              <div className="space-y-3">
                <h4 className="font-medium">Specifications</h4>
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(productDetails.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;