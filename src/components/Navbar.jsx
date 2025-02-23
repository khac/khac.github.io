import React, { useState, useRef } from "react";

import "./Navbar.css";
// import { NavLink } from "react-router-dom";

export const Navbar = ({aboutMeRef, coreCompetenciesRef}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="title">
        Adit Chawdhary
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
            <a href="#" onClick={() => aboutMeRef.current.scrollIntoView({ behavior: "smooth", block: 'start'  })} > About </a>
        </li>
        <li>
            <a href="#" onClick={() => coreCompetenciesRef.current.scrollIntoView({ behavior: "smooth", block: 'start' })} > Why Me? </a>
        </li>
        <li>
            <a href="/"> Projects </a>
        </li>
        <li>
          <a href = "/">Contact </a>
        </li>
      </ul>
    </nav>
  );
};