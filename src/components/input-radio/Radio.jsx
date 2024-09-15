// Node modules
import PropTypes from "prop-types";

// Project files
import "./radio.css";

Radio.propTypes = {
  /** The unique identifier shared by all radio buttons that belong to a single group. */
  id: PropTypes.string.isRequired,

  /** The position in the array of this option. */
  index: PropTypes.number.isRequired,

  /** The value the user has selected, we sent it to vertify if this is the active radio. */
  selectedIndex: PropTypes.number,

  /** The text to diplay to the user. */
  name: PropTypes.string.isRequired,
};

export default function Radio({ id, index, selectedIndex, name }) {
  return (
    <label className="radio">
      <input type="radio" name={id} value={index} defaultChecked={index === selectedIndex} />
      {name}
    </label>
  );
}
