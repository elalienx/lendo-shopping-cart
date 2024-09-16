export default function addQuantity(state, action) {
  const { index, option, ammount } = action.payload;

  const clonedState = [...state];
  const selectedCartItem = clonedState[index];
  const currentQuantity = selectedCartItem.quantity;
  const availableQuantity = option.quantity;
  const requestedQuantity = currentQuantity + ammount;

  if (requestedQuantity <= availableQuantity) {
    clonedState[index].quantity = requestedQuantity;
  }

  return clonedState;
}
