// Project files
import ButtonCircle from "../../../components/button-circle/ButtonCircle";
import "./quantity-chooser.css";

export default function QuantityChooser({ state, availableQuantity }) {
  const [quantity, setQuantity] = state;

  // Methods
  function addQuantity() {
    if (quantity < availableQuantity) setQuantity(quantity + 1);
  }

  function removeQuantity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    <p className="quantity-chooser">
      Quantity: {quantity}
      <ButtonCircle icon="minus" onClick={() => removeQuantity()} disabled={quantity === 1} />
      <ButtonCircle icon="plus" onClick={() => addQuantity()} disabled={quantity === availableQuantity} />
    </p>
  );
}
