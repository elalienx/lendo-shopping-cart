// Project files
import Radio from "../../components/input-radio/Radio";

// Properties
const id = "color";
const selectedIndex = 1; // to enable the blue item

export default {
  Default: <Radio id={id} name="Red" index={0} selectedIndex={selectedIndex} />,
  Active: <Radio id={id} name="Blue" index={1} selectedIndex={selectedIndex} />,
};
