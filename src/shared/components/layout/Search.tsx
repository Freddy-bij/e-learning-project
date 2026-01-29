
import { IoSearch } from 'react-icons/io5'

const Search = () => {
  return (
    <div>
           <div className=" text-black text-sm flex h-10 items-center px-5 bg-white rounded-4xl ">
            <div>
                 <input
              className=" w-70 xl:w-90 placeholder-black   outline-none "
                type="text"
                placeholder="search for products , category,branch..."
              />
            </div>
             
                 <select className=" outline-none border-l h-10 border-l-gray-400">
                <option>All categories</option>
                <option>Electronics</option>
                <option>Jeans</option>
                <option>Beauty accesory</option>
                <option>Dresses</option>
                <option>laptops</option>
                <option>Earrings</option>
                <option>casual shoes</option>
                <option>Leathers</option>
              </select>
             
             
              <div className=" flex items-center pl-2 outline-none border-l h-10 border-l-gray-400">
                <IoSearch className="text-xl text-blue-600" />
              </div>
            </div>
    </div>
  )
}

export default Search
