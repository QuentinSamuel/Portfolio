import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjetList from "./components/Project/ProjectList";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<ProjetList />} />
        <Route path="/admin" element={<ProjetList admin />} />
      </Routes>
    </Router>
  );
}

export default App;
