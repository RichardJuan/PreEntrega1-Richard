import { useState, useEffect } from "react";
import obtenerProductos from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState ({})
    const { idProduct } = useParams()

    useEffect(() => {
        obtenerProductos()
        .then((respuesta) => {
            const productFind = respuesta.find((productRes) => productRes.id === Number(idProduct));
            setProduct(productFind);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log("Final de promesa2");
        });
    }, []);

    return(
        <ItemDetail product={product} />
    )
};

export default ItemDetailContainer;