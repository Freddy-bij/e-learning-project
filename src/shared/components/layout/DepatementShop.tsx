import { IoIosArrowDown } from "react-icons/io"
import LinksDep from "../LinksDep"
import ShopDep from "../ShopDep"
import type { LinkProp } from "../../../Types/types"

const links:LinkProp[] = [
    {
        id:1,
        title:"HOME",
         path:"/",
        icon: <IoIosArrowDown />
    },
      {
        id:2,
        title:"SHOP",
        path:"/Shop",
        icon: <IoIosArrowDown />
    },
      {
        id:3,
        title:"PAGES",
         path:"/Pages",
        icon: <IoIosArrowDown />
    },
      {
        id:4,
        title:"BLOG",
         path:"/Blog",
        icon: <IoIosArrowDown />
    },
      {
        id:5,
        title:"ELEMENTS",
         path:"/Elements",
        icon: <IoIosArrowDown />
    },
      {
        id:6,
        title:"BUY NOW",
         path:"/By",
        icon: <IoIosArrowDown />
    },
]

const DepatementShop = () => {
  return (
    <div className=" flex   w-[80%] mx-auto ">
      <ShopDep/>
       <div className="flex gap-6 text-xs font-semibold px-6">
          {links.map((link) => (
        <div key={link.id} >
          <LinksDep link={link} />
        </div>
      ))}
       </div>
    
     
    </div>
  )
}

export default DepatementShop
