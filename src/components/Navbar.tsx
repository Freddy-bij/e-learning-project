import { IoSearch } from "react-icons/io5";
import image from "./images/image.png";
import { SlUser } from "react-icons/sl";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-[80%] mx-auto py-8 flex justify-between items-center">
      <div className="w-30">
        <img src={image} alt="logo" />
      </div>

      <div>
        <input
          type="text"
          placeholder="search for products , category,branch..."
        />
        <select>
          <option>All categories</option>
          <option>Electronics</option>
          <option>Jeans</option>
          <option>Beauty accesory</option>
          <option>Dresses</option>
          <option>laptops</option>
          <option>Earrings</option>
          <option>casual shoes</option>
          <option>Leathers</option>
        </select>
        <button>
          <IoSearch />
        </button>
      </div>

      <div >
        <div className="flex items-center gap-5">
          <div></div>
          <SlUser />
          <div>
            <h1>HELLO!</h1>
            <p>SIGN IN</p>
          </div>
          <div className="flex items-center">
            <FaRegHeart />
            <div className="flex items-center">
              <FaShoppingBag />
              <div>
                <p>cart</p>
                <h1>$00.00</h1>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
