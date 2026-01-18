import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github-72.png";
import { HashLink } from "react-router-hash-link";

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

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/shashaankkhelgi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/Shashank-5"
                target="_blank"
                rel="noopener noreferrer"
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
  );
};
