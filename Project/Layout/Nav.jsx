import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCTS", link: "/products" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT US", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="bg-white fixed w-full  top-0 left-0 flex items-center justify-between  z-10 shadow-md md:px-20 px-8 h-20 md:h-24">
      <div className="md:text-3xl text-2xl font-bold">
        Dubai<span className="text-red-500">Tera</span>
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
        <div className="text-3xl ml-5 min-[900px]:ml-8 flex items-center cursor-pointer">
          <Link to={"/cart"}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl ml-5 min-[900px]:ml-8 flex items-center cursor-pointer min-[900px]:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
