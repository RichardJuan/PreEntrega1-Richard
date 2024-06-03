import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({product}) => {

    const{agregarProducto} = useContext(CartContext)

    const addProduct = (count) => {
        const productCart = { ...product, quantity: count}
        agregarProducto(productCart)
    }

    return(
        <div style={{ display: "flex"}}>
            <img src={product.imagen} style={{ width: "50%", height: "auto"}} />
            <div>
                <p>{product.nombre}</p>
                <p>Precio</p>
                <h2>${product.precio}</h2>
                <ItemCount stock={product.stock} addProduct={addProduct}/>
            </div>
        </div>
    )
}

export default ItemDetail