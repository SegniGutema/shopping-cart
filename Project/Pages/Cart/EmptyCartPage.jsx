import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const EmptyCartPage = () => {
  const { cartItems } = useCartContext();
  return (
    <>
      {cartItems.length === 0 && (
        <div className="w-full h-screen mx-auto my-auto text-center">
          <div>
            <h2 className="mb-6 text-2xl">{"Your cart is empty : ("}</h2>
            <Link to="/products" className="mb-6 text-2xl">
              Go back to <span className="text-blue-600">shop</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default EmptyCartPage;
