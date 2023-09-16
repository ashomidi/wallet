import * as React from "react";

export const TabSelector = ({ isActive, children, onClick }) => (
  <button
    className={`mx-1 items-center px-2 font-normal rounded cursor-pointer whitespace-nowrap ${isActive ? "bg-gray-400 text-gray-900" : "text-gray-500 bg-gray-900"
      }`}
    onClick={onClick}
  >
    {children}
  </button>
);