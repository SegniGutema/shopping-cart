import useFetch from "../../Hooks/useFetch";
import Search from "./Search";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchedProducts = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setSearchResults([]); // Clear results if search term is empty
      return;
    }

    const filteredProducts =
      data &&
      Array.from(data).filter(
        (product) => product.title.toLowerCase().includes(searchTerm) // Case-insensitive search
      );
    setSearchResults(filteredProducts);
  };

  const result = () => {
    if (data) {
      return (
        <>
          {searchResults.length > 0 ? (
            <ul className="flex flex-col gap-10 mt-16">
              {searchResults.map((product) => (
                <li key={product.id}>
                  <Link to={`products/${product.id}`}>
                    <div className="group flex gap-5 hover:bg-sky-600 py-2 px-3 rounded-lg">
                      <img
                        src={product.image}
                        alt="x"
                        className="w-[40px] h-[40px] rounded-lg"
                      />
                      <p className="group-hover:text-white">{product.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-28 text-center text-xl">No results found.</p>
          )}
        </>
      );
    } else if (loading) {
      return <p className="mt-28 text-center text-xl">Loading...</p>;
    } else {
      return <p className="mt-28 text-center text-xl">could not fetch</p>;
    }
  };

  const response = result();

  return (
    <div className="w-screen h-screen  backdrop-brightness-[20%] z-30 fixed top-0 right-0 left-0">
      <div className="min-[950px]:mt-[5vh] py-24  px-12 rounded-md  mx-auto w-full max-w-[900px] bg-slate-200  min-h-full min-[950px]:min-h-[90vh]">
        <Search products={data} onSearch={handleSearch} />
        <>{response}</>
      </div>
    </div>
  );
};

export default SearchedProducts;
