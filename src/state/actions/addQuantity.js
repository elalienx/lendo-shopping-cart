export default function addQuantity(state, action) {
  const { index, option } = action.payload;

  const clonedState = [...state];

  if (clonedState[index].quantity < option.quantity) {
    clonedState[index].quantity++;
  }

  return clonedState;
}
