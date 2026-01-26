import { IoHeartOutline } from "react-icons/io5"
import type { ProductProp } from "../../Types/types";


const ProductCart = ({ img, title, description, numb1, icon, num2, price, discount }: ProductProp) => {
  
  
  const getRatingColor = (rating: string) => {
    const num = parseFloat(rating);
    if (num >= 4.5) return "bg-green-600";
    if (num >= 3.5) return "bg-green-500";
    if (num >= 2.5) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group">
       
      {discount && (
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded z-10">
          FEATURED
        </span>
      )}
      
     
      <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 z-10">
        <IoHeartOutline className="text-gray-600 text-xl" />
      </button>

    
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        {img ? (
          <img 
            src={img} 
            alt={description} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

    
      <div className="p-4">
     
        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
          {title}
        </p>

        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
          {description}
        </h3>

        
        <div className="flex items-center gap-2 mb-3">
          <span className={`${getRatingColor(numb1)} text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1`}>
            {numb1} {icon}
          </span>
          <span className="text-gray-500 text-xs">{num2}</span>
        </div>

        
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">{price}</p>
          {discount && (
            <span className="text-green-600 text-xs font-semibold">
              {discount}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCart