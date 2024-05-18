import "./_Topico.scss";

export default function Topico({ image }) {
  return (
    <div className="topico">
      <img src={image} alt="" />
      <p>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
      </p>
    </div>
  );
}
