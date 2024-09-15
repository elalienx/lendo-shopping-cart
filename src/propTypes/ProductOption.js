// Node modules
import PropTypes from "prop-types";

// Project files
import Color from "./Color";

const ProductOption = PropTypes.arrayOf(
  PropTypes.exact({
    /** The color of the product. */
    color: Color,

    /** An optional parameter of certain products */
    power: PropTypes.arrayOf(PropTypes.number),

    /** An optional parameter of certain products */
    storage: PropTypes.arrayOf(PropTypes.string),

    /** The ammount of units available */
    quantity: PropTypes.number.isRequired,
  })
);

export default ProductOption;
