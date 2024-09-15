// Project files
import ItemProduct from "../../components/item-product/ItemProduct";
import EmptyState from "../../components/empty-state/EmptyState";
import EmptyStateText from "./empty-state-text.json";
import "./home.css";

export default function Home({ data }) {
  // Components
  const Products = data.map((item) => <ItemProduct key={item.id} item={item} />);

  // Safeguard
  if (!data.length) return <EmptyState item={EmptyStateText} />;

  return (
    <div id="home" className="page">
      <h1>Products</h1>
      <section className="grid">{Products}</section>
    </div>
  );
}
