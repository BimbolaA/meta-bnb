import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Places from './components/Places';
import Home from './components/Home';

function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home /> } />
          <Route path='/Places' element = {<Places />} />
          </Routes>
        </BrowserRouter>
        
      );
}

export default App;
