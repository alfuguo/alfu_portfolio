const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Frontend Development</h5>
                <p>
                  I create modern, responsive, and interactive user interfaces using React, TypeScript, 
                  Material UI, and modern CSS frameworks. I focus on delivering exceptional user experiences 
                  with clean, maintainable code and pixel-perfect designs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-tools" />
              <div className="feature-content media-body">
                <h5>Backend Development</h5>
                <p>
                  I build robust server-side applications using Java, Spring Boot, and RESTful API architecture. 
                  I design scalable APIs, integrate third-party services, and ensure efficient data management 
                  with SQL databases.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Full-Stack Solutions</h5>
                <p>
                  I provide end-to-end development services, from concept to deployment. I handle both 
                  frontend and backend development with Java/Spring Boot and React, ensuring seamless 
                  integration and optimal performance across the entire application.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-documents" />
              <div className="feature-content media-body">
                <h5>Database Design</h5>
                <p>
                  I design and optimize databases using SQL (PostgreSQL, MySQL) and MongoDB. I ensure data 
                  integrity, implement efficient queries and stored procedures, and create scalable database 
                  architectures for enterprise applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-genius" />
              <div className="feature-content media-body">
                <h5>API Development</h5>
                <p>
                  I specialize in designing and building RESTful APIs with Spring Boot. I implement secure 
                  authentication, handle complex data flows, integrate third-party services, and ensure APIs 
                  are scalable, well-documented, and maintainable.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>Performance Optimization</h5>
                <p>
                  I analyze and optimize application performance across the stack. I implement caching strategies, 
                  optimize database queries, reduce render times, and ensure applications handle high traffic 
                  loads efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;