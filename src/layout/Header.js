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
        padding: '10px 15px !important', 
        minHeight: '50px !important', 
        height: '50px !important',
        maxHeight: '50px !important',
        overflow: 'hidden'
      }}>
        <div className="d-flex" style={{ 
          alignItems: 'center', 
          height: '100%',
          justifyContent: 'space-between'
        }}>
          <div className="navbar-brand">
            <Link href="/" className="logo-text" style={{ 
              lineHeight: '1', 
              display: 'flex', 
              alignItems: 'center',
              height: '24px'
            }}>
              <img 
                src="static/img/favicon.svg" 
                alt="Al Fu Logo" 
                style={{ 
                  height: '24px !important', 
                  width: '24px !important',
                  filter: 'invert(1)', // Makes dark logo white for dark background
                  margin: '0',
                  objectFit: 'contain'
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
                  style={{ width: '120%', height: 'auto' }}
                />
              </div>
              <div style={{ marginTop: '10px' }}>
                <img 
                  src="static/img/logo.svg" 
                  alt="Al Fu Logo" 
                  style={{ 
                    height: '135px', 
                    width: 'auto',
                    filter: 'invert(1)', // Makes dark logo white for dark background
                    maxWidth: '420px'
                  }}
                />
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

      <li data-menuanchor="contactus">
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

        <li data-menuanchor="contactus">
          <Link href="/#contactme" className="nav-link" onClick={handleClose}>
            <i className="ti-map-alt" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
