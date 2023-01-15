import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/*<ItemListContainer greeting='Este es un texo de bienvenida'/>*/}
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Estos son nuestros productos'/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:productId' element={<ItemDetailConteiner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
