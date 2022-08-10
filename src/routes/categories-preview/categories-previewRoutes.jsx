// import { useContext } from "react";
// import { Categoriescontext } from "../../context/Categories.context";
import CategoryPreview from "../../components/category-preview/category-preview";
import { useSelector } from "react-redux";
import { CategorySelector } from "../../store/category/category.selector";

const CategoriesPreview = () => {
  const  CategoriesMap  = useSelector(CategorySelector)
  return Object.keys(CategoriesMap).map((title) => {
    return (
      <CategoryPreview key={title} title={title} CategoriesMap={CategoriesMap}/>
    );
  });
};

export default CategoriesPreview;
