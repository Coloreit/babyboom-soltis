import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Checkout = () => {

    const { cart, total } = useContext(CartContext)

    const objOrder = {
        buyer: {
            name: 'Nombre',
            phone: 'Teléfono',
            email: 'email@emial.com'
        }, 
        items: cart,
        total
    }
    return (
        <div>
            <h2>Checkout</h2>
            <button>Generar Orden</button>
        </div>
    )
}

export default Checkout