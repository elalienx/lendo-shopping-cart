// Project files
import addItem from "./actions/addItem";
import removeItem from "./actions/removeItem";

export default function cartReducer(state, actions) {
  const { type } = actions;

  switch (type) {
    case "add-item":
      return addItem(state, actions);
    case "remove-item":
      return removeItem(state, actions);
    default:
      throw new Error(`The action "${type}" does not exist on cartReducer()`);
  }
}
