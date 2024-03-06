import { useParams } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import { useCartContext } from "../../Context/CartContext";

const SingleProduct = () => {
  const { productId } = useParams();
  const { products } = useProductContext();
  const { addToCart } = useCartContext();

  let singleProduct = products.find((product) => product.id === productId);

  return (
    <div className="flex flex-wrap w-full max-w-[800px] items-center">
      <div>
        <img
          className="w-[300] h-[300px] "
          src={singleProduct.image}
          alt={singleProduct.title}
        />
      </div>
      <div>
        <h2>{singleProduct.title}</h2>
        <p>{singleProduct.description}</p>
        <p>Price: ${singleProduct.price}</p>
        <button onClick={() => addToCart(singleProduct)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
