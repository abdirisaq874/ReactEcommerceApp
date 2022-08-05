import { useContext } from "react";
import { Categoriescontext } from "../../context/Categories.context";
import CategoryPreview from "../../components/category-preview/category-preview";

const CategoriesPreview = () => {
  const { CategoriesMap } = useContext(Categoriescontext);
  return Object.keys(CategoriesMap).map((title) => {
    return (
      <CategoryPreview key={title} title={title} CategoriesMap={CategoriesMap}/>
    );
  });
};

export default CategoriesPreview;
