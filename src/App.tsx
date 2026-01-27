import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import LayoutWrapper from "./shared/components/layout/Layoutwrap";
import Pages from "./pages/Pages";
import Elements from "./pages/Elements";
import ByNow from "./pages/ByNow";
import ProductCategoriesSidebar from "./pages/Shop/ShopPage";
import ShopPage from "./pages/Shop/ShopPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="Pages" element={<Pages />} />
          <Route path="Shop" element={<ProductCategoriesSidebar />} />
          <Route path="Elements" element={<Elements />} />
          <Route path="By" element={<ByNow />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:categoryName" element={<ShopPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
