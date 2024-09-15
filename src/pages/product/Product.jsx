// Node modules
import { useParams } from "react-router-dom";

// Project files
import EmptyState from "../../components/empty-state/EmptyState";
import EmptyStateTexts from "./empty-state-texts.json";
import "./product.css";

export default function Product({ data }) {
  // Global state
  const { id } = useParams();

  // Properties
  const product = data.find((item) => item.id === Number(id));

  // Safeguards
  if (!product) return <EmptyState item={EmptyStateTexts.invalid_product} />;
  if (!product.available) return <EmptyState item={EmptyStateTexts.not_available} />;

  return (
    <div id="product" className="page">
      <h1>(Product Name)</h1>
      <small>Product Id: #{id}</small>
    </div>
  );
}
