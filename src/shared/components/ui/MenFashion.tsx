import suit from "../../../images/sut.jpg"


const products = [
  {
    id: 1,
    name: "Men Hooded Navy Blue Sport Jacket",
    price: "$70.00-$95.00",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    discount: "19% OFF",
    featured: true,
  },
  {
    id: 2,
    name: "Men Navy & Red Checked Casual Shirt",
    price: "$99.00-$124.00",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
    discount: "20% OFF",
    featured: false,
  },
  {
    id: 4,
    name: "Men Blue Skinny Fit Stretchable Jeans",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    discount: null,
    featured: true,
  },
  {
    id: 5,
    name: "Men Khaki Solid Bomber Jacket",
    price: "$124.00",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    discount: null,
    featured: false,
  },
  {
    id: 6,
    name: "Men Navy Blue & Grey Jacket",
    price: "$105.00",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500",
    discount: null,
    featured: false,
  },
  {
    id: 6,
    name: "Men Navy Blue & Grey Jacket",
    price: "$105.00",
    image: suit,
    discount: null,
    featured: false,
  },
];

const categories = [
  "Wallets",
  "T-Shirts",
  "Shirts",
  "Jeans",
  "Jackets & Coats",
];

const MensFashion = () => {
  return (
    <div className="max-w-7xl mx-auto px-4  border border-gray-500 mb-4">
      <div className="flex gap-8">
        
        <div className="w-64 border-r border-r-gray-400 ">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Men' Fashion
          </h2>
          <ul className="space-y-3">
            {categories.map((category, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="flex-1 flex gap-6">
          
          <div className="w-2/5 bg-gray-100 rounded-lg overflow-hidden">
            <div className="p-8 bg-[url('https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500')] h-full">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                MEN'S CLOTHINGS
              </h1>
              <p className="text-xl text-gray-600 font-semibold">
                UP TO 50% OFF
              </p>
            </div>
           
          </div>

        
          <div className="flex-1 grid grid-cols-3 py-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <div className="w-48 h-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className=" w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  )}
                  {product.featured && (
                    <span className="absolute top-10 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="text-gray-800 text-sm font-medium mb-2 line-clamp-2 h-10">
                    {product.name}
                  </h3>
                  <p className="text-gray-900 font-semibold text-base">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="fixed bottom-8 left-8 bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-700 transition-colors">
        <div className="text-center">
          <div className="text-2xl font-bold">$39</div>
          <div className="text-xs">0 items</div>
        </div>
      </div>
    </div>
  );
};

export default MensFashion;
