import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <h2>Carrito de compras</h2>
            <CartList cart={cart}/>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart