import { useEffect } from "react";
import Livro from "../../components/Livro";
import "./_Livros.scss";
import { useState } from "react";
export default function Livros() {
  const [livros, setLivros] = useState([0]);

  const buscaLivros = async () => {
    try {
      const res = await fetch(
        "https://openlibrary.org/search.json?q=machado+de+assis"
      );
      const data = await res.json();
      const listaLivros = data.docs;
      setLivros(listaLivros);
      console.log(listaLivros);
    } catch {
      console.log(error);
    }
  };
  useEffect(() => {
    buscaLivros();
  }, []);

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
          {livros.map((livro) => (
            <Livro
              title={livro.title}
              image={livro.cover_i}
              edicoes={livro.edition_count}
            />
          ))}
        </section>
        <button id="mostrarMais">Mostrar mais</button>
      </div>
    </section>
  );
}
