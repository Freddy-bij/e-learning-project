
import { FaTimes } from "react-icons/fa";
import { useCart } from "../../hooks/UseCart";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.0; 
  const total = subtotal + shipping;
  const freeShippingThreshold = 200;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
    
      <div className="flex justify-center items-center gap-4 mb-10 text-xl font-bold uppercase">
        <span className="text-[#2b77f1]">Shopping Cart</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-400">Checkout</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-400">Order Complete</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    
        <div className="lg:col-span-2 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-[11px] font-bold text-gray-400 uppercase">
                <th className="py-4 text-left">Product</th>
                <th className="py-4">Price</th>
                <th className="py-4">Quantity</th>
                <th className="py-4 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b group">
                  <td className="py-6 flex items-center gap-4">
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500">
                      <FaTimes size={12} />
                    </button>
                    <img src={item.image} className="w-16 h-20 object-cover border" alt="" />
                    <span className="text-[12px] font-bold text-[#2b77f1] uppercase">{item.name}</span>
                  </td>
                  <td className="py-6 text-center text-sm font-bold text-gray-500">${item.price.toFixed(2)}</td>
                  <td className="py-6 text-center">
                    <div className="inline-flex border text-xs">
                      <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1">-</button>
                      <span className="px-4 py-1 border-x">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1">+</button>
                    </div>
                  </td>
                  <td className="py-6 text-right text-sm font-bold text-[#2b77f1]">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

         
          <div className="flex gap-4 mt-6">
            <input type="text" placeholder="Coupon code" className="border px-4 py-2 text-sm w-48 focus:outline-none" />
            <button className="bg-[#2b77f1] text-white px-6 py-2 text-xs font-bold uppercase tracking-widest">Apply Coupon</button>
          </div>
        </div>

     
        <div className="bg-gray-50 p-6 border border-gray-100">
          <h3 className="font-bold text-sm uppercase mb-6 border-b pb-2">Cart Totals</h3>
          
          <div className="flex justify-between mb-4 text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-bold text-[#2b77f1]">${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-6 text-sm border-b pb-4">
            <span className="text-gray-500">Shipping</span>
            <div className="text-right">
              <p className="font-bold text-gray-700 uppercase text-[11px]">Flat rate: <span className="text-blue-600">${shipping.toFixed(2)}</span></p>
              <p className="text-[10px] text-gray-400">Shipping to CA.</p>
              <button className="text-[10px] text-[#2b77f1] font-bold uppercase underline mt-1">Change address</button>
            </div>
          </div>

          <div className="flex justify-between mb-6 text-lg font-bold">
            <span>Total</span>
            <span className="text-[#2b77f1]">${total.toFixed(2)}</span>
          </div>

          
          <div className="mb-6">
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-[11px] text-gray-500 mt-2 text-center">
              Spend <span className="font-bold text-gray-800">${(freeShippingThreshold - subtotal).toFixed(2)}</span> more to get free shipping
            </p>
          </div>

          <button className="w-full bg-[#ff6f00] text-white py-4 font-bold uppercase text-[11px] tracking-widest hover:bg-orange-600 shadow-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;