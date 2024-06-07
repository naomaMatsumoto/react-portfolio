import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './organisms/header/Header';
import AppRoutes from './Routes';
import Footer from './organisms/footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header></Header>
      <AppRoutes />
      <Footer></Footer>
    </Router>
  );
}

export default App;