
import { Link, useLocation } from "react-router-dom";

const IDIOMAS = ["Inglês", "Espanhol", "Francês"];

function Visualizacao({ title, turmas }) {
  // O título e as turmas são recebidos do App via props.
  // O useLocation recebe a mensagem enviada pelo cadastro.

  const location = useLocation();
  const mensagem = location.state?.mensagem;

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
          // Separa as turmas que possuem o idioma atual.
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
