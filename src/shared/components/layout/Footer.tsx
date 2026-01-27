import All from "./All@"
import FooterInfo from "./FooterInfo"

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
        <FooterInfo/>
        <div className="border-t border-t-gray-400">
         <All/> 
        </div>
        
    </div>
  )
}

export default Footer