import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import Portfolio from "../src/components/Portfolio";
import Layout from "../src/layout/Layout";
import { useEffect, useState } from "react";

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const roles = [
    "Full Stack Developer",
    "Java Developer", 
    "React Developer",
    "Software Engineer"
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, roles]);



  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
        style={{ position: "relative", overflow: "hidden" }}
      >


        <div className="home-banner" style={{ position: "relative", zIndex: 2 }}>
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div 
                  className="type-box"
                  style={{
                    transform: isLoaded ? "translateY(0)" : "translateY(50px)",
                    opacity: isLoaded ? 1 : 0,
                    transition: "all 0.8s ease-out"
                  }}
                >
                  <h6 style={{
                    animation: isLoaded ? "slideInLeft 0.8s ease-out 0.2s both" : "none",
                    fontFamily: "'Roboto', sans-serif"
                  }}>
                    Hello, I am
                  </h6>
                  
                  <h1 
                    className="font-alt"
                    style={{
                      background: "linear-gradient(45deg, #2fbf71, #1e90ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: isLoaded ? "slideInLeft 0.8s ease-out 0.4s both" : "none",
                      fontSize: "3.5rem",
                      fontWeight: "700",
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}
                  >
                    Al Fu
                  </h1>
                  
                  <div 
                    className="typing-container"
                    style={{
                      animation: isLoaded ? "slideInLeft 0.8s ease-out 0.6s both" : "none",
                      fontSize: "1.4rem",
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}
                  >
                    <p className="lead" style={{ margin: 0, width: "100%" }}>
                      I am a Passionate{" "}
                      <span style={{ 
                        color: "#2fbf71",
                        fontWeight: "600"
                      }}>
                        {typedText}
                        <span 
                          style={{ 
                            opacity: Math.sin(Date.now() / 500) > 0 ? 1 : 0,
                            transition: "opacity 0.1s"
                          }}
                        >
                          |
                        </span>
                      </span>
                    </p>
                  </div>
                  
                  <p 
                    className="desc"
                    style={{
                      animation: isLoaded ? "slideInLeft 0.8s ease-out 0.8s both" : "none",
                      lineHeight: "1.7",
                      fontFamily: "'Roboto', sans-serif"
                    }}
                  >
                    I build modern web applications and services for companies of all sizes, 
                    specializing in full stack development with Java, Spring Boot, React, and 
                    scalable architectures that prioritize user experience.
                  </p>


                  
                  <div 
                    className="btn-bar"
                    style={{
                      animation: isLoaded ? "slideInLeft 0.8s ease-out 1.4s both" : "none"
                    }}
                  >
                    <a 
                      className="px-btn px-btn-theme" 
                      href="/static/Alfu_CV.pdf" 
                      download="Al_Fu_CV.pdf" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div 
                  className="hb-img"
                  style={{
                    transform: isLoaded ? "translateY(0)" : "translateY(50px)",
                    opacity: isLoaded ? 1 : 0,
                    transition: "all 0.8s ease-out 0.6s",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >

                  
                  <img 
                    src="static/img/alfu-profile.jpg" 
                    title="" 
                    alt="Al Fu - Fullstack Developer"
                    style={{
                      width: "400px",
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: "15px",
                      transition: "all 0.4s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0 10px 30px rgba(47,191,113,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Pulse Effect for the Black Ball */
          @keyframes ballPulse {
            0%, 100% { 
              transform: scale(1);
              opacity: 0.8;
            }
            50% { 
              transform: scale(1.05);
              opacity: 0.9;
            }
          }

          /* Green Glow Effect */
          @keyframes greenGlow {
            0%, 100% {
              box-shadow: 
                0 0 50px rgba(47, 191, 113, 0.1),
                0 0 100px rgba(47, 191, 113, 0.05),
                inset 0 0 50px rgba(47, 191, 113, 0.02);
            }
            50% {
              box-shadow: 
                0 0 80px rgba(47, 191, 113, 0.2),
                0 0 150px rgba(47, 191, 113, 0.1),
                inset 0 0 80px rgba(47, 191, 113, 0.05);
            }
          }

          /* Apply only pulse and green glow to the black ball */
          .home-banner:after {
            animation: 
              ballPulse 8s ease-in-out infinite,
              greenGlow 6s ease-in-out infinite;
            transition: all 0.3s ease;
          }
          
          .tech-icon {
            animation: slideInLeft 0.8s ease-out both;
          }

          /* Light theme adjustments */
          .theme-light .home-banner:after {
            animation: 
              ballPulse 8s ease-in-out infinite,
              greenGlow 6s ease-in-out infinite;
          }

          /* Responsive typing container to prevent layout jumping */
          .typing-container {
            min-height: 2rem;
            display: block;
            width: 100%;
          }

          .typing-container .lead {
            line-height: 1.5;
            margin: 0;
          }

          /* Mobile responsive adjustments */
          @media (max-width: 768px) {
            .typing-container {
              min-height: 3.4rem; /* Reduced space for 2 lines on mobile */
            }
            
            .typing-container .lead {
              font-size: 1.2rem !important;
              line-height: 1.4;
            }
          }

          @media (max-width: 480px) {
            .typing-container {
              min-height: 3.6rem; /* Tighter spacing for smaller screens */
            }
            
            .typing-container .lead {
              font-size: 1.1rem !important;
              line-height: 1.3;
            }
          }

          @media (max-width: 360px) {
            .typing-container {
              min-height: 3.8rem; /* Minimal space for very small screens */
            }
            
            .typing-container .lead {
              font-size: 1rem !important;
            }
          }
        `}</style>
      </section>
      
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  );
};

export default Index;