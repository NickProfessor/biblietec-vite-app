import { useEffect, useRef, useState } from "react";
import Livro from "../../components/Livro";
import "./_Livros.scss";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";

export default function Livros() {
  const [livros, setLivros] = useState([]);
  const [limiteDeLivros, setLimiteDeLivros] = useState(20);
  const [livrosDisponiveis, setLivrosDisponiveis] = useState(0);
  const [pesquisaLivro, setPesquisaLivro] = useState("Harry potter");
  const [livroNaoEncontrado, setLivroNaoEncontrado] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const mostraMaisLivros = () => {
    if (livros.length >= 100 || livros.length >= livrosDisponiveis) {
      return;
    }
    setLimiteDeLivros((prevLimite) => prevLimite + 20);
    buscaLivros(limiteDeLivros + 20);
  };

  const buscaLivros = async (limite = limiteDeLivros) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${pesquisaLivro}&fields=numFound,key,title,author_name,edition_count,cover_i,subject&limit=${limite}`
      );
      const data = await res.json();
      const listaLivros = data.docs;
      setLivrosDisponiveis(data.numFound);
      if (!data.numFound >= 1) {
        setLivroNaoEncontrado(pesquisaLivro);
      }
      setLivros(listaLivros);
      console.log(listaLivros);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    buscaLivros();
  }, []);

  const mostrarMaisRef = useRef(null);
  const shouldShowButton =
    livros.length < 100 && livros.length < livrosDisponiveis;

  const handleInputChange = (event) => {
    setPesquisaLivro(event.target.value);
  };

  const pesquisarOLivro = () => {
    setLimiteDeLivros(10);
    buscaLivros(10);
  };

  return (
    <section className="pagina-livros">
      <div className="containerLivro">
        <div className="texto-pesquise">
          <h2>Conheça nossos livros!</h2>
          <div className="input-pesquisar">
            <span className="icon-lupa">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              placeholder="Pesquisar"
              value={pesquisaLivro}
              onChange={handleInputChange}
            />
            <span className="btn-pesquisar" onClick={pesquisarOLivro}>
              GO!
            </span>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <section className="secao-livros">
            {livros.length >= 1 ? (
              livros.map((livro) => (
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
              ))
            ) : (
              <NotFound nomeDoLivro={livroNaoEncontrado} />
            )}
          </section>
        )}
        {shouldShowButton && (
          <button
            id="mostrarMais"
            className="visivel"
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
