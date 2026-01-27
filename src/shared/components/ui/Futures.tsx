import { useNavigate } from "react-router-dom";
import type { futureProp } from "../../../Types/types";

interface Props {
  future: futureProp;
}

const Futures = ({ future }: Props) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
  
    const path = future.title
      .toLowerCase()
      .replace(/&/g, "and") 
      .replace(/\s+/g, "-"); 
    
    navigate(`/shop/${path}`);
  };

  return (
    <div 
      className="py-4 cursor-pointer group" 
      onClick={handleCategoryClick}
    >
      <div className="flex flex-col items-center">
     
        <div className="w-24 h-24 mb-2 overflow-hidden rounded-full border-2 border-transparent transition-all duration-300 group-hover:border-blue-600 group-hover:shadow-md">
          <img 
            src={future.img} 
            alt={future.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          /> 
        </div>
        
       
        <h1 className="text-center text-sm font-medium transition-colors group-hover:text-blue-600">
          {future.title}
        </h1>
      </div>
    </div>
  );
};

export default Futures;