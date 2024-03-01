import {
  useState,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from "react";

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  incrementItemQuantity: () => {},
  decrementItemQuantity: () => {},
  setItemQuantity: () => {},
  removeFromCart: () => {},
  resetCart: () => {},
});

export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback(
    (item) => {
      let existingItem = cartItems.find((i) => i.id === item.id);

      if (!existingItem) {
        setCartItems((prevItems) => [...prevItems, { ...item, qty: 1 }]);
      } else {
        setCartItems(
          cartItems.map((i) =>
            i.id !== existingItem.id ? i : { ...i, qty: i.qty + 1 }
          )
        );
      }
    },
    [cartItems]
  );

  const incrementItemQuantity = useCallback(
    (id) => {
      const existingItem = cartItems.find((i) => i.id === id);
      if (!isNaN(+existingItem.qty))
        //make sure it is a number before adding to quantity
        existingItem.qty = +existingItem.qty + 1;

      setCartItems(
        cartItems.map((i) => (i.id === id ? existingItem : { ...i }))
      );
    },
    [cartItems]
  );

  const decrementItemQuantity = useCallback(
    (id) => {
      const existingItem = cartItems.find((i) => i.id === id);
      if (existingItem.qty > 0) existingItem.qty = existingItem.qty - 1;

      setCartItems(
        cartItems.map((i) => (i.id === id ? existingItem : { ...i }))
      );
    },
    [cartItems]
  );

  const setItemQuantity = useCallback(
    (id, e) => {
      const existingItem = cartItems.find((i) => i.id === id);
      setCartItems(
        cartItems.map((i) =>
          i.id === id
            ? {
                ...existingItem,
                qty: e.target.value,
              }
            : i
        )
      );
    },
    [cartItems]
  );

  const resetCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const removeFromCart = useCallback(
    (id) => {
      setCartItems(cartItems.filter((i) => i.id !== id));
    },
    [cartItems]
  );

  const contextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      incrementItemQuantity,
      decrementItemQuantity,
      setItemQuantity,
      removeFromCart,
      resetCart,
    }),
    [
      cartItems,
      addToCart,
      incrementItemQuantity,
      decrementItemQuantity,
      setItemQuantity,
      removeFromCart,
    ]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
