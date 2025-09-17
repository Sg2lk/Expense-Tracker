import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Add from './components/Add';
import Navbar from './components/Navbar';
import { ExpensesProvider } from './components/CreateContext';

export default function App() {
  return (
    <BrowserRouter>
      <ExpensesProvider>
        <div className="bg-gray-900 text-white min-h-screen box-border">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </div>
      </ExpensesProvider>
    </BrowserRouter>
  );
}