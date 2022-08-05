import { Route,Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-previewRoutes";
import Category from "../Category/Category.component";

const Shop = () => {
    return <Routes>
      <Route index  element={<CategoriesPreview/>}></Route>
      <Route path=":category" element={<Category/>}></Route>
    </Routes>
};

export default Shop;
