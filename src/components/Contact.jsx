export default function Contact() {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mahmoud-fathy-tawfeek-8239aa229/",
      icon: "bi bi-linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/MahmoudFathyTawfeek",
      icon: "bi bi-github",
    },
    {
      name: "Email",
      url: "mahmoudtawfeek815@gmail.com",
      icon: "bi bi-envelope",
    },
    {
      name: "Phone",
      url: "tel:+201281606403",
      icon: "bi bi-telephone",
    },
  ];

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Contact Me</h2>
        <p className="mb-4">
          Feel free to reach out to me through any of the following platforms:
        </p>
        <div className="row justify-content-center g-3">
          {links.map((link, idx) => (
            <div key={idx} className="col-6 col-md-3">
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="btn bg-black text-white w-100 d-flex flex-column align-items-center py-3 shadow-sm contact-link"
              >
                <i className={`${link.icon} fs-1 mb-2`}></i>
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .contact-link:hover {
          background-color: #f8f9fa;
          transform: translateY(-3px);
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
