
import Futures from "../shared/components/Futures"
import Welcome from "../shared/components/Welcome"
import men from "../images/men.jpg"
import girl from "../images/girl.jpg"
import shoes from "../images/femelshoes.jpg"
import bags from "../images/bags.jpg"
import watches from "../images/watches.jpg"
import jewellery from "../images/jewery.jpg"
import accessorie from "../images/accessory.jpg"
import dresses from "../images/dresses.jpg"
import tops from "../images/tops.jpg"
import lingerie from "../images/lengerie.jpg"
import type { futureProp } from "../Types/types"

import ProductFuture from "../shared/components/ProductFuture"
import MensFashion from "../shared/components/MenFashion"

const futuresData:futureProp[] = [
  {
    id:1,
    title:"Men",
    img: men
  },
  {
    id:2,
    title:"women",
    img:girl
  },
  {
    id:3,
    title:"Shoes",
    img:shoes
  },
  {
    id:4,
    title:"Bags & Backpacks",
    img:bags,
  },
  {
    id:5,
    title:"Watches",
    img: watches
  },
  {
    id:6,
    title:"Jewellery",
    img: jewellery
  },
  {
    id:7,
    title:"Accessories",
    img: accessorie
  },
  {
    id:8,
    title:"Dresses",
    img: dresses
  },
  {
    id:9,
    title:"Tops",
    img: tops
  },
  {
    id:10,
    title:"Lingerie",
    img:lingerie
  },
]

const Home = () => {


  return (
      <div className="">
      
        <Welcome/>
        <div className="w-[80%] mx-auto flex items-center gap-7">
          {futuresData.map((future) => (
            <div key={future.id}>
              <Futures future={future}/>
            </div>
          ))}
        </div>

        <ProductFuture/>
        <MensFashion/>
      </div>
  )
}

export default Home