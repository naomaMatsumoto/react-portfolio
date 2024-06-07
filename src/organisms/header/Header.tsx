import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <p>
              <Link to="/">Home</Link>
            </p>
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
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
