import useFetch from "../../Hooks/useFetch";
import ProductList from "../../Components/Product";

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
      {data && <ProductList products={data} />}
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
      {data && <ProductList products={data} />}
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
