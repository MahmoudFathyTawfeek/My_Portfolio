import React, { useContext } from 'react';
import { ThemeContext } from '../components/themeContext'; // 👈 لازم نستورد الكونتكست

export default function Hero() {
    const { darkMode } = useContext(ThemeContext); // 👈 نجيب قيمة المود
    
  
    const containerClass = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  return (
    <section className={` ${containerClass} py-5  text-center mt-3`} style={{borderBottom: "1px solid #000"}}>
      <div className="container ">
        <h1 className="display-4 fw-bold">Hi, I’m Mahmoud Tawfeek</h1>
        <p className="lead">Fullstack Developer | Node js & MongoDB & Angular & React & Tailwind & Bootstrap</p>
        <a href="https://drive.google.com/file/d/1fC-5GPYDQI47RnqAqGufjHYmijQ_T4V6/view?usp=drive_link" className="btn border shadow-sm mt-3 bg-danger ">View My CV</a>
      </div>
    </section>
  );
}
