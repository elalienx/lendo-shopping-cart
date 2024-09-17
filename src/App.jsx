// Node modules
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Project files
import NavigationBar from "./components/navigation-bar/NavigationBar";
import Data from "./data/inventory.json";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import Page404 from "./pages/page-404/Page404";
import Product from "./pages/product/Product";
import { useCart } from "./state/CartContext";

export default function App() {
  const { items } = Data;

  // Global state
  const { cart } = useCart();

  // Properties
  const checkout = <Checkout data={items} />;
  const home = <Home data={items} />;
  const pageNotFound = <Page404 />;
  const product = <Product data={items} />;

  // Derived state
  const itemsOnCart = cart.length;

  return (
    <div className="app">
      <NavigationBar number={itemsOnCart} />
      <Toaster />
      <Routes>
        <Route path="/" element={home} />
        <Route path="/product/:id" element={product} />
        <Route path="/checkout" element={checkout} />
        <Route path="*" element={pageNotFound} />
      </Routes>
    </div>
  );
}
