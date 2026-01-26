import { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { allProducts } from '../../Types/Product';
import { ShopSidebar } from '../../shared/components/ShopSidebar';
import { ProductCard } from '../../shared/Productgrid';
import FlotingCart from '../../shared/components/ui/FlotingCart';

const ShopPage = () => {
  const { categoryName } = useParams(); 
  const navigate = useNavigate();

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

 
  const currentCategory = categoryName ? categoryName.toLowerCase() : 'all';
  const isShopRoot = currentCategory === 'all';
  
 
  const displayTitle = isShopRoot 
    ? 'Shop' 
    : categoryName!.replace(/-/g, ' ');


  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
     
      const catMatch = isShopRoot || product.category.toLowerCase() === currentCategory;
      

      const sizeMatch = selectedSizes.length === 0 || 
                        product.sizes.some(s => selectedSizes.includes(s));
      
   
      const colorMatch = selectedColors.length === 0 || 
                         product.colors.some(c => selectedColors.includes(c));
      
    
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

      return catMatch && sizeMatch && colorMatch && priceMatch;
    });
  }, [currentCategory, isShopRoot, selectedSizes, selectedColors, priceRange]);

  
  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    allProducts.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, []);


  const toggleFilter = (list: string[], value: string, setter: (val: string[]) => void) => {
    if (list.includes(value)) {
      setter(list.filter(item => item !== value));
    } else {
      setter([...list, value]);
    }
  };

  return (
    <div className="w-full">
     
      <div className="bg-[#f9f9f9] py-14 mb-10 text-center border-b border-gray-100">
        <h1 className="text-4xl font-semibold text-[#222] capitalize mb-2 tracking-tight">
          {displayTitle}
        </h1>
        <div className="flex justify-center items-center gap-2 text-[11px] text-gray-400 uppercase tracking-[2px] font-bold">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          
         
          <Link 
            to="/shop" 
            className={`${isShopRoot ? 'text-black font-extrabold' : 'hover:text-blue-600 transition-colors'}`}
            onClick={() => {
              setSelectedSizes([]);
              setSelectedColors([]);
            }}
          >
            Shop
          </Link>

          {!isShopRoot && (
            <>
              <span className="text-gray-300">/</span>
              <span className="text-black capitalize font-extrabold">{displayTitle}</span>
            </>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex gap-10">
         
          <ShopSidebar
            categories={categories}
            selectedCategory={currentCategory}
            onCategoryChange={(cat) => navigate(`/shop/${cat.toLowerCase()}`)}
            selectedSizes={selectedSizes}
            onSizeToggle={(s) => toggleFilter(selectedSizes, s, setSelectedSizes)}
            selectedColors={selectedColors}
            onColorToggle={(c) => toggleFilter(selectedColors, c, setSelectedColors)}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />

          <div className="flex-1">
          
            <div className="mb-8 flex justify-between items-center border-b pb-4">
              <p className="text-sm text-gray-500 italic font-medium">
                Showing {isShopRoot ? 'all' : displayTitle} ({filteredProducts.length} products)
              </p>
              
              <div className="flex items-center gap-4 text-[13px] text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-bold">Show:</span>
                  <select className="border-none bg-transparent p-0 focus:ring-0 cursor-pointer">
                    <option>12</option>
                    <option>24</option>
                  </select>
                </div>
              </div>
            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

           
            {filteredProducts.length === 0 && (
              <div className="py-32 text-center">
                <h3 className="text-xl font-medium text-gray-400">No products found.</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters or search criteria.</p>
                <button 
                  onClick={() => {navigate('/shop'); setSelectedSizes([]); setSelectedColors([]);}}
                  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-bold uppercase tracking-wider"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <FlotingCart/>
    </div>
  );
};

export default ShopPage;