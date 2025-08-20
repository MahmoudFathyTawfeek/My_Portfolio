export default function About() {
  return (

      <div id="about" className=" py-5  bg-dark text-white "style={{borderBottom: "1px solid #f8f9fa"}}>
        <h2 className="fw-bold mb-4 text-center">About Me</h2>
        <div className="row justify-content-center align-items-center ">
         <div className="col-md-4 d-flex justify-content-center align-items-center mb-4">
          <img
            src="/mahmoud.jpeg"
            alt="Mahmoud"
            className="img-fluid rounded-circle shadow card shadow-sm project-hover"
            style={{ maxWidth: "300px" }}
          />
        </div>

          <div className="col-md-6 text-start ">
            <h3 className="text-white" style={{lineHeight: "1.6", fontStyle: "italic"}}>
              Hi! I'm Mahmoud, a passionate Fullstack Developer with experience
              in building responsive and interactive websites using Node js, MongoDB, Angular and
              Bootstrap or Tailwind. I enjoy crafting clean and elegant interfaces that
              provide great user experiences.
            </h3>
          </div>
        </div>
      </div>
   
  );
}
