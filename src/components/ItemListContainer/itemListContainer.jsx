import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './itemListContainer.css';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../db/db.js';

const itemListContainer = (props) => {
    const [ products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {saludo} = props
    const { idCategory} = useParams()

    const getProducts = () =>{
        const productsRef = collection( db, "productos")
        getDocs(productsRef)
            .then((productsDb) => {
                const data = productsDb.docs.map( (product) => {
                    return{ id: product.id, ...product.data()}
                })

                setProducts(data)
            })
    }
const getProductByCategory = () => {
    const productsRef = collection( db, "productos")
    const q = query(productsRef, where("category", "==", idCategory))
    getDocs(q)
            .then((productsDb) => {
                const data = productsDb.docs.map( (product) => {
                    return{ id: product.id, ...product.data()}
                })

                setProducts(data)
            })
}
useEffect( () => {
    if(idCategory){
        getProductByCategory()
    }else{
        getProducts()
    }

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