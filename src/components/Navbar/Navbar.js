import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Navbar = () => {

    const navigate = useNavigate()
    const { totalQuantity } = useContext(CartContext)

    return (
        <nav className= 'Navbar'>
            <h1 onClick={() => navigate('/')}>Babyboom</h1>
            <div className='Categorias'>
                <NavLink to={`category/indumentaria`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Indumentaria</NavLink>
                <NavLink to={`category/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                <NavLink to={`category/juguetes`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Juguetes</NavLink>
            </div>
            <CartWidget quantity={totalQuantity}/>
        </nav>
    )
}

export default Navbar