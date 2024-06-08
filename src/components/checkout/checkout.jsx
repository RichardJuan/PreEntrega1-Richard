import { useState } from "react"
import Formulario from "./formulario"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import db from "../../db/db";
import { Timestamp } from "firebase/firestore";
import { toast, useToast } from "react-toastify";
import validateForm from "../utils/validationYup";

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        celular: "",
        email:""
    })
    const [idOrden, setIdOrden] = useState(null)
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDatosForm({...datosForm, [event.target.name]: event.target.value})
    }
    const generarOrden = (orden) => {
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
            .then((respuesta) => setIdOrden(respuesta.id))
            .catch((error) => console.log(error))
            .finally(() => {
                updateStock()
                vaciarCarrito()
            })
    }
    
const handleSubmitForm = async (event) => {
    event.preventDefault()
    const orden = {
        comprador: { ...datosForm},
        productos: [ ...carrito],
        fecha: Timestamp.fromDate(new Date()),
        total: precioTotal()
    }
    try{
        const response = await validateForm(datosForm)
        if (response.status === "success"){
            generarOrden(orden)
        }else{
            toast.warning(response.message)
        }
    }catch (error){
        toast.error("Error")
    }
    }


    const updateStock = () => {
        carrito.map((productoCarrito)=>{
            let quantity = productoCarrito.quantity
            delete productoCarrito.quantity

            const productoRef = doc(db, "productos", productoCarrito.id)
            setDoc(productoRef, {...productoCarrito, stock: productoCarrito.stock - quantity})
                .then(() => console.log("stock actualizado"))
                .catch((error) => toast.error("Error"))
        })
    }

    return(
        <div>
            {
            idOrden ? (
                <div>
                    <h2> Compra exitosa!</h2>
                    <p>Guarde el Id de su orden : {idOrden}</p>
                </div>
            ) : (
                <Formulario datosForm={datosForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/>
            )}
        </div>
    )
}

export default Checkout