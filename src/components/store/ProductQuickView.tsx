import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "./ProductCard";

interface ProductQuickViewProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductQuickView = ({ product, open, onClose, onAddToCart }: ProductQuickViewProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.category}</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="rounded-xl overflow-hidden bg-muted aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
          </div>

          {/* Details */}
          <div className="space-y-4">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-rating text-rating' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.rating.toFixed(1)} · {product.reviews} reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="price-display">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="price-original">${product.originalPrice.toFixed(2)}</span>
              )}
              {product.isSale && product.discount && (
                <Badge className="bg-sale text-sale-foreground">Save {product.discount}%</Badge>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <Button
                className="btn-hero"
                disabled={!product.inStock}
                onClick={() => onAddToCart(product)}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              {!product.inStock && (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>

            {/* Description placeholder */}
            <p className="text-sm text-muted-foreground leading-6">
              Premium quality product with exceptional build and performance. Perfect for elevating your daily lifestyle with style and reliability.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;
