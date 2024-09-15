// Project files
import RadioOption from "../../propTypes/RadioOption";
import "./radio.css";

Radio.propTypes = RadioOption;

export default function Radio({ item }) {
  const { id, name, value, defaultValue } = item;

  return (
    <label className="radio">
      <input type="radio" value={value} name={id} defaultChecked={value === defaultValue} />
      {name}
    </label>
  );
}
