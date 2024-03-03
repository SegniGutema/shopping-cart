import { useState } from "react";

export const RemoveItem = ({ removeFromCart, item }) => {
  const [confirmRemove, setConfirmRemove] = useState(false);
  return (
    <div>
      <button
        className="bg-red-400 px-3 py-2 w-fit text-white text-xl"
        onClick={() => setConfirmRemove(!confirmRemove)}
      >
        remove
      </button>
      {confirmRemove && (
        <div className="fixed top-0 bottom-0 my-auto left-0 right-0 w-fit h-fit p-8  mx-auto rounded-xl border-2  border-red-700 flex flex-col gap-6 bg-white">
          <h1 className="text-2xl text-center font-bold">
            Confirmation required
          </h1>
          <p className="text-xl">
            Please confirm that you want to remove the product
          </p>
          <p className="text-xl">Product Details :</p>
          <ul>
            <li className="text-xl">Item : {item.title}</li>
            <li className="text-xl">Price : ${item.price}</li>
            <li></li>
          </ul>
          <div className="flex flex-wrap justify-between mx-auto w-[80%] text-2xl">
            <button
              className="text-red-800"
              onClick={() => removeFromCart(item.id)}
            >
              Confirm
            </button>
            <button
              className="text-green-600"
              onClick={() => setConfirmRemove(!confirmRemove)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const ResetCart = ({ reset }) => {
  const [resetClicked, setResetClicked] = useState(false);

  return (
    <>
      <button
        className="text-red-800 hover:underline text-xl"
        onClick={() => {
          setResetClicked(!resetClicked);
        }}
      >
        Clear
      </button>
      {resetClicked && (
        <div className="fixed top-0 bottom-0 my-auto left-0 right-0 w-fit h-fit p-8  mx-auto rounded-xl border-2  border-red-700 flex flex-col gap-6 bg-white">
          <h1 className="text-2xl text-center font-bold">
            Confirmation required
          </h1>
          <p className="text-xl">
            Please confirm that you want to reset your cart
          </p>
          <div className="flex flex-wrap justify-between mx-auto w-[80%] text-2xl">
            <button className="text-red-800" onClick={() => reset()}>
              Confirm
            </button>
            <button
              className="text-green-600"
              onClick={() => setResetClicked(!resetClicked)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
