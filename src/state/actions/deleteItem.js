/**
 * @param {Cart[]} state
 * @param {CartAction} action
 * @returns
 */
export default function deleteItem(state, action) {
  const index = action.payload;
  const result = [...state];
  result.splice(index, 1);

  return result;
}
