import { useState, useContext } from "react"; // 1. Added useState
import image from "../../../images/image.png";
import { SlUser } from "react-icons/sl";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import Search from "./Search";
import { ModelContext } from "../../../Popup";
import CartSidebar from "./CartSidebar"; // 2. Import your new file

const Navbar = () => {
  // 3. Define the state here
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const context = useContext(ModelContext);

  if (!context) {
    throw new Error("Navbar must be used within ModelContext Provider");
  }

  const { openModel } = context;

  return (
    <div className="w-[80%] mx-auto py-8 flex justify-between text-white items-center">
      <div className="w-26">
        <img src={image} alt="logo" />
      </div>

      <Search />

      <div>
        <div className="flex items-center gap-5">
          <div
            className="flex items-center gap-1.5 cursor-pointer"
            onClick={openModel}
          >
            <SlUser className="text-xl" />
            <div className="">
              <h1 className="text-xs">HELLO!</h1>
              <p className="text-sm font-bold">SIGN IN</p>
            </div>
          </div>

          {/* Heart Icon Container (Simplified for stability) */}
          <div className="relative">
             <FaRegHeart className="text-2xl" />
             <span className="bg-blue-700 w-4 h-4 text-[10px] flex items-center justify-center rounded-full absolute -top-1 -right-2">
               0
             </span>
          </div>

          {/* Cart Icon Container */}
          <div
            className="flex items-center gap-3 cursor-pointer group hover:opacity-80 transition-opacity"
            onClick={() => setIsCartOpen(true)} // This will now work!
          >
            <div className="relative">
              <FaShoppingBag className="text-2xl" />
              <span className="bg-[#2b77f1] w-4 h-4 text-[10px] flex items-center justify-center rounded-full absolute -top-1 -right-2 text-white font-bold">
                0
              </span>
            </div>
            <div className="hidden lg:block leading-tight">
              <p className="text-[10px] uppercase font-bold text-gray-400">Cart</p>
              <h1 className="text-sm font-bold text-white">$0.00</h1>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Place the Sidebar component here */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  );
};

export default Navbar;