import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedComponent from "./Components/sharedComponent";
import Error from "./Components/Error";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedComponent />}>
          <Route index={true} path="/home" element={<Home />} />
          {/* <Route path="/about" element={<About />}></Route>
          <Route path="/Products" element={<Products />}></Route> */}
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
