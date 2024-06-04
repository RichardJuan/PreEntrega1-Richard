import { useEffect, useState } from 'react';
import obtenerProductos from '../../data/data';
import ItemList from './ItemList';
import './itemListContainer.css';
import { useParams } from 'react-router-dom';

const itemListContainer = (props) => {
    const [ products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {saludo} = props
    const { idCategory} = useParams()

useEffect( () => {
    setLoading(true)
    obtenerProductos()
        .then((respuesta) => {
            if(idCategory){
                const productsFilter = respuesta.filter((productRes) => productRes.category === idCategory)
                setProducts(productsFilter);
            }else{
                setProducts(respuesta);
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false)
        });
    }, [idCategory] );
    
    return(
        <div>
            <h3>{saludo}</h3>
            {
                loading ? <div> Cargando...</div> : <ItemList products = {products} />
            }
        </div>
    )
}

export default itemListContainer