export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm sticky-top ">
        <div className="container-fluid px-3">
          <div className="col-md-1">
            <img
             src="/favicon.ico"
              alt="Mahmoud"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "45px", border:"1px solid white" }}
            />
         </div>
          <span className="navbar-brand fw-bold">Mahmoud</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
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
