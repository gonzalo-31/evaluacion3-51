import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Productos from './Pages/Productos/Productos';
import QuienesSomos from './Pages/About-us/About_us';
import Preguntas from './Pages/Preguntas_frecuentes/Preguntas';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/About_us" element={<QuienesSomos />} />
        <Route path="/preguntas" element={<Preguntas />} />
        
      </Routes>
    </Router>
  );
}

export default App;
