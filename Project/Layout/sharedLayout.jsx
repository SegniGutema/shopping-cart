import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const SharedLayout = () => {
  return (
    <>
      <Nav />
      <section className="mt-20 md:mt-24">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default SharedLayout;
