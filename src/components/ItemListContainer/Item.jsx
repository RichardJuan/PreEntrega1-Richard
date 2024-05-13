const Item = ({product}) => {
    return (
        <div key={product.id}>
                    <img src={product.imagen} style={{ width: "20%", height: "auto"}} />
                    <p>{product.nombre}</p>
                    <p>Precio</p>
                    <h2>${product.precio}</h2>
        </div>
    )
};

export default Item