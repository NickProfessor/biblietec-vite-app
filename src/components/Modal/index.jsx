import "./_Modal.scss";
import images from "../../assets/images";
export default function Modal({
  id,
  title,
  image,
  editions,
  author,
  subject,
  description,
  onClose,
}) {
  const fechaModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="pag-modal">
      <div className="modal-content">
        <i class="fa-solid fa-x" onClick={onClose}></i>
        <aside className="book-visual">
          <div className="book-image">
            <img
              src={
                image
                  ? `https://covers.openlibrary.org/b/id/${image}-M.jpg`
                  : images.imagem_padrao
              }
              alt=""
            />
          </div>
          <div className="book-editions">
            {editions > 1 ? `${editions} Edições` : `${editions} Edição`}
          </div>
          <button className="book-link" onClick={console.log("funcionou")}>
            Ver Livro
          </button>
        </aside>
        <section className="content-book">
          <h2 className="book-title">{title}</h2>
          <div className="keywords">
            <h4 className="book-author">Por {author}</h4>
            <h4 className="book-keywords">{subject}</h4>
          </div>
          <div className="description">
            <h4 className="description-description">Descrição:</h4>
            <p className="description-content">{description}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
