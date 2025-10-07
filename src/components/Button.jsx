// src/components/Button.jsx
import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "font-semibold rounded-lg px-4 py-2 transition duration-200 focus:outline-none";

  const variants = {
    primary:
      "bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-2 focus:ring-emerald-400",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-2 focus:ring-gray-400",
    danger:
      "bg-red-500 hover:bg-red-600 text-white focus:ring-2 focus:ring-red-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
