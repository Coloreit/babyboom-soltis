import './Navbar.css'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className= 'Navbar'>
            <h1>Babyboom</h1>
            <div>
                <Link className= 'Link' to='category/indumentaria'>Indumentaria</Link>
                <Link className= 'Link' to='category/accesorios'>Accesorios</Link>
                <Link className= 'Link' to='category/juguetes'>Juguetes</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar