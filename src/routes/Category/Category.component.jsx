import "./Category.styles.jsx";
import ProductCard from "../../components/product.card/product-card";
// import { useContext } from "react";
// import { Categoriescontext } from "../../context/Categories.context";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoryContainer, Title } from "./Category.styles.jsx";
import { useSelector } from "react-redux";
import {
  CategoryIsloadingSelector,
  CategorySelector,
} from "../../store/category/category.selector.js";
import  {Spinner}  from "../../components/spinner/spinner.component.jsx";

const Category = () => {
  const { category } = useParams();
  const CategoriesMap = useSelector(CategorySelector);
  const [products, setProducts] = useState([]);
  const Isloading = useSelector(CategoryIsloadingSelector);


  useEffect(() => {
    setProducts(CategoriesMap[category]);
  }, [category, CategoriesMap]);
  return (
    <>
      <Title> {category.toUpperCase()}</Title>
      {Isloading ? (
        <Spinner/>
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return (
                <ProductCard key={product.id} product={product}></ProductCard>
              );
            })}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
