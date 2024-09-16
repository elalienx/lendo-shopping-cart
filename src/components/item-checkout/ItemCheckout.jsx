// Project files
import ImageThumbnail from "../image-thumbnail/ImageThumbnail";
import NotAvailable from "../not-available/NotAvailable";
import ButtonCircle from "../../components/button-circle/ButtonCircle";
import PriceTag from "../price-tag/PriceTag";
import "./item-checkout.css";

export default function ItemCheckout({ product, item, index, dispatch }) {
  const { color, quantity } = item;

  // Safeguards
  if (!product) return <NotAvailable />;

  // Derived state
  const option = product.options[color]; // color acts as index
  const quantityAvailable = option.quantity;
  const subTotal = product.price * quantity;

  return (
    <article className="item-checkout">
      {/* Left */}
      <ImageThumbnail />

      {/* Middle */}
      <div className="text-group">
        <p className="name">{product.name}</p>
        <div className="buttons">
          Quantity: {quantity}
          <ButtonCircle
            icon="minus"
            onClick={() => dispatch({ type: "remove-quantity", payload: index })}
            disabled={quantity === 1}
          />
          <ButtonCircle
            icon="plus"
            onClick={() => dispatch({ type: "add-quantity", payload: { index, option } })}
            disabled={quantity >= quantityAvailable}
          />
          <ButtonCircle icon="trash-can" onClick={() => dispatch({ type: "delete-item", payload: index })} />
        </div>
      </div>

      {/* Right */}
      <PriceTag price={subTotal} />
    </article>
  );
}
