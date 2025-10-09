import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import Portfolio from "../src/components/Portfolio";
import Layout from "../src/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Al Fu</h1>
                  <p className="lead">
                    I am a Passionate Full Stack Developer
                  </p>
                  <p className="desc">
                    I build modern web applications and services for companies of all sizes, 
                    specializing in full stack development with Java, Spring Boot, React, and 
                    scalable architectures that prioritize user experience.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="/static/Alfu_CV.pdf" download="Al_Fu_CV.pdf" target="_blank" rel="noreferrer">
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img 
                    src="static/img/alfu-profile.jpg" 
                    title="" 
                    alt="Al Fu - Fullstack Developer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  );
};

export default Index;