import "./_Contato.scss";

export default function Contato() {
  return (
    <section className="contato">
      <h2>Envie uma mensagem para a nossa equipe!</h2>
      <form action="" className="contato-formulario">
        <input type="text" placeholder="Nome" />
        <input type="email" name="" id="" placeholder="Email" />
        <textarea name="" id="" placeholder="Escreva uma mensagem:"></textarea>
        <input type="submit" value="ENVIAR" id="enviar-form" />
      </form>
    </section>
  );
}
