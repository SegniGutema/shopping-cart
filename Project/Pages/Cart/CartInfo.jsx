import { useMemo } from "react";
import { useCartContext } from "../../Context/CartContext";
import { ResetCart } from "./RemoveCartItem";
import { CheckoutAll } from "./Checkout";

const CartInfo = () => {
  const { cartItems, resetCart } = useCartContext();

  const totalPrice = useMemo(() => {
    return cartItems
      .reduce((total, item) => total + item.price * item.qty, 0)
      .toFixed(2);
  }, [cartItems]);

  return (
    <div className="w-full top-20 md:top-24 flex flex-wrap justify-between px-8 md:px-12 bg-slate-50 py-4 mb-6">
      <div className="flex flex-wrap gap-5">
        <span className="text-lg md:text-xl">
          Total items : {cartItems.length}
        </span>
        <span className="text-lg md:text-xl">Total Price : $ {totalPrice}</span>
      </div>
      {cartItems.length > 0 && (
        <div className="float-right pr-6 flex flex-wrap gap-6">
          <CheckoutAll reset={resetCart} />
          <ResetCart reset={resetCart} />
        </div>
      )}
    </div>
  );
};

export default CartInfo;
