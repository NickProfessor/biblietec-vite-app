import "./_Loading.scss";
export default function Loading() {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p className="carregando">Carregando...</p>
    </div>
  );
}
