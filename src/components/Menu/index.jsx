import { Link } from "react-router-dom";
import "./_Menu.scss";

export default function Menu() {
  const btn_hamburguer = document.querySelector(".fa-bars");
  const menu_Links = document.querySelector(".links-paginas");
  const btn_Fechar = document.querySelector(".botaoDeFechar");

  btn_hamburguer.addEventListener("click", () => {
    menu_Links.style.display = "flex";
  });

  btn_Fechar.addEventListener("click", () => {
    menu_Links.style.display = "none";
  });

  return (
    <header className="cabecalho">
      <h1>BE</h1>
      <div className="input-pesquisar">
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>Pesquisar
        </span>
        <input type="text" name="" id="" />
      </div>
      <i className="fa-solid fa-bars"></i>
      <div className="links-paginas">
        <span className="botaoDeFechar">
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
