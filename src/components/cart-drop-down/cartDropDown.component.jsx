import "./cart-dropdown.styles.jsx"
import Button from "../button/button.component"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext} from "../../context/cart.context"
import CartItem from "../cart-item/cart-item.component"
import {CartDropDownContainerstyle,CartItemsstyle,EmptyMessagestyle} from "./cart-dropdown.styles"

const CartDropDown = ()=>{
    const { CartItems } = useContext(CartContext)
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