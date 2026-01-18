import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Resume = () => {
  return (
    <section className="resume" id="resume">
      <Container>
        <Row className="align-items-center">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Resume</h2>
                  <p>
                    Download my resume for a detailed overview of my experience, projects, and technical skills.
                  </p>

                  <div className="resume-actions">
                    <a
                      className="resume-btn"
                      href="/Shashaank_FS.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Resume ↗
                    </a>

                    <a className="resume-btn resume-btn-primary" href="/Shashaank_FS.pdf" download>
                      Download Resume
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
