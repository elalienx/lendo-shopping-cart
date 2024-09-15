// Node modules
import PropTypes from "prop-types";

// Project files
import RadioOption from "../../propTypes/RadioOption";
import Radio from "./Radio";

InputRadio.prototype = {
  /** The unique identifier gropping the radio options. */
  id: PropTypes.string.isRequired,

  /** The title of the radio group the user sees. */
  label: PropTypes.string.isRequired,

  /** The value the user chooses in the field. */
  defaultValue: PropTypes.number,

  /** The options of this radio group */
  options: PropTypes.arrayOf(RadioOption),
};

export default function InputRadio({ id, label, defaultValue = -1, options }) {
  // Components
  const Options = options.map((item) => (
    <Radio key={`${item.value}-${defaultValue}`} item={{ id, defaultValue, ...item }} />
  ));

  return (
    <label>
      <h3>{label}</h3>
      {Options}
    </label>
  );
}
