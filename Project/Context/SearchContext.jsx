import { createContext, useState } from "react";

export const SearchContext = createContext({
  query: "",
  isOpen: false,
  setQuery: () => {},
  setIsOpen: () => {},
});

// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    query,
    isOpen,
    setQuery,
    setIsOpen,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
