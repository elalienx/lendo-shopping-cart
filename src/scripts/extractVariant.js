export default function extractVariant(option, keysToRemove) {
  const cloneOption = { ...option };
  let result;

  keysToRemove.forEach((key) => delete cloneOption[key]);
  result = Object.values(cloneOption)[0] || [];

  return result;
}
