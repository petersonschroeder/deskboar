import React from "react"
import './styles/global.scss'
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div >
          <h1>Bem-vindo!</h1>
          <p>Informações, imagem ou ilustração aqui.</p>
        </div>
        <div className="direita" >
          <Login />
        </div>
      </div>
    </div>
  )
}

export default App
