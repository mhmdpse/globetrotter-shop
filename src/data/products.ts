import { Product } from "@/components/store/ProductCard";

export const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.8,
    reviews: 156,
    isNew: true,
    isSale: true,
    discount: 25,
    inStock: true
  },
  {
    id: 2,
    name: "Designer Leather Jacket",
    price: 459.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    category: "Fashion",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    isSale: false,
    inStock: true
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.7,
    reviews: 234,
    isNew: false,
    isSale: true,
    discount: 20,
    inStock: true
  },
  {
    id: 4,
    name: "Organic Skincare Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=500&fit=crop",
    category: "Beauty",
    rating: 4.6,
    reviews: 67,
    isNew: true,
    isSale: false,
    inStock: true
  },
  {
    id: 5,
    name: "Professional Camera Lens",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.9,
    reviews: 45,
    isNew: false,
    isSale: false,
    inStock: false
  },
  {
    id: 6,
    name: "Luxury Handbag",
    price: 699.99,
    originalPrice: 899.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
    category: "Fashion",
    rating: 4.8,
    reviews: 123,
    isNew: false,
    isSale: true,
    discount: 22,
    inStock: true
  },
  {
    id: 7,
    name: "Artisan Coffee Beans",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
    category: "Food",
    rating: 4.5,
    reviews: 78,
    isNew: true,
    isSale: false,
    inStock: true
  },
  {
    id: 8,
    name: "Gaming Mechanical Keyboard",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.7,
    reviews: 189,
    isNew: false,
    isSale: true,
    discount: 25,
    inStock: true
  },
  {
    id: 9,
    name: "Minimalist Desk Lamp",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    category: "Home",
    rating: 4.4,
    reviews: 56,
    isNew: false,
    isSale: false,
    inStock: true
  },
  {
    id: 10,
    name: "Vintage Sunglasses",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&h=500&fit=crop",
    category: "Fashion",
    rating: 4.6,
    reviews: 92,
    isNew: true,
    isSale: false,
    inStock: true
  },
  {
    id: 11,
    name: "Premium Yoga Mat",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
    category: "Sports",
    rating: 4.8,
    reviews: 145,
    isNew: false,
    isSale: true,
    discount: 28,
    inStock: true
  },
  {
    id: 12,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 167,
    isNew: false,
    isSale: false,
    inStock: true
  }
];

export const featuredCategories = [
  {
    name: "Electronics",
    count: 156,
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop"
  },
  {
    name: "Fashion",
    count: 234,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop"
  },
  {
    name: "Beauty",
    count: 89,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop"
  },
  {
    name: "Home",
    count: 167,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
  },
  {
    name: "Sports",
    count: 124,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    name: "Food",
    count: 78,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
  }
];