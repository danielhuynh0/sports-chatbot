import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Sports Chatbot</h1>
        <div>
            <a className="mr-4">Home</a>
            <a className="mr-4">About</a>
        </div>
      </div>
    </nav>
  );
};