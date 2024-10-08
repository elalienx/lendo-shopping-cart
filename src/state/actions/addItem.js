/**
 * @param {Cart[]} state
 * @param {CartAction} action
 * @returns
 */
export default function addItem(state, action) {
  const newItem = action.payload;
  const result = [...state, newItem];

  return result;
}
