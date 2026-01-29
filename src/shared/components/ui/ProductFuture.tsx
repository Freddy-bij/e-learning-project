// import { useEffect, useState } from "react";
// import ProductCart from "./ProductCart";
// import { getAllProducts, type Product } from "../../../services/ProductService";

// const ProductFuture = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const data = await getAllProducts();
//         setProducts(data);
//       } catch (err: unknown) {
//         setError(err instanceof Error ? err.message : String(err));
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (loading) return <div className="text-center py-10">Loading featured products...</div>;
//   if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

//   return (
//     <div className="w-[80%] mx-auto py-8">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">FEATURED PRODUCTS</h2>
//         <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
//           VIEW ALL
//         </button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//         {products.map((product) => (
         
//           <ProductCart key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductFuture;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import ProductCart from "./ProductCart";
import { getAllProducts, type Product } from "../../../services/ProductService";

const ProductFuture = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate(); // 2. Initialize navigate

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-10">Loading featured products...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="w-[80%] mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">FEATURED PRODUCTS</h2>
        
        {/* 3. Add onClick to navigate to Shop */}
        <button 
          onClick={() => navigate('/shop')} 
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          VIEW ALL
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {/* 4. Use .slice(0, 5) to only show the first 5 products */}
        {products.slice(0, 5).map((product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductFuture;