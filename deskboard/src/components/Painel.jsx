import React from "react";
import "../styles/dmain.scss";

export function Painel() {
  return (
    <div className="painel-container">
      <h1>Bem-vindo ao Dashboard 🚀</h1>
      <p className="descricao">
        Aqui você pode gerenciar suas informações de forma rápida e prática.
      </p>

      <div className="painel-cards">
        <div className="card">
          <h2>📋 Lista</h2>
          <p>Visualize todos os itens cadastrados.</p>
        </div>

        <div className="card">
          <h2>⚙️ Configurações</h2>
          <p>Ajuste as preferências do sistema.</p>
        </div>

        <div className="card">
          <h2>📊 Relatórios</h2>
          <p>Acompanhe estatísticas e gráficos.</p>
        </div>
      </div>
    </div>
  );
}
