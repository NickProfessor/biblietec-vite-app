import Livro from "../../components/Livro";
import "./_Livros.scss";
export default function Livros() {
  return (
    <section className="pagina-livros">
      <div className="containerLivro">
        <div className="texto-pesquise">
          <h2>Conheça nossos livros!</h2>
          <div className="input-pesquisar">
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" name="" id="" placeholder="Pesquisar" />
          </div>
        </div>
        <section className="secao-livros">
          <Livro />
          <Livro />
          <Livro />
          <Livro />
          <Livro />
          <Livro />
          <Livro />
          <Livro />
        </section>
        <button id="mostrarMais">Mostrar mais</button>
      </div>
    </section>
  );
}
