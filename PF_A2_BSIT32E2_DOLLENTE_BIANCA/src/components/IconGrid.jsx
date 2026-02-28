import React from "react";

const IconGrid = () => {
  const icons = [
    {
      icon: "laptop",
      title: "Frontend Design",
      description:
        "Create visually appealing and responsive user interfaces using modern design principles and web technologies.",
    },
    {
      icon: "code-slash",
      title: "Backend Development",
      description:
        "Build secure and scalable server-side applications, APIs, and databases for dynamic web systems.",
    },
    {
      icon: "cloud-fill",
      title: "Cloud Computing",
      description:
        "Deploy and manage applications using cloud platforms for better scalability and reliability.",
    },
    {
      icon: "shield-lock",
      title: "Cybersecurity",
      description:
        "Protect systems and data through encryption, authentication, and security best practices.",
    },
    {
      icon: "bar-chart-fill",
      title: "Data Analytics",
      description:
        "Analyze and interpret data to support informed decision-making and business strategies.",
    },
    {
      icon: "robot",
      title: "Artificial Intelligence",
      description:
        "Develop intelligent systems using machine learning and automation technologies.",
    },
    {
      icon: "wifi",
      title: "Network Infrastructure",
      description:
        "Design and maintain reliable network systems for seamless digital communication.",
    },
    {
      icon: "gear-fill",
      title: "IT Support Services",
      description:
        "Provide technical assistance, system troubleshooting, and technology maintenance solutions.",
    },
  ];

  return (
    <div className="container-fluid px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Icon grid</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {icons.map((item, idx) => (
          <div className="col d-flex align-items-start" key={idx}>
            <i
              className={`bi bi-${item.icon} text-muted flex-shrink-0 me-3`}
              style={{ fontSize: "1.75rem" }}
            ></i>
            <div>
              <h4 className="fw-bold mb-0">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGrid;