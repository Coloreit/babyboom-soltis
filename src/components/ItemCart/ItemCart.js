import './ItemCart.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCart = ({ id, name, quantity, price }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <article className="ItemCart">
            <h3>{name}</h3>
            <h4>Cantidad: {quantity}</h4>
            <h4>Precio unitario: ${price}</h4>
            <h4>subtotal: ${price * quantity}</h4>
            <button className="Option" onClick={() => removeItem(id)}>Eliminar</button>
        </article>
    )
}

export default ItemCart