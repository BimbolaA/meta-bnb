import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
import Modal from './Modal';

export default function Home() {
    return(
        <div className="App">
            <Nav />
            <Main />
            <Footer />
            <Modal />
        </div>
    )
}