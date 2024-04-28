
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/itemListContainer';

function App() {
  return(
    <div>
      <Navbar />
      <ItemListContainer saludo="Bienvenidos a Komodo Farm GrowShop"/>
      <ItemListContainer saludo=" distribuidores oficiales de BSF"/>
    </div>
    
  )
}

export default App
