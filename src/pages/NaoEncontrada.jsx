import { Link, useLocation } from "react-router-dom";

function NaoEncontrada() {
  // O useLocation identifica o endereço acessado.
  const location = useLocation();

  return (
    <main>
      <h1>404 - Página não encontrada</h1>

      <p>
        O caminho {location.pathname} não existe.
      </p>

      <Link to="/">Voltar para a Home</Link>
    </main>
  );
}

export default NaoEncontrada;