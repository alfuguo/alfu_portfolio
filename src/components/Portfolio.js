import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const portfolioItems = [
    {
      id: 1,
      category: "web",
      title: "YEAH (Your Engagement and Accountability Helper)",
      image: "static/img/Yeahapp.png",
      description: "SaaS platform that boosts course engagement and completion through automated check-ins, sentiment analysis, and AI-driven goal tracking.",
      technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "React", "TypeScript", "Twilio", "Anthropic API"],
      link: "https://www.yeahapp.com/"
    },
    {
      id: 2,
      category: "web",
      title: "Harvest Market",
      image: "static/img/Harvest Market.png",
      description: "A community-focused platform connecting local farmers with consumers. Features fresh produce boxes, vendor recipes, market locations, and sustainable shopping practices.",
      technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "React", "JavaScript", "Google Maps API"],
      link: "#"
    },
    {
      id: 3,
      category: "app",
      title: "YEAH Mobile App",
      image: "static/img/Yeahphoneapp.png",
      description: "Companion mobile app for the YEAH SaaS platform. Enables students and clients to receive automated check-ins, track progress, and interact with AI-powered feedback anytime, anywhere.",
      technologies: ["React Native", "REST APIs", "YEAH Backend Integration"],
      link: "https://dev.yeahapp.com/"
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
          <div className="row" style={{ alignItems: "flex-start" }}>
            {filteredItems.map((item) => (
              <div key={item.id} className="col-sm-6 col-lg-4 grid-item" style={{ 
                marginBottom: "40px",
                display: "flex",
                flexDirection: "column"
              }}>
                {/* Image Card with Hover Overlay */}
                <div className="portfolio-image-card" style={{ 
                  height: "280px",
                  backgroundColor: "#1e1e2e",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  marginBottom: "20px",
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(47,191,113,0.2)";
                  const overlay = e.currentTarget.querySelector('.portfolio-overlay');
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
                  const overlay = e.currentTarget.querySelector('.portfolio-overlay');
                  if (overlay) overlay.style.opacity = "0";
                }}>
                  <div className="portfolio-img" style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    backgroundColor: "#2a2a3e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px"
                  }}>
                    <img 
                      src={item.image} 
                      title="" 
                      alt={item.title}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                        borderRadius: "4px"
                      }}
                    />
                  </div>
                  
                  {/* Hover Overlay with Tech Tags and Button */}
                  <div className="portfolio-overlay" style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    backgroundColor: "rgba(30, 30, 46, 0.95)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: "0",
                    transition: "opacity 0.3s ease",
                    padding: "20px"
                  }}>
                    <div className="portfolio-tech" style={{ 
                      display: "flex", 
                      flexWrap: "wrap", 
                      gap: "8px", 
                      marginBottom: "20px",
                      justifyContent: "center"
                    }}>
                      {item.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="tech-tag"
                          style={{
                            backgroundColor: "#2fbf71",
                            color: "white",
                            padding: "6px 12px",
                            borderRadius: "15px",
                            fontSize: "12px",
                            fontWeight: "500",
                            whiteSpace: "nowrap"
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <a 
                        href={item.link} 
                        className="px-btn px-btn-theme"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>

                {/* Text Content Below */}
                <div className="portfolio-info" style={{ 
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <h5 style={{ 
                    textAlign: "center", 
                    marginBottom: "15px",
                    color: "#2fbf71",
                    fontSize: "18px",
                    fontWeight: "600",
                    minHeight: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    {item.title}
                  </h5>
                  <p style={{ 
                    textAlign: "left", 
                    marginBottom: "0",
                    lineHeight: "1.6",
                    color: "#ccc",
                    flex: "1"
                  }}>
                    {item.description}
                  </p>
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