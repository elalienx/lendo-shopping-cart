// Project files
import InputRadio from "../../components/input-radio/InputRadio";

// Properties
const colorOptions = [
  { name: "Red", value: 0 },
  { name: "Green", value: 1 },
  { name: "Blue", value: 2 },
];
const storageOptions = [
  { name: "250", value: 0 },
  { name: "500", value: 1 },
  { name: "1000", value: 2 },
];

export default {
  Default: (
    <InputRadio
      id="color"
      label="Choose your favorite color from this list:"
      options={colorOptions}
    />
  ),
  Active: (
    <InputRadio
      id="storage"
      defaultValue={1}
      label="Choose an storage size:"
      options={storageOptions}
    />
  ),
};
