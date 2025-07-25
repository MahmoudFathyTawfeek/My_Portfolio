import { useEffect } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Movies Website",
      img: "/Movies_React.png",
      desc: "A full-stack movie website with admin panel.",
      demo: "#",
      code: "https://github.com/MahmoudFathyTawfeek/Movie-Website-React-JS",
    },
    {
      title: "Admin Dashboard",
      img: "/Dashboard_Angular.png",
      desc: "An admin dashboard for housing website by Angular and Node js",
      demo: "#",
      code: "https://github.com/MahmoudFathyTawfeek/Airbnb-Dashboard",
    },
    {
      title: "E-Commerce Website",
      img: "/Nextjs_Tailwind.png",
      desc: "A frontend e-commerce website by next js & tailwind.",
      demo: "#",
      code: "https://github.com/MahmoudFathyTawfeek/NextJS--Project",
    },
    {
      title: "Portfolio",
      img: "/portfolio.png",
      desc: "a personal portfolio by React js and Bootstrap.",
      demo: "#",
      code: "#",
    },
    {
      title: "MovieVibe",
      img: "https://via.placeholder.com/400x250?text=Blog",
      desc: "Native Javascript movie website by JS, HTML and CSS only.",
      demo: "#",
      code: "https://github.com/MahmoudFathyTawfeek/Movies-Js",
    },
    {
      title: "E-Commerce Website",
      img: "/angular_ECommerce.png",
      desc: "E_Commerce website by Angular and bootstrap.",
      demo: "#",
      code: "https://github.com/MahmoudFathyTawfeek/Angular_E_commerce",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // اختياري: يوقف المتابعة بعد أول ظهور
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
        <div className="container-fuild bg-dark py-5" id="projects" style={{borderBottom: "1px solid #f8f9fa"}}>
      <div className="container text-center" >
        <h2 className="fw-bold mb-4 text-white">My Projects</h2>
        <div className="row g-4 justify-content-center" >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="col-12 col-md-6 col-lg-4 d-flex project-card"
              
            >
              <div className="card shadow-sm w-100 d-flex flex-column project-hover" style={{border:"1px solid white"}}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.desc}</p>
                  <div className="d-flex justify-content-between mt-2">
                    <a
                      href={project.demo}
                      className="btn btn-sm btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.code}
                      className="btn btn-sm btn-outline-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .project-card.fade-in {
          transform: translateY(-5px);
        }

        .project-hover:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
      `}</style>
      </div>
  );
}
