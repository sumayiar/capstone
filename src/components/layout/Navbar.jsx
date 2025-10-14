import { useState } from "react";
import ThemeToggle from "../ThemeToggle.jsx";

export default function Navbar({ setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-transparent backdrop-blur-md text-white px-6 py-4 flex justify-between items-center border-b border-white/10">
      {/* Logo */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setCurrentPage("home")}
      >
        <img
          src="/images/cashcat.png"
          alt="Cashvelo Logo"
          className="w-8 h-8"
        />
        <span className="text-xl font-semibold">Cashvelo</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <button
          onClick={() => setCurrentPage("home")}
          className="hover:text-purple-400 transition"
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage("signup")}
          className="hover:text-purple-400 transition"
        >
          Sign Up
        </button>
        <button
          onClick={() => setCurrentPage("login")}
          className="hover:text-purple-400 transition"
        >
          Login
        </button>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
          />
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-6 z-50 bg-black/90 border border-white/10 rounded-xl p-4 flex flex-col space-y-3 w-48 md:hidden">
          <button
            onClick={() => {
              setCurrentPage("home");
              setIsOpen(false);
            }}
            className="hover:text-purple-400 transition text-left"
          >
            Home
          </button>
          <button
            onClick={() => {
              setCurrentPage("signup");
              setIsOpen(false);
            }}
            className="hover:text-purple-400 transition text-left"
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              setCurrentPage("login");
              setIsOpen(false);
            }}
            className="hover:text-purple-400 transition text-left"
          >
            Login
          </button>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
