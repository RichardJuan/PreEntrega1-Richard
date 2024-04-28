import "./navbar.css"
import CartWidget from "./cartWidget";

const Navbar = () => {
    return (
        <header>
            <div className="superiorHead">
                <h1>Grow <img src="./multimedia/komodo.png" className="logo" /> Shop</h1>
                <CartWidget />
            </div>
            <div>               
                <li><a href="#">ALL-STARS</a></li>
                <li><a href="#">STAR PLAYERS</a></li>
                <li><a href="#">RED LINE</a></li>
                <li><a href="#">DEALER DEAL</a></li>
                <li><a href="#">HALL OF FAME</a></li>
                <li><a href="#">PSYCHO</a></li>
                <li><a href="#">DREAM TEAM</a></li>            
            </div>
        </header>
    );
}

export default Navbar