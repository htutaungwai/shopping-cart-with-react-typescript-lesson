import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import About from "./pages/About";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Store from "./pages/Store";
import { ShopingCartProvider } from "./context/ShoppingCartContext";
function App() {
  return (
    <ShopingCartProvider>
      <Navbar />
      <Container className="mb-4" style={{ height: "200vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShopingCartProvider>
  );
}

export default App;
