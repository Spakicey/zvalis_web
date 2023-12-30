import React from 'react';
import './style/App.scss';
import Header from './components/Header';
import Home from "./components/Home";
import Work from './components/Work';
import Details from './components/workDetails';
import Info from './components/Info';
import Credit from './components/Credit';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className='main'>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/info" element={<Info/>} />
          <Route exact path="/work" element={<Work/>} />
          <Route exact path='/details/:id' element={<Details/>} />
          <Route exact path="/credit" element={<Credit/>} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
