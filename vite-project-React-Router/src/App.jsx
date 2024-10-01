import { Link, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
      <Link to="/blue">Blue</Link> | <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<h1>Blue</h1>} />
          <Route path="/red" element={<h1>Red</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
