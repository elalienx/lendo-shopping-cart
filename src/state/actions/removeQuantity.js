export default function removeQuantity(state, action) {
  const index = action.payload;

  const newState = [...state];
  const selectedCartItem = { ...newState[index] };

  if (selectedCartItem.quantity > 1) {
    selectedCartItem.quantity -= 1;
  }

  newState[index] = selectedCartItem;

  return newState;
}
