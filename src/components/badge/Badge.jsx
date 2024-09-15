// Node modules
import PropTypes from "prop-types";

// Project files
import "./badge.css";

Badge.propTypes = {
  /** A number to display in this notification badge. */
  number: PropTypes.number.isRequired,
};

export default function Badge({ number }) {
  return <div className="badge">{number}</div>;
}
