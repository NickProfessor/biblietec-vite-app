import { Link } from "react-router-dom";
import "./_Menu.scss";
import { useEffect, useRef } from "react";

export default function Menu() {
  const btnHamburguerRef = useRef(null);
  const menuLinksRef = useRef(null);
  const btnFecharRef = useRef(null);

  useEffect(() => {
    const btnHamburguer = btnHamburguerRef.current;
    const menuLinks = menuLinksRef.current;
    const btnFechar = btnFecharRef.current;

    const openMenu = () => {
      if (menuLinks) menuLinks.style.display = "flex";
    };

    const closeMenu = () => {
      if (menuLinks) menuLinks.style.display = "none";
    };

    if (btnHamburguer) btnHamburguer.addEventListener("click", openMenu);
    if (btnFechar) btnFechar.addEventListener("click", closeMenu);

    return () => {
      if (btnHamburguer) btnHamburguer.removeEventListener("click", openMenu);
      if (btnFechar) btnFechar.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <header className="cabecalho">
      <h1>BE</h1>
      <div className="input-pesquisar">
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>Pesquisar
        </span>
        <input type="text" name="" id="" />
      </div>
      <i ref={btnHamburguerRef} className="fa-solid fa-bars"></i>
      <div ref={menuLinksRef} className="links-paginas">
        <span ref={btnFecharRef} className="botaoDeFechar">
          <p>
            Fechar <i className="fa-solid fa-xmark"></i>
          </p>
        </span>
        <Link to="/">Inicio</Link>
        <Link to="/livros">Livros</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    </header>
  );
}
