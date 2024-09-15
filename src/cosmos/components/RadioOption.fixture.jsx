// Project files
import RadioOption from "../../components/input-radio/RadioOption";

// Properties
const defaultItem = {
  id: 1,
  name: "red",
  value: 1, // same as id
  defaultValue: 0,
};
const activeItem = {
  id: 0,
  name: "blue",
  value: 0, // same as id
  defaultValue: 0, // same as id if you want to be active
};

export default {
  Default: <RadioOption item={defaultItem} />,
  Active: <RadioOption item={activeItem} />,
};
