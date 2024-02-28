import PrimaryButton from "../../Components/ButtonPrimary";
import useFetch from "../../Hooks/useFetch";

const Product = ({ data }) => {
  const products = data;
  return (
    <div className="mx-auto mt-20 flex flex-wrap gap-6 w-full">
      {products.map((product) => (
        <div
          key={product.id}
          className="mx-auto flex flex-col w-[200px] h-[300px] gap-2 "
        >
          <img
            className="w-[140px] mx-auto h-[170px]"
            src={product.image}
            alt={product.title}
          />
          <p className="ml-4">{product.title}</p>
          <p className="ml-4 text-xl text-red-300">${product.price}</p>
          <PrimaryButton>Add to Cart</PrimaryButton>
        </div>
      ))}
    </div>
  );
};

const NewArrival = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products?limit=10"
  );

  return (
    <div className="max-w-[1200px] mx-auto mt-14">
      <h1 className="font-bold text-3xl md:text-4xl text-center my-20">
        New Arrival
      </h1>
      {loading && (
        <div className="mx-auto text-2xl text-center">A moment please</div>
      )}
      {error && <div className="mx-auto text-2xl text-center">{error}</div>}
      {data && <Product data={data} />}
    </div>
  );
};

const Popular = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products?limit=10"
  );

  return (
    <div className="max-w-[1200px] mx-auto mt-14">
      <h1 className="font-bold text-3xl md:text-4xl text-center my-20">
        Popular Products
      </h1>
      {loading && (
        <div className="mx-auto text-2xl text-center">A moment please</div>
      )}
      {error && <div className="mx-auto text-2xl text-center">{error}</div>}
      {data && <Product data={data} />}
    </div>
  );
};

const ProductDemo = () => {
  return (
    <section className="flex flex-col gap-14">
      <NewArrival />
      <Popular />
    </section>
  );
};

export default ProductDemo;
