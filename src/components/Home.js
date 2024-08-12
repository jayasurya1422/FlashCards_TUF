import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Welcome to Flashcard Learning Tool</h1>
    
    <main className="flex-grow p-6 md:p-8 container mx-auto bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-lg shadow-md">
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Explore the following sections:
      </p>
      <ul className="list-disc pl-5 space-y-3 mb-6">
        <li className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out">
          Admin Dashboard
        </li>
        <li className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out">
          Flash Cards
        </li>
      </ul>
      
      <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Objectives of Flashcard Learning</h3>
        <ul className="list-disc pl-5 mb-6 text-gray-700">
          <li>Enhance quick recall and memorization of key concepts.</li>
          <li>Support efficient learning through active recall and spaced repetition.</li>
          <li>Improve long-term retention of information.</li>
          <li>Facilitate self-assessment and track learning progress.</li>
        </ul>

        <div className="mt-6 flex items-center space-x-4">
          <Link
            to="/questions"
            className="inline-block px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg shadow-md transition-colors duration-300 ease-in-out"
          >
            Start Learning
          </Link>
          <Link
            to="/admin"
            className="inline-block px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 rounded-lg shadow-md transition-colors duration-300 ease-in-out"
          >
            Create Flashcards
          </Link>
        </div>
      </section>

      <div className="mt-6">
        {children}
      </div>
    </main>

    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-center text-gray-600 py-4">
      <div className="container mx-auto">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default Layout;
