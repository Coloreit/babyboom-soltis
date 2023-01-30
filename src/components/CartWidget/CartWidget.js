import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = ({ quantity }) => {
    return (
        <Link to='/cart' className= 'CartWidget'>
            <img src='../images/Cart.png' alt='cart'/>
            { quantity }
        </Link>
    )
}

export default CartWidget