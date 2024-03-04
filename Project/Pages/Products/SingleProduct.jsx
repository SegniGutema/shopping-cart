import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { products } from "./ProductPage";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { title, image, description, price } = product;

  return (
    <div className="w-full max-w-[800px] mx-auto flex flex-wrap gap-8">
      <img src={image} alt="title" className="max-w-[250px] aspect-square" />
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>$ {price}</p>
      </div>
      <div className="absolute top-24 md:28 left-6 text-black">
        <Link to="products">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
