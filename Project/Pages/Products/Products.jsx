import ProductList from "../../Components/Product";

// eslint-disable-next-line react/prop-types
const Products = ({ products }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <ProductList products={products} />
    </div>
  );
};

export default Products;
