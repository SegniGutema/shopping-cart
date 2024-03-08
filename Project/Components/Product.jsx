import { useState } from "react";
import PrimaryButton from "./ButtonPrimary";
import { useCartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Product = ({ product, addToCart }) => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  const { title, image, price, id } = product;
  const onProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleHover = () => setShowButton(true);
  const handleLeave = () => setShowButton(false);
  const handleClick = (product) => {
    addToCart(product);
    setShowButton(!showButton);
  };

  return (
    <div
      key={id}
      className="mx-auto w-[230px] flex flex-col gap-2 justify-between min-h-full bg-white p-4 rounded-lg shadow-md overflow-hidden "
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="mx-auto w-full h-[200px] grid place-items-center">
        {" "}
        <img
          onClick={() => onProductClick(id)}
          onFocus={() => onProductClick(id)}
          className="mx-auto h-[200px] cursor-pointer"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="ml-4 ">{title}</p>
        <p className="ml-4 text-xl text-red-300">${price}</p>
        {showButton && (
          <PrimaryButton clickHandler={() => handleClick(product)}>
            Add to Cart
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const ProductList = ({ products }) => {
  const { addToCart } = useCartContext();
  const productList = products;

  return (
    <div className="mx-auto mt-20 flex flex-wrap justify-start gap-4 w-full">
      {productList.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
