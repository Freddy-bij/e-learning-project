// import { useParams } from "react-router-dom";

// import { Heart, ArrowRightLeft, Share2 } from "lucide-react";
// import { allProducts } from "../Types/Product";
// import { useEffect, useState } from "react";


// const calculateTimeLeft = (targetDate: Date) => {
//   const difference = +targetDate - +new Date();
//   let timeLeft = { Days: 0, Hrs: 0, Mins: 0, Secs: 0 };

//   if (difference > 0) {
//     timeLeft = {
//       Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       Hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       Mins: Math.floor((difference / 1000 / 60) % 60),
//       Secs: Math.floor((difference / 1000) % 60),
//     };
//   }
//   return timeLeft;
// };
// const ProductDetailsPage = () => {
// const { productId } = useParams();

//   const [targetDate] = useState(new Date("2026-12-31T23:59:59"));
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft(targetDate));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [targetDate]);

//   const formatNumber = (num: number) => String(num).padStart(2, "0");

//   const product = allProducts.find((p) => p.id === Number(productId));

//   if (!product) {
//     return (
//       <div className="py-20 text-center font-bold text-gray-500">
//         Product not found
//       </div>
//     );
//   }


//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">

    

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
     
//         <div className="flex gap-4">
//           <div className="flex flex-col gap-2 w-20">
//             {[1, 2, 3, 4].map((i) => (
//               <img
//                 key={i}
//                 src={product.image}
//                 className="border border-gray-200 cursor-pointer"
//               />
//             ))}
//           </div>
//           <div className="flex-1 relative">
//             <span className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] px-2 py-1 font-bold uppercase">
//               Featured
//             </span>
//             <img src={product.image} className="w-full" alt={product.name} />
//           </div>
//         </div>

//         <div className="flex flex-col gap-4">
//         <div className="text-xs text-gray-400  flex gap-2">
//         <span>Home</span> / <span>Shop</span> /{" "}
//         <span className="text-gray-800">{product.name}</span>
//       </div>
//           <div className="flex justify-between items-start">
//             <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
//             <div className="flex gap-3 text-gray-400">
//               <Share2
//                 size={18}
//                 className="cursor-pointer hover:text-blue-600"
//               />
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             <div className="bg-green-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">
//               {product.rating} ★
//             </div>
//             <span className="text-gray-400 text-xs">In Stock</span>
//           </div>

//           <div className="text-2xl font-bold text-gray-900">
//             $70.00 – $95.00{" "}
//             <span className="text-green-600 text-sm font-normal ml-2">
//               19% Off
//             </span>
//           </div>

       
// <div className="flex gap-4">
//   {Object.entries(timeLeft).map(([label, value]) => (
//     <div
//       key={label}
//       className="flex flex-col justify-center items-center bg-white border border-gray-200 w-14 h-14 rounded-sm shadow-sm"
//     >
//       <div className="text-center">
//         <div className="text-lg font-bold text-blue-600 leading-none">
//           {formatNumber(value)}
//         </div>
//         <div className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">
//           {label}
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

          
//           <div className="flex flex-col gap-6 mt-4">
//             <div>
//               <span className="text-sm font-bold block mb-2">Color</span>
//               <div className="flex gap-2">
//                 {product.colors.map((c) => (
//                   <div
//                     key={c}
//                     className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer"
//                     style={{ backgroundColor: c }}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div>
//               <span className="text-sm font-bold block mb-2">Size</span>
//               <div className="flex gap-2">
//                 {product.sizes.map((s) => (
//                   <div
//                     key={s}
//                     className="border px-3 py-1 text-xs cursor-pointer hover:border-blue-600"
//                   >
//                     {s}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <button className="flex-1 bg-orange-500 text-white font-bold py-3 uppercase text-xs tracking-widest hover:bg-orange-600">
//                 Add to Cart
//               </button>
//               <button className="flex-1 bg-orange-600 text-white font-bold py-3 uppercase text-xs tracking-widest">
//                 Buy Now
//               </button>
//             </div>
//           </div>

         
//           <div className="flex gap-6 mt-6 pt-6 border-t border-gray-100 text-[11px] font-bold text-gray-500 uppercase">
//             <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
//               <Heart size={14} /> Add to Wishlist
//             </div>
//             <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
//               <ArrowRightLeft size={14} /> Compare
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;




import { useParams } from "react-router-dom";
import { Heart, ArrowRightLeft, Share2 } from "lucide-react";
import { allProducts } from "../Types/Product";
import { useEffect, useState } from "react";
import { useCart } from "../hooks/UseCart";
import CartSidebar from "../shared/components/ui/CartSidebar";
 // 2. Import Sidebar to show it on add

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = { Days: 0, Hrs: 0, Mins: 0, Secs: 0 };

  if (difference > 0) {
    timeLeft = {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Mins: Math.floor((difference / 1000 / 60) % 60),
      Secs: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart(); // 3. Use the hook

  // States for timer and Sidebar
  const [targetDate] = useState(new Date("2026-12-31T23:59:59"));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [isCartOpen, setIsCartOpen] = useState(false); // 4. Local state for sidebar popup

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");
  const product = allProducts.find((p) => p.id === Number(productId));

  // 5. Action Handler
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, 1); // Adds 1 item
      setIsCartOpen(true);   // Automatically opens the sidebar
    }
  };

  if (!product) {
    return (
      <div className="py-20 text-center font-bold text-gray-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Images Section */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-20">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={product.image} className="border border-gray-200 cursor-pointer" />
            ))}
          </div>
          <div className="flex-1 relative">
            <span className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] px-2 py-1 font-bold uppercase z-10">
              Featured
            </span>
            <img src={product.image} className="w-full" alt={product.name} />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-4">
          <div className="text-xs text-gray-400 flex gap-2">
            <span>Home</span> / <span>Shop</span> / <span className="text-gray-800">{product.name}</span>
          </div>
          
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <Share2 size={18} className="text-gray-400 cursor-pointer hover:text-blue-600" />
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-green-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">
              {product.rating} ★
            </div>
            <span className="text-gray-400 text-xs uppercase font-bold tracking-tighter">In Stock</span>
          </div>

          <div className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)} 
            <span className="text-green-600 text-sm font-normal ml-2">19% Off</span>
          </div>

          {/* Timer */}
          <div className="flex gap-4">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col justify-center items-center bg-white border border-gray-200 w-14 h-14 rounded-sm shadow-sm">
                <div className="text-lg font-bold text-blue-600 leading-none">{formatNumber(value)}</div>
                <div className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">{label}</div>
              </div>
            ))}
          </div>

          {/* Variants */}
          <div className="flex flex-col gap-6 mt-4">
            <div>
              <span className="text-sm font-bold block mb-2 uppercase text-[11px] tracking-widest">Color</span>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <div key={c} className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={handleAddToCart} // 6. Linked Handler
                className="flex-1 bg-orange-500 text-white font-bold py-3 uppercase text-[11px] tracking-widest hover:bg-orange-600 transition-colors shadow-md"
              >
                Add to Cart
              </button>
              <button className="flex-1 bg-[#2b77f1] text-white font-bold py-3 uppercase text-[11px] tracking-widest hover:bg-blue-700 transition-colors shadow-md">
                Buy Now
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 pt-6 border-t border-gray-100 text-[11px] font-bold text-gray-500 uppercase">
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <Heart size={14} /> Add to Wishlist
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <ArrowRightLeft size={14} /> Compare
            </div>
          </div>
        </div>
      </div>

      {/* 7. Sidebar Component rendered here for the auto-popup */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default ProductDetailsPage;