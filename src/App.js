import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router2 from './router';
import React from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router2 />
      </BrowserRouter>
      <Navbar />
      <Banner />
    </>
  );
}

export default App;
