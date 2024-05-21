import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Livros from "./pages/Livros";
import Sobre from "./pages/Sobre";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Contato />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
