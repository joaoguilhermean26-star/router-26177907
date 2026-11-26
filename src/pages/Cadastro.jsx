
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cadastro({ adicionarTurma }) {
  // A função adicionarTurma é recebida do App via props.

  const [codigo, setCodigo] = useState("");
  const [vagas, setVagas] = useState("");
  const [idioma, setIdioma] = useState("");
  const [professor, setProfessor] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  // Valida os campos e envia a nova turma para o App.
  function salvarTurma(e) {
    e.preventDefault();

    if (
      !codigo.trim() ||
      vagas === "" ||
      !idioma ||
      !professor.trim()
    ) {
      setErro("Preencha todos os campos.");
      return;
    }

    const novaTurma = {
      id: Date.now(),
      codigo: codigo.trim(),
      vagas: Number(vagas),
      idioma: idioma,
      professor: professor.trim()
    };

    adicionarTurma(novaTurma);

    // Regra B9: envia a mensagem de sucesso para a visualização.
    navigate("/turmas", {
      state: {
        mensagem: "Turma cadastrada com sucesso!"
      }
    });
  }

  return (
    <main>
      <h1>Cadastrar turma</h1>

      <p>
        Preencha as informações para cadastrar uma nova turma.
      </p>

      <form
        className="form-cadastro"
        onSubmit={salvarTurma}
        noValidate
      >
        {erro && (
          <p className="mensagem-erro" role="alert">
            {erro}
          </p>
        )}

        <div className="campo">
          <label htmlFor="codigo">Código da turma</label>

          <input
            id="codigo"
            type="text"
            placeholder="Ex.: ING-02"
            value={codigo}
            onChange={e => setCodigo(e.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="vagas">Quantidade de vagas</label>

          <input
            id="vagas"
            type="number"
            placeholder="Ex.: 20"
            value={vagas}
            onChange={e => setVagas(e.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="idioma">Idioma</label>

          <select
            id="idioma"
            value={idioma}
            onChange={e => setIdioma(e.target.value)}
            required
          >
            <option value="">Selecione um idioma</option>
            <option value="Inglês">Inglês</option>
            <option value="Espanhol">Espanhol</option>
            <option value="Francês">Francês</option>
          </select>
        </div>

        <div className="campo">
          <label htmlFor="professor">Professor</label>

          <input
            id="professor"
            type="text"
            placeholder="Nome do professor"
            value={professor}
            onChange={e => setProfessor(e.target.value)}
            required
          />
        </div>

        <div className="form-acoes">
          <Link className="botao-secundario" to="/turmas">
            Cancelar
          </Link>

          <button className="botao" type="submit">
            Salvar turma
          </button>
        </div>
      </form>
    </main>
  );
}

export default Cadastro;
