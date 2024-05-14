
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <ItemListContainer saludo="Bienvenidos a Komodo Farm GrowShop.
        Distribuidores oficiales de BSF"/>} />
        <Route path='/category/:idCategory' element={ <ItemListContainer saludo="Distribuidores oficiales de BSF" />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
