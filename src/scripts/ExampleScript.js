export default function ReturnGreet(name) {
  // Safeguard
  if (name === "") return "Name is missing";

  return `Hello ${name}!`;
}
