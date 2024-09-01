import React from 'react';

export const InputBox = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border border-gray-800 bg-white w-full text-md mx-5 pl-3"
  />
);