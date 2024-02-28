import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Layout/sharedLayout";
import Error from "./Pages/Error";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/about" element={<About />}></Route>
          <Route path="/Products" element={<Products />}></Route> */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
