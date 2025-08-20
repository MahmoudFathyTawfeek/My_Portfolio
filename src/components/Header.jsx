import { useEffect } from "react";

export default function Header() {

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm fixed-top">
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
          <span className="navbar-brand fw-bold ms-2">Mahmoud</span>

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
              <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
              <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
