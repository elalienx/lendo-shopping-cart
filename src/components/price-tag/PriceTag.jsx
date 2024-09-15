// Node modules
import PropTypes from "prop-types";

// Project files
import "./price-tag.css";

PriceTag.propTypes = {
  /** The product price. */
  ammount: PropTypes.number.isRequired,
};

/**
 * In the future, currency can be a prop.
 */
export default function PriceTag({ ammount }) {
  return (
    <span className="price-tag">
      <span className="ammount">{ammount}</span>
      <small className="currency">SEK</small>
    </span>
  );
}
