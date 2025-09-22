import React from "react";
import { Header } from "../components/Header"; 
import { Sidebar } from "../components/sidebar";
import { Outlet } from "react-router-dom";

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Lista } from "../components/Lista";
import { Painel } from "../components/Painel"; 

export function Deshboard() {
  return (
    <>
      <Sidebar />
      <Header />
      
      <main className="dashboard">
        <Outlet /> {/* Conteúdo das rotas aninhadas */}
        <Painel/>  {/* Componente que aparece por padrão */}
      </main>
    </>
  );
}
