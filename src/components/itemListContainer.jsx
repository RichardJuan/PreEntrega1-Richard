import './itemListContainer.css'
const itemListContainer = (props) => {
    const {saludo} = props

    return(
        <h3>{saludo}</h3>
    )
}

export default itemListContainer