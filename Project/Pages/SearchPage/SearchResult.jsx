import { Link } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import Search from "./Search";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product, clickHandler }) => {
  // eslint-disable-next-line react/prop-types
  const { title, image, id } = product;
  return (
    <Link to={`/products/${id}`} className="group">
      <div
        onFocus={() => clickHandler()}
        onClick={() => clickHandler()}
        className="flex gap-4 px-4 py-2 hover:bg-sky-400 rounded-lg"
      >
        <img src={image} alt={title} className="w-10 h-10" />
        <h2 className="group-hover:text-white">{title}</h2>
      </div>
    </Link>
  );
};

// eslint-disable-next-line react/prop-types
const SearchResults = ({ clickHandler }) => {
  const { products, error } = useProductContext();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setSearchResults([]); // Clear results if search term is empty
      return;
    }

    const filteredProducts = products
      ? products.filter(
          (product) => product.title.toLowerCase().includes(searchTerm) // Case-insensitive search
        )
      : [];
    setSearchResults(filteredProducts);
  };

  return (
    <div className="flex flex-col mx-auto gap-10 pt-20 items-center px-10 h-fit min-h-screen md:min-h-[90vh] md:mt-[5vh] w-full max-w-[800px] bg-white">
      <Search onSearch={handleSearch} />
      {products && searchResults.length > 0 ? (
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} clickHandler={clickHandler} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
      {error && <div>could not fetch</div>}
    </div>
  );
};

export default SearchResults;
