import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const navigate = useNavigate(); 

  const handleContinueShopping = () => {
    onClose(); 
    navigate("/shop"); 
  };

  return (
    <>
   
      <div 
        className={`fixed inset-0 bg-black/40 z-[998] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

   
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[340px] bg-white z-[999] shadow-2xl transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        
      
        <div className="bg-[#2b77f1] text-white flex items-center p-4 relative">
          <button 
            onClick={onClose} 
            className="absolute left-4 p-1 hover:bg-white/10 rounded transition-colors"
          >
            <FaChevronLeft size={18} />
          </button>
          <h2 className="w-full text-center font-bold text-sm uppercase tracking-widest">
            My Cart
          </h2>
        </div>

    
        <div className="flex flex-col items-center justify-center h-[calc(100%-60px)] p-8">
          <div className="relative mb-6">
            <svg 
              className="w-24 h-24 text-gray-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1" 
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
              />
            </svg>
          </div>

          <h3 className="text-gray-800 font-bold text-xs uppercase tracking-tighter mb-8 text-center">
            Shopping Cart is Empty!
          </h3>

         
          <button 
            onClick={handleContinueShopping}
            className="bg-[#2b77f1] text-white px-10 py-3 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#1a5bbd] transition-colors shadow-md"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;