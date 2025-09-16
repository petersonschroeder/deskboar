import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.scss";
import "./styles/Deshboard.scss";

import { Login } from "./pages/Login";
import { Deshboard } from "./pages/Deshboard";
import { Lista } from "./components/Lista"; // ✅ Importar Lista

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />

        {/* Rota pai */}
        <Route path="/deshboard" element={<Deshboard />}>
          <Route index element={null} /> {/* ← mantém <main> vazio em /deshboard */}
          <Route path="lista" element={<Lista />} /> {/* ✅ Rota filha */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
