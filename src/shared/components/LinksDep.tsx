import { Link } from "react-router"
import type { LinkProp } from "../../Types/types"

interface Props {
    link:LinkProp
}
const LinksDep = ({link}:Props) => {
  return (
    <div className="">
      <div className=" h-10  hover:text-blue-600 flex items-center">
       <Link to={link.path}><h1>{link.title}</h1></Link> 
        <div className=""> 
            <span>{link.icon}</span>
        </div>
      </div>
    </div>
  )
}

export default LinksDep
