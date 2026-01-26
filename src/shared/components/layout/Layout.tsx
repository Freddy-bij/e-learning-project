import { Outlet } from "react-router"
import Footer from "./Footer"
import HeaderCont from "./HeaderCont"



const Layout = () => {
  return (
    <div>
    
        <HeaderCont/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout