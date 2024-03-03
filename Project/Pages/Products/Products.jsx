import useFetch from "../../Hooks/useFetch";
import ProductList from "../../Components/Product";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="font-bold text-3xl md:text-4xl text-center">Products</h1>
      {loading && (
        <div className="mx-auto text-2xl text-center">Loading...</div>
      )}
      {error && <div className="mx-auto text-2xl text-center">{error}</div>}
      {data && <ProductList products={data} />}
    </div>
  );
};

export default Products;
