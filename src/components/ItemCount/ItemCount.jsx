import { useState } from "react"

const ItemCount = ({ stock, addProduct }) => {
    const [ count, setCount] = useState(1)

    const restar = () => {
        if(count > 1){
            setCount( count - 1 )
        }
    }
    const sumar = () => {
        if( count < stock ){
            setCount ( count + 1)
        }
    }
    const añadirAlCarrito = () => {
        console.log( count )
    }
    return (
        <div>
            <button onClick={restar} >-</button>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
            <button onClick={añadirAlCarrito}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount