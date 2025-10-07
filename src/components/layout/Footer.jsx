import React from "react";

export default function Footer() {
  return (
    <footer className="bg-emerald-600 text-white py-4 text-center shadow-inner mt-auto">
      © {new Date().getFullYear()} Cashvelo
    </footer>
  );
}
