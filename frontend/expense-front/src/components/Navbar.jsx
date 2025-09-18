import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onSearch, searchQuery }) {
  const location = useLocation();

  return (
    <nav className="bg-blue-600 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">Expense Tracker</span>

        <div className="flex md:order-2">
          <div
            className={`relative hidden md:block ${
              location.pathname !== '/dashboard' ? 'invisible' : ''
            }`}
          >
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search..."
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-blue-600 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-blue-600">
            <li>
              <Link
                to="/dashboard"
                className="block py-2 px-3 text-white md:text-lg rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0"
                aria-current="page">Dashboard</Link>
            </li>
            <li>
              <Link
                to="/add"
                className="block py-2 px-3 text-white md:text-lg rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0">Add</Link>
            </li>
            <li>
              <Link
                to="/stats"
                className="block py-2 px-3 text-white md:text-lg rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0">Stats</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}