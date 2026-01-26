import Department from "./Department"

import Header from "./header"
import Navbar from "./Navbar"


const HeaderCont = () => {
  return (
    <div>
       <div className="bg-blue-600  ">
      <Header/>
      <Navbar/>
    </div>
    <Department/>
    </div>
   
  )
}

export default HeaderCont
