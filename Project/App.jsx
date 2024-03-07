import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Layout/sharedLayout";
import Error from "./Pages/Error";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ContactUs from "./Pages/Contact/ContactUs";
import CartPage from "./Pages/Cart/CartPage";
import SingleProduct from "./Pages/Products/SingleProduct";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="cart" element={<CartPage />} />
          <Route index element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
