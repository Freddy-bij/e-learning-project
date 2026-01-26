import type { welcomeProp } from "../../Types/types"
import { motion } from "framer-motion";

interface Props {
    welcome: welcomeProp
}

const WelcomCart = ({ welcome }: Props) => {
  return (
    <div className="grid grid-cols-2 items-center overflow-hidden">
        <div className="ml-6">
             <h1 className="text-lg text-blue-600 uppercase">{welcome.title}</h1> 
             <p className="text-xl font-bold uppercase">{welcome.subtitle}</p>
             <span className="text-sm">{welcome.description}</span>
             <button className="bg-blue-600 px-4 py-1.5 text-white uppercase text-sm mt-4 font-semibold">{welcome.btn}</button>
        </div>

        <div className="overflow-hidden">
            <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
            >
                <img src={welcome.image} alt={welcome.title} className="w-full h-full object-contain" />
            </motion.div>
        </div>
    </div>
  )
}

export default WelcomCart