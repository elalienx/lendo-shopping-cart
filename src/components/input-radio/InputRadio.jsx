// Node modules
import PropTypes from "prop-types";

// Project files
import Radio from "./Radio";

InputRadio.propTypes = {
  /** The unique identifier gropping the radio options. */
  id: PropTypes.string.isRequired,

  /** The title of the radio group the user sees. */
  label: PropTypes.string.isRequired,

  /** The value the user has selected, we sent it to vertify if this is the active radio. */
  selectedIndex: PropTypes.number,

  /** The options of this radio group */
  options: PropTypes.arrayOf(PropTypes.string),
};

export default function InputRadio({ id, label, selectedIndex, options }) {
  console.log("id", id, "selectedIndex", selectedIndex, "options:");
  console.log(options);

  // Components
  const Options = options.map((item, index) => (
    <Radio key={`${id}-${index}`} id={id} index={index} selectedIndex={selectedIndex} name={item} />
  ));

  return (
    <label>
      <h3>{label}</h3>
      {Options}
    </label>
  );
}
