import "./_Modal.scss";
import images from "../../assets/images";
export default function Modal() {
  return (
    <div className="pag-modal">
      <div className="modal-content">
        <i class="fa-solid fa-x"></i>
        <aside className="book-visual">
          <div className="book-image">
            <img src={images.capa_harry} alt="" />
          </div>
          <div className="book-editions">10 edições</div>
          <button className="book-link">Ver Livro</button>
        </aside>
        <section className="content-book">
          <h2 className="book-title">Harry Potter E A Pedra Filosofal</h2>
          <div className="keywords">
            <h4 className="book-author">Por J.K. Rowling</h4>
            <h4 className="book-keywords">Ficção Científica</h4>
          </div>
          <div className="description">
            <h4 className="description-description">Descrição:</h4>
            <p className="description-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae sunt nostrum voluptatibus cumque doloremque maxime
              consectetur, provident eligendi, ab inventore itaque quis. Hic
              perspiciatis ut enim adipisci qui, ad consectetur.orem ipsum dolor
              sit amet consectetur adipisicing elit. Recusandae sunt nostrum
              voluptatibus cumque doloremque maxime consectetur, provident
              eligendi, ab inventore itaque quis. Hic perspiciatis ut enim
              adipisci qui, ad consectetur.orem ipsum dolor sit amet consectetur
              adipisicing elit. Recusandae sunt nostrum voluptatibus cumque
              doloremque maxime consectetur, provident eligendi, ab inventore
              itaque quis. Hic perspiciatis ut enim adipisci qui, ad
              consectetur.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
