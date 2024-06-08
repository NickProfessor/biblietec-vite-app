import images from "../../assets/images";
import "./_NotFound.scss";
export default function NotFound({ nomeDoLivro }) {
  return (
    <div className="notFound">
      <div className="imagem-do-livrinho">
        <img src={images.livro_404} alt="Livro 404" />
      </div>
      <div className="mensagem-do-livrinho">
        <h4>
          Livro <i>{nomeDoLivro}</i> não encontrado!
        </h4>
        <p>Parece que o livro não existe nessa biblioteca, viu?</p>
      </div>
    </div>
  );
}
