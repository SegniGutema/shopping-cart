import { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../Context/CartContext";
import { SearchContext } from "../Context/SearchContext";
import SearchBar from "../Pages/SearchPage/Search";

// Link to Cart Page
const CartIcon = () => {
  const { cartItems } = useCartContext();
  return (
    <Link to={"/cart"} className="">
      <div className="text-3xl flex items-center relative">
        <FontAwesomeIcon icon={faShoppingCart} className=" cursor-pointer" />
        <div className="text-black text-sm min-w-6 min-h-6 p-1 text-center bg-red-300 rounded-[100%] absolute right-[-20px] top-1/2 ">
          {cartItems.length}
        </div>
      </div>
    </Link>
  );
};

const SearchIcon = () => {
  const { isOpen, setIsOpen } = useContext(SearchContext);
  const inputRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <button className="text-3xl mx-3" onClick={handleClick}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      {isOpen && <SearchBar ref={inputRef} />}
    </div>
  );
};

// Header navigation to different pages
const Nav = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SHOP", link: "/products" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="bg-white fixed w-full top-0 left-0 flex items-center justify-between  z-10 shadow-md md:px-16 px-8 h-20 md:h-24">
      <div className="md:text-3xl text-2xl font-bold">
        <Link to="/">
          <div className="flex gap-3 items-center">
            <img src="Project/Assets/panda.png" alt="x" className="w-16 h-16" />
          </div>
        </Link>
      </div>
      <div className="flex gap-2">
        <ul
          className={`min-[900px]:flex min-[900px]:items-center min-[900px]:pb-0 pb-12 absolute min-[900px]:static bg-white min-[900px]:z-auto z-[-1] left-0 w-full min-[900px]:w-auto min-[900px]:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-20 min-[900px]:border-b-0 border-b-black border-b-2"
              : "top-[-490px] "
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="min-[900px]:ml-8 text-xl min-[900px]:my-0 my-7"
            >
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <SearchIcon />
        <CartIcon />

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl ml-4 min-[900px]:ml-5 flex items-center cursor-pointer min-[900px]:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
