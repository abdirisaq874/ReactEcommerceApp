import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route,Routes } from "react-router-dom";
import { setCategoriesMap } from "../../store/category/category.action";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../categories-preview/categories-previewRoutes";
import Category from "../Category/Category.component";

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    const getCollectionAndDocument = async()=>{
       const CategoryMap =  await getCollectionAndDocuments()
       dispatch(setCategoriesMap(CategoryMap))
    }
   getCollectionAndDocument()
  },[dispatch])
    return <Routes>
      <Route index  element={<CategoriesPreview/>}></Route>
      <Route path=":category" element={<Category/>}></Route>
    </Routes>
};

export default Shop;
