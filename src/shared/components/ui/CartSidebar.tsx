import { FaChevronLeft, FaTimes, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../../../hooks/UseCart";
import { Link } from "react-router";

const CartSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 200;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[998] transition-opacity duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`} 
        onClick={onClose} 
      />
      
      {/* Sidebar Panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[350px] bg-white z-[999] shadow-2xl transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}>
        
        {/* Header */}
        <div className="bg-[#2b77f1] text-white flex items-center p-4">
          <button onClick={onClose} className="hover:bg-white/10 p-1 rounded transition-colors">
            <FaChevronLeft size={18} />
          </button>
          <h2 className="w-full text-center font-bold text-xs uppercase tracking-[0.2em]">My Cart</h2>
        </div>

        {/* Conditional Content */}
        {cartItems.length === 0 ? (
          /* EMPTY CART DESIGN */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-6 text-gray-200">
              <FaShoppingBag size={100} />
            </div>
            <h3 className="text-gray-800 font-bold text-sm uppercase tracking-wider mb-8">
              Shopping Cart is Empty!
            </h3>
            <button 
              onClick={onClose}
              className="bg-[#2b77f1] text-white px-10 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          /* ACTIVE CART DESIGN */
          <>
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 mb-6 pb-4 border-b border-gray-100 relative group">
                  <div className="w-20 h-24 bg-gray-50 flex-shrink-0 border border-gray-100">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                  </div>
                  
                  <div className="flex flex-col justify-between py-1 pr-6">
                    <h4 className="text-[11px] font-bold text-gray-800 uppercase leading-tight">
                      {item.name}
                    </h4>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex border border-gray-200 text-[11px] rounded-sm">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 hover:bg-gray-50">-</button>
                        <span className="px-3 py-1 border-x border-gray-200 font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 hover:bg-gray-50">+</button>
                      </div>
                      <span className="text-[#2b77f1] font-bold text-xs">
                        {item.quantity} × ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="absolute right-0 top-1 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <FaTimes size={14}/>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer / Summary */}
            <div className="p-5 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
              <div className="flex justify-between items-end mb-4">
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Subtotal:</span>
                <span className="text-lg font-bold text-gray-800">${subtotal.toFixed(2)}</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mb-2">
                  <div 
                    className="bg-blue-500 h-full transition-all duration-700 ease-out" 
                    style={{ width: `${progress}%` }} 
                  />
                </div>
                <p className="text-[10px] text-gray-500 italic">
                  {subtotal < freeShippingThreshold 
                    ? `Spend $${(freeShippingThreshold - subtotal).toFixed(2)} more to get free shipping`
                    : "You've earned free shipping!"}
                </p>
              </div>

              {/* <div className="flex flex-col gap-2.5">
                <button className="w-full bg-[#2b77f1] text-white py-3.5 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-blue-700 transition-all">
                  View Cart
                </button>
                <button className="w-full bg-[#ff6f00] text-white py-3.5 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-orange-600 transition-all">
                  Checkout
                </button>
              </div> */}

              <div className="flex flex-col gap-2.5">
  <Link 
    to="/cart" 
    onClick={onClose} // Close sidebar when navigating
    className="w-full bg-[#2b77f1] text-white py-3.5 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-blue-700 transition-all text-center"
  >
    View Cart
  </Link>
  <button className="w-full bg-[#ff6f00] text-white py-3.5 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-orange-600 transition-all">
    Checkout
  </button>
</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar;