// Node modules
import toast from "react-hot-toast";

// Project files
import ImageThumbnail from "../image-thumbnail/ImageThumbnail";
import NotAvailable from "../not-available/NotAvailable";
import ButtonCircle from "../button-circle/ButtonCircle";
import PriceTag from "../price-tag/PriceTag";
import "./item-cart.css";

export default function ItemCart({ product, item, index, dispatch }) {
  const { color, quantity } = item;

  // Safeguards
  if (!product) return <NotAvailable />;

  // Properties
  const option = product.options[color]; // color acts as index
  const quantityAvailable = option.quantity;
  const subTotal = product.price * quantity;
  const buttonMinusIsEnabled = quantity === 1;
  const buttonAddIsEnabled = quantity >= quantityAvailable;

  // Methods
  function onDelete() {
    const toastStyle = { backgroundColor: "#e70d5a", color: "white" };

    toast("Deleted item from cart", { position: "bottom-right", style: toastStyle });
    dispatch({ type: "delete-item", payload: index });
  }

  return (
    <article className="item-cart">
      {/* Left */}
      <ImageThumbnail />

      {/* Middle */}
      <div className="text-group">
        <p className="name">{product.name}</p>
        <div className="buttons">
          Quantity: {quantity}
          <ButtonCircle icon="minus" onClick={() => dispatch({ type: "remove-quantity", payload: index })} disabled={buttonMinusIsEnabled} />
          <ButtonCircle icon="plus" onClick={() => dispatch({ type: "add-quantity", payload: { index, option } })} disabled={buttonAddIsEnabled} />
          <ButtonCircle icon="trash-can" onClick={() => onDelete()} />
        </div>
      </div>

      {/* Right */}
      <PriceTag price={subTotal} />
    </article>
  );
}
