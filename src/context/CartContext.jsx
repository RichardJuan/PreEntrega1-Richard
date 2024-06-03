import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarProducto = (nuevoProducto) => {
        setCarrito([ ...carrito, nuevoProducto])
    }

    const cantidadTotal = () => {
        const cantidadTotalProductos = carrito.reduce((total, producto) => total + producto.quantity, 0)
        return cantidadTotalProductos
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    return(
        <CartContext.Provider value={{carrito, agregarProducto, cantidadTotal, vaciarCarrito}} >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }