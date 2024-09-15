// Project files
import ImageThumbnail from "../image-thumbnail/ImageThumbnail";
import NotAvailable from "../not-available/NotAvailable";
import PriceTag from "../price-tag/PriceTag";
import "./item-checkout.css";

export default function ItemCheckout({ item }) {
  const { id, color, variant, quantity } = item;

  // Properties
  const product = findProduct(id, color, variant);
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
      </div>

      {/* Right */}
      <PriceTag price={subTotal} />
    </article>
  );
}
