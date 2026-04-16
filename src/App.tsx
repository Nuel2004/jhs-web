import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

function App() {
  return (
    <Router>
      {/* Notificaciones globales */}
      <Toaster position="top-center" reverseOrder={false} />
      
      <Routes>
        {/* Inicio */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Autenticación */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        
        {/* Aquí podrías añadir el Dashboard en el futuro */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;