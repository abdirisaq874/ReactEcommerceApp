
import CheckOutItem from "../../components/checkOut.Item/checkOut.Item.component";
import { CheckoutContainerStyle, CheckoutHeaderStyle, TotalStyle } from"./checkout.styles.jsx";
import { useSelector } from "react-redux";
import { CartTotalSelector, selectCartItems } from "../../store/cart/cart.selector";
const CheckOut = () => {
  const  TotalPrice  = useSelector(CartTotalSelector);
  const CartItems= useSelector(selectCartItems)
  return (
    <CheckoutContainerStyle>
      {CartItems.length ? (
        <>
          <CheckoutHeaderStyle>
            {/* <div className="header-block"> */}
              <span>Product</span>
            {/* </div> */}
            {/* <div className="header-block"> */}
              <span>Description</span>
            {/* </div> */}
            {/* <div className="header-block"> */}
              <span>Quantity</span>
            {/* </div> */}
            {/* <div className="header-block"> */}
              <span>Price</span>
            {/* </div> */}
            {/* <div className="header-block"> */}
              <span>Remove</span>
            {/* </div> */}
          </CheckoutHeaderStyle>{" "}
          {CartItems.map((cartitem) => {
            return (
              <CheckOutItem
                key={cartitem.id}
                cartItem={cartitem}
              ></CheckOutItem>
            );
          })}
          <TotalStyle> total : ${TotalPrice}</TotalStyle>
        </>
      ) : (
        <div>no checkOut Item Available right now</div>
      )}
    </CheckoutContainerStyle>
  );
};

export default CheckOut;
