// Node modules
import { Route, Routes } from "react-router-dom";

// Project files
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import Page404 from "./pages/page-404/Page404";
import Product from "./pages/product/Product";

export default function App() {
  // Properties
  const checkout = <Checkout />;
  const home = <Home />;
  const pageNotFound = <Page404 />;
  const product = <Product />;

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={home} />
        <Route path="/product/:id" element={product} />
        <Route path="/checkout" element={checkout} />
        <Route path="*" element={pageNotFound} />
      </Routes>
    </div>
  );
}
