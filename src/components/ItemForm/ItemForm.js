import { useState } from "react"
import './ItemForm.css'

const ItemForm = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div className="ItemForm">
            <input type='text' value={name} placeholder='Nombre' onChange={(event) => setName(event.target.value)}/>
            <input type='text' value={phone} placeholder='Teléfono' onChange={(event) => setPhone(event.target.value)}/>
            <input type='text' value={email} placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
        </div>
    )
    
}

export default ItemForm
