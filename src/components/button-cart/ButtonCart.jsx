// Node modules
import PropTypes from "prop-types";

// Project files
import FontAwesomeIcon from "../font-awesome/FontAwesomeIcon";
import Badge from "../badge/Badge";
import "./button-cart.css";

ButtonCart.propTypes = {
  /** The number of items the user has in the shopping cart. */
  number: PropTypes.number.isRequired,
};

/**
 * About:
 * This is a personal decision, I rather have this a "dumb" div and put the button Router logic in the parent component Navbar.
 * So this component is easily tested on Cosmos and/or ported to other frameworks like Angular, etc.
 */
export default function ButtonCart({ number }) {
  return (
    <div className="button-cart">
      <FontAwesomeIcon icon={["fas", "bag-shopping"]} />
      <span className="label">Cart</span>
      <Badge number={number} />
    </div>
  );
}
