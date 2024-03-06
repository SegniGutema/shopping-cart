import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import { CartContextProvider } from "../Context/CartContext";
import { ProductProvider } from "../Context/ProductContext";
const SharedLayout = () => {
  return (
    <>
      <ProductProvider>
        <CartContextProvider>
          <Nav />
          <section className="mt-20 md:mt-24 min-h-screen">
            <Outlet />
          </section>
        </CartContextProvider>
      </ProductProvider>
      <Footer />
    </>
  );
};
export default SharedLayout;
