import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import images from "../../assets/images";
import "./_Livro.scss";
import Modal from "../Modal";

export default function Livro({ id, title, image, editions, author, subject }) {
  const [description, setDescription] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://openlibrary.org" + id + ".json");
        const data = await res.json();
        const description =
          typeof data.description === "string"
            ? data.description
            : data.description?.value || "descrição não está disponível";
        setDescription(description);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const exibeModal = () => {
    setIsModalVisible(true);
    console.log(id, title, image, editions, author, subject, description);
  };

  const fechaModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
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
      {isModalVisible &&
        ReactDOM.createPortal(
          <Modal
            onClose={fechaModal}
            id={id}
            title={title}
            image={image}
            editions={editions}
            author={author}
            subject={subject}
            description={description}
          />,
          document.getElementById("modal-root")
        )}
    </div>
  );
}
