// Node modules
import { createContext, useContext, useReducer } from "react";

// Project files
import cartReducer from "./cartReducer";

// Properties
const debugState = [
  { id: 2, color: 0, variant: 1, quantity: 2 }, // Trådfria Lampor, "white", 9.5, price 300 so 600 in total
  { id: 4, color: 0, variant: 0, quantity: 1 }, // Nintendo switch, "red", "500", price 4500 so 4500 in total
];
const Context = createContext(null);

// For the parent
export function CartProvider({ children }) {
  // Local state
  const [cart, dispatch] = useReducer(cartReducer, []);

  return <Context.Provider value={{ cart, dispatch }}>{children}</Context.Provider>;
}

// For the children
export function useCart() {
  const context = useContext(Context);

  return context;
}
