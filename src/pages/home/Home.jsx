// Node modules
import PropTypes from "prop-types";

// Project files
import ItemProduct from "../../components/item-product/ItemProduct";
import EmptyState from "../../components/empty-state/EmptyState";
import Product from "../../propTypes/Product";
import EmptyStateText from "./empty-state-text.json";
import "./home.css";

Home.propTypes = {
  data: PropTypes.arrayOf(Product.item).isRequired,
};

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
