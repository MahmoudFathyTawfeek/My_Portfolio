import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute("data-width");
          }
        });
      },
      { threshold: 0.3 }
    );
    progressBars.forEach((bar) => observer.observe(bar));
  }, []);

  const skills = [
    {
      title: "HTML & CSS",
      desc: "Building semantic, accessible, responsive layouts.",
      width: "95%",
      color: "bg-primary",
    },
    {
      title: "JavaScript",
      desc: "Dynamic, interactive websites with vanilla JS and ES6+.",
      width: "85%",
      color: "bg-success",
    },
    {
      title: "React",
      desc: "Modern SPA development with reusable components.",
      width: "80%",
      color: "bg-info",
    },
    {
      title: "Bootstrap",
      desc: "Rapidly styling responsive websites with Bootstrap 5.",
      width: "90%",
      color: "bg-secondary",
    },
    {
      title: "Angular",
      desc: "Developing scalable enterprise-grade SPAs.",
      width: "75%",
      color: "bg-danger",
    },
    {
      title: "Tailwind CSS",
      desc: "Utility-first styling for fast, responsive UI.",
      width: "85%",
      color: "bg-primary",
    },
    {
      title: "MongoDB",
      desc: "NoSQL database for flexible data storage.",
      width: "70%",
      color: "bg-success",
    },
    {
      title: "Node.js",
      desc: "Building backend APIs and real-time apps.",
      width: "75%",
      color: "bg-warning",
    },
  ];

  return (
    <section id="skills" className="py-5 bg-dark text-white"style={{borderBottom: "1px solid #f8f9fa"}}>
      <div className="container text-center">
        <h2 className="fw-bold mb-4">My Skills</h2>
        <div className="row g-3 justify-content-center">
          {skills.map((skill, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3 d-flex">
              <div className={`card text-white ${skill.color} shadow-sm w-100`}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{skill.title}</h5>
                  <p className="card-text flex-grow-1">{skill.desc}</p>
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar bg-dark text-white"
                      role="progressbar"
                      data-width={skill.width}
                      style={{ width: 0 }}
                    >
                      {skill.width}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
