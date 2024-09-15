// Node modules
import PropTypes from "prop-types";

const RadioName = PropTypes.oneOfType([
  PropTypes.string, // example: for storage ["250", "500", "1000"]
  PropTypes.number, // example: for power [6.5, 9.5]
]);

export default RadioName;
