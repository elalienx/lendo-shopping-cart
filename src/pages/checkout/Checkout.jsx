// Project files
import Button from "../../components/button/Button";
import EmptyState from "../../components/empty-state/EmptyState";
import EmptyStateText from "./empty-state-text.json";
import PriceTag from "../../components/price-tag/PriceTag";
import ItemCheckout from "../../components/item-checkout/ItemCheckout";
import { useCart } from "../../state/CartContext";
import "./checkout.css";

export default function Checkout({ data }) {
  // Global state
  const { cart, dispatch } = useCart();

  // Safeguards
  if (!cart.length) return <EmptyState item={EmptyStateText} />;

  // Components
  const Items = cart.map((item, index) => <ItemCheckout key={index} inventory={data} item={item} />);

  return (
    <div id="checkout" className="page">
      <div className="content-group">
        <h1>Your Cart</h1>
        <small>{cart.length} items in cart</small>
        {Items}
        <section className="grand-total">
          <span className="label">Grand total:</span>
          <PriceTag price={0} />
        </section>
        <Button label="Proceed to payment" icon="cash-register" onClick={() => alert("End of demo 🎉")} />
      </div>
    </div>
  );
}
