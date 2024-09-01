import React from 'react';

export const Button = ({ label, onClick }) => (
  <button onClick={onClick} className="bg-black text-white p-3 hover:bg-slate-600 mx-5 rounded-2xl">
        {label}
  </button>
);