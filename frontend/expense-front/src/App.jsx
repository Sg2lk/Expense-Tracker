import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import './App.css'
import Navbar from './components/Navbar';
import Add from './components/Add';

export default function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gray-900 text-white'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}