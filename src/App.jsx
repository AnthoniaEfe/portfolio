import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
// components
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;