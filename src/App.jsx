import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/play" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;