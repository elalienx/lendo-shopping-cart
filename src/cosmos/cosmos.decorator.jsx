// Project files
import "../styles/style.css"; // global CSS including font styles, colors, spacing, etc.
import "./cosmos-style.css"; // To center tested components on screen

export default function decorator({ children }) {
  return <div id="cosmos">{children}</div>;
}
