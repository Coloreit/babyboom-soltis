import './Cart.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className='Cart'>
            <h2>Carrito de compras</h2>
            <CartList cart={cart}/>
            <Link to='/checkout' className='link'>Checkout</Link>
        </div>
    )
}

export default Cart