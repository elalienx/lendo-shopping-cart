// Node modules
import { Route, Routes } from "react-router-dom";

// Project files

export default function App() {
  // Properties
  const home = <Home />;
  const product = <Product />;
  const checkout = <Checkout />;
  const pageNotFound = <Page404 />;

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
