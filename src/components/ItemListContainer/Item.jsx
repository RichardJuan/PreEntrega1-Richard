import { Link } from "react-router-dom";
const Item = ({product}) => {
    return (
        <div className="card">
            <Link to={"/detail/" + product.id}>
                <img src={product.imagen} style={{ width: "20%", height: "auto"}} />
                <p>{product.nombre}</p>
                <p>Precio</p>
                <h2>${product.precio}</h2>
                </Link>
        </div>
    )
};

export default Item