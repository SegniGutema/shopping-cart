import {
  forwardRef,
  useEffect,
  useCallback,
  useState,
  useContext,
} from "react";
import { SearchContext } from "../../Context/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import SearchResults from "./SearchResult";
import { useProductContext } from "../../Context/ProductContext";

const SearchBar = forwardRef(function SearchBar(props, ref) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products, loading, error } = useProductContext();
  const { query, setQuery, isOpen, setIsOpen } = useContext(SearchContext);

  const debouncedSearch = useCallback(
    () => {
      if (products) {
        const searchResult = products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(searchResult);
      } else {
        setFilteredProducts([]);
      }
    },
    [products, query] // Empty dependency array to prevent unnecessary re-creation
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      debouncedSearch(query);
    }, 500); // Adjust debounce time as needed

    return () => clearTimeout(timeout);
  }, [query, debouncedSearch]);

  return (
    <div className="fixed left-0 right-0 top-0 bg-slate-200 min-h-screen w-screen z-10 flex flex-col items-center gap-14 py-14 backdrop-brightness-50">
      <input
        ref={ref}
        className="outline-none focus:outline-none focus:ring-2 rounded-md py-2 px-3 w-2/4"
        type="text"
        name={"search"}
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="text-4xl absolute top-10 right-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>

      {products && <SearchResults products={filteredProducts} />}
      {loading && <div>Loading...</div>}
      {error && <div>could not fetch</div>}
    </div>
  );
});

export default SearchBar;
