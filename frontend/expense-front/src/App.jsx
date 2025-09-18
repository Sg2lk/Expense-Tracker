import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Add from './components/Add';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import { ExpensesProvider } from './components/CreateContext';
import { useState } from 'react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <ExpensesProvider>
        <div className="bg-gray-900 text-white min-h-screen box-border">
          <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard searchQuery={searchQuery} />} />
            <Route path="/add" element={<Add />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </ExpensesProvider>
    </BrowserRouter>
  );
}
