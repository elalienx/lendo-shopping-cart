// Project files
import ItemProduct from "../../components/item-product/ItemProduct";
import EmptyState from "../../components/empty-state/EmptyState";
import EmptyStateText from "./empty-state-text.json";
import "./home.css";

export default function Home({ data }) {
  // Safeguards
  if (!data.length) return <EmptyState item={EmptyStateText} />;

  // Components
  const Items = data.map((item) => <ItemProduct key={item.id} item={item} />);

  return (
    <div id="home" className="page">
      <h1>Our products</h1>
      <section className="grid">{Items}</section>
    </div>
  );
}
