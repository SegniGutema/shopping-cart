import ProductList from "../../Components/Product";
import { useProductContext } from "../../Context/ProductContext";

// eslint-disable-next-line react/prop-types
const NewArrival = ({ products, loading, error }) => {
  const newArrivals = products ? Array.from(products).slice(0, 10) : [];

  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="font-bold text-3xl md:text-4xl text-center mb-6">
        New Arrivals
      </h1>
      {loading && (
        <div className="w-6 h-12 bg-gray-900 rounded-full animate-spin"></div>
      )}
      {error && <div className="mx-auto text-2xl text-center">{error}</div>}
      {newArrivals && <ProductList products={newArrivals} />}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Popular = ({ products, loading, error }) => {
  const popularProducts = products ? Array.from(products).slice(8, 18) : [];

  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="font-bold text-3xl md:text-4xl text-center my-16">
        Popular Products
      </h1>
      {loading && (
        <div className="w-6 h-12 bg-gray-900 rounded-full animate-spin"></div>
      )}
      {error && <div className="mx-auto text-2xl text-center">{error}</div>}
      {popularProducts && <ProductList products={popularProducts} />}
    </div>
  );
};

const ProductDemo = () => {
  const { products, loading, error } = useProductContext();

  return (
    <section className="flex flex-col gap-10 mt-20">
      <NewArrival products={products} loading={loading} error={error} />
      <Popular products={products} loading={loading} error={error} />
    </section>
  );
};

export default ProductDemo;
