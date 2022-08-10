import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart as add,
  RemoveItemFromtheCart as Remove,
  DeleteItemFromtheCart as Delete,
} from "../../store/cart/cart.action";

const CheckOutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const CartItems = useSelector(selectCartItems);
  const addItemToCart = (cartItem) => dispatch(add(CartItems, cartItem));
  const RemoveItemFromtheCart = (cartItem) =>
    dispatch(Remove(CartItems, cartItem));
  const DeleteItemFromtheCart = (cartItem) =>
    dispatch(Delete(CartItems, cartItem));
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => RemoveItemFromtheCart(cartItem)}>
          {" "}
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => {
          DeleteItemFromtheCart(cartItem);
        }}
      >
        &#10005;
      </span>
    </div>
  );
};
export default CheckOutItem;
