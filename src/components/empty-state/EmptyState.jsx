// Node modules
import PropTypes from "prop-types";

// Project files
import "./empty-state.css";

EmptyState.propTypes = {
  /** A clear title explaining what happened. */
  title: PropTypes.string.isRequired,
  /** Add some humor to further explain the situation. */
  text: PropTypes.string.isRequired,
  /** An image related to the text above. */
  image: PropTypes.string.isRequired,
  /** Description of the image for accessibility. It's optional as it won't break the componet, but please add it. */
  alt: PropTypes.string,
};

export default function EmptyState(title, text, image, alt) {
  return (
    <div className="empty-state">
      <img src={image} alt={alt} />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
