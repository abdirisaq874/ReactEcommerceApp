import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route,Routes } from "react-router-dom";
import {  setCategoriesFetchStart} from "../../store/category/category.action";
import CategoriesPreview from "../categories-preview/categories-previewRoutes";
import Category from "../Category/Category.component";

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
       dispatch(setCategoriesFetchStart())
    },[dispatch])


    return <Routes>
      <Route index  element={<CategoriesPreview/>}></Route>
      <Route path=":category" element={<Category/>}></Route>
    </Routes>
};

export default Shop;
