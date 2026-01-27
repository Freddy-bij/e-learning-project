import img from "../../images/bgrem.png"
import shoes from "../../images/shoes.png"
import womenbag from "../../images/womenbag.png"
import type { welcomeProp } from "../../../Types/types";
import WelcomCart from "./WelcomCart";

const WelcomeCartData: welcomeProp[] = [
    {
        id: 1,
        title: "White Sneakers",
        subtitle: "Min. 30% Off",
        description: "Men Fashionable Shoes",
        btn: "shop now",
        image: shoes
    },
    {
        id: 2,
        title: "White Sneakers",
        subtitle: "Up to 65% Off",
        description: "Shoes & Backpacks",
        btn: "shop now",
        image: womenbag
    }
]

const Welcome = () => {
  return (
    <div className="w-[80%] my-5 mx-auto">
      <div className="flex gap-6">
        <div className="w-[70%] bg-gray-100 flex items-center justify-between">
            <div className="w-full">
                <div>
                    <h1 className="text-center text-xl font-semibold">NEW ARRIVALS</h1> 
                    <p className="text-7xl pl-4 font-[sofia] font-semibold">SUMMER SALE</p>
                    <p className="text-center text-2xl font-bold">MIN 40% OFF</p>
                </div>
                <div className="my-7 text-center">
                    <button className="border-2 px-4 text-blue-600 font-bold py-1 border-blue-600">SHOP NOW</button>
                </div>
            </div>
            <div className="h-90 w-90">
                <img src={img} alt="women" className="w-full h-full" />
            </div>
        </div>
        
        <div className="w-[30%] flex flex-col gap-6">
          {WelcomeCartData.map((welcome) => (
            <div key={welcome.id} className="bg-gray-100 h-full">
              <WelcomCart welcome={welcome} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;