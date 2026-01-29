


import { useState, useContext, useEffect } from "react";
import image from "../../../images/image.png";
import { SlUser } from "react-icons/sl";
import { FaShoppingBag, FaRegHeart } from "react-icons/fa";
import { LogOut, User, ChevronDown, Settings } from "lucide-react"; 
import Search from "./Search";
import { ModelContext } from "../../../Popup";
import CartSidebar from "../ui/CartSidebar";
import { useCart } from "../../../hooks/UseCart";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(localStorage.getItem("userName"));
  const { cartItems } = useCart();
  const context = useContext(ModelContext);

  const refreshUser = () => {
    setUserName(localStorage.getItem("userName"));
  };

  useEffect(() => {
    // Sync state on custom event or storage change
    window.addEventListener('userLogin', refreshUser);
    window.addEventListener('storage', refreshUser);
    return () => {
      window.removeEventListener('userLogin', refreshUser);
      window.removeEventListener('storage', refreshUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    refreshUser();
    window.dispatchEvent(new Event('userLogin'));
  };

  if (!context) throw new Error("Navbar Context Error");
  const { openModel } = context;

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className=" w-[90%] xl:w-[80%] mx-auto py-8 flex justify-between text-white items-center relative">
      <div className="w-26 cursor-pointer"><img src={image} alt="logo" /></div>
      <Search />

      <div className="flex items-center gap-6">
        {/* User Account with Hover Dropdown */}
        <div className="relative group">
          <div 
            className="flex items-center gap-2 cursor-pointer py-2 group-hover:text-blue-400 transition-colors" 
            onClick={() => !userName && openModel()}
          >
            <SlUser className="text-xl" />
            <div className="leading-tight">
              <h1 className="text-[10px] text-gray-400 font-bold uppercase">
                {userName ? 'Welcome' : 'Hello!'}
              </h1>
              <p className="text-xs font-bold uppercase flex items-center gap-1">
                {userName || 'SIGN IN'} 
                {userName && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />}
              </p>
            </div>
          </div>

          {/* DROPDOWN MENU */}
          {userName && (
            <div className="absolute top-full right-0 mt-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[999]">
              <div className="bg-white text-black rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="px-4 py-3 bg-blue-50/50 border-b border-blue-100">
                   <p className="text-[10px] text-blue-500 font-bold uppercase">Personal Account</p>
                   <p className="text-sm font-bold truncate text-gray-800">{userName}</p>
                </div>
                <div className="p-1">
                  <button className="w-full text-left px-3 py-2.5 text-sm hover:bg-gray-50 rounded-lg flex items-center gap-3 transition-colors">
                    <User size={16} className="text-gray-400" /> My Profile
                  </button>
                  <button className="w-full text-left px-3 py-2.5 text-sm hover:bg-gray-50 rounded-lg flex items-center gap-3 transition-colors">
                    <Settings size={16} className="text-gray-400" /> Settings
                  </button>
                  <hr className="my-1 border-gray-100" />
                  <button 
                    onClick={handleLogout} 
                    className="w-full text-left px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-3 transition-colors"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Wishlist */}
        <div className="relative cursor-pointer hidden md:block group">
           <FaRegHeart className="text-2xl group-hover:text-blue-400 transition-colors" />
           <span className="bg-blue-600 w-4 h-4 text-[9px] flex items-center justify-center rounded-full absolute -top-1 -right-2 font-bold shadow-md">0</span>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setIsCartOpen(true)}>
          <div className="relative">
            <FaShoppingBag className="text-2xl group-hover:text-blue-400 transition-colors" />
            <span className="bg-[#2b77f1] w-4 h-4 text-[9px] flex items-center justify-center rounded-full absolute -top-1 -right-2 text-white font-bold">{totalCount}</span>
          </div>
          <div className="hidden lg:block leading-tight">
            <p className="text-[10px] uppercase font-bold text-gray-400">Cart</p>
            <h1 className="text-sm font-bold text-white">${totalPrice.toFixed(2)}</h1>
          </div>
        </div>
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Navbar;