import { useEffect, useState } from "react";
import images from "../../assets/images";
import "./_Livro.scss";

export default function Livro({ id, title, image, editions, author, subject }) {
  const [description, setDescription] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://openlibrary.org" + id + ".json");
        const data = await res.json();
        const description = data.description.value
          ? data.description.value
          : "descrição não está disponível";
        setDescription(description);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  const exibeModal = async () => {
    console.log(id, title, image, editions, author, subject, description);
  };
  return (
    <div className="livro" onClick={exibeModal}>
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
        {editions > 1 ? `${editions} Edições` : `${editions} Edição`}
      </h3>
    </div>
  );
}
