import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './components/landing/Landing';
import Login from './components/Login';
import Dashboard from './components/admin/Dashboard';

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>404 - Halaman Tidak Ditemukan</h1>} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
