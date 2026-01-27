import { ChevronUp } from 'lucide-react';


interface SidebarProps {
  categories: { name: string; count: number }[];
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
  categories, selectedCategory, onCategoryChange,
  selectedSizes, onSizeToggle,
  selectedColors, onColorToggle 
}: SidebarProps) => {
  
  // Data matched to your screenshot
  const colorOptions = [
    { name: 'Black', hex: '#000000', count: 3 },
    { name: 'Blue', hex: '#3b82f6', count: 4 },
    { name: 'Dark Blue', hex: '#1e3a8a', count: 5 },
    { name: 'Grey', hex: '#9ca3af', count: 3 },
    { name: 'Maroon', hex: '#800000', count: 4 },
  ];

  const sizeOptions = [
    { label: '30', count: 3 }, { label: '32', count: 3 }, 
    { label: 'L', count: 5 }, { label: 'M', count: 5 }
  ];

  return (
    <aside className="w-64 flex-shrink-0 pr-4 border-r border-gray-100">
      {/* Category Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="font-bold text-xs uppercase tracking-wider">Product Categories</h3>
          <ChevronUp size={14} />
        </div>
        <ul className="space-y-3">
          {categories.map(cat => (
            <li 
              key={cat.name} 
              onClick={() => onCategoryChange(cat.name)}
              className={`text-sm cursor-pointer flex justify-between hover:text-blue-600 ${selectedCategory === cat.name ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              {cat.name} <span className="text-gray-400 text-xs">({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Filter by Color Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="font-bold text-xs uppercase tracking-wider">Filter by Color</h3>
          <ChevronUp size={14} />
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
                />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color.hex }} />
                <span className="text-sm text-gray-600 group-hover:text-black">{color.name}</span>
              </div>
              <span className="text-gray-400 text-xs">{color.count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter by Size Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="font-bold text-xs uppercase tracking-wider">Filter by Size</h3>
          <ChevronUp size={14} />
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
                />
                <span className="text-sm text-gray-600 group-hover:text-black">{size.label}</span>
              </div>
              <span className="text-gray-400 text-xs">{size.count}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};