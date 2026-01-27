import { IoMail, IoTimeOutline } from "react-icons/io5";
import logo from "../../../images/image.png";
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SocialBar } from "../ui/SocialBar";

const FooterInfo = () => {
  return (
    <div className="w-[80%] mx-auto py-10">
      <div className=" flex gap-10">
        <div>
          <div className="w-26 pb-3">
            {" "}
            <img src={logo} alt="" />
          </div>
          <p className="pb-2">Lorem ipsum dolor, sit amet consectetur </p>
          <ul>
            <li className="pb-2 flex items-center gap-1"><TiHomeOutline />Lorem ipsum, 2046 dolor sit</li>
            <li className="pb-2 flex items-center gap-1"><FaPhoneAlt />576 245 2478</li>
            <li className="pb-2 flex items-center gap-1"><MdOutlineMailOutline />info@kapee.com</li>
            <li className="pb-2 flex items-center gap-1"> <IoTimeOutline />Mon-Fri/9:00AM-6-00PM</li>
          </ul>
        </div>

        <div>
          <h1 className="pb-3">INFORMATION</h1>
          <ul>
            <li className="pb-2">About</li>
            <li className="pb-2">Store location</li>
            <li className="pb-2"> Contact Us</li>
            <li className="pb-2">Shipping&Delivery</li>
            <li className="pb-2">Latest News</li>
            <li className="pb-2">Our Sitemap</li>
          </ul>
        </div>

        <div>
          <h1 className="pb-3">OUR SERVICES</h1>
          <ul>
            <li className="pb-2">Privacy Policy</li>
            <li className="pb-2">Terms of Sale</li>
            <li className="pb-2"> Customer Service</li>
            <li className="pb-2">Delivery Information</li>
            <li className="pb-2">Payments</li>
            <li className="pb-2">Saved Cards</li>
          </ul>
        </div>

        <div>
          <h1 className="pb-3">MY ACCOUNT</h1>
          <ul>
            <li className="pb-2">My Account</li>
            <li className="pb-2">My Shop</li>
            <li className="pb-2">My Card</li>
            <li className="pb-2"> Checkout</li>
            <li className="pb-2">My Wishlist</li>
            <li className="pb-2">Traking Order</li>
          </ul>
        </div>

        <div>
          <h1 className="pb-3">MY ACCOUNT</h1>
          <p className="pb-2">
            Subsicribe to our mailing to get the new updates
          </p>
          <div className="flex ">
             <IoMail className="relative text-lg  left-[35px] top-3 text-gray-400  " />
            <div>
              <input
              
                type="text"
                placeholder="Your email adress"
                className="bg-white placeholder-gray-400 h-10 text-md pl-10 items-center text-black outline-none  "
              />
             
            </div>

            <button className="bg-blue-600 px-3 h-10 flex items-center  ">SING UP</button>
          </div>
          <SocialBar/>

        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
