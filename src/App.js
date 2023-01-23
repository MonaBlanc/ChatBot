import React from 'react';
import Chefbot from './components/Pages/Chefbot/Chefbot';
import './App.css';
import Home from './components/Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chefbot" element={<Chefbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
