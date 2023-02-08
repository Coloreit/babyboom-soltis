import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore"
import { createAdaptedProductFromFirestore } from "../../../components/adapters/productAdapted"
import { db } from "../firebaseConfig"

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
        ? query (collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })
            resolve(productsAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getProductsbyId = (productId) => {
    return new Promise((resolve, reject) => {
        (async () => {
            const productRef = doc(db, 'products', productId)
            try {
                const snapshot = await getDoc(productRef)
    
                const fields = snapshot.data()
                const productAdapted = { id: snapshot.id, ...fields}
    
                resolve(productAdapted)
            } catch (error) {
                reject(error)
            }
        })()
    })
}