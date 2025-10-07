// src/components/layout/Navbar.jsx
import React from "react";
import ThemeToggle from "../ThemeToggle";

export default function Navbar({ setCurrentPage, user }) {
  return (
    <nav className="flex items-center justify-between bg-emerald-600 text-white px-6 py-3 shadow-md">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setCurrentPage("home")}
      >
        <img
          src="/cat-envelope.jpg"
          alt="Cashvelo logo"
          className="w-8 h-8 rounded-lg"
        />
        <span className="font-bold text-lg">Cashvelo</span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setCurrentPage("home")}
          className="hover:text-emerald-200 transition"
        >
          Home
        </button>
        {user && (
          <button
            onClick={() => setCurrentPage("questionnaire")}
            className="hover:text-emerald-200 transition"
          >
            Setup
          </button>
        )}
        {user ? (
          <button
            onClick={() => setCurrentPage("login")}
            className="hover:text-emerald-200 transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setCurrentPage("signup")}
            className="hover:text-emerald-200 transition"
          >
            Sign Up
          </button>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
}