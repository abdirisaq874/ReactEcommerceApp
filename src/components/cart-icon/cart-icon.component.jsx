import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { CartCountSelector, selectISCartOpen } from "../../store/cart/cart.selector";

import {
  CartIconContainerStyle,
  ItemCountStyle,
  ShoppingIconAndStyle,
} from "./cart-icon.styles.jsx";

const Cart = () => {
  const dispatch = useDispatch();


  const CartCount = useSelector(CartCountSelector);
  const IsCartOpen = useSelector(selectISCartOpen)
  const toggler = () => dispatch(setIsCartOpen(!IsCartOpen));

  return (
    <CartIconContainerStyle className="cart-icon-container " onClick={toggler}>
      <ShoppingIconAndStyle />
      <ItemCountStyle className="item-count">{CartCount}</ItemCountStyle>
    </CartIconContainerStyle>
  );
};

export default Cart;
