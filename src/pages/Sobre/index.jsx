import images from "../../assets/images";
import "./_Sobre.scss";
import Topico from "../../components/Topico";
import Marco from "../../components/Marco";
export default function Sobre() {
  return (
    <div className="sobre">
      <section>
        <div className="rotulo">
          <h3>Quem somos</h3>
        </div>
        <div className="descricao fundacao">
          <h2>Fundação</h2>
          <img src={images.livro} alt="" />
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado. Se
            popularizou na década de 60, quando a Letraset lançou decalques
            contendo passagens de Lorem Ipsum, e mais recentemente quando passou
            a ser integrado a softwares de editoração eletrônica como Aldus
            PageMaker.
          </p>
        </div>
      </section>
      <section>
        <div className="rotulo">
          <h3>Missão, visão e valores</h3>
        </div>
        <div className="descricao">
          <div className="topicos">
            <Topico image={images.foguete} />
            <Topico image={images.olho} />
            <Topico image={images.coracao} />
          </div>
          <div className="marcos">
            <Marco img={images.instituicao} />
            <Marco img={images.selo} />
            <Marco img={images.titulo} />
          </div>
        </div>
      </section>
    </div>
  );
}
