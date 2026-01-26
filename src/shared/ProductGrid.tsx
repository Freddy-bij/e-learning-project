import { Heart, Search, ArrowRightLeft } from 'lucide-react';
import type { Product } from '../Types/types';

export const ProductCard = ({ product }: { product: Product }) => (
  <div className="group relative bg-white transition-all duration-300 hover:shadow-lg p-2 rounded-sm">
    {/* Image Container */}
    <div className="relative overflow-hidden aspect-[3/4] mb-3">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
      
      {/* Side Action Buttons */}
      <div className="absolute top-3 right-[-50px] group-hover:right-3 transition-all duration-300 flex flex-col gap-2 z-10">
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors">
          <Heart size={16} />
        </button>
      </div>

      {/* Select Options Bar */}
      <div className="absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center bg-blue-600 z-20">
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 text-white font-bold text-[10px] uppercase tracking-wider">
          <ArrowRightLeft size={14} />
          Select Options
        </button>
        <button className="p-2.5 border-l border-blue-500 text-white hover:bg-blue-700">
          <Search size={16} />
        </button>
      </div>
    </div>

    {/* Product Info */}
    <div className="flex flex-col gap-1 px-1">
      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
        {product.subCategory}
      </p>
      <h3 className="font-medium text-gray-900 text-[14px] group-hover:text-blue-600 transition-colors line-clamp-1">
        {product.name}
      </h3>
      
      {/* Rating & Price (Always Visible) */}
      <div className="flex items-center gap-2 mt-1">
        <div className="flex bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded items-center font-bold">
          {product.rating} ★
        </div>
        <span className="text-gray-400 text-xs">({product.reviews})</span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-gray-900 font-bold text-sm">{product.priceRange}</span>
        {product.discount && (
          <span className="text-green-600 text-[11px] font-bold">{product.discount}</span>
        )}
      </div>

      {/* REVEAL SECTION: Color and Size (Appears below price on hover) */}
      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 opacity-0 group-hover:opacity-100">
        <div className="overflow-hidden">
          <div className="pt-3 flex flex-col gap-2 border-t border-gray-100 mt-2">
            {/* Color Swatches */}
            <div className="flex items-center gap-1.5">
              {product.colors.map((color, idx) => (
                <span 
                  key={idx} 
                  className="w-3.5 h-3.5 rounded-full border border-gray-100 cursor-pointer hover:ring-1 hover:ring-blue-500 ring-offset-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            {/* Size Labels */}
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <span key={size} className="text-[10px] text-gray-500 font-bold uppercase hover:text-blue-600 cursor-pointer">
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);