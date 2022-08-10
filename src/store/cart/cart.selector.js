import { createSelector } from "reselect";

const SelectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [SelectCartReducer],
  (Cart) => Cart.CartItems
);

export const selectISCartOpen = createSelector(
  [SelectCartReducer],
  (Cart) => Cart.IsCartOpen
);

export const CartCountSelector = createSelector(
  [selectCartItems],
  (CartItems) =>
    CartItems.reduce((total, cartitem) => (total += cartitem.quantity), 0)
);

export const CartTotalSelector = createSelector(
  [selectCartItems],
  (CartItems) =>
    CartItems.reduce(
      (total, cartitem) => (total += cartitem.quantity * cartitem.price),
      0
    )
);
