import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

const activeStyle = {
  textDecoration: "underline",
};




function App() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          style={(data) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>{" "}
        &nbsp;
        <NavLink to="/about">About</NavLink> &nbsp;
        <NavLink to="/characters">Characters</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/characters" element={<h1>Characters</h1>} />
      </Routes>
    </div>
  );
}

export default App;
