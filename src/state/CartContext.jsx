// Node modules
import { createContext, useContext, useReducer } from "react";

// Project files
import cartReducer from "./cartReducer";

// Properties
const debugState = [
  { id: 2, color: 0, variant: 1, quantity: 2 }, // Trådfria Lampor, "white", power: 9.5, price 300x2 so 600 in total
  { id: 4, color: 0, variant: 0, quantity: 1 }, // Nintendo switch, "red", storage: "500", price 4500
  { id: 6, color: 1, variant: 1, quantity: 3 }, //Bluetooth speaker, "white", price 950x3 2850 in total
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
