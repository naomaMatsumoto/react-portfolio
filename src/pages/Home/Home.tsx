import React from 'react';
import './Home.scss';
import Skills from '../../organisms/Skills/Skills';
import About from '../../organisms/About/About';
import Works from '../../organisms/Works/Works';

const Home: React.FC = () => {
  return  (
    <div>
      <About></About>
      <Skills></Skills>
      <Works></Works>
    </div>
  );
}

export default Home;