import React from "react";
import "./Input.scss";
import { Link } from "react-router-dom";

const Input: React.FC = () => {
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
  );
};
export default Input;
