import "./_Menu.scss";

export default function Menu() {
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
        <span>
          <p>
            Fechar <i className="fa-solid fa-xmark"></i>
          </p>
        </span>
        <a href="">Inicio</a>
        <a href="">Livros</a>
        <a href="">Sobre</a>
      </div>
    </header>
  );
}
