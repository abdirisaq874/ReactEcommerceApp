import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Crownlog } from "../../assets/crown.svg";
import {
  Navigationstyle,
  LogoContainerstyle,
  NavLinksContainerStyle,
  Navlinkstyle
} from "./navigation.styles.jsx";
import { SignOutApp } from "../../utils/firebase/firebase.utils";
import Cart from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-drop-down/cartDropDown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectISCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const IsCartOpen  = useSelector(selectISCartOpen)
  const CurrentUser = useSelector(selectCurrentUser)
  return (
    <Fragment>
      <Navigationstyle>
        <LogoContainerstyle to="/">
          <Crownlog className="logo" />
        </LogoContainerstyle>
        <NavLinksContainerStyle>
          <Navlinkstyle to="/shop">Shop</Navlinkstyle>
          {CurrentUser ? (
            <Navlinkstyle as='span' onClick={SignOutApp}>SignOut</Navlinkstyle>
          ) : (
            <Navlinkstyle to="/Auth">Sign In</Navlinkstyle>
          )}
          <Cart />
        </NavLinksContainerStyle>
        {IsCartOpen && <CartDropDown />}
      </Navigationstyle>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
