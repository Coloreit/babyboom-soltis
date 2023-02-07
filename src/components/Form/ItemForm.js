import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { useNavigate } from "react-router-dom"
import './ItemForm.css'

const ItemForm = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async (name, phone, email) => {
        setLoading(true)
        try{
            const objOrder = {
                buyer: {
                    name: 'Nombre',
                    phone: 'Teléfono',
                    email: 'email@emial.com'
                }, 
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
    
            const ids = cart.map(prod => prod.id)
            const names = cart.map(prod => prod.name)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore
    
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if (outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                const { id } = orderAdded
                setOrderId(id)
                clearCart()
                setTimeout(() => {
                    navigate('/')
                }, 5000)
                console.log(id);
            } else {
                alert (`No quedan más ${names} disponibles en stock`)
                clearCart()
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    if(loading){
        return <h3>Generando Orden...</h3>
    }

    if(orderId) {
        return (
            <div>
                <h2>¡Gracias {name} por tu compra!</h2>
                <h3>El Id de la misma es: {orderId}</h3>
            </div>
        )
    }

    if(cart.length === 0) {
        return(
            <h3>No hay productos en el carrito</h3>
        )
    }

    return (
        <div className="ItemForm">
            <h2>Checkout</h2>
            <h3>Su compra suma un total de: ${total} </h3>
            <input type='text' value={name} placeholder='Nombre' onChange={(event) => setName(event.target.value)}/>
            <input type='text' value={phone} placeholder='Teléfono' onChange={(event) => setPhone(event.target.value)}/>
            <input type='text' value={email} placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
            <button onClick={createOrder}>Generar Orden</button>
        </div>
    )
}

export default ItemForm
