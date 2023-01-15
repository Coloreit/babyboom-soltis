import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, price, category, description, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (count) => {
        setQuantity(count)
    }

    return(
        <div className= 'galeria'>
            <h3>{name}</h3>
            <p>{category}</p>
            <img src={img} alt={name}/>
            <p>${price}</p>
            <p>Descripción: {description}</p>
            {
                quantity > 0 ? (
                    <Link>Terminar compra</Link>
                ) : (
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                )
            }
        </div>
    )
}

export default ItemDetail