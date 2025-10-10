import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import useClickOutside from "../useClickOutside";
import { activeSection } from "../utilits";

const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);

  const handleClose = () => {
    if (sideBarToggle) setSideBarToggle(false);
  };

  useEffect(() => {
    if (!blog) {
      activeSection();
    }
  }, []);

  return (
    <Fragment>
      <div className="mob-header" style={{ 
        padding: "10px 15px !important", 
        minHeight: "50px !important", 
        height: "50px !important",
        maxHeight: "50px !important",
        overflow: "hidden"
      }}>
        <div className="d-flex" style={{ 
          alignItems: "center", 
          height: "100%",
          justifyContent: "space-between"
        }}>
          <div className="navbar-brand">
            <Link href="/" className="logo-text" style={{ 
              lineHeight: "1", 
              display: "flex", 
              alignItems: "center",
              height: "24px"
            }}>
              <img 
                src="static/img/favicon.svg" 
                alt="Al Fu Logo" 
                style={{ 
                  height: "24px !important", 
                  width: "24px !important",
                  filter: "invert(1)", // Makes dark logo white for dark background
                  margin: "0",
                  objectFit: "contain"
                }}
              />
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img 
                  src="static/img/Al headshot.jpg" 
                  title="" 
                  alt="Al Fu - Fullstack Developer"
                  style={{ width: "120%", height: "auto" }}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <img 
                  src="static/img/logo.svg" 
                  alt="Al Fu Logo" 
                  className="animated-logo"
                  style={{ 
                    height: "80px", 
                    width: "auto",
                    maxWidth: "420px"
                  }}
                />
                <style jsx>{`
                  .animated-logo {
                    animation: elegantGlow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    transition: all 0.3s ease;
                  }
                  
                  .animated-logo:hover {
                    animation-duration: 3s;
                    transform: scale(1.02);
                  }
                  
                  @keyframes elegantGlow {
                    0%, 100% { 
                      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1) drop-shadow(0 0 5px rgba(255,255,255,0.3));
                    }
                    25% { 
                      filter: invert(1) sepia(0.8) saturate(3) hue-rotate(120deg) brightness(1.1) drop-shadow(0 0 15px rgba(47,191,113,0.4));
                    }
                    50% { 
                      filter: invert(1) sepia(0.6) saturate(2.5) hue-rotate(200deg) brightness(1.05) drop-shadow(0 0 12px rgba(100,149,237,0.3));
                    }
                    75% { 
                      filter: invert(1) sepia(0.7) saturate(2.8) hue-rotate(280deg) brightness(1.08) drop-shadow(0 0 10px rgba(186,85,211,0.35));
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
          {blog ? (
            <MenuWithBlog handleClose={handleClose} />
          ) : (
            <MenuWithOutBlog handleClose={handleClose} />
          )}
        </div>
        <div className="nav justify-content-center social-icons">
          <a href="https://www.linkedin.com/in/alfuguo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com/alfuguo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;

const MenuWithOutBlog = ({ handleClose }) => {
  let domNode = useClickOutside(handleClose);
  return (
    <ul className="nav nav-menu" id="pp-menu" ref={domNode}>
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home" onClick={handleClose}>
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about" onClick={handleClose}>
          <i className="ti-id-badge" />
          <span>About Me</span>
        </a>
      </li>
      <li data-menuanchor="services">
        <a className="nav-link" href="#services" onClick={handleClose}>
          <i className="ti-panel" />
          <span>Services</span>
        </a>
      </li>
      <li data-menuanchor="work">
        <a className="nav-link" href="#work" onClick={handleClose}>
          <i className="ti-bookmark-alt" />
          <span>Portfolio</span>
        </a>
      </li>

      <li data-menuanchor="contactme">
        <a className="nav-link" href="#contactme" onClick={handleClose}>
          <i className="ti-map-alt" />
          <span>Contact</span>
        </a>
      </li>
    </ul>
  );
};

const MenuWithBlog = ({ handleClose }) => {
  useEffect(() => {
    window.addEventListener("scroll", () =>
      document.querySelector(".blog").classList.add("active")
    );
  });

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link href="/#home" className="nav-link" onClick={handleClose}>
            <i className="ti-home" />
            <span>Home</span>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link href="/#about" className="nav-link" onClick={handleClose}>
            <i className="ti-id-badge" />
            <span>About Me</span>
          </Link>
        </li>
        <li data-menuanchor="services">
          <Link href="/#services" className="nav-link" onClick={handleClose}>
            <i className="ti-panel" />
            <span>Services</span>
          </Link>
        </li>
        <li data-menuanchor="work">
          <Link href="/#work" className="nav-link" onClick={handleClose}>
            <i className="ti-bookmark-alt" />
            <span>Portfolio</span>
          </Link>
        </li>

        <li data-menuanchor="contactme">
          <Link href="/#contactme" className="nav-link" onClick={handleClose}>
            <i className="ti-map-alt" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
