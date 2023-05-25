import React from 'react';
import Chefbot from './components/Pages/Chefbot/Chefbot';
import './App.scss';
import Home from './components/Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Authentification/Login';
import Register from './components/Pages/Authentification/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chefbot" element={<Chefbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
