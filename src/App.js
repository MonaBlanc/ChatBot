import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';
import Home from './components/Pages/Home';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chatbot" element={
          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
