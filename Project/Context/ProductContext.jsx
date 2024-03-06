import { useState, useEffect, useMemo, createContext, useContext } from "react";

const ProductContext = createContext(null);
export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  //state for products and setProducts function to update the state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setProducts(result);
        setError(null);
      } catch (err) {
        if (retryCount < 3) {
          setTimeout(() => {
            dataFetching();
            setRetryCount(retryCount + 1);
          }, 2000);
          return;
        } else {
          setError("Failed to load data.");
          setError(err.message);
          setProducts(null);
        }
      } finally {
        setLoading(false);
      }
    };
    dataFetching();
  }, [retryCount]);

  const contextValue = useMemo(
    () => ({
      products,
      setProducts: (newProducts) => {
        setProducts((oldProducts) => {
          const updatedProducts = oldProducts.map((product) => {
            const foundProduct = newProducts.find((p) => p.id === product.id);
            return foundProduct || product;
          });
          return updatedProducts;
        });
      },
      loading,
      error,
    }),
    [products, loading, error]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
