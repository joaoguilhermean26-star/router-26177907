
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Rodape from "./components/Rodape.jsx";

import Home from "./pages/Home.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Visualizacao from "./pages/Visualizacao.jsx";
import NaoEncontrada from "./pages/NaoEncontrada.jsx";

const TITLE = "Turmas cadastradas";
const CHAVE_STORAGE = "escola-26177907-turmas";

const TURMAS_INICIAIS = [
  {
    id: 1,
    codigo: "ING-26177907",
    vagas: 20,
    idioma: "Inglês",
    professor: "Carlos Silva"
  },
  {
    id: 2,
    codigo: "ESP-01",
    vagas: 15,
    idioma: "Espanhol",
    professor: "Mariana Santos"
  },
  {
    id: 3,
    codigo: "FRA-01",
    vagas: 10,
    idioma: "Francês",
    professor: "Pedro Oliveira"
  }
];

function App() {
  // Recupera as turmas salvas ou utiliza os registros iniciais.
  const [turmas, setTurmas] = useState(() => {
    try {
      const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);

      if (dadosSalvos !== null) {
        const dados = JSON.parse(dadosSalvos);

        if (Array.isArray(dados)) {
          return dados;
        }
      }
    } catch (erro) {
      console.error("Erro ao recuperar as turmas:", erro);
    }

    return TURMAS_INICIAIS;
  });

  // Salva os registros sempre que o estado das turmas muda.
  useEffect(() => {
    try {
      localStorage.setItem(
        CHAVE_STORAGE,
        JSON.stringify(turmas)
      );
    } catch (erro) {
      console.error("Erro ao salvar as turmas:", erro);
    }
  }, [turmas]);

  function adicionarTurma(novaTurma) {
    setTurmas(turmasAnteriores => [
      ...turmasAnteriores,
      novaTurma
    ]);
  }

  function removerTurma(id) {
    setTurmas(turmasAnteriores =>
      turmasAnteriores.filter(turma => turma.id !== id)
    );
  }

  return (
    <>
      <Navbar quantidade={turmas.length} />

      <Routes>
        <Route
          path="/"
          element={<Home quantidade={turmas.length} />}
        />

        <Route
          path="/turmas/novo"
          element={
            <Cadastro adicionarTurma={adicionarTurma} />
          }
        />

        <Route
          path="/turmas"
          element={
            <Visualizacao
              title={TITLE}
              turmas={turmas}
              removerTurma={removerTurma}
            />
          }
        />

        <Route
          path="*"
          element={<NaoEncontrada />}
        />
      </Routes>

      <Rodape />
    </>
  );
}

export default App;
