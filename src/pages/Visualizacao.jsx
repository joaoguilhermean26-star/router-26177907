
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const IDIOMAS = ["Inglês", "Espanhol", "Francês"];

function Visualizacao({ title, turmas, removerTurma }) {
  // O título, as turmas e a função de remover vêm do App.

  const [busca, setBusca] = useState("");

  const location = useLocation();
  const mensagem = location.state?.mensagem;

  // Filtra as turmas pelo código digitado.
  const turmasFiltradas = turmas.filter(turma =>
    turma.codigo.toLowerCase().includes(
      busca.trim().toLowerCase()
    )
  );

  // Solicita confirmação antes de remover.
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

      <div className="campo-busca">
        <label htmlFor="busca">Buscar turma</label>

        <input
          id="busca"
          type="search"
          placeholder="Buscar pelo código da turma..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
        />

        <p>
          {turmasFiltradas.length} de {turmas.length} turmas
          encontradas
        </p>
      </div>

      {turmas.length === 0 ? (
        <div className="lista-vazia">
          <p>Nenhuma turma cadastrada.</p>

          <Link to="/turmas/novo">
            Cadastrar turma
          </Link>
        </div>
      ) : turmasFiltradas.length === 0 ? (
        <div className="lista-vazia">
          <p>Nenhuma turma encontrada.</p>

          <button
            type="button"
            className="botao-secundario"
            onClick={() => setBusca("")}
          >
            Limpar busca
          </button>
        </div>
      ) : (
        IDIOMAS.map(idioma => {
          // Agrupa as turmas filtradas por idioma.
          const turmasIdioma = turmasFiltradas.filter(
            turma => turma.idioma === idioma
          );

          // Esconde grupos sem resultados durante a busca.
          if (busca.trim() && turmasIdioma.length === 0) {
            return null;
          }

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
