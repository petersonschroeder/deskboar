import React from "react"
import './styles/global.scss'
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="esquerda">
        <img src="logo.jpg" alt="#" className="logo" />
        <h1 className="titulo"><b>sign in to</b></h1>
        <h2 className="subtitulo">Loren ip is simply</h2>
        <p className="descricao">
          If you don’t have an account register<br />
          You can <a href="/register">Register here</a>!
        </p>
        
      </div>

      <div className="direita">
      <img src="boneco.png" alt="#" className="ilustracao" />
        <Login />
      </div>
    </div>
  </div>
);
}

export default App

/*
 <div >
          
          <h1>Bem-vindo!</h1>
          <p>Informações, imagem ou ilustração aqui.</p>
          
        </div> */