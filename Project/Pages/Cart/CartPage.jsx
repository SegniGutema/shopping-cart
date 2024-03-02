import { useCartContext } from "../../Context/CartContext";
import CartInfo from "./CartInfo";
import CartItems from "./CartItemsList";
import EmptyCartPage from "./EmptyCartPage";

const CartPage = () => {
  const { cartItems } = useCartContext();

  return (
    <div className="mx-auto max-w-[1200px] py-10">
      <h1 className="text-3xl text-center font-bold mb-10">Your Cart</h1>
      <CartInfo />

      {cartItems.length === 0 && <EmptyCartPage />}
      {cartItems.length > 0 && <CartItems />}
    </div>
  );
};

export default CartPage;
