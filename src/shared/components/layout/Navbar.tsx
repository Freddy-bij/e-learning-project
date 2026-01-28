// import { useState, useContext } from "react"; // 1. Added useState
// import image from "../../../images/image.png";
// import { SlUser } from "react-icons/sl";
// import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
// import Search from "./Search";
// import { ModelContext } from "../../../Popup";
// import CartSidebar from "../ui/CartSidebar"; // 2. Import your new file

// const Navbar = () => {
//   // 3. Define the state here
//   const [isCartOpen, setIsCartOpen] = useState(false);
  
//   const context = useContext(ModelContext);

//   if (!context) {
//     throw new Error("Navbar must be used within ModelContext Provider");
//   }

//   const { openModel } = context;

//   return (
//     <div className="w-[80%] mx-auto py-8 flex justify-between text-white items-center">
//       <div className="w-26">
//         <img src={image} alt="logo" />
//       </div>

//       <Search />

//       <div>
//         <div className="flex items-center gap-5">
//           <div
//             className="flex items-center gap-1.5 cursor-pointer"
//             onClick={openModel}
//           >
//             <SlUser className="text-xl" />
//             <div className="">
//               <h1 className="text-xs">HELLO!</h1>
//               <p className="text-sm font-bold">SIGN IN</p>
//             </div>
//           </div>

//           {/* Heart Icon Container (Simplified for stability) */}
//           <div className="relative">
//              <FaRegHeart className="text-2xl" />
//              <span className="bg-blue-700 w-4 h-4 text-[10px] flex items-center justify-center rounded-full absolute -top-1 -right-2">
//                0
//              </span>
//           </div>

//           {/* Cart Icon Container */}
//           <div
//             className="flex items-center gap-3 cursor-pointer group hover:opacity-80 transition-opacity"
//             onClick={() => setIsCartOpen(true)} // This will now work!
//           >
//             <div className="relative">
//               <FaShoppingBag className="text-2xl" />
//               <span className="bg-[#2b77f1] w-4 h-4 text-[10px] flex items-center justify-center rounded-full absolute -top-1 -right-2 text-white font-bold">
//                 0
//               </span>
//             </div>
//             <div className="hidden lg:block leading-tight">
//               <p className="text-[10px] uppercase font-bold text-gray-400">Cart</p>
//               <h1 className="text-sm font-bold text-white">$0.00</h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 4. Place the Sidebar component here */}
//       <CartSidebar 
//         isOpen={isCartOpen} 
//         onClose={() => setIsCartOpen(false)} 
//       />
//     </div>
//   );
// };

// export default Navbar;


import { useState, useContext } from "react";
import image from "../../../images/image.png";
import { SlUser } from "react-icons/sl";
import { FaShoppingBag, FaRegHeart } from "react-icons/fa";
import Search from "./Search";
import { ModelContext } from "../../../Popup";
import CartSidebar from "../ui/CartSidebar";
import { useCart } from "../../../hooks/UseCart";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();
  
  const context = useContext(ModelContext);

  // Calculate real-time totals
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!context) throw new Error("Navbar must be used within ModelContext Provider");
  const { openModel } = context;

  return (
    <div className="w-[80%] mx-auto py-8 flex justify-between text-white items-center">
      {/* Logo */}
      <div className="w-26">
        <img src={image} alt="logo" className="cursor-pointer" />
      </div>

      <Search />

      <div className="flex items-center gap-6">
        {/* User Login */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={openModel}>
          <SlUser className="text-xl group-hover:text-blue-400 transition-colors" />
          <div className="leading-tight">
            <h1 className="text-[10px] text-gray-400 font-bold uppercase">Hello!</h1>
            <p className="text-xs font-bold group-hover:text-blue-400 transition-colors">SIGN IN</p>
          </div>
        </div>

        {/* Wishlist (Optional placeholder) */}
        <div className="relative cursor-pointer hidden md:block">
           <FaRegHeart className="text-2xl" />
           <span className="bg-blue-600 w-4 h-4 text-[9px] flex items-center justify-center rounded-full absolute -top-1 -right-2 font-bold">0</span>
        </div>

        {/* Cart Icon Container */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setIsCartOpen(true)}
        >
          <div className="relative">
            <FaShoppingBag className="text-2xl group-hover:text-blue-400 transition-colors" />
            <span className="bg-[#2b77f1] w-4 h-4 text-[9px] flex items-center justify-center rounded-full absolute -top-1 -right-2 text-white font-bold shadow-sm">
              {totalCount}
            </span>
          </div>
          <div className="hidden lg:block leading-tight">
            <p className="text-[10px] uppercase font-bold text-gray-400">Cart</p>
            <h1 className="text-sm font-bold text-white">${totalPrice.toFixed(2)}</h1>
          </div>
        </div>
      </div>

      {/* Sidebar Component */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Navbar;