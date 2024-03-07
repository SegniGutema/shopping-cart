import { useParams } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import { useCartContext } from "../../Context/CartContext";

const SingleProduct = () => {
  const params = useParams();
  const productId = parseInt(params.productId);
  const { products } = useProductContext();
  const { addToCart } = useCartContext();

  const singleProduct = products.find((p) => p.id === productId);

  // Consider error handling if singleProduct is undefined
  if (!singleProduct) {
    return <div>Product not found!</div>; // Handle product not found
  }

  return (
    <div className="flex flex-wrap gap-12 w-full max-w-[800px] items-center px-10 md:px-12 py-14 md:py-16">
      <div>
        <img
          className="w-[300px] h-[300px] "
          src={singleProduct.image}
          alt={singleProduct.title}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{singleProduct.title}</h2>
        <p className="">{singleProduct.description}</p>
        <p>Price: ${singleProduct.price}</p>
        <button
          className="px-4 py-2 h-[50px] w-[150px] text-center bg-red-500 text-white text-xl"
          onClick={() => addToCart(singleProduct)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
