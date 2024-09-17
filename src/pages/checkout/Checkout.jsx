// Project files
import Button from "../../components/button/Button";
import EmptyState from "../../components/empty-state/EmptyState";
import ItemCart from "../../components/item-cart/ItemCart";
import PriceTag from "../../components/price-tag/PriceTag";
import { useCart } from "../../state/CartContext";
import EmptyStateText from "./empty-state-text.json";
import "./checkout.css";

export default function Checkout({ data }) {
  // Global state
  const { cart, dispatch } = useCart();

  // Properties
  const products = cart.map((item) => data.find((product) => product.id === item.id));
  const prices = products.map((item) => Number(item.price));
  const quantities = cart.map((item) => item.quantity);
  const grandTotal = prices.reduce((sum, price, index) => sum + price * quantities[index], 0);

  // Safeguards
  if (!cart.length) return <EmptyState item={EmptyStateText} />;

  // Components
  const Items = cart.map((item, index) => <ItemCart key={index} product={products[index]} item={item} index={index} dispatch={dispatch} />);

  return (
    <div id="checkout" className="page">
      <div className="content-group">
        <h1>Your Cart</h1>
        <small>{cart.length} items in cart</small>
        {Items}
        <section className="grand-total">
          <span className="label">Grand total:</span>
          <PriceTag price={grandTotal} />
        </section>
        <Button label="Proceed to payment" icon="cash-register" onClick={() => alert("End of demo 🎉")} />
      </div>
    </div>
  );
}
