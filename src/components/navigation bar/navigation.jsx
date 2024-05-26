import React, { useRef, useCallback, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navigation.css";

export default function Navigation() {
  const navRef = useRef(null);

  const toggleNavBar = useCallback(() => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  }, [navRef]);

  useEffect(() => {
    return () => {
      navRef.current = null;
    };
  }, []);

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <h2>FOUR 3</h2>
        </a>
        <nav className="header-nav" ref={navRef}>
          <ul className="header-nav-lists">
            <li className="list">
              <a href="#" className="link">
                Create Blog
              </a>
            </li>
            <li className="list">
              <a href="#" className="link">
                News
              </a>
            </li>
            <li className="list">
              <a href="#" className="link">
                Categories
              </a>
            </li>
            <li className="list">
              <a href="#" className="link">
                Creator Profile
              </a>
            </li>
            <li className="list">
              <a href="#" className="link">
                ChatBot
              </a>
            </li>
            <li className="list screen-switch">
              <a href="#" className="link">
                Log In
              </a>
            </li>
            <li className="list screen-switch">
              <a href="#" className="link">
                Register
              </a>
            </li>
            <button className="btn close-btn" onClick={toggleNavBar}>
              <FaTimes />
            </button>
          </ul>
        </nav>

        <div className="work-buttons">
          <button className="search-btn">
            <CiSearch />
          </button>
          <button className="btn" onClick={toggleNavBar}>
            <FaBars />
          </button>
        </div>
      </header>
    </div>
  );
}