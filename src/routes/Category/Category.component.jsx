import "./Category.styles.jsx";
import ProductCard from "../../components/product.card/product-card";
import { useContext } from "react";
import { Categoriescontext } from "../../context/Categories.context";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoryContainer,Title } from "./Category.styles.jsx";


const Category = () => {
  const { category } = useParams();
  const { CategoriesMap } = useContext(Categoriescontext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(CategoriesMap[category]);
  }, [category, CategoriesMap]);
  return (
    <>
    <Title> {category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
      </CategoryContainer>
    </>
  );
};

export default Category;