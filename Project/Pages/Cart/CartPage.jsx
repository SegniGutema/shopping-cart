import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import CartInfo from "./CartInfo";
import CartItems from "./CartItemsList";
import EmptyCartPage from "./EmptyCartPage";

const CartPage = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const { cartItems } = useCartContext();

  const handleCheckout = () => {
    setIsCheckout(!isCheckout);
  };

  return (
    <div className="mx-auto max-w-[1200px] py-10 relative">
      <h1 className="text-3xl text-center font-bold mb-10">Your Cart</h1>
      <CartInfo isCheckout={isCheckout} handleCheckout={handleCheckout} />

      {cartItems.length === 0 && <EmptyCartPage />}
      {cartItems.length > 0 && (
        <CartItems isCheckout={isCheckout} handleCheckout={handleCheckout} />
      )}
    </div>
  );
};

export default CartPage;
