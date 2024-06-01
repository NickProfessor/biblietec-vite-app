import images from "../../assets/images";
import "./_Livro.scss";

export default function Livro({ title, image, edicoes }) {
  return (
    <div className="livro">
      <h3 id="nomeDoLivro">{title}</h3>
      <img
        src={
          image
            ? `https://covers.openlibrary.org/b/id/${image}-M.jpg`
            : images.imagem_padrao
        }
        id="imagemDoLivro"
      />
      <h3 id="preco">
        {edicoes > 1 ? `${edicoes} Edições` : `${edicoes} Edição`}
      </h3>
    </div>
  );
}
