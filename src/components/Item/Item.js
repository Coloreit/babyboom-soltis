import './Item.css'
import { Link, useNavigate } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
    const navigate = useNavigate()

    return(
        <div className= 'galeria'>
            <h3>{name}</h3>
            <img src={img} alt={name}/>
            <p>${price}</p>
            <p>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </p>
        </div>
    )
}

export default Item