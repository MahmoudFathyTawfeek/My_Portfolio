import React, { useContext } from 'react';
import { useEffect } from "react";
import { ThemeContext } from '../components/themeContext';

export default function Header() {
   const { darkMode, toggleMode } = useContext(ThemeContext);


  useEffect(() => {
    const toggleBtn = document.querySelector(".navbar-toggler");
    const navMenu = document.querySelector("#navbarNav");

    // يقفل القائمة لو ضغطت على لينك
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("show")) {
          toggleBtn.click();
        }
      });
    });

    // يقفل القائمة لو ضغطت في أي مكان بره
    const handleClickOutside = (e) => {
      if (navMenu.classList.contains("show") && 
          !navMenu.contains(e.target) && 
          !toggleBtn.contains(e.target)) {
        toggleBtn.click();
      }
    };
    document.addEventListener("click", handleClickOutside);

    // cleanup
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
        <nav
        className={` navbar navbar-expand-lg  bg-black text-white shadow-sm fixed-top ${darkMode ? 'navbar-dark text-light' : 'navbar-light text-white '}`}
        >
        <div className="container-fluid px-3">
          {/* اللوجو */}
          <div className="col-md-1 d-flex align-items-center">
            <img
              src="/favicon.ico"
              alt="Mahmoud"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "45px", border: "1px solid white" }}
            />
          </div>
          <span className="navbar-brand fw-bold ms-2 text-white">Mahmoud</span>

          {/* زرار الموبايل */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* الليستة */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-white">
              <li className="nav-item"><a href="#about" className="nav-link text-white">About</a></li>
              <li className="nav-item"><a href="#skills" className="nav-link text-white">Skills</a></li>
              <li className="nav-item"><a href="#projects" className="nav-link text-white">Projects</a></li>
              <li className="nav-item"><a href="#certificates" className="nav-link text-white">Certificates</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link text-white">Contact</a></li>
              <li className="nav-item me-3">
                <button className="btn btn-sm btn-outline-secondary py-2" onClick={toggleMode}>
                  {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
