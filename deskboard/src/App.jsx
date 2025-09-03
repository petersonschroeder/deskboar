import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./styles/global.scss"
import "./styles/Deshboard.scss"

import { Login } from "./pages/Login"
import {Deshboard}  from "./pages/Deshboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/deshboard" element={<Deshboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
