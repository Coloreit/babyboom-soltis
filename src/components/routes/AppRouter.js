import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailConteiner from '../ItemDetailContainer/ItemDetailContainer';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer greeting='Estos son nuestros productos'/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:productId' element={<ItemDetailConteiner />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    )
}

export default AppRouter