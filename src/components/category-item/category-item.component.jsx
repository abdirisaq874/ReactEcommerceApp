import { useNavigate } from "react-router-dom";
import {
  CategoryContainerStyle,
  CategoryBodyContainerStyle,
  BackgroundImageStyle,
  CategoriesContainerStyle,
} from "./category-item.styles.jsx";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const CategoryItem = () => {
  const navigate = useNavigate();

  return (
    <CategoriesContainerStyle>
      {categories.map((category) => {
        const { id, title, imageUrl } = category;
        const navigationHandler = () => navigate(`/shop/${title}`);
        return (
          <CategoryContainerStyle onClick={navigationHandler} key={id}>
            <BackgroundImageStyle imageUrl={imageUrl}></BackgroundImageStyle>
            <CategoryBodyContainerStyle key={id}>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </CategoryBodyContainerStyle>
          </CategoryContainerStyle>
        );
      })}
    </CategoriesContainerStyle>
  );
};

export default CategoryItem;
