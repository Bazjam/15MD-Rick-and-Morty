import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Characters from "./page/Characters/Characters";
import Character from "./page/Character/Character";

function App() {

  return (
    <div className="app-container">
      <nav className="nav">
        <NavLink to="/" className="nav-item">Home</NavLink>{" "} &nbsp;
        <NavLink to="/about" className="nav-item">About</NavLink> &nbsp;
        <NavLink to="/characters" className="nav-item">Characters</NavLink>
      </nav>

      <Routes>
        <Route path="/"  index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
        
        <Route path="*" element={ <h1>404 not found</h1>} />
      
      </Routes>
    </div>
  );
}

export default App;
