import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/routes/AppRouter';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          {/*<ItemListContainer greeting='Este es un texo de bienvenida'/>*/}
          <AppRouter />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
