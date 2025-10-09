const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img 
                    src="static/img/fullstack dev.jpg" 
                    title="" 
                    alt="Al Fu - Fullstack Developer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  I&apos;m a Full Stack Developer who builds solutions that make a difference.
                </h3>
                <p>
                  I&apos;m a dedicated Full Stack Developer with expertise in Java, Spring Boot, React, and TypeScript. 
                  I specialize in building scalable web applications and RESTful APIs from scratch. 
                  Before transitioning to tech, I spent 8 years in hospitality management, which taught me that 
                  great software, like great service, anticipates user needs. I love working with teams to 
                  transform ideas into production-ready applications that deliver real business value.
                </p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactme">
                    <span>Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2023-2024</span>
                <h6>Java Full Stack Development</h6>
                <p>Coder&apos;s Campus</p>
              </li>
              <li>
                <span>2022</span>
                <h6>Google IT Support Certificate</h6>
                <p>Google</p>
              </li>
              <li>
                <span>2008-2011</span>
                <h6>MBA International Hospitality Management</h6>
                <p>Institut Vatel, France</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                I&apos;m passionate about full stack development with a focus on creating 
                efficient, scalable, and user-friendly applications. Here are my core technical skills:
              </p>
              <div className="skills-grid">
                <div className="skill-item">
                  <i className="fab fa-java"></i>
                  <span>Java</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-leaf"></i>
                  <span>Spring Boot</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-react"></i>
                  <span>React.js</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-arrow-right"></i>
                  <span>Next.js</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-node-js"></i>
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-js-square"></i>
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-code"></i>
                  <span>TypeScript</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-database"></i>
                  <span>SQL/PostgreSQL</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-exchange-alt"></i>
                  <span>RESTful APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-12">
                <div className="rb-right">
                  <h6>Full Stack Java Developer</h6>
                  <label>We Make Good Software | Remote | 2024 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <div>
                    <ul>
                      <li>Developed and maintained scalable web applications using Spring Boot, React, and TypeScript</li>
                      <li>Built RESTful APIs and integrated third-party services to enhance application functionality</li>
                      <li>Collaborated with cross-functional teams in agile environments to deliver high-quality software solutions</li>
                      <li>Implemented responsive designs using Material UI and optimized applications for performance</li>
                      <li>Worked with SQL databases for data management and query optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-12">
                <div className="rb-right">
                  <h6>Fairmont Gold Supervisor / Sales Administrative Assistant / IT Support</h6>
                  <label>Fairmont Hotels | Washington D.C. | 2013 - 2021</label>
                  <div className="rb-time">Full Time</div>
                  <div>
                    <ul>
                      <li>Managed client relationships and coordinated operations for VIP guests suites</li>
                      <li>Increased floor revenue from $273 to $315 ADR through strategic data analysis</li>
                      <li>Provided technical support for hotel property management system (PMS) and booking platforms</li>
                      <li>Troubleshot hardware/software issues for front desk operations and guest services systems</li>
                      <li>Maintained and updated client database using SQL queries for reporting and analytics</li>
                      <li>Automated daily reporting workflows using VBA macros and Excel integrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;