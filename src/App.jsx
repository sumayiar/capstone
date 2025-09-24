import React from "react"
import ThemeToggle from "./components/ThemeToggle.jsx"
import Login from "./components/Login.jsx"

export default function App(){
  return (
    <div className="container">
      <header className="header">
        <div className="brand">
          <div className="logo">🐱</div>
          <div>Cashvelo</div>
        </div>
        <ThemeToggle/>
      </header>

      <main className="main">
        <Login/>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Cashvelo
      </footer>
    </div>
  )
}
