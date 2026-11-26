
import { Link } from "react-router-dom";

function Home({ quantidade }) {
  // A quantidade de turmas é recebida do App através de props.

  return (
    <main>
      <h1>Escola de idiomas — João</h1>

      <p>Bem-vindo, João!</p>

      <p>
        Gerencie as turmas da sua escola de idiomas.
      </p>

      <div className="card-total">
        <h2>Turmas cadastradas</h2>
        <strong>{quantidade}</strong>
      </div>

      <div className="home-acoes">
        <Link className="botao" to="/turmas/novo">
          Cadastrar turma
        </Link>

        <Link className="botao-secundario" to="/turmas">
          Visualizar turmas
        </Link>
      </div>
    </main>
  );
}

export default Home;
