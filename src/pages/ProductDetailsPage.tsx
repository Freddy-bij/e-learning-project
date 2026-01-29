
import { useParams, Link } from "react-router-dom";
import { Heart, ArrowRightLeft, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "../hooks/UseCart";
import CartSidebar from "../shared/components/ui/CartSidebar";
import { getProductById, type Product } from "../services/ProductService";
import type { Product as CartProduct } from "../Types/types";

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = { Days: 0, Hrs: 0, Mins: 0, Secs: 0 };

  if (difference > 0) {
    timeLeft = {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Mins: Math.floor((difference / 1000 / 60) % 60),
      Secs: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();

  // State
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [targetDate] = useState(new Date("2026-12-31T23:59:59"));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fetch product on mount
  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      
      try {
        setLoading(true);
        setError(null);
        const data = await getProductById(productId);
        setProduct(data);
      } catch (err) {
        console.error('Failed to fetch product:', err);
        setError('Failed to load product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  const handleAddToCart = () => {
    if (product) {
      addToCart(product as unknown as CartProduct, 1);
      setIsCartOpen(true);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const placeholderImage = "https://via.placeholder.com/600x800?text=No+Image";

  // Get category name
  const categoryName = product && typeof product.categoryId === 'object' 
    ? product.categoryId.name 
    : 'Category';

  // Loading State
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-pulse">
            <div className="bg-gray-200 aspect-[3/4] rounded"></div>
          </div>
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-500 mb-4">
          {error || "Product not found"}
        </h2>
        <Link 
          to="/shop"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Images Section */}
        <div className="flex gap-4">
          {/* Thumbnail Column - Show same image 4 times for now */}
          <div className="flex flex-col gap-2 w-20">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-gray-200 cursor-pointer hover:border-blue-500 transition-colors">
                <img 
                  src={imageError ? placeholderImage : (product.img || placeholderImage)}
                  alt={`${product.name} thumbnail ${i}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 relative">
            {/* Featured Badge */}
            {product.inStock && (
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] px-2 py-1 font-bold uppercase z-10">
                In Stock
              </span>
            )}
            {!product.inStock && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] px-2 py-1 font-bold uppercase z-10">
                Out of Stock
              </span>
            )}
            <img 
              src={imageError ? placeholderImage : (product.img || placeholderImage)}
              alt={product.name}
              className="w-full"
              onError={handleImageError}
            />
            {imageError && (
              <div className="text-center text-sm text-red-500 mt-2">
                Image not available
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-4">
          {/* Breadcrumb */}
          <div className="text-xs text-gray-400 flex gap-2">
            <Link to="/" className="hover:text-blue-600">Home</Link> 
            / 
            <Link to="/shop" className="hover:text-blue-600">Shop</Link> 
            /
            <span className="text-gray-600">{categoryName}</span>
            / 
            <span className="text-gray-800">{product.name}</span>
          </div>
          
          {/* Title and Share */}
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <Share2 
              size={18} 
              className="text-gray-400 cursor-pointer hover:text-blue-600"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}
            />
          </div>

          {/* Stock and Category */}
          <div className="flex items-center gap-3">
            <div className={`${product.inStock ? 'bg-green-600' : 'bg-red-600'} text-white text-[10px] px-2 py-0.5 rounded font-bold`}>
              {product.inStock ? `${product.quantity} in stock` : 'Out of stock'}
            </div>
            <span className="text-gray-400 text-xs uppercase font-bold tracking-tighter">
              {categoryName}
            </span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Timer */}
          <div className="flex gap-4">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col justify-center items-center bg-white border border-gray-200 w-14 h-14 rounded-sm shadow-sm">
                <div className="text-lg font-bold text-blue-600 leading-none">{formatNumber(value)}</div>
                <div className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">{label}</div>
              </div>
            ))}
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold uppercase text-[11px] tracking-widest">Quantity Available:</span>
            <span className="text-lg font-bold text-blue-600">{product.quantity}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <button 
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 font-bold py-3 uppercase text-[11px] tracking-widest transition-colors shadow-md ${
                product.inStock 
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button 
              disabled={!product.inStock}
              className={`flex-1 font-bold py-3 uppercase text-[11px] tracking-widest transition-colors shadow-md ${
                product.inStock
                  ? 'bg-[#2b77f1] text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Buy Now
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 pt-6 border-t border-gray-100 text-[11px] font-bold text-gray-500 uppercase">
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <Heart size={14} /> Add to Wishlist
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <ArrowRightLeft size={14} /> Compare
            </div>
          </div>

          {/* Product Meta */}
          <div className="mt-6 pt-6 border-t border-gray-100 space-y-2 text-sm">
            <div className="flex gap-2">
              <span className="text-gray-500 font-bold">SKU:</span>
              <span className="text-gray-700">{product._id.slice(-8).toUpperCase()}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 font-bold">Category:</span>
              <Link 
                to={`/shop/${categoryName.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-600 hover:underline"
              >
                {categoryName}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default ProductDetailsPage;