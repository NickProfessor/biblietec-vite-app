import { useEffect, useRef } from "react";
import Livro from "../../components/Livro";
import "./_Livros.scss";
import { useState } from "react";
export default function Livros() {
  const [livros, setLivros] = useState([]);

  const buscaLivros = async () => {
    try {
      const res = await fetch(
        "https://openlibrary.org/search.json?q=harry+potter&fields=key,title,author_name,edition_count,cover_i,subject&limit=20"
      );
      const data = await res.json();
      const listaLivros = data.docs;
      setLivros(listaLivros);
      console.log(listaLivros);
      setHaLivrosNaPagina(true);
    } catch {
      console.log(error);
    }
  };
  useEffect(() => {
    buscaLivros();
  }, []);

  const [haLivrosNaPagina, setHaLivrosNaPagina] = useState(false);
  const mostrarMaisRef = useRef(null);
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
              id={livro.key}
              title={livro.title}
              image={livro.cover_i}
              editions={livro.edition_count}
              author={livro.author_name}
              subject={
                livro.subject && livro.subject.length >= 2
                  ? livro.subject.slice(0, 2).join(", ")
                  : "sem categoria"
              }
            />
          ))}
        </section>
        <button
          id="mostrarMais"
          className={haLivrosNaPagina ? "visivel" : ""}
          ref={mostrarMaisRef}
        >
          Mostrar mais
        </button>
      </div>
    </section>
  );
}
