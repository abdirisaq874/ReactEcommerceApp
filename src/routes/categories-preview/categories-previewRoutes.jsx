// import { useContext } from "react";
// import { Categoriescontext } from "../../context/Categories.context";
import CategoryPreview from "../../components/category-preview/category-preview";
import { useSelector } from "react-redux";
import {
  CategoryIsloadingSelector,
  CategorySelector,
} from "../../store/category/category.selector";
import { Spinner } from "../../components/spinner/spinner.component";


const CategoriesPreview = () => {
  const CategoriesMap = useSelector(CategorySelector);
  const Isloading = useSelector(CategoryIsloadingSelector);

  return (
    <>
      {Isloading ? (
        <Spinner />
      ) : (
        Object.keys(CategoriesMap).map((title) => {
          return (
            <CategoryPreview
              key={title}
              title={title}
              CategoriesMap={CategoriesMap}
            />
          )
        })
      )}
    </>
  );
};

export default CategoriesPreview;
