import "./product-card.styles.scss";

import Button, { ButtonTypeClasses } from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = product;
  const  CartItems  = useSelector(selectCartItems) //Context(CartContext);

  const AddToCart = () => {
    dispatch(addItemToCart(CartItems,product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={ButtonTypeClasses.inverted} onClick={AddToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
