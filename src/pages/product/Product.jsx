// Node modules
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Project files
import Button from "../../components/button/Button";
import EmptyState from "../../components/empty-state/EmptyState";
import ImageThumbail from "../../components/image-thumbnail/ImageThumbnail";
import PriceTag from "../../components/price-tag/PriceTag";
import InputRadio from "../../components/input-radio/InputRadio";
import extractVariant from "../../scripts/extractVariant";
import { useCart } from "../../state/CartContext";
import EmptyStateTexts from "./empty-state-texts.json";
import "./product.css";

export default function Product({ data }) {
  // Global state
  const navigate = useNavigate();
  const { id } = useParams();
  const { dispatch } = useCart();

  // Local state
  const [color, setColor] = useState(0); // color acts as the option index
  const [variant, setVariant] = useState(-1);
  const [quantity, setQuantity] = useState(1);

  /**
   * Note to myself:
   * Shall I use an useEffect() to reset variant and quantity to 1 when color changes?
   */

  // Properties
  const product = data.find((item) => item.id === Number(id));

  // Safeguards
  if (!product) return <EmptyState item={EmptyStateTexts.invalid_product} />;
  if (!product.available) return <EmptyState item={EmptyStateTexts.not_available} />;

  // Derived properties
  const additionalDetails = `By ${product.brand} | Weight ${product.weight}`;
  const colors = product.options.map((item) => item.color).flat();
  const selectedOption = product.options[color];
  const variants = extractVariant(selectedOption, ["color", "quantity"]);
  const availableQuantity = selectedOption.quantity;
  const finalPrice = Number(product.price) * quantity;
  const buttonIsEnabled = color > -1 && variant > -1 && quantity > 0;

  // Methods
  useEffect(() => {
    const newQuantity = availableQuantity === 0 ? 0 : 1;

    setVariant(-1); // unset variant as some products have less variants available
    setQuantity(newQuantity);
  }, [color]);

  function addToCart() {
    const newItem = { id, color, variant, quantity };

    dispatch({ type: "add-item", payload: newItem });
    navigate("/");
  }

  return (
    <div id="product" className="page">
      <ImageThumbail />
      <section className="content-group">
        <h1>{product.name}</h1>
        <small>{additionalDetails}</small>
        <InputRadio label="Choose a color:" id="color" state={[color, setColor]} options={colors} />
        <InputRadio label="Choose a variant:" id="variant" state={[variant, setVariant]} options={variants} />
        <p>Quantity: {quantity}</p>
        <small>{availableQuantity} units left</small>
        <PriceTag price={finalPrice} />
        <Button label="Add to cart" icon="bag-shopping" disabled={!buttonIsEnabled} onClick={addToCart} />
      </section>
      {/* Debug */}
      <hr />
      <p>color: {color}</p>
      <p>variant: {variant}</p>
      <p>quantity: {quantity}</p>
    </div>
  );
}
