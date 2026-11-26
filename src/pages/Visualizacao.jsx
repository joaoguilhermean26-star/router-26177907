
import { Link, useLocation } from "react-router-dom";

const IDIOMAS = ["Inglês", "Espanhol", "Francês"];

function Visualizacao({ title, turmas, removerTurma }) {
  // O título, as turmas e a função de remover vêm do App.

  const location = useLocation();
  const mensagem = location.state?.mensagem;

  // Solicita confirmação antes de remover uma turma.
  function confirmarRemocao(id) {
    if (window.confirm("Deseja realmente remover esta turma?")) {
      removerTurma(id);
    }
  }

  return (
    <main>
      <div className="visualizacao-topo">
        <div>
          <h1>{title}</h1>

          <p>
            Consulte as turmas organizadas por idioma.
          </p>
        </div>

        <Link className="botao" to="/turmas/novo">
          + Nova turma
        </Link>
      </div>

      {mensagem && (
        <p className="mensagem-sucesso" role="status">
          {mensagem}
        </p>
      )}

      {turmas.length === 0 ? (
        <div className="lista-vazia">
          <p>Nenhuma turma cadastrada.</p>

          <Link to="/turmas/novo">
            Cadastrar turma
          </Link>
        </div>
      ) : (
        IDIOMAS.map(idioma => {
          const turmasIdioma = turmas.filter(
            turma => turma.idioma === idioma
          );

          return (
            <section className="grupo-idioma" key={idioma}>
              <div className="grupo-titulo">
                <h2>{idioma}</h2>

                <span>
                  {turmasIdioma.length} turma(s)
                </span>
              </div>

              {turmasIdioma.length === 0 ? (
                <p className="idioma-vazio">
                  Nenhuma turma neste idioma.
                </p>
              ) : (
                <div className="grade-turmas">
                  {turmasIdioma.map(turma => (
                    <article
                      className="card-turma"
                      key={turma.id}
                    >
                      <div className="card-turma-topo">
                        <h3>{turma.codigo}</h3>

                        <span className="turma-vagas">
                          {turma.vagas} vagas
                        </span>
                      </div>

                      <p>
                        Professor: {turma.professor}
                      </p>

                      <div className="card-turma-acoes">
                        <button
                          type="button"
                          className="botao-remover"
                          onClick={() => confirmarRemocao(turma.id)}
                        >
                          Remover
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          );
        })
      )}
    </main>
  );
}

export default Visualizacao;
