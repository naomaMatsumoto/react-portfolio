import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Skills</p>
          </li>
          <li>
            <p>Works</p>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
  }
export default Footer;