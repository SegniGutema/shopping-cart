import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import { CartContextProvider } from "../Context/CartContext";
import { ProductProvider } from "../Context/ProductContext";
import { SearchProvider } from "../Context/SearchContext";

const SharedLayout = () => {
  return (
    <>
      <ProductProvider>
        <CartContextProvider>
          <SearchProvider>
            <Nav />
            <section className="mt-20 md:mt-24 min-h-screen">
              <Outlet />
            </section>
          </SearchProvider>
        </CartContextProvider>
      </ProductProvider>
      <Footer />
    </>
  );
};
export default SharedLayout;
