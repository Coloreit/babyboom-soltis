import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        document.title = 'Estos son todos nuestros productos'
    }, [])

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query (collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })

    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div>
            <h2>{categoryId ? `Estos son nuestros productos de la categoría ${categoryId}`: 'Estos son todos nuestros productos'}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer