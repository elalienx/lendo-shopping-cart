// Node modules
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

// Project files
import Button from "../../components/button/Button";
import EmptyState from "../../components/empty-state/EmptyState";
import ImageThumbail from "../../components/image-thumbnail/ImageThumbnail";
import InputRadio from "../../components/input-radio/InputRadio";
import InputRadioColor from "../../components/input-radio-color/InputRadioColor";
import PriceTag from "../../components/price-tag/PriceTag";
import QuantityChooser from "./components/QuantityChooser";
import ProductPropType from "../../propTypes/Product";
import extractVariant from "../../scripts/extractVariant";
import { useCart } from "../../state/CartContext";
import EmptyStateTexts from "./empty-state-texts.json";
import "./product.css";

Product.propTypes = {
  data: PropTypes.arrayOf(ProductPropType.item).isRequired,
};

export default function Product({ data }) {
  // Global state
  const navigate = useNavigate();
  const { id } = useParams();
  const { dispatch } = useCart();

  // Local state
  const [color, setColor] = useState(0); // color acts as the option index
  const [variant, setVariant] = useState(-1);
  const [quantity, setQuantity] = useState(1);

  // Properties
  const product = data.find((item) => item.id === Number(id));

  // Safeguards
  if (!product) return <EmptyState item={EmptyStateTexts.does_not_exist} />;
  if (!product.available) return <EmptyState item={EmptyStateTexts.out_of_stock} />;

  // Derived properties
  const additionalDetails = `By ${product.brand} | Weight ${product.weight}`;
  const colors = product.options.flatMap((item) => item.color);
  const selectedOption = product.options[color];
  const variants = extractVariant(selectedOption, ["color", "quantity"]);
  const availableQuantity = selectedOption.quantity;
  const cssUnitsLeft = availableQuantity === 0 ? "no-units-left" : "";
  const finalPrice = Number(product.price) * quantity;

  // Button enabling
  const hasVariant = variants.length === 0 || (variants.length > 0 && variant > -1);
  const hasQuantity = quantity > 0;
  const buttonIsEnabled = hasVariant && hasQuantity;

  // Methods
  useEffect(() => {
    setVariant(-1);
    setQuantity(availableQuantity === 0 ? 0 : 1);
  }, [color]);

  function addToCart() {
    const newItem = { id: Number(id), color, variant, quantity };
    const toastStyle = { backgroundColor: "#29c768", color: "white" };

    dispatch({ type: "add-item", payload: newItem });
    toast("Product added to cart", { position: "bottom-right", style: toastStyle });
    navigate("/");
  }

  return (
    <div id="product" className="page">
      <ImageThumbail />
      <section className="content-group">
        <h1>{product.name}</h1>
        <small>{additionalDetails}</small>
        <InputRadioColor label="Color:" id="color" state={[color, setColor]} options={colors} />
        {variants.length > 0 && <InputRadio label="Variant:" id={`variant-${color}`} state={[variant, setVariant]} options={variants} />}
        {quantity > 0 && <QuantityChooser state={[quantity, setQuantity]} availableQuantity={availableQuantity} />}
        <small className={cssUnitsLeft}>{availableQuantity} units left</small>
        {quantity > 0 && <PriceTag price={finalPrice} />}
        <Button label="Add to cart" icon="bag-shopping" disabled={!buttonIsEnabled} onClick={addToCart} />
      </section>
    </div>
  );
}
