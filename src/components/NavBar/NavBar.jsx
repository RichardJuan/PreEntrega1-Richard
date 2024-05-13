import "./navbar.css"
import CartWidget from "../CartWidget/cartWidget";

const Navbar = () => {
    return (
        <header>
            <div className="superiorHead">
                <h1>Grow <img src="./multimedia/komodo.png" className="logo" /> Shop</h1>
                <CartWidget />
            </div>
            <div>               
                <li><a href="#">TEAMS</a></li>
                <li><a href="#">STAR PLAYERS</a></li>
                <li><a href="#">HALL OF FAME</a></li>         
                <li><a href="#">RED LINE</a></li>
            </div>
        </header>
    );
}

export default Navbar