/**
 * @param {Cart[]} state
 * @param {CartAction} action
 * @returns
 */
export default function deleteItem(state, action) {
  const indexToRemove = action.payload;
  const result = [...state];
  result.splice(indexToRemove, 1);

  return result;
}
