import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div>
    {/* Navigation Bar */}
    <nav className="border-gray-200 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-1">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <a href="#flashcard" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-3xl font-bold whitespace-nowrap">FLT</span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-white rounded-lg md:hidden hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                to="/"
                className="block py-3 px-4 text-xl md:p-0 text-white rounded hover:text-yellow-300 md:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className="block py-3 px-4 text-xl md:p-0 text-white rounded hover:text-yellow-300 md:hover:bg-transparent"
              >
                Admin Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/questions"
                className="block py-3 px-4 text-xl md:p-0 text-white rounded hover:text-yellow-300 md:hover:bg-transparent"
              >
                Flash Cards
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Content */}
    <main className="p-4">
      
      {children}
    </main>
  </div>
);

export default Layout;
