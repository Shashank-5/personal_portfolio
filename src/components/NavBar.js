import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn
import navIcon2 from "../assets/img/icons8-github-72.png"; // GitHub

import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#skills"
                className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>

              <Nav.Link
                href="#projects"
                className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>

              <Nav.Link
                href="#resume"
                className={activeLink === "resume" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("resume")}
              >
                Resume
              </Nav.Link>
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/shashaankkhelgi/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Shashank-5"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <img src={navIcon2} alt="GitHub" />
                </a>
              </div>

              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
