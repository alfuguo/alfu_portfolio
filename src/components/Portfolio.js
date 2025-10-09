import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const portfolioItems = [
    {
      id: 1,
      category: "web",
      title: "E-Commerce Platform",
      image: "static/img/portfolio/portfolio-1.jpg",
      description: "Full-stack e-commerce solution built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      category: "app",
      title: "Task Management App",
      image: "static/img/portfolio/portfolio-2.jpg",
      description: "React Native mobile app for task and project management",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "#"
    },
    {
      id: 3,
      category: "web",
      title: "Social Media Dashboard",
      image: "static/img/portfolio/portfolio-3.jpg",
      description: "Analytics dashboard for social media management",
      technologies: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
      link: "#"
    }
  ];

  const filterItems = (category) => {
    setActiveFilter(category);
  };

  const filteredItems = activeFilter === "*" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section
      id="work"
      data-nav-tooltip="Portfolio"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>My Portfolio</h3>
        </div>
        
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li 
              className={activeFilter === "*" ? "active" : ""}
              onClick={() => filterItems("*")}
            >
              All
            </li>
            <li 
              className={activeFilter === "web" ? "active" : ""}
              onClick={() => filterItems("web")}
            >
              Web Apps
            </li>
            <li 
              className={activeFilter === "app" ? "active" : ""}
              onClick={() => filterItems("app")}
            >
              Mobile Apps
            </li>
          </ul>
        </div>

        <div className="portfolio-content">
          <div className="row">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-sm-6 col-lg-4 grid-item">
                <div className="portfolio-box-01">
                  <div className="portfolio-img">
                    <img src={item.image} title="" alt="" />
                  </div>
                  <div className="portfolio-info">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <div className="portfolio-tech">
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <a href={item.link} className="px-btn px-btn-theme">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;