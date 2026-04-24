import React, { useEffect, useState, useRef, useContext } from "react";
import "./Certificates.css";
import { ThemeContext } from '../components/themeContext';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsRef = useRef([]);

  const certificatesPerPage = 2;

     const { darkMode } = useContext(ThemeContext); // 👈 نجيب قيمة المود
      const containerClass = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';

  // Fetch JSON
  useEffect(() => {
    fetch("/certificates.json")
      .then(res => res.json())
      .then(data => setCertificates(data));
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(certificates.length / certificatesPerPage);
  const indexOfLast = currentPage * certificatesPerPage;
  const indexOfFirst = indexOfLast - certificatesPerPage;
  const currentCertificates = certificates.slice(indexOfFirst, indexOfLast);

  // Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <section className={`${containerClass} container-fuild certificates py-5`}  style={{borderBottom: "1px solid #000"}}  id="certificates">
      <h2 className="fw-bold mb-4 ">My Certificates</h2>

      <div className="certificates-container">
        {currentCertificates.map((cert, index) => (
          <div
            key={cert.id}
           className={`certificate-card fade-in ${index < 2 ? "show" : ""}`}
            ref={el => (cardsRef.current[index] = el)}
          >
            <img src={cert.image} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.organization}</p>
            <span>{cert.date}</span>
            <a href={cert.link} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination ">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          Prev
        </button>

        <span>{currentPage} / {totalPages}</span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Certificates;
