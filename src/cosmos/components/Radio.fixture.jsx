// Project files
import Radio from "../../components/input-radio/Radio";

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
  Default: <Radio item={defaultItem} />,
  Active: <Radio item={activeItem} />,
};
