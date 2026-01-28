import { useEffect, useState } from "react";
import Futures from "../shared/components/ui/Futures";
import Welcome from "../shared/components/ui/Welcome";
import ProductFuture from "../shared/components/ui/ProductFuture";
import MensFashion from "../shared/components/ui/MenFashion";
import { getAllCategories, type Category } from "../services/categoryService";

const Home = () => {
  // 2. Create state to hold the backend data
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 3. Fetch data from backend on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="">
      <Welcome />

      <div className="w-[80%] mx-auto flex items-center gap-7 overflow-x-auto py-4">
        {loading ? (
          <p className="text-gray-500">Loading categories...</p>
        ) : (
          categories.map((cat) => (
            <div key={cat._id}>
         
              <Futures 
                future={{
                  id: cat._id,
                  title: cat.name,
                  img: cat.img
                }} 
              />
            </div>
          ))
        )}
      </div>

      <ProductFuture />
      <MensFashion />
    </div>
  );
};

export default Home;

