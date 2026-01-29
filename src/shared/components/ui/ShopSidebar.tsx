
import { ChevronUp } from 'lucide-react';

interface Category {
  name: string;
  count: number;
  id?: string;
}

interface SidebarProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedSizes: string[];
  onSizeToggle: (size: string) => void;
  selectedColors: string[];
  onColorToggle: (color: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

export const ShopSidebar = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  selectedSizes, 
  onSizeToggle,
  selectedColors, 
  onColorToggle,
  priceRange,
  onPriceChange 
}: SidebarProps) => {
  
  const colorOptions = [
    { name: 'Black', hex: '#000000', count: 0 },
    { name: 'Blue', hex: '#3b82f6', count: 0 },
    { name: 'Dark Blue', hex: '#1e3a8a', count: 0 },
    { name: 'Grey', hex: '#9ca3af', count: 0 },
    { name: 'Maroon', hex: '#800000', count: 0 },
  ];

  const sizeOptions = [
    { label: '30', count: 0 }, 
    { label: '32', count: 0 }, 
    { label: 'L', count: 0 }, 
    { label: 'M', count: 0 },
    { label: 'S', count: 0 },
    { label: 'XL', count: 0 }
  ];

  // Calculate total products
  const totalProducts = categories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <aside className="w-64 flex-shrink-0 pr-4 border-r border-gray-100">
      {/* Category Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="font-bold text-xs uppercase tracking-wider">Product Categories</h3>
          <ChevronUp size={14} />
        </div>
        <ul className="space-y-3">
          {/* All Products Option */}
          <li 
            onClick={() => onCategoryChange('all')}
            className={`text-sm cursor-pointer flex justify-between hover:text-blue-600 transition-colors ${
              selectedCategory === 'all' ? 'text-blue-600 font-medium' : 'text-gray-600'
            }`}
          >
            All Products 
            <span className="text-gray-400 text-xs">({totalProducts})</span>
          </li>

          {/* Dynamic Categories from Backend */}
          {categories.map(cat => (
            <li 
              key={cat.id || cat.name} 
              onClick={() => onCategoryChange(cat.name)}
              className={`text-sm cursor-pointer flex justify-between hover:text-blue-600 transition-colors ${
                selectedCategory === cat.name.toLowerCase() ? 'text-blue-600 font-medium' : 'text-gray-600'
              }`}
            >
              {cat.name} 
              <span className="text-gray-400 text-xs">({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="font-bold text-xs uppercase tracking-wider">Filter by Price</h3>
          <ChevronUp size={14} />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">Range:</span>
            <span className="font-bold">${priceRange[0]} - ${priceRange[1]}</span>
          </div>
          <div className="space-y-2">
            <label className="text-xs text-gray-500">Min: ${priceRange[0]}</label>
            <input 
              type="range"
              min="0"
              max="10000"
              step="10"
              value={priceRange[0]}
              onChange={(e) => onPriceChange([Number(e.target.value), priceRange[1]])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-gray-500">Max: ${priceRange[1]}</label>
            <input 
              type="range"
              min="0"
              max="10000"
              step="10"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Filter by Color Section - Kept for UI but disabled until backend supports it */}
      <div className="mb-8 opacity-50 pointer-events-none">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="font-bold text-xs uppercase tracking-wider">Filter by Color</h3>
          <ChevronUp size={14} />
        </div>
        <div className="text-xs text-gray-400 italic mb-2">
          Coming soon - Add colors to products
        </div>
        <div className="space-y-3">
          {colorOptions.map(color => (
            <label key={color.name} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedColors.includes(color.hex)}
                  onChange={() => onColorToggle(color.hex)}
                  disabled
                />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color.hex }} />
                <span className="text-sm text-gray-600">{color.name}</span>
              </div>
              <span className="text-gray-400 text-xs">{color.count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter by Size Section - Kept for UI but disabled until backend supports it */}
      <div className="mb-8 opacity-50 pointer-events-none">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="font-bold text-xs uppercase tracking-wider">Filter by Size</h3>
          <ChevronUp size={14} />
        </div>
        <div className="text-xs text-gray-400 italic mb-2">
          Coming soon - Add sizes to products
        </div>
        <div className="space-y-3">
          {sizeOptions.map(size => (
            <label key={size.label} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedSizes.includes(size.label)}
                  onChange={() => onSizeToggle(size.label)}
                  disabled
                />
                <span className="text-sm text-gray-600">{size.label}</span>
              </div>
              <span className="text-gray-400 text-xs">{size.count}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};
