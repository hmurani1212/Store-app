// import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import Carousell from "./Components/Carousell"
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Components/Product';
function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="Carousell" element={<Carousell />} />
          <Route path="Product" element={<Product />} />
          <Route path="Footer" element={<Footer />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
