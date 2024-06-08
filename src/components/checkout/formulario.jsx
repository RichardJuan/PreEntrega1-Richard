const Formulario = ({datosForm, handleSubmitForm, handleChangeInput}) => {
    return (
            <form onSubmit={handleSubmitForm}>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput}/>
                <label>Celular:</label>
                <input type="text" name="celular" value={datosForm.celular} onChange={handleChangeInput}/>
                <label>Email:</label>
                <input type="email" name="email" value={datosForm.email} onChange={handleChangeInput}/>
                <button type="submit">Enviar</button>
            </form>
    )
}
export default Formulario