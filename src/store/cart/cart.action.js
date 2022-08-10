import { CART_ACTION_TYPES } from "./cart.types";

const AddCarttoItem = (cartitems, productToAdd) => {
    const existingCartItem = cartitems.find(
      (cartitem) => cartitem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartitems.map((cartitem) => {
        return cartitem.id === productToAdd.id
          ? { ...cartitem, quantity: cartitem.quantity + 1 }
          : cartitem;
      });
    }
  
    return [...cartitems, { ...productToAdd, quantity: 1 }];
  };
  
  

  const removeItemFromtheCart = (cartitems, producttoRemove) => {
    const existingCartItem = cartitems.find(
      (cartitem) => cartitem.id === producttoRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartitems.filter((cartitem) => {
        return cartitem.id !== producttoRemove.id;
      });
    }
  
    if (existingCartItem.quantity > 1) {
      return cartitems.map((cartitem) => {
        return cartitem.id === producttoRemove.id
          ? { ...cartitem, quantity: cartitem.quantity - 1 }
          : cartitem;
      });
    }
  };




  export const addItemToCart = (CartItems,productToAdd) => {
   const NewCartItems =  AddCarttoItem(CartItems, productToAdd)
   return {type: CART_ACTION_TYPES.SetCartItems,payload:NewCartItems}
  };

  export const RemoveItemFromtheCart = (CartItems,producttoRemove) => {
    const NewCartItems=removeItemFromtheCart(CartItems, producttoRemove)
    return {type: CART_ACTION_TYPES.SetCartItems,payload:NewCartItems}
  };

  export const DeleteItemFromtheCart= (CartItems,productToDelete) => {
    const NewCartItems = CartItems.filter((cartitem) => {
        return cartitem.id !== productToDelete.id;
      });
    
    console.log(NewCartItems)
   return {type: CART_ACTION_TYPES.SetCartItems,payload:NewCartItems}

  }



  export const setIsCartOpen = (boolean)=>({type : CART_ACTION_TYPES.setIsCartOpen,payload:boolean})

  export const setCartItems = (CartItems)=>({type:CART_ACTION_TYPES.setCartItems,payload:CartItems})