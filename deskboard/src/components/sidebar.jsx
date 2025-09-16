// src/components/Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2 className="cordobotao">Menu</h2>

      <button onClick={() => navigate("dh")}>
        <i className="bi bi-speedometer2"></i> Dashboard
      </button>

      <button onClick={() => navigate("lista")}>
        <i className="bi bi-box-seam"></i> Produtos
      </button>

      <button onClick={() => navigate("vendas")}>
        <i className="bi bi-cart4"></i> Vendas
      </button>

      <button onClick={() => navigate("materiais")}>
        <i className="bi bi-folder2-open"></i> Materiais
      </button>

      <h2 className="cordobotao">Outros</h2>

      <button onClick={() => navigate("configuracoes")}>
        <i className="bi bi-gear"></i> Configurações
      </button>

      <button onClick={() => navigate("usuarios")}>
        <i className="bi bi-person"></i> Usuário
      </button>

      <button onClick={() => navigate("empresas")}>
        <i className="bi bi-building"></i> Empresas
      </button>

      <button onClick={() => navigate("/login")}>
        <i className="bi bi-box-arrow-right"></i> Sair
      </button>
    </div>
  );
}
