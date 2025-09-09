import React from "react";
import { Header } from "../components/Header"; 
import { Sidebar } from "../components/sidebar";
import 'bootstrap-icons/font/bootstrap-icons.css';

 export function Deshboard() {
  return (
    <>
    
    <Header />
    <Sidebar/>
      
      <main className="dashboard">
       </main>
    </>
  );
}
