export default function cartReducer(state, actions) {
  const { type } = actions;

  switch (type) {
    case "add-item":
      return changeAge(state, actions);
    case "update-item-quantity":
      return updateItemQuantity(state, actions); // pending
    case "remove-item":
      return removeItem(state, actions);
    default:
      throw new Error();
  }
}
