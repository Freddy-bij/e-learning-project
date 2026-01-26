import image from "../../../images/image.png";
import { SlUser } from "react-icons/sl";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import Search from "./Search";
import { useContext } from "react";
import { ModelContext } from "../../../Popup";

const Navbar = () => {
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

      <Search/>

      <div>
        <div className="flex items-center gap-5">
          <div 
            className="flex items-center gap-1.5 cursor-pointer" 
            onClick={openModel}
          >
            <div>
              <SlUser className="text-xl" />
            </div>
            
            <div className="">
              <h1 className="text-xs">HELLO!</h1>
              <p className="text-sm font-bold">SIGN IN</p>
            </div> 
          </div>

          <div>
            <div>
              <FaRegHeart className="text-2xl relative" />
            </div>
            <div className="bg-blue-700 w-3 h-3 text-xs flex items-center justify-center rounded-full absolute top-18 left-[1289px]">
              <span>0</span>
            </div>
          </div>
           
          <div className="flex items-center">
            <div className="flex items-center">
              <FaShoppingBag className="text-2xl relative" />
              <div>
                <p>cart</p>
                <h1>$0.00</h1>
              </div>
            </div>
            <div className="bg-blue-700 w-3 h-3 text-xs flex items-center justify-center rounded-full absolute left-332 top-[72px]">
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;