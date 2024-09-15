// Node modules
import PropTypes from "prop-types";

/**
 * This prop type is needed to handle the edge case where color is received as an array. Example:
 * - normal: "red"
 * - edge case: ["red"]
 */
const Color = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string),
]).isRequired;

export default Color;
