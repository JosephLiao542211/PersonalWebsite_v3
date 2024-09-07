import React, { useState, ReactNode } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // This ensures the lightbox doesn't render when isOpen is false

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="relative mx-4 w-full max-w-md rounded bg-white p-4 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Lightbox;
