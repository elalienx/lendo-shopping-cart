// Node modules
import PropTypes from "prop-types";

const RadioOption = PropTypes.exact({
  /** The unique identifier shared by all radio buttons that belong to a single group. */
  id: PropTypes.string.isRequired,

  /** The text to diplay to the user. */
  name: PropTypes.string.isRequired,

  /** The value that will be saved to the database. */
  value: PropTypes.number.isRequired,

  /** The value the user has selected, we sent it to vertify if this is the active radio. */
  defaultValue: PropTypes.number,
});

export default RadioOption;
