// Node modules
import PropTypes from "prop-types";

// Project files
import "./price-tag.css";

PriceTag.propTypes = {
  /** The product price. */
  price: PropTypes.number.isRequired,
};

/**
 * In the future, currency can be a prop.
 */
export default function PriceTag({ price }) {
  return (
    <span className="price-tag">
      <span className="price">{price}</span>
      <small className="currency">SEK</small>
    </span>
  );
}
