import { createContext, useState } from "react";

// 1. Create context
export const ProductContext = createContext();  

// 2. Provider component
export const ProductProvider = ({ children }) => {
  // Example response (could be fetched from API)
  const response = [
    { id: 1, productname: "black Glasses", qty: 2 },
    { id: 2, productname: "yellow Jean", qty: 5 }
  ];

  // Initialize state with response
  const [products, setProducts] = useState(response);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
