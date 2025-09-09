import { useEffect, useState } from "react";
import "../styles/sidebar.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

export  function Sidebar () { 
 

    return (
      
<div className="sidebar">
  <h2 className="cordobotao">Menu</h2>

  <button><i className="bi bi-speedometer2"></i> Dashboard</button>
  <button><i className="bi bi-box-seam"></i> Produtos</button>
  <button><i className="bi bi-cart4"></i> Vendas</button>
  <button><i className="bi bi-folder2-open"></i> Materiais</button>

  <h2 className="cordobotao">Outros</h2>

  <button><i className="bi bi-gear"></i> Configurações</button>
  <button><i className="bi bi-person"></i> Usuário</button>
  <button><i className="bi bi-building"></i> Empresas</button>
  <button><i className="bi bi-box-arrow-right"></i> Sair</button>
</div>


    );
}