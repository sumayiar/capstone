import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx"; 
import SignUp from "./components/SignUp.jsx";
import QuestionnairePage from "./pages/QuestionnairePage.jsx"; // ✅ import the new page

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // can be 'home', 'login', 'signup', 'questionnaire'

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentPage("home"); // logged in → Home
      else setCurrentPage((p) => p ?? "login"); // logged out → Login
    });
    return unsub;
  }, []);

  // --- Sign Up Page ---
  if (currentPage === "signup") {
    return (
      <div className="container">
        <header className="header">
          <div
            className="brand"
            style={{ cursor: "pointer" }}
            onClick={() => setCurrentPage("home")}
          >
            <div>Cashvelo</div>
          </div>
          <div className="flex" style={{ gap: '2rem', alignItems: 'center' }}>
            <button 
              onClick={() => setCurrentPage("home")}
              style={{ 
                padding: '0.5rem 0.75rem', 
                borderRadius: '0.375rem',
                transition: 'all 0.2s',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage("login")}
              style={{ 
                padding: '0.5rem 0.75rem', 
                borderRadius: '0.375rem',
                transition: 'all 0.2s',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Login
            </button>
            <ThemeToggle />
          </div>
        </header>

        <main className="main">
          <SignUp setCurrentPage={setCurrentPage} />
        </main>

        <footer className="footer">© {new Date().getFullYear()} Cashvelo</footer>
      </div>
    );
  }

  // --- Login Page ---
  if (currentPage === "login") {
    return (
      <div className="container">
        <header className="header">
          <div
            className="brand"
            style={{ cursor: "pointer" }}
            onClick={() => setCurrentPage("home")}
          >
            <div>Cashvelo</div>
          </div>
          <div className="flex" style={{ gap: '2rem', alignItems: 'center' }}>
            <button 
              onClick={() => setCurrentPage("home")}
              style={{ 
                padding: '0.5rem 0.75rem', 
                borderRadius: '0.375rem',
                transition: 'all 0.2s',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage("signup")}
              style={{ 
                padding: '0.5rem 0.75rem', 
                borderRadius: '0.375rem',
                transition: 'all 0.2s',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Sign Up
            </button>
            <ThemeToggle />
          </div>
        </header>

        <main className="main">
          <Login setCurrentPage={setCurrentPage} />
        </main>

        <footer className="footer">© {new Date().getFullYear()} Cashvelo</footer>
      </div>
    );
  }

  // --- Questionnaire Page ---
  if (currentPage === "questionnaire") {
    return <QuestionnairePage setCurrentPage={setCurrentPage} />;
  }

  // --- Home Page ---
  return <HomePage setCurrentPage={setCurrentPage} />;
}
