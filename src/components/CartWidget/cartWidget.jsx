import "./cartWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext)

    let cantidad = cantidadTotal()
    return (

        <Link to='/cart'>
            <button>
                <p>
                <img src="./multimedia/carrito-de-compras.png"/>
                { cantidad >=1 && cantidad}
                </p>
            </button>
        </Link>
        )
}
export default CartWidget