import { IoHeartOutline, IoStar } from "react-icons/io5";
import type { Product } from "../../../services/ProductService";
import { Link } from "react-router";



interface ProductCartProps {
  product: Product;
}

const ProductCart = ({ product }: ProductCartProps) => {
  // 1. Guard against undefined/null product
  if (!product) return null;

  // 2. SAFE CATEGORY ACCESS: 
  // We check if categoryId is an object AND that it isn't null
  const categoryName = (typeof product.categoryId === 'object' && product.categoryId !== null)
    ? product.categoryId.name 
    : "General";

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "bg-green-600";
    if (rating >= 3.5) return "bg-green-500";
    return "bg-orange-500";
  };

  return (
    <Link to={`/product/${product._id}`}>
    
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 relative group cursor-pointer">
      
      {product.inStock && (
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded z-10">
          FEATURED
        </span>
      )}
      
      <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 z-10 shadow-sm">
        <IoHeartOutline className="text-gray-600 text-xl" />
      </button>

      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        <img 
          src={product.img || "https://via.placeholder.com/300"} 
          alt={product.name || "Product"} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">
          {categoryName}
        </p>

        <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 h-10">
          {product.name || "Unnamed Product"}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <span className={`${getRatingColor(5)} text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1`}>
            5.0 <IoStar />
          </span>
          <span className="text-gray-400 text-[10px]">({product.quantity} in stock)</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">
            ${typeof product.price === 'number' ? product.price.toFixed(2) : "0.00"}
          </p>
          {!product.inStock && (
            <span className="text-red-500 text-[10px] font-bold">OUT OF STOCK</span>
          )}
        </div>
      </div>
    </div>
    </Link>
    
  );
};

export default ProductCart;


