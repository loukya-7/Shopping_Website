import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/Contact/Contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;