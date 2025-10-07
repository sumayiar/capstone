// src/components/ui/Textarea.jsx
import React from "react";

export default function Textarea({ label, value, onChange, rows = 3, placeholder }) {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 font-medium mb-1">{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />
    </div>
  );
}
