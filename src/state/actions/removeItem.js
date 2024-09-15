export default function removeItem(state, action) {
  const indexToRemove = action.payload;
  const result = [...state];
  result.splice(indexToRemove, 1);

  return result;
}
