export default function removeQuantity(state, action) {
  const index = action.payload;
  const result = [...state];

  if (result[index].quantity > 1) {
    result[index].quantity--;
  }

  return result;
}
