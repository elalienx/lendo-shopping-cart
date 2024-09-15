// Node modules
import { useParams } from "react-router-dom";

// Project files
import Button from "../../components/button/Button";
import EmptyState from "../../components/empty-state/EmptyState";
import ImageThumbail from "../../components/image-thumbnail/ImageThumbnail";
import PriceTag from "../../components/price-tag/PriceTag";

import EmptyStateTexts from "./empty-state-texts.json";
import "./product.css";
import { useState } from "react";

export default function Product({ data }) {
  // Global state
  const { id } = useParams();

  // Local state
  const [dissabled, setDissabled] = useState(true);

  // Properties
  const product = data.find((item) => item.id === Number(id));

  // Safeguards
  if (!product) return <EmptyState item={EmptyStateTexts.invalid_product} />;
  if (!product.available) return <EmptyState item={EmptyStateTexts.not_available} />;

  // Derived properties
  const additionalDetails = `By ${product.brand} | Weight ${product.weight}`;
  const finalPrice = Number(product.price);

  return (
    <div id="product" className="page">
      <ImageThumbail />
      <section className="content-group">
        <h1>{product.name}</h1>
        <small>{additionalDetails}</small>
        {/* 1. Color chooser goes here */}
        {/* 2. Variant chooser goes here */}
        {/* 3. Quantity chooser */}
        {/* 4. Units left warning */}
        <PriceTag price={finalPrice} />
        <Button label="Add to cart" icon="bag-shopping" disabled={dissabled} />
      </section>
    </div>
  );
}
