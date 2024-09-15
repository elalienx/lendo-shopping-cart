// Project files
import ImageThumbnail from "../image-thumbnail/ImageThumbnail";
import NotAvailable from "../not-available/NotAvailable";
import ButtonCircle from "../../components/button-circle/ButtonCircle";
import PriceTag from "../price-tag/PriceTag";
import "./item-checkout.css";

export default function ItemCheckout({ product, item, onClick }) {
  const { id, quantity } = item;

  // Properties
  if (!product) return <NotAvailable />;

  // Derived state
  const subTotal = product.price * quantity;

  return (
    <article className="item-checkout">
      {/* Left */}
      <ImageThumbnail />

      {/* Middle */}
      <div className="text-group">
        <p className="name">{product.name}</p>
        <ButtonCircle icon="trash-can" onClick={onClick} />
      </div>

      {/* Right */}
      <PriceTag price={subTotal} />
    </article>
  );
}
