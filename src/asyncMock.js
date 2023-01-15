const products = [
    { 
        id: '1', 
        name: 'Body', 
        price: 1000, 
        category: 'indumentaria', 
        img:'../images/fotos/i-body.jpg', 
        stock: 25, 
        description:'Body de bebé'
    },
    { id: '2', name: 'Pantalon', price: 800, category: 'indumentaria', img:'../images/fotos/i-ranita.jpg', stock: 16, description:'Pantalón con pie'},
    { id: '3', name: 'Batita', price: 1200, category: 'indumentaria', img:'../images/fotos/i-batita.jpg', stock: 10, description:'Batita 0-3 meses'},
    { id: '4', name: 'Remera', price: 1800, category: 'indumentaria', img:'../images/fotos/i-remera.jpg', stock: 16, description:'Remera de ositos'},
    { id: '5', name: 'Mamadera', price: 1400, category: 'accesorios', img:'../images/fotos/a-mamadera.png', stock: 10, description:'Mamadera avent 80ml'},
    { id: '6', name: 'Chupete', price: 1200, category: 'accesorios', img:'../images/fotos/a-chupete.png', stock: 12, description:'Chupetes avent x 2'},
    { id: '7', name: 'Encastre', price: 3200, category: 'juguetes', img:'../images/fotos/j-0-1.jpg', stock: 6, description:'Juego de encastre de colores'},
    { id: '8', name: 'Bloques', price: 2400, category: 'juguetes', img:'../images/fotos/j-1-3.jpg', stock: 8, description:'Bloques de colores'}
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}