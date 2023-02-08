import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import { useTitle } from "../../hooks/useTitle"
import { getProducts } from "../../services/firebase/firestore/products"

const ItemListContainer = ({greeting}) => {
    const { categoryId } = useParams()

    const getProductsByCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsByCategory , [categoryId])

    useTitle('Todos los productos', [])

    if(loading) {
        return <h2>Cargando...</h2>
    }

    if(error) {
        return <h2>Se produjo un error al cargar los productos</h2>
    }

    return(
        <div>
            <h2>{categoryId ? `Estos son nuestros productos de la categoría ${categoryId}`: 'Estos son todos nuestros productos'}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer