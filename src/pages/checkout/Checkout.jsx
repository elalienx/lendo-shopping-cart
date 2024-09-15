// Project files
import Button from "../../components/button/Button";
import EmptyState from "../../components/empty-state/EmptyState";
import EmptyStateText from "./empty-state-text.json";
import PriceTag from "../../components/price-tag/PriceTag";
import { useCart } from "../../state/CartContext";
import "./checkout.css";

export default function Checkout() {
  // Global state
  const { cart, dispatch } = useCart();

  // Safeguards
  if (!cart.length) return <EmptyState item={EmptyStateText} />;

  return (
    <div id="checkout" className="page">
      <div className="content-group">
        <h1>Your Cart</h1>
        <small>{cart.length} items in cart</small>
        <section className="grid">{/* CheckoutItems go here */}</section>
        <section className="grand-total">
          <span className="label">Grand Total:</span>
          <PriceTag price={0} />
        </section>
        <Button label="Proceed to payment" icon="cash-register" onClick={() => alert("End of demo 🎉")} />
      </div>
    </div>
  );
}
