import type { ReactNode } from "react";

export interface LinkProp {
  id: number,
  title: string,
  path:string
  icon: ReactNode
}

export interface welcomeProp {
  id: number,
  title: string
  subtitle: string,
  description: string,
  btn: string,
  image: string
}

export interface futureProp {
  id: number,
  title: string,
  img: string
}

export interface ProductProp {
  id: number,
  img: string,
  title: string,
  description: string,
  numb1: string,
  icon: ReactNode,
  num2: string,
  price: string,
  discount?: string
}



export interface Product {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  priceRange: string;
  image: string;
  rating: number;
  reviews: number;
  featured?: boolean;
  // --- Add these new fields below ---
  originalPrice: string | null; // It can be a string like "$85.00" or null
  discount: string | null;      // It can be "19% OFF" or null
  sizes: string[];              // An array of strings like ["S", "M"]
  colors: string[];             // An array of strings like ["#000", "#fff"]
}




  export const allProducts:Product[] = [
    {
      id: 1,
      name: "Men Hooded Navy Blue & Grey T-Shirt",
      category: "Men",
      subCategory: "T-SHIRTS",
      price: 70.00,
      priceRange: "$70.00-$95.00",
      originalPrice: null,
      discount: "19% OFF",
      rating: 5,
      reviews: 2,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
      featured: true,
      sizes: ["S", "M", "L"],
      colors: ["#0066cc", "#808080", "#8b0000"]
    },
    {
      id: 2,
      name: "Navy Blue-Silver-White Multifunction Watch",
      category: "Watches",
      subCategory: "LEATHER",
      price: 49.00,
      priceRange: "$49.00",
      originalPrice: "$85.00",
      discount: "42% OFF",
      rating: 4,
      reviews: 1,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
      featured: false,
      sizes: ["One Size"],
      colors: ["#0066cc"]
    },
    {
      id: 3,
      name: "Women Off White Printed Blouson Top",
      category: "Women",
      subCategory: "SHORTS & SKIRTS",
      price: 47.00,
      priceRange: "$47.00",
      originalPrice: null,
      discount: null,
      rating: 2.7,
      reviews: 3,
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500",
      featured: true,
      sizes: ["S", "M", "L"],
      colors: ["#f5f5f5", "#ff69b4", "#ffd700"]
    },
    {
      id: 4,
      name: "Blue Printed School Backpack",
      category: "Bags & Backpacks",
      subCategory: "BAGS",
      price: 35.00,
      priceRange: "$35.00",
      originalPrice: null,
      discount: null,
      rating: 4.5,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      featured: false,
      sizes: ["One Size"],
      colors: ["#0066cc"]
    },
    {
      id: 5,
      name: "Men Navy Blue Casual Shoes",
      category: "Shoes",
      subCategory: "SHOES",
      price: 65.00,
      priceRange: "$65.00",
      originalPrice: null,
      discount: "15% OFF",
      rating: 4.2,
      reviews: 5,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
      featured: false,
      sizes: ["8", "9", "10"],
      colors: ["#0066cc", "#000000"]
    },
    {
      id: 6,
      name: "Women Blue Skinny Fit Jeans",
      category: "Women",
      subCategory: "JEANS",
      price: 89.00,
      priceRange: "$89.00",
      originalPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
      featured: true,
      sizes: ["S", "M", "L"],
      colors: ["#0066cc", "#000000", "#4b0082"]
    },
    {
      id: 7,
      name: "Leather Wallet Brown",
      category: "Accessories",
      subCategory: "WALLETS",
      price: 25.00,
      priceRange: "$25.00",
      originalPrice: null,
      discount: null,
      rating: 4.3,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
      featured: false,
      sizes: ["One Size"],
      colors: ["#8b4513"]
    },
    {
      id: 8,
      name: "Gold Chain Necklace",
      category: "Jewellery",
      subCategory: "NECKLACES",
      price: 120.00,
      priceRange: "$120.00",
      originalPrice: null,
      discount: null,
      rating: 4.9,
      reviews: 25,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
      featured: true,
      sizes: ["One Size"],
      colors: ["#ffd700"]
    },
    {
      id: 9,
      name: "Face Cream Moisturizer",
      category: "Beauty & Care",
      subCategory: "SKINCARE",
      price: 45.00,
      priceRange: "$45.00",
      originalPrice: "$60.00",
      discount: "25% OFF",
      rating: 4.6,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500",
      featured: false,
      sizes: ["50ml"],
      colors: ["#ffffff"]
    }
  ];
