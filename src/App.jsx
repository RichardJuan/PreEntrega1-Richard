
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart';
import Checkout from './components/checkout/checkout';

function App() {
  return(
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={ <ItemListContainer saludo="Bienvenidos a Komodo Farm GrowShop.
          Distribuidores oficiales de BSF"/>} />
          <Route path='/category/:idCategory' element={ <ItemListContainer saludo="Distribuidores oficiales de BSF" />}/>
          <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
