
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';

function App() {
  return(
    <div>
      <Navbar />
      <ItemListContainer saludo="Bienvenidos a Komodo Farm GrowShop.
      Distribuidores oficiales de BSF"/>
    </div>
    
  )
}

export default App
