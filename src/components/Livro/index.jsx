import images from "../../assets/images";
import "./_Livro.scss";

export default function Livro() {
  return (
    <div className="livro">
      <h3 id="nomeDoLivro">Harry Potter e a Pedra Filosofal</h3>
      <img src={images.capa_harry} id="imagemDoLivro" />
      <h3 id="preco">R$ 59,99</h3>
    </div>
  );
}
