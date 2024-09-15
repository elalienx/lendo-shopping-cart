// Project files
import InputRadio from "../../components/input-radio/InputRadio";

// Properties
const colorOptions = ["red", "green", "blue"];
const storageOptions = ["250", "500", "1000"];

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
      label="Choose an storage size:"
      selectedIndex={1}
      options={storageOptions}
    />
  ),
};
