import React from "react";
import { Header } from "../components/Header"; 
import { Sidebar } from "../components/sidebar";
import { Outlet } from "react-router-dom"; // 👈 Importante

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Lista } from "../components/Lista";
import { dmain} from "../components/Dmain"

export function Deshboard() {
  return (
    <>
      <Sidebar />
      <Header />
      
      <main className="dashboard">
        <Outlet /> {<Lista/>}
        
      </main>
    </>
  );
}
