// Node modules
import { createContext, useContext, useReducer } from "react";

// Project files
import cartReducer from "./cartReducer";

// Properties
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
