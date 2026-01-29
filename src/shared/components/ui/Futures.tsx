
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { futureProp } from "../../../Types/types";

interface Props {
  future: futureProp;
}

const Futures = ({ future }: Props) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleCategoryClick = () => {
    const path = future.title
      .toLowerCase()
      .replace(/&/g, "and") 
      .replace(/\s+/g, "-"); 
    
    navigate(`/shop/${path}`);
  };

  const handleImageError = () => {
    console.error(`Failed to load image for ${future.title}:`, future.img);
    setImageError(true);
  };

  // Fallback placeholder image
  const placeholderImage = "https://via.placeholder.com/150x150?text=No+Image";

  return (
    <div 
      className="py-4 cursor-pointer group" 
      onClick={handleCategoryClick}
    >
      <div className="flex flex-col items-center">
        {/* Image Container */}
        <div className="w-24 h-24 mb-2 overflow-hidden rounded-full border-2 border-transparent transition-all duration-300 group-hover:border-blue-600 group-hover:shadow-md bg-gray-100">
          <img 
            src={   imageError ? placeholderImage : future.img}
            alt={future.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            onError={handleImageError}
            loading="lazy" 
          /> 
        </div>
        
        {/* Title */}
        <h1 className="text-center text-sm font-medium transition-colors group-hover:text-blue-600">
          {future.title}
        </h1>

        {/* Optional: Show error indicator */}
        {imageError && (
          <span className="text-xs text-red-500 mt-1">Image unavailable</span>
        )}
      </div>
    </div>
  );
};

export default Futures;