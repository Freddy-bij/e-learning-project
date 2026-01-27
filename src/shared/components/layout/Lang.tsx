import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const Lang = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isDolllarHover , setIsDollarHover] = useState<boolean>(false)

  return (
    <div>
      <div className="flex items-center  ">
        <div
          className="  border-l border-r border-r-gray-400 border-l-gray-400 px-4 py-2 flex items-center gap-1.5 relative"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <h1>ENGLISH</h1>
          <IoIosArrowDown />

          {isHover && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white text-black w-26 absolute top-full mt-1 left-0 shadow-gray-400 shadow"
            >
              <ul className="flex flex-col ">
                <li className="border-b border-b-gray-400  px-2.5 py-3 hover:text-blue-600 ">
                  French
                </li>
                <li className="border-b px-2.5 py-3 border-b-gray-400 hover:text-blue-600 ">
                  Deuch
                </li>
                <li className=" px-2.5 py-3 hover:text-blue-500 ">عربي</li>
              </ul>
            </motion.div>
          )}
        </div>
        <div
          onMouseEnter={() => setIsDollarHover(true)}
          onMouseLeave={() => setIsDollarHover(false)}
          className="border-l  border-r border-r-gray-400 border-l-gray-400 px-4 py-2 flex items-center gap-1.5 relative "
        >
          <h1>$DOLLAR(US)</h1>
          <IoIosArrowDown />

           {isDolllarHover && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white text-black w-26 absolute top-full mt-1 left-0 shadow-gray-400 shadow"
            >
              <ul className="flex flex-col ">
                <li className="border-b border-b-gray-400  px-2.5 py-3 hover:text-blue-600 ">
                  PUPEE(INR)
                </li>
                <li className="border-b px-2.5 py-3 border-b-gray-400 hover:text-blue-600 ">
                  £Pound(UK)
                </li>
                <li className=" px-2.5 py-3 hover:text-blue-500 ">€Euro(EUR)</li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lang;
