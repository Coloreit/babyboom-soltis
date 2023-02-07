import './ItemDetail.css'
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, price, category, description, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log('agregué al carrito: ', quantity)

        setQuantity(parseInt(quantity))
        
        addItem({ id, name, quantity, price })
    }

    return(
        <div className= 'galeria'>
            <div className= 'tarjeta'>
                <h3>{name}</h3>
                <p>{category}</p>
                <img src={img} alt={name}/>
                <p>${price}</p>
                <p>Descripción: {description}</p>
                {
                    quantity > 0 ? (
                        <Link to={`/cart`} className='link'>Terminar compra</Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail