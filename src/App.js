import React from 'react';
import Chefbot from './components/Pages/Chefbot/Chefbot';
import './App.scss';
import Home from './components/Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Authentification/Login';
import Register from './components/Pages/Authentification/Register';
import User from './components/Pages/User/User';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chefbot" element={<Chefbot />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
