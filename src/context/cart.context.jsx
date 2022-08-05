import { useState, useEffect } from "react";
import { createContext } from "react";

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




const CartContext = createContext({
  IsCartOpen: false,
  setIsCartOpen: () => {},
  CartItems: [],
  CartCount: 0,
  addItemToCart: () => {},
  RemoveItemFromtheCart: () => {},
  DeleteItemFromtheCart: () => {},
  TotalPrice:0
});


const CartContexProvider = ({ children }) => {
  const [IsCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([]);
  const [CartCount, setCartCount] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);

  
  const addItemToCart = (productToAdd) => {
    setCartItems(AddCarttoItem(CartItems, productToAdd));
  };

  const RemoveItemFromtheCart = (producttoRemove) => {
    setCartItems(removeItemFromtheCart(CartItems, producttoRemove));
  };

  const DeleteItemFromtheCart= (productToDelete) => {
    setCartItems(()=>{
      return CartItems.filter((cartitem) => {
        return cartitem.id !== productToDelete.id;
      });
    })

  }


  useEffect(() => {
    const newCartCount = CartItems.reduce(
      (total, cartitem) => (total += cartitem.quantity),
      0
    );

    const newTotalPrice = CartItems.reduce(
      (total, cartitem) => (total += cartitem.quantity*cartitem.price),
      0
    );
    setCartCount(newCartCount);
    setTotalPrice(newTotalPrice);
  }, [CartItems]);


  
  useEffect(() => {
  
    const newTotalPrice = CartItems.reduce(
      (total, cartitem) => (total += cartitem.quantity*cartitem.price),
      0
    );
    setTotalPrice(newTotalPrice);
  }, [CartItems]);


  const value = {
    IsCartOpen,
    setIsCartOpen,
    CartItems,
    addItemToCart,
    CartCount,
    RemoveItemFromtheCart,
    DeleteItemFromtheCart,
    TotalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartContexProvider };
