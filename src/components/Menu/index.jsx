import { Link } from "react-router-dom";
import "./_Menu.scss";
import { useEffect, useRef, useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const btnHamburguerRef = useRef(null);
  const btnFecharRef = useRef(null);

  useEffect(() => {
    const btnHamburguer = btnHamburguerRef.current;
    const btnFechar = btnFecharRef.current;

    const handleResize = () => {
      if (window.innerWidth >= 1080) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="cabecalho">
      <h1>BE</h1>
      <div className="input-pesquisar">
        {/* <span>
          <i className="fa-solid fa-magnifying-glass"></i>Pesquisar
        </span>
        <input type="text" name="" id="" /> */}
      </div>
      <i
        ref={btnHamburguerRef}
        className="fa-solid fa-bars"
        onClick={openMenu}
      ></i>
      <div className={`links-paginas ${isMenuOpen ? "open" : ""}`}>
        <span ref={btnFecharRef} className="botaoDeFechar" onClick={closeMenu}>
          <p>
            Fechar <i className="fa-solid fa-xmark"></i>
          </p>
        </span>
        <Link to="/" onClick={closeMenu}>
          Inicio
        </Link>
        <Link to="/livros" onClick={closeMenu}>
          Livros
        </Link>
        <Link to="/sobre" onClick={closeMenu}>
          Sobre
        </Link>
      </div>
    </header>
  );
}
