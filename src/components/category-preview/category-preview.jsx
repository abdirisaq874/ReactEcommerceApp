
import ProductCard from "../../components/product.card/product-card";
import { PreviewStyle,CategoryPreviewContainerStyle,TitleStyle } from "./category-preview.styles";

const CategoryPreview = ({ title, CategoriesMap }) => {
  return (
    <CategoryPreviewContainerStyle>
      <h2>
        <TitleStyle to={title}>{title.toUpperCase()}</TitleStyle>
        
      </h2>
      <PreviewStyle>
        {CategoriesMap[title]
          .filter((_, indx) => indx < 4)
          .map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
      </PreviewStyle>
    </CategoryPreviewContainerStyle>
  );
};

export default CategoryPreview;
