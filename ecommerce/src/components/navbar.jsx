import { Link } from "react-router-dom";
import '../styles/navbar.css'
const NavBar = () => {
    return ( 
        <div className="navbar">
            <img className="cart" src="cart.png" alt="" height={50} width={50} />
            <div className="title">
                <h1>E-Commerce</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
     );
}
 
export default NavBar;