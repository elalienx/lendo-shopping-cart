// Node modules
import { Link } from "react-router-dom";

// Project files
import Logo from "../../assets/images/logo.svg";
import "./navigation-bar.css";

export default function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <Link to="/">
        <img
          alt="The company logo with the text Shopping Cart"
          className="logo"
          src={Logo}
        />
      </Link>
      <Link to="checkout">
        <span>Cart</span>
      </Link>
    </nav>
  );
}
