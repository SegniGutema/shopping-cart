import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import { CartContextProvider } from "../Context/CartContext";

const SharedLayout = () => {
  return (
    <>
      <CartContextProvider>
        <Nav />
        <section className="mt-20 md:mt-24">
          <Outlet />
        </section>
      </CartContextProvider>
      <Footer />
    </>
  );
};
export default SharedLayout;
