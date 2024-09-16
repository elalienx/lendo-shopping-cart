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
          <ButtonCircle icon="minus" onClick={() => alert("min")} />
          <ButtonCircle
            icon="plus"
            onClick={() => dispatch({ type: "add-quantity", payload: { index, option, ammount: 1 } })}
          />
          <ButtonCircle icon="trash-can" onClick={() => dispatch({ type: "delete-item", payload: index })} />
        </div>
      </div>

      {/* Right */}
      <PriceTag price={subTotal} />
    </article>
  );
}
