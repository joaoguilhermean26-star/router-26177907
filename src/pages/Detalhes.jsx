
import { Link, useParams } from "react-router-dom";

function Detalhes({ turmas }) {
  // O array de turmas é recebido do App via props.
  // O useParams recupera o ID informado na URL.

  const { id } = useParams();

  // Procura a turma correspondente ao ID.
  const turma = turmas.find(
    turma => turma.id === Number(id)
  );

  if (!turma) {
    return (
      <main>
        <h1>Turma não encontrada</h1>

        <p>O registro solicitado não existe.</p>

        <Link className="botao" to="/turmas">
          Voltar para turmas
        </Link>
      </main>
    );
  }

  return (
    <main>
      <Link className="link-voltar" to="/turmas">
        ← Voltar para turmas
      </Link>

      <h1>Detalhes da turma</h1>

      <p>
        Consulte as informações da turma selecionada.
      </p>

      <article className="card-detalhes">
        <div className="detalhes-topo">
          <h2>{turma.codigo}</h2>

          <span className="turma-vagas">
            {turma.idioma}
          </span>
        </div>

        <div className="detalhes-grade">
          <div className="detalhes-item">
            <span>Código da turma</span>
            <strong>{turma.codigo}</strong>
          </div>

          <div className="detalhes-item">
            <span>Idioma</span>
            <strong>{turma.idioma}</strong>
          </div>

          <div className="detalhes-item">
            <span>Quantidade de vagas</span>
            <strong>{turma.vagas} vagas</strong>
          </div>

          <div className="detalhes-item">
            <span>Professor</span>
            <strong>{turma.professor}</strong>
          </div>
        </div>

        <div className="detalhes-acoes">
          <Link className="botao" to="/turmas">
            Voltar para turmas
          </Link>
        </div>
      </article>
    </main>
  );
}

export default Detalhes;
