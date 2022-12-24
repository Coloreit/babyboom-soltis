import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className= 'Navbar'>
            <h1>Babyboom</h1>
            <div>
                <button>Indumentaria</button>
                <button>Accesorios</button>
                <button>Juguetes</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar