import { useEffect, useState } from 'react';
import obtenerProductos from '../../data/data';
import ItemList from './ItemList';
import './itemListContainer.css';

const itemListContainer = (props) => {
    const [ products, setProducts] = useState([])
    const {saludo} = props

useEffect( () => {
    obtenerProductos()
        .then((respuesta) => {
            setProducts(respuesta);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("final de promesa")
        });
    }, [] );
    console.log(products)
    
    return(
        <div>
            <h3>{saludo}</h3>
            <ItemList products = {products} />
        </div>
    )
}

export default itemListContainer