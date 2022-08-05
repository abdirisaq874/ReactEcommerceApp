import {CartItemContainerStyle,ItemDetailsStyle,NameStyle,ImageStyle} from "./cart-item.styles.jsx";

const CartItem = ({ cartitem }) => {
  const { name, imageUrl, price, quantity } = cartitem;
  return (
    <CartItemContainerStyle>
      <ImageStyle src={imageUrl} alt={name} />
      <ItemDetailsStyle className="item-details">
        <NameStyle className="name">{name}</NameStyle>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsStyle>
    </CartItemContainerStyle>
  );
};

export default CartItem;
