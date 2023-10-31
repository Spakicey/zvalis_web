import React from 'react';
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
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path='/details/:id' element={<Details/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
