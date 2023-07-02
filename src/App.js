import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from './pages/home/Home';
import Register from "./pages/register/Register";
import Save from "./pages/save/Save";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/save" element={<Save />} />
        
      </Routes>
    </Router>
  );
}

export default App;


