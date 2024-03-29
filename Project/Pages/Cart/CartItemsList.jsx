import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../Context/CartContext";
import { RemoveItem } from "./RemoveCartItem";
import { Checkout } from "./Checkout";

const CartItems = () => {
  const {
    cartItems,
    incrementItemQuantity,
    decrementItemQuantity,
    setItemQuantity,
    removeFromCart,
  } = useCartContext();
  return (
    <div className="mx-auto max-w-[1200px] px-8 md:px-12 flex flex-col gap-14 mt-14">
      {cartItems.map((item) => (
        <div key={item.id} className="flex flex-wrap gap-8 mb-4 w-full">
          <img
            className="h-[250px] w-[190px]"
            src={item.image}
            alt={`${item.name}-pic`}
          />
          <div className="flex flex-col gap-3 max-w-[600px] ">
            <p className="font-bold text-xl">{item.title}</p>
            {/* <p className="text-xl">{item.description}</p> */}
            <p className="text-xl">
              price:{" "}
              <span className="text-red-600 font-bold">
                ${item.price.toFixed(2)}
              </span>
            </p>
            <p>
              <span className="text-xl mr-3">quantity:</span>
              <span>
                <input
                  className="text-lg w-[100px]"
                  type="number"
                  value={item.qty}
                  onChange={(e) => setItemQuantity(item.id, e)}
                />
                <button
                  className="ml-4 text-lg"
                  onClick={() => incrementItemQuantity(item.id)}
                >
                  <FontAwesomeIcon icon={faArrowUp} />
                </button>
                <button
                  className="ml-4 text-lg"
                  onClick={() => decrementItemQuantity(item.id)}
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </button>
              </span>
            </p>
            <div className="flex gap-6">
              {" "}
              <Checkout item={item} removeFromCart={removeFromCart} />
              <RemoveItem removeFromCart={removeFromCart} item={item} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
