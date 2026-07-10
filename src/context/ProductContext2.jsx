import { createContext, useMemo, useState } from 'react';

export const ProductContext = createContext();

const initialProducts = [
  { id: 1, productname: 'Greek Yogurt Parfait', qty: '5' },
  { id: 2, productname: '1l Apple Cider Vinegar', qty: '3' },
  { id: 3, productname: '1kg Blueberry', qty: '8' },
];

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    const newProduct = {
      id: product.id ?? Math.floor(Math.random() * 100000),
      productname: product.productname,
      qty: product.qty,
    };

    setProducts((prev) => [...prev, newProduct]);
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const getProducts = () => products;

  const value = useMemo(
    () => ({
      products,
      addProduct,
      removeProduct,
      getProducts,
    }),
    [products]
  );

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
