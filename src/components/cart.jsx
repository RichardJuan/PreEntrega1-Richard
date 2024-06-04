import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "bootstrap";

const Cart = () => {
    const {carrito, vaciarCarrito, borrarProductoPorId, precioTotal} = useContext(CartContext)
    return(
        <div>
            {
                carrito.map((productoCarrito) => (
                    <div key={productoCarrito.id} style={{ display: "flex", justifyContent: "space-around"}}>
                        <img src={productoCarrito.imagen} />
                        <h4>{productoCarrito.nombre}</h4>
                        <h6>Cantidad = {productoCarrito.quantity}</h6>
                        <h6>Precio unitario = ${productoCarrito.precio}</h6>
                        <h6>Precio parcial = ${productoCarrito.precio * productoCarrito.quantity}</h6>
                        <button onClick= { () => borrarProductoPorId(productoCarrito.id)}>Borrar</button>
                    </div>
                ))
            }
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
            <h2>$ { precioTotal() }</h2>
        </div>
    );
}
export default Cart