import { CART_ACTION_TYPES } from "./cart.types";

const Initial_states={
    CartItems : [],
    IsCartOpen : false
}

export const CartReducer = (state=Initial_states,action)=>{
    const {type,payload} =action;

    switch(type){
        case CART_ACTION_TYPES.SetCartItems:
            return {...state,CartItems:payload}
        case CART_ACTION_TYPES.setIsCartOpen:
            return {...state,IsCartOpen:payload}
        default : return state
    }
}