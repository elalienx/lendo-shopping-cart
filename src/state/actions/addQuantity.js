export default function addQuantity(state, action) {
  const { index, option } = action.payload;

  const newState = [...state];
  const selectedCartItem = { ...newState[index] };

  if (selectedCartItem.quantity < option.quantity) {
    selectedCartItem.quantity++;
  }

  newState[index] = selectedCartItem;

  return newState;
}
