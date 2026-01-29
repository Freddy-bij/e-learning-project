


import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShopSidebar } from '../../shared/components/ui/ShopSidebar';
import FlotingCart from '../../shared/components/ui/FlotingCart';
import ProductCart from '../../shared/components/ui/ProductCart';
import { getAllProducts, type Product } from '../../services/ProductService';
import { getAllCategories, type Category } from '../../services/categoryService';

const ShopPage = () => {
  const { categoryName } = useParams(); 
  const navigate = useNavigate();

  // State for filters
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  // State for data from backend
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products and categories on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [productsData, categoriesData] = await Promise.all([
          getAllProducts(),
          getAllCategories()
        ]);
        
        console.log('📦 Fetched products:', productsData);
        console.log('📂 Fetched categories:', categoriesData);
        
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get current category
  const currentCategory = categoryName ? categoryName.toLowerCase().replace(/-/g, ' ') : 'all';
  const isShopRoot = currentCategory === 'all';
  
  // Display title
  const displayTitle = isShopRoot 
    ? 'Shop' 
    : categoryName!.replace(/-/g, ' ');

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category match
      let catMatch = isShopRoot;
      if (!isShopRoot) {
        const productCategoryName = typeof product.categoryId === 'object' 
          ? product.categoryId.name.toLowerCase()
          : '';
        catMatch = productCategoryName === currentCategory;
      }

      // Price match
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

      return catMatch && priceMatch;
    });
  }, [products, currentCategory, isShopRoot, priceRange]);

  // Build category list - FIXED to show ALL categories
  const categoryList = useMemo(() => {
    // Count products per category
    const counts: Record<string, number> = {};
    
    products.forEach(p => {
      if (typeof p.categoryId === 'object') {
        const catName = p.categoryId.name;
        counts[catName] = (counts[catName] || 0) + 1;
      }
    });
    
    console.log('📊 Product counts per category:', counts);
    
    // Map ALL categories from backend, with counts (0 if no products)
    return categories.map(cat => ({
      name: cat.name,
      id: cat._id,
      count: counts[cat.name] || 0  // ✅ Show 0 if no products
    }));
  }, [products, categories]);

  console.log('📋 Category list for sidebar:', categoryList);

  // Toggle filter helper
  const toggleFilter = (list: string[], value: string, setter: (val: string[]) => void) => {
    if (list.includes(value)) {
      setter(list.filter(item => item !== value));
    } else {
      setter([...list, value]);
    }
  };

  // Handle category change
  const handleCategoryChange = (categoryName: string) => {
    if (categoryName.toLowerCase() === 'all') {
      navigate('/shop');
    } else {
      navigate(`/shop/${categoryName.toLowerCase().replace(/\s+/g, '-')}`);
    }
    // Reset filters when changing category
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-[#f9f9f9] py-14 mb-10   text-center border-b border-gray-100">
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
        {/* Loading State */}
        {loading && (
          <div className="flex gap-10">
            <div className="w-64 flex-shrink-0">
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 aspect-[3/4] rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        )}

        {/* Main Content */}
        {!loading && !error && (
          <div className="flex gap-10">
            {/* Sidebar */}
            <ShopSidebar
              categories={categoryList}
              selectedCategory={currentCategory}
              onCategoryChange={handleCategoryChange}
              selectedSizes={selectedSizes}
              onSizeToggle={(s) => toggleFilter(selectedSizes, s, setSelectedSizes)}
              selectedColors={selectedColors}
              onColorToggle={(c) => toggleFilter(selectedColors, c, setSelectedColors)}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
            />

            <div className="flex-1">
              {/* Results Header */}
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
                      <option>48</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                  {filteredProducts.map(product => (
                    <ProductCart key={product._id} product={product} />
                  ))}
                </div>
              ) : (
                // Empty State
                <div className="py-32 text-center">
                  <h3 className="text-xl font-medium text-gray-400">No products found.</h3>
                  <p className="text-gray-500 mt-2">
                    {isShopRoot 
                      ? 'No products available yet. Create some products to get started!'
                      : 'No products in this category yet.'
                    }
                  </p>
                  <button 
                    onClick={() => {
                      navigate('/shop'); 
                      setSelectedSizes([]); 
                      setSelectedColors([]);
                      setPriceRange([0, 10000]);
                    }}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-blue-700"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <FlotingCart />
    </div>
  );
};

export default ShopPage;