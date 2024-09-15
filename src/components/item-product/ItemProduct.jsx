// Node modules
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Project files
import ImageThumbnail from "../image-thumbnail/ImageThumbnail";
import NotAvailable from "../not-available/NotAvailable";
import PriceTag from "../price-tag/PriceTag";
import "./item-product.css";

// Refactor to a separate file
ItemProduct.propTypes = {
  item: PropTypes.exact({
    /** Item ID for navigation. */
    id: PropTypes.number.isRequired,

    /** The product name. */
    name: PropTypes.string.isRequired,

    /** The manufacturer name. */
    brand: PropTypes.string.isRequired,

    /** To see if the product is available. If not, show a warning and dissable link. */
    available: PropTypes.bool.isRequired,

    /** The product price as a string. */
    price: PropTypes.number.isRequired,
  }),
};

export default function ItemProduct({ item }) {
  const { id, name, brand, available, price } = item;

  // Properties
  const link = available ? `products/${id}` : "#";

  return (
    <Link to={link} className="item-product">
      {/* Left mobile, top desktop */}
      <ImageThumbnail />

      {/* Middle */}
      <div className="text-group">
        <p>{name}</p>
        <small>{brand}</small>
        {!available && <NotAvailable />}
      </div>

      {/* Right mobile, bottom desktop */}
      <PriceTag price={price} />
    </Link>
  );
}
