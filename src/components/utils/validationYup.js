import { mixed, object, string } from "yup"

let userSchema = object({
    nombre: string("Su nombre deben ser solo letras").required("Es necesario que ingrese el nombre"),
    celular: mixed().required("Es necesario que ingrese el Celular"),
    email: string().email("Email no tiene el formato correcto").required("Es necesario que ingrese el Email")
})

const validateForm= async (datosForm) => {
    try{
        await userSchema.validate(datosForm)
        return {status: "success"}
    } catch (error){
        return {status: "error", message: error.message}
    }
}

export default validateForm