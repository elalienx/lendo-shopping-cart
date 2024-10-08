// Node modules
import PropTypes from "prop-types";

// Project files
import ProductOption from "./ProductOption";

const Product = {
  item: PropTypes.exact({
    /** Item ID for navigation. */
    id: PropTypes.number.isRequired,

    /** The product name. */
    name: PropTypes.string.isRequired,

    /** The manufacturer name. */
    brand: PropTypes.string.isRequired,

    /** The product price as a string. */
    price: PropTypes.string.isRequired,

    /** To see if the product is available. If not, show a warning and dissable link. */
    available: PropTypes.bool.isRequired,

    /** The product weight, could be used in the future to calculate shipping costs. */
    weight: PropTypes.number.isRequired,

    /** The sub-variants of each product */
    options: ProductOption,
  }),
};

export default Product;
