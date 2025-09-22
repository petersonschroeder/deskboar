import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.scss";
import "./styles/Deshboard.scss";

import { Login } from "./pages/Login";
import { Deshboard } from "./pages/Deshboard";
import { Lista } from "./components/Lista";
import { Painel } from "../src/components/Painel"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />

        {/* Rota pai */}
        <Route path="/deshboard" element={<Deshboard />}>
          {/* ← Componente padrão ao acessar /deshboard */}
          <Route index element={<Painel />} />  
          {/* ← Rota filha: /deshboard/lista */}
          <Route path="lista" element={<Lista />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
