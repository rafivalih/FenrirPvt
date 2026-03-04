import { Routes, Route } from 'react-router-dom';
// Vite handles imports the same way, but ensure your file extensions match
import LoginPage from "./components/LoginPage";
import DashBoard from "./components/DashBoard";
import Scans from './components/Scans';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/scans" element={<Scans />} />
    </Routes>
  );
}

export default App;