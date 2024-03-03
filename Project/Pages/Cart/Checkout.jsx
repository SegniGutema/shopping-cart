import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SuccessAlert = () => {
  return (
    <div className="fixed top-20 md:top-24   right-8 md:right-12 w-fit h-fit p-4  mx-auto rounded-xl border-2  border-green-500 flex flex-col items-center gap-4 bg-white">
      <h1 className="font-bold text-2xl">Checkout was successful</h1>
      <FontAwesomeIcon
        className="text-green-500 text-4xl"
        icon={faCheckCircle}
      />
      <p className="text-xl`">Thanks for shopping with us </p>
    </div>
  );
};

export const Checkout = ({ removeFromCart, item }) => {
  const [checkoutClicked, setCheckoutClicked] = useState(false);
  const [checkoutConfirmed, setCheckoutConfirmed] = useState(false);

  const handleSuccessAlertDisplay = () => {
    setCheckoutConfirmed(true);
    setTimeout(() => setCheckoutConfirmed(false), 2000);
  };

  const removeItem = () => {
    setTimeout(() => removeFromCart(item.id), 2000);
  };

  return (
    <>
      <button
        className="bg-green-500 px-3 py-2 w-fit text-white text-xl"
        onClick={() => setCheckoutClicked(!checkoutClicked)}
      >
        Checkout
      </button>
      {checkoutClicked && (
        <div className="fixed top-0 bottom-0 my-auto left-0 right-0 w-fit h-fit p-8  mx-auto rounded-xl border-2  border-red-700 flex flex-col gap-6 bg-white">
          <h1 className="text-2xl text-center font-bold">
            Confirmation required
          </h1>
          <p className="text-xl">
            Please confirm that you want to checkout the product
          </p>
          <p className="text-xl">Product Details :</p>
          <ul>
            <li className="text-xl">Item : {item.title}</li>
            <li className="text-xl">Price : ${item.price}</li>
            <li></li>
          </ul>
          <div className="flex flex-wrap justify-between mx-auto w-[80%] text-2xl">
            <button
              className="text-green-600"
              onClick={() => {
                setCheckoutClicked(!checkoutClicked);
                removeItem();
                handleSuccessAlertDisplay();
              }}
            >
              Confirm
            </button>
            <button
              className="text-red-800"
              onClick={() => setCheckoutClicked(!checkoutClicked)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {checkoutConfirmed && <SuccessAlert />}
    </>
  );
};

export const CheckoutAll = ({ reset }) => {
  const [checkoutClicked, setCheckoutClicked] = useState(false);
  const [checkoutConfirmed, setCheckoutConfirmed] = useState(false);

  const handleSuccessAlertDisplay = () => {
    setCheckoutConfirmed(true);
    setTimeout(() => setCheckoutConfirmed(false), 2000);
  };

  const removeItem = () => {
    setTimeout(() => reset(), 2000);
  };

  return (
    <>
      <button
        className=" text-green-500 text-xl hover:underline"
        onClick={() => setCheckoutClicked(!checkoutClicked)}
      >
        Checkout All
      </button>
      {checkoutClicked && (
        <div className="fixed top-0 bottom-0 my-auto left-0 right-0 w-fit h-fit p-8  mx-auto rounded-xl border-2  border-red-700 flex flex-col gap-6 bg-white">
          <h1 className="text-2xl text-center font-bold">
            Confirmation required
          </h1>
          <p className="text-xl">
            Please confirm that you want to checkout all products
          </p>
          <div className="flex flex-wrap justify-between mx-auto w-[80%] text-2xl">
            <button
              className="text-green-600"
              onClick={() => {
                setCheckoutClicked(!checkoutClicked);
                removeItem();
                handleSuccessAlertDisplay();
              }}
            >
              Confirm
            </button>
            <button
              className="text-red-800"
              onClick={() => setCheckoutClicked(!checkoutClicked)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {checkoutConfirmed && <SuccessAlert />}
    </>
  );
};
