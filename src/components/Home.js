// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container" id="homePage">
      <h1 className="home-title">Welcome to the Student Registration System</h1>
      <nav className="home-nav">
        <ul className="home-nav__list">
          <li className="home-nav__item">
            <Link className="home-nav__link" to="/register">Register Student</Link>
          </li>
          <li className="home-nav__item">
            <Link className="home-nav__link" to="/students">Student List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
