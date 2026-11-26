import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Visualizacao from "./pages/Visualizacao.jsx";
import NaoEncontrada from "./pages/NaoEncontrada.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/turmas/novo"
        element={<Cadastro />}
      />

      <Route
        path="/turmas"
        element={<Visualizacao />}
      />

      <Route
        path="*"
        element={<NaoEncontrada />}
      />
    </Routes>
  );
}

export default App;