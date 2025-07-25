export default function About() {
  return (

      <div id="about" className="py-5  bg-dark text-white "style={{borderBottom: "1px solid #f8f9fa"}}>
        <h2 className="fw-bold mb-4 text-center">About Me</h2>
        <div className="row justify-content-center align-items-center ">
          <div className="col-md-4">
            <img
             src="/FB_IMG_17347151220558321_1.jpg"
              alt="Mahmoud"
              className="img-fluid rounded-circle shadow card shadow-sm w-100 d-flex flex-column project-hover"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <div className="col-md-6 text-start p-2 m-2">
            <p className="lead">
              Hi! I'm Mahmoud, a passionate Fullstack Developer with experience
              in building responsive and interactive websites using Node js, Angular and
              Bootstrap or Tailwind. I enjoy crafting clean and elegant interfaces that
              provide great user experiences.
            </p>
          </div>
        </div>
      </div>
   
  );
}
