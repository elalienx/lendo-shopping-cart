// Node modules
import { useParams } from "react-router-dom";

// Project files
import "./product.css";

export default function Product() {
  // Global state
  const { id } = useParams();

  return (
    <div id="product">
      <h1>Product</h1>
      <small>Product Id: #{id}</small>
    </div>
  );
}
