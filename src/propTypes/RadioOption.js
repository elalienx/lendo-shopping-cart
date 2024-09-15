// Node modules
import PropTypes from "prop-types";

const RadioOption = PropTypes.exact({
  /** The unique identifier shared by all radio buttons that belong to a single group. */
  id: PropTypes.string.isRequired,

  /** The position in the array of this option. */
  index: PropTypes.number.isRequired,

  /** The value the user has selected, we sent it to vertify if this is the active radio. */
  selectedIndex: PropTypes.number,

  /** The text to diplay to the user. */
  name: PropTypes.string.isRequired,
});

export default RadioOption;
