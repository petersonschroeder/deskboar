import React from "react"
import './styles/global.scss'
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container2">
        <div>
          <img src="logo.jpg" alt=""  className="Asepag"/>
          <h1 className="comentario"><b>sign in to</b></h1>
          <h2>Loren ip is simply</h2>
          <p>If you don’t have an account register You can   Register here !</p>
        </div>
      
        <div><img src="boneco.png" alt="" className="boneco"/></div>
        </div>
 
      <div className="direita" >
          <Login />
        </div>
      </div>
    </div>
  )
}

export default App

/*
 <div >
          
          <h1>Bem-vindo!</h1>
          <p>Informações, imagem ou ilustração aqui.</p>
          
        </div> */