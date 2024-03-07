import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";

// eslint-disable-next-line react/prop-types
const SearchResults = ({ products }) => {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useContext(SearchContext);

  const onProductClick = (id) => {
    setIsOpen(!isOpen);
    navigate(`products/${id}`);
  };

  return (
    <ul className="w-3/4 flex flex-col gap-6 overflow-auto max-h-[400px]">
      {[...products].map((product) => (
        <li key={product.id} className="group w-full">
          <button
            onClick={() => {
              onProductClick(product.id);
            }}
          >
            <div className="flex gap-4 group-hover:bg-sky-500 px-4 py-2 rounded-md w-full">
              <img
                className="w-10 h-10"
                src={product.image}
                alt={product.title}
              />
              <p>{product.title}</p>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
