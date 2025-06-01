import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header-container">
            <nav className="nav-bar">
                <ul className="list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;