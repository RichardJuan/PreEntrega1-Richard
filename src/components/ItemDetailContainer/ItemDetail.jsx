import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {
    return(
        <div style={{ display: "flex"}}>
            <img src={product.imagen} style={{ width: "50%", height: "auto"}} />
            <div>
                <p>{product.nombre}</p>
                <p>Precio</p>
                <h2>${product.precio}</h2>
                <ItemCount stock={product.stock} />
            </div>
        </div>
    )
}

export default ItemDetail