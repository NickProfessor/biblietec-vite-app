import { useEffect, useRef } from "react";
import Livro from "../../components/Livro";
import "./_Livros.scss";
import { useState } from "react";

export default function Livros() {
  const [livros, setLivros] = useState([]);
  const [limiteDeLivros, setLimiteDeLivros] = useState(20);
  const [haLivrosNaPagina, setHaLivrosNaPagina] = useState(false);

  const mostraMaisLivros = () => {
    if (livros.length < 100) {
      setLimiteDeLivros((prevLimite) => prevLimite + 20);
    }
  };

  const buscaLivros = async () => {
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=monteiro+lobato&fields=key,title,author_name,edition_count,cover_i,subject&limit=${limiteDeLivros}`
      );
      const data = await res.json();
      const listaLivros = data.docs;
      setLivros(listaLivros);
      setHaLivrosNaPagina(listaLivros.length > 0);
      console.log(listaLivros);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscaLivros();
  }, [limiteDeLivros]);

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
              key={livro.key}
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
        {livros.length < 100 && (
          <button
            id="mostrarMais"
            className={haLivrosNaPagina ? "visivel" : ""}
            ref={mostrarMaisRef}
            onClick={mostraMaisLivros}
          >
            Mostrar mais
          </button>
        )}
      </div>
    </section>
  );
}
