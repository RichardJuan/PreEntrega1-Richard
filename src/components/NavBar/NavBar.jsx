import "./navbar.css"
import CartWidget from "../CartWidget/cartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="superiorHead">
                <h1>Grow <img src="./multimedia/komodo.png" className="logo" /> Shop</h1>
                <CartWidget />
            </div>
            <div>               
                <Link className="categoria" to="/category/teams">TEAMS</Link>
                <Link className="categoria" to="/category/starPlayers">STAR PLAYERS</Link>
                <Link className="categoria" to ="/category/hallOfFame">HALL OF FAME</Link>         
            </div>
        </header>
    );
}

export default Navbar