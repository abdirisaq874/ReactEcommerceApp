import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import {CartIconContainerStyle, ItemCountStyle,ShoppingIconAndStyle} from "./cart-icon.styles.jsx";

const Cart = () => {
  const { IsCartOpen, setIsCartOpen, CartCount } = useContext(CartContext);
  const toggler = () => {
    setIsCartOpen(!IsCartOpen);
  };

  
  return (
    <CartIconContainerStyle className="cart-icon-container " onClick={toggler}>
      <ShoppingIconAndStyle/>
      <ItemCountStyle className="item-count">{CartCount}</ItemCountStyle>
    </CartIconContainerStyle>
  );
};

export default Cart;
