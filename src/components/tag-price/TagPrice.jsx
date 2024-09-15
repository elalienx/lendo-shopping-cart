// Node modules
import PropTypes from "prop-types";

// Project files
import "./tag-price.css";

TagPrice.propTypes = {
  /** The product price. */
  ammount: PropTypes.number.isRequired,
};

/**
 * In the future, currency can be a prop.
 */
export default function TagPrice({ ammount }) {
  return (
    <span className="tag-price">
      <span className="ammount">{ammount}</span>
      <small className="currency">SEK</small>
    </span>
  );
}
