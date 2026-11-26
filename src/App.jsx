
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Rodape from "./components/Rodape.jsx";

import Home from "./pages/Home.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Visualizacao from "./pages/Visualizacao.jsx";
import NaoEncontrada from "./pages/NaoEncontrada.jsx";

const TITLE = "Turmas cadastradas";

function App() {
  const [turmas, setTurmas] = useState([
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
  ]);

  function adicionarTurma(novaTurma) {
    setTurmas(turmasAnteriores => [
      ...turmasAnteriores,
      novaTurma
    ]);
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
