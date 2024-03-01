import { useMemo, useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const CartInfo = ({ isCheckout, handleCheckout }) => {
  const [isConfirmedCheckout, setIsConfirmedCheckout] = useState(false);
  const { cartItems, resetCart } = useCartContext();

  const totalPrice = useMemo(() => {
    return cartItems
      .reduce((total, item) => total + item.price * item.qty, 0)
      .toFixed(2);
  }, [cartItems]);

  return (
    <div className="sticky w-full left-0 top-20 font-bold md:top-24 flex flex-wrap justify-between px-8 md:px-12 bg-slate-50 py-4 mb-6">
      <div className="flex gap-5">
        <span className="text-xl">Total items : {cartItems.length}</span>
        <span className="text-xl">Total Price : $ {totalPrice}</span>
      </div>
      <div className="float-right pr-6 flex flex-wrap gap-6">
        <button
          className={` text-green-600 hover:underline text-xl ${
            cartItems.length === 0 ? "hidden" : "block"
          }`}
          onClick={() => handleCheckout()}
        >
          checkout
        </button>
        <button
          className={`text-red-800 hover:underline text-xl  ${
            cartItems.length === 0 ? "hidden" : "block"
          }`}
          onClick={() => {
            resetCart();
          }}
        >
          reset
        </button>
      </div>
      {isCheckout && (
        <div className="absolute top-full right-8 md:right-12  flex flex-col gap-4 items-center p-8  bg-slate-50 text-black  border-2 border-green-600  text-lg rounded-lg">
          <h2 className="text-3xl">Confirm checkout</h2>
          <p className="text-xl">You have checked :</p>
          <ul>
            <li className="text-xl">
              Items : {cartItems.length} {"(types)"}
            </li>
            <li className="text-xl">Total Price : $ {totalPrice}</li>
          </ul>
          <div className="flex gap-6">
            <button
              className="text-green-600"
              onClick={() => {
                () => setIsConfirmedCheckout(!isConfirmedCheckout);
                handleCheckout();
              }}
            >
              Confirm
            </button>
            <button className="text-red-700" onClick={() => handleCheckout()}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {isConfirmedCheckout && (
        <div className="absolute top-[100%] right-8 md:right-12  flex flex-col gap-4 items-center p-8  bg-slate-50 text-black  border-2 border-green-600  text-lg rounded-lg">
          <h1>Checkout was successful</h1>
          <FontAwesomeIcon icon={faCheckCircle} size="5px" />
          <p>Thanks for shopping with us</p>
          <button
            onClick={() => {
              resetCart();
              setIsConfirmedCheckout(!isConfirmedCheckout);
            }}
            className="text-white bg-green-500 w-fit px-6 py-4"
          >
            Ok
          </button>
        </div>
      )}
    </div>
  );
};

export default CartInfo;
