import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Skill from "./components/Skill";
import ProjetList from "./components/Project/ProjectList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<ProjetList />} />
        <Route path="/admin" element={<ProjetList admin />} />
        <Route path="/competence" element={<Skill />} />
      </Routes>
    </Router>
  );
}

export default App;
