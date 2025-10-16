import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import Portfolio from "../src/components/Portfolio";
import Layout from "../src/layout/Layout";
import { useEffect, useState } from "react";
import Head from "next/head";

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
    <>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </Head>
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
                  className="type-box mobile-center"
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
                  
                  <div 
                    className="desc enhanced-description"
                    style={{
                      animation: isLoaded ? "slideInLeft 0.8s ease-out 0.8s both" : "none",
                      lineHeight: "1.7",
                      fontFamily: "'Roboto', sans-serif"
                    }}
                  >
                    <p style={{ 
                      marginBottom: "1.5rem",
                      fontSize: "1.1rem",
                      color: "#e0e0e0"
                    }}>
                      I build scalable web applications using{" "}
                      <span style={{ 
                        color: "#2fbf71", 
                        fontWeight: "600",
                        background: "linear-gradient(45deg, #2fbf71, #4ecdc4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}>
                        Java, Spring Boot, React, and TypeScript
                      </span>{" "}
                      with expertise in:
                    </p>
                    
                    <div style={{ 
                      background: "rgba(47, 191, 113, 0.05)",
                      border: "1px solid rgba(47, 191, 113, 0.2)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                      margin: "0",
                      backdropFilter: "blur(10px)"
                    }}>
                      <div style={{ 
                        display: "grid",
                        gap: "0.8rem",
                        lineHeight: "1.6"
                      }}>
                        <div className="skill-item" style={{ display: "flex", alignItems: "center" }}>
                          <i className="fas fa-cogs skill-icon" style={{ 
                            marginRight: "0.8rem",
                            color: "#2fbf71",
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            flexShrink: 0
                          }}></i>
                          <span>
                            <strong style={{ 
                              background: "linear-gradient(45deg, #2fbf71, #4ecdc4)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              fontWeight: "600"
                            }}>
                              RESTful API
                            </strong> development and microservices
                          </span>
                        </div>
                        
                        <div className="skill-item" style={{ display: "flex", alignItems: "center" }}>
                          <i className="fas fa-palette skill-icon" style={{ 
                            marginRight: "0.8rem",
                            color: "#2fbf71",
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            flexShrink: 0
                          }}></i>
                          <span>
                            <strong style={{ 
                              background: "linear-gradient(45deg, #2fbf71, #4ecdc4)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              fontWeight: "600"
                            }}>
                              Modern UIs
                            </strong> with React, Next.js & Material UI
                          </span>
                        </div>
                        
                        <div className="skill-item" style={{ display: "flex", alignItems: "center" }}>
                          <i className="fas fa-database skill-icon" style={{ 
                            marginRight: "0.8rem",
                            color: "#2fbf71",
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            flexShrink: 0
                          }}></i>
                          <span>
                            <strong style={{ 
                              background: "linear-gradient(45deg, #2fbf71, #4ecdc4)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              fontWeight: "600"
                            }}>
                              SQL databases
                            </strong> and third-party API integration
                          </span>
                        </div>
                        
                        <div className="skill-item" style={{ display: "flex", alignItems: "center" }}>
                          <i className="fas fa-sync-alt skill-icon" style={{ 
                            marginRight: "0.8rem",
                            color: "#2fbf71",
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            flexShrink: 0
                          }}></i>
                          <span>
                            <strong style={{ 
                              background: "linear-gradient(45deg, #2fbf71, #4ecdc4)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              fontWeight: "600"
                            }}>
                              Agile development
                            </strong> and Git version control
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <h4 style={{ 
                      marginTop: "1.5rem",
                      marginBottom: "0.5rem",
                      fontSize: "1.2rem",
                      color: "#2fbf71",
                      fontWeight: "600",
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}>
                      Tech Stack:
                    </h4>
                  </div>

                  {/* Tech Stack */}
                  <div 
                    className="tech-stack-section"
                    style={{
                      animation: isLoaded ? "slideInLeft 0.8s ease-out 1.0s both" : "none",
                      marginTop: "1.5rem"
                    }}
                  >
                    <div style={{ 
                      display: "flex", 
                      flexWrap: "wrap", 
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "1rem"
                    }}>
                      <span className="tech-pill" style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        background: "rgba(47, 191, 113, 0.1)",
                        border: "1px solid rgba(47, 191, 113, 0.3)",
                        borderRadius: "12px",
                        padding: "0.6rem 1.1rem",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                        color: "#e0e0e0",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        backdropFilter: "blur(10px)"
                      }}>
                        <i className="fab fa-java tech-icon" style={{
                          color: "#2fbf71",
                          fontSize: "1.3rem",
                          transition: "all 0.3s ease"
                        }}></i>
                        Java
                      </span>
                      
                      <span className="tech-pill" style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        background: "rgba(47, 191, 113, 0.1)",
                        border: "1px solid rgba(47, 191, 113, 0.3)",
                        borderRadius: "12px",
                        padding: "0.6rem 1.1rem",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                        color: "#e0e0e0",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        backdropFilter: "blur(10px)"
                      }}>
                        <i className="fab fa-react tech-icon" style={{
                          color: "#2fbf71",
                          fontSize: "1.3rem",
                          transition: "all 0.3s ease"
                        }}></i>
                        React
                      </span>
                      
                      <span className="tech-pill" style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        background: "rgba(47, 191, 113, 0.1)",
                        border: "1px solid rgba(47, 191, 113, 0.3)",
                        borderRadius: "12px",
                        padding: "0.6rem 1.1rem",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                        color: "#e0e0e0",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        backdropFilter: "blur(10px)"
                      }}>
                        <i className="fas fa-code tech-icon" style={{
                          color: "#2fbf71",
                          fontSize: "1.1rem",
                          transition: "all 0.3s ease"
                        }}></i>
                        TypeScript
                      </span>
                      
                      <span className="tech-pill" style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        background: "rgba(47, 191, 113, 0.1)",
                        border: "1px solid rgba(47, 191, 113, 0.3)",
                        borderRadius: "12px",
                        padding: "0.6rem 1.1rem",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                        color: "#e0e0e0",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        backdropFilter: "blur(10px)"
                      }}>
                        <i className="fas fa-database tech-icon" style={{
                          color: "#2fbf71",
                          fontSize: "1.1rem",
                          transition: "all 0.3s ease"
                        }}></i>
                        SQL
                      </span>
                    </div>
                  </div>


                  
                  <div 
                    className="btn-bar"
                    style={{
                      animation: isLoaded ? "slideInLeft 0.8s ease-out 1.4s both" : "none",
                      marginTop: "1.5rem"
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
                    alignItems: "center",
                    height: "100%"
                  }}
                >
                  <img 
                    src="static/img/alfu-profile.jpg" 
                    title="" 
                    alt="Al Fu - Fullstack Developer"
                    className="profile-image"
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

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Icon Animations */
          @keyframes gentlePulse {
            0%, 100% { 
              transform: scale(1);
            }
            50% { 
              transform: scale(1.1);
            }
          }

          .skill-icon {
            animation: gentlePulse 3s ease-in-out infinite;
          }

          .skill-icon:hover, .skill-item:hover .skill-icon {
            transform: scale(1.3);
            color: #4ecdc4 !important;
            filter: drop-shadow(0 0 8px rgba(47, 191, 113, 0.8));
            animation: none;
          }

          /* Tech Pill Animations */
          .tech-pill:hover {
            transform: translateY(-2px);
            background: rgba(47, 191, 113, 0.2) !important;
            border-color: rgba(47, 191, 113, 0.5) !important;
            color: #2fbf71 !important;
            box-shadow: 0 5px 15px rgba(47, 191, 113, 0.2);
          }

          .tech-pill:hover .tech-icon {
            color: #4ecdc4 !important;
            transform: scale(1.2);
            filter: drop-shadow(0 0 6px rgba(47, 191, 113, 0.8));
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

          @media (max-width: 768px) {
            .home-banner .container {
              padding-left: 20px !important;
              padding-right: 20px !important;
              max-width: 100% !important;
            }

            .profile-image {
              width: 400px !important;
              height: 400px !important;
              max-width: 90vw !important;
              max-height: 90vw !important;
            }

            .hb-img {
              padding: 0 !important;
              margin: 0 !important;
            }

            .typing-container {
              min-height: 3.4rem; /* Reduced space for 2 lines on mobile */
            }
            
            .typing-container .lead {
              font-size: 1.2rem !important;
              line-height: 1.4;
            }

            .tech-stack-section > div {
              justify-content: center !important;
              gap: 0.8rem !important;
            }

            .tech-pill {
              flex: 0 0 calc(50% - 0.4rem) !important;
              min-width: calc(50% - 0.4rem) !important;
              padding: 0.6rem 0.8rem !important;
              font-size: 0.8rem !important;
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

            .tech-stack-section > div {
              justify-content: center !important;
              gap: 0.6rem !important;
            }

            .tech-pill {
              flex: 0 0 calc(50% - 0.3rem) !important;
              min-width: calc(50% - 0.3rem) !important;
              padding: 0.5rem 0.6rem !important;
              font-size: 0.75rem !important;
            }

            .tech-pill i {
              font-size: 0.9rem !important;
            }
          }

          @media (max-width: 360px) {
            .tech-pill {
              flex: 1 1 100% !important;
              min-width: 100% !important;
              margin-bottom: 0.5rem !important;
            }

            .tech-stack-section > div {
              flex-direction: column !important;
              gap: 0.5rem !important;
            }
          }
        `}</style>
        </section>
        
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </Layout>
    </>
  );
};

export default Index;