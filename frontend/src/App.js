import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from "./components/Home";
import Projects from './components/Projects';
import Details from './components/projectDetails';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className="home">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path='/details/:id' element={<Details/>} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
