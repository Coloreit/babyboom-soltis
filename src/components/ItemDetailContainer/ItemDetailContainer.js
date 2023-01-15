import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error);
            })
    }, [productId])

    return(
        <div>
            <h2>Detalles del productos</h2>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailConteiner