import { useState } from "react";
import PrimaryButton from "./ButtonPrimary";
import { useCartContext } from "../Context/CartContext";

const Product = ({ product, addToCart }) => {
  const [showButton, setShowButton] = useState(false);

  const handleHover = () => setShowButton(true);
  const handleLeave = () => setShowButton(false);
  const handleClick = (product) => {
    addToCart(product);
    setShowButton(!showButton);
  };

  return (
    <div
      key={product.id}
      className="mx-auto w-[190px] flex flex-col gap-2 justify-between min-h-full bg-white p-4 rounded-lg shadow-md overflow-hidden "
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="mx-auto w-full h-[200px] grid place-items-center">
        {" "}
        <img
          className="mx-auto h-[200px]"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="ml-4 ">{product.title}</p>
        <p className="ml-4 text-xl text-red-300">${product.price}</p>
        {showButton && (
          <PrimaryButton clickHandler={() => handleClick(product)}>
            Add to Cart
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

const ProductList = ({ products }) => {
  const { addToCart } = useCartContext();
  const productList = products;

  return (
    <div className="mx-auto mt-20 flex flex-wrap gap-4 w-full">
      {productList.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
