import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default Routers;