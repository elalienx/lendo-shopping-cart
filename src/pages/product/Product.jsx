// Node modules
import { useParams } from "react-router-dom";
import { useState } from "react";

// Project files
import Button from "../../components/button/Button";
import EmptyState from "../../components/empty-state/EmptyState";
import ImageThumbail from "../../components/image-thumbnail/ImageThumbnail";
import PriceTag from "../../components/price-tag/PriceTag";
import InputRadio from "../../components/input-radio/InputRadio";
import EmptyStateTexts from "./empty-state-texts.json";
import "./product.css";

export default function Product({ data }) {
  // Global state
  const { id } = useParams();

  // Local state
  const [color, setColor] = useState(0); // color acts as the option index
  const [variant, setVariant] = useState(-1);
  const [quantity, setQuantity] = useState(1);

  // Properties
  const product = data.find((item) => item.id === Number(id));

  // Safeguards
  if (!product) return <EmptyState item={EmptyStateTexts.invalid_product} />;
  if (!product.available) return <EmptyState item={EmptyStateTexts.not_available} />;

  // Derived properties
  const additionalDetails = `By ${product.brand} | Weight ${product.weight}`;
  const colors = product.options.map((item) => item.color).flat();
  const selectedOption = product.options[color];
  // const selectedVariant = selectedOption.map((item) => item);
  const availableQuantity = selectedOption.quantity;
  const finalPrice = Number(product.price) * quantity;
  const buttonIsEnabled = false;

  return (
    <div id="product" className="page">
      <ImageThumbail />
      <section className="content-group">
        <h1>{product.name}</h1>
        <small>{additionalDetails}</small>
        <InputRadio label="Choose a color:" id="color" state={[color, setColor]} options={colors} />
        <InputRadio label="Choose a variant:" id="variant" state={[variant, setVariant]} options={[]} />
        {/* 3. Quantity chooser */}
        {/* 4. Units left warning */}
        <small>{availableQuantity} units left</small>
        <PriceTag price={finalPrice} />
        <Button label="Add to cart" icon="bag-shopping" disabled={!buttonIsEnabled} />
      </section>
    </div>
  );
}
