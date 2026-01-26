import { IoStar } from "react-icons/io5"
import ProductCart from "./ProductCart"
import men from "../../images/men.jpg"
import short from "../../images/short.jpg"
import leather from "../../images/leather.jpg"
import casual from "../../images/casual.jpg"
import luggage from "../../images/luggage.jpg"
import type { ProductProp } from "../../Types/types"


const ProductData: ProductProp[] = [
  {
    id: 1,
    img: men,
    title: "T-SHIRTS",
    description: "Men Hooded Navy Blue & Grey...",
    numb1: "5",
    icon: <IoStar/>,
    num2: "(2)",
    price: "$70.00-$95.00",
    discount: "19% Off"
  },
  {
    id: 2,
    img: leather,
    title: "LEATHER",
    description: "Navy Blue-Silver-White Multifu...",
    numb1: "4",
    icon: <IoStar/>,
    num2: "(1)",
    price: "$49.00",
    discount: "42% Off"
  },
  {
    id: 3,
    img: short,
    title: "SHORTS & SKIRTS",
    description: "Women Off White Printed Blous...",
    numb1: "2.7",
    icon: <IoStar/>,
    num2: "(3)",
    price: "$47.00",
  },
  {
    id: 4,
    img:luggage,
    title: "LUGGAGE & TRAVEL",
    description: "Unisex Blue Graphic Backpack",
    numb1: "3",
    icon: <IoStar/>,
    num2: "(1)",
    price: "$15.00"
  },
  {
    id: 5,
    img: casual,
    title: "CASUAL SHOES",
    description: "Men Blue Colour blocked Mid-To...",
    numb1: "5",
    icon: <IoStar/>,
    num2: "(3)",
    price: "$45.00"
  },
]

const ProductFuture = () => {
  return (
    <div className="w-[80%] mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">FEATURED PRODUCTS</h2>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          VIEW ALL
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {ProductData.map((product) => (
          <ProductCart key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default ProductFuture