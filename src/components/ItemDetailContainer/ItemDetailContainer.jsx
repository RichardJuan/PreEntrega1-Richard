import { useState, useEffect } from "react";
import obtenerProductos from "../../data/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState ({})

    useEffect(() => {
        obtenerProductos()
        .then((respuesta) => {
            const productFind = respuesta.find((productRes) => productRes.id === 467)
            setProduct(productFind)
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