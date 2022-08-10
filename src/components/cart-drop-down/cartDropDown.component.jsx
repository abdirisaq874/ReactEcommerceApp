import "./cart-dropdown.styles.jsx"
import Button from "../button/button.component"
import { useNavigate } from "react-router-dom"
import CartItem from "../cart-item/cart-item.component"
import {CartDropDownContainerstyle,CartItemsstyle,EmptyMessagestyle} from "./cart-dropdown.styles"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector.js"

const CartDropDown = ()=>{
    const  CartItems = useSelector(selectCartItems)
    const navigate = useNavigate()
    const CheckOutHandler =()=>{
        navigate("/CheckOut")
    }

    return <CartDropDownContainerstyle>
       {CartItems.length ? <CartItemsstyle>
            {CartItems.map((item)=>{
                return <CartItem key={item.id} cartitem={item}> </CartItem>
            })}
        </CartItemsstyle> :<EmptyMessagestyle> Your Cart Is Empty</EmptyMessagestyle> }
        <Button onClick={CheckOutHandler} >Go to CheckOut</Button>
    </CartDropDownContainerstyle>
}

export default CartDropDown