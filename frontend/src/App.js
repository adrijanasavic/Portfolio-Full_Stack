import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

axios.defaults.baseURL = `http://localhost:4000`;

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.hasOwnProperty("user")) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
