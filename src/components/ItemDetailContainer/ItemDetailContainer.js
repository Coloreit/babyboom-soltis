import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useTitle } from "../../hooks/useTitle"
import { getProductsbyId } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"

const ItemDetailConteiner = () => {
    const { productId } = useParams()

    useTitle('Detalle del producto', [])

    const getProductsByCategoryId = () => getProductsbyId(productId)

    const { data: product, error, loading } = useAsync(getProductsByCategoryId , [productId])

    if(loading) {
        return <h2>Cargando...</h2>
    }

    if(error) {
        return <h2>Se produjo un error al cargar los productos</h2>
    }

    return(
        <div className='ItemDetailContainer' >
            <h1>Detalle de producto: {product.name}</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailConteiner