// Project files
import EmptyState from "../../components/empty-state/EmptyState";
import EmptyStateText from "./empty-state-text.json";
import { useCart } from "../../state/CartContext";
import "./checkout.css";

export default function Checkout() {
  // Global state
  const { cart, dispatch } = useCart();

  // Safeguards
  if (!cart.length) return <EmptyState item={EmptyStateText} />;

  return (
    <div id="checkout" className="page">
      <h1>Your Cart</h1>
    </div>
  );
}
