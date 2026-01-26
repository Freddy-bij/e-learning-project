import { FaRegFolderOpen } from "react-icons/fa";
import { MdOutlineContentCopy, MdOutlineEmail } from "react-icons/md";

const Descript = () => {
  return (
    <div >
      <div className="flex items-center">
        <div className="border-l  border-r border-r-gray-400 border-l-gray-400 px-4 py-2 ">
            <h1>WELCOME OUR STORE</h1>
        </div>
        <div className="border-l  border-r border-r-gray-400 border-l-gray-400 px-4 py-2 flex gap-1.5 items-center ">
            <FaRegFolderOpen/>
            <h1>BLOG</h1>
        </div>
        <div className="border-l  border-r border-r-gray-400 border-l-gray-400 px-4 py-2 flex gap-1.5 items-center ">
          <MdOutlineContentCopy />
            <h1>FAQ</h1>
        </div>
        <div className="border-l  border-r border-r-gray-400 border-l-gray-400 px-4 py-2 flex items-center gap-1.5 ">
          <MdOutlineEmail />
            <h1>CONTACT US </h1>
        </div>
      </div>
    </div>
  )
}

export default Descript
