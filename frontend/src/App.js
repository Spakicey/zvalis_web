import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss';
import Home from "./components/Home";
import Projects from './components/Projects';
import Details from './components/projectDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path='/details/:id' element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
