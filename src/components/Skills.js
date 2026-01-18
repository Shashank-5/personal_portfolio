import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

// Devicon icons (no downloads needed). You can replace these with local icons later.
const skillsData = {
  Frontend: [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  ],
  Backend: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg" },
    {name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
    {name: "Next.js",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
  ],
  "ML / AI": [
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "NLTK", icon: "" },
    { name: "Diffusion Models", icon: "" },
    { name: "UNet", icon: "" },
    { name: "EMA", icon: "" },
    { name: "FAISS", icon: "" },
  ],
  "Databases": [
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  ],
  "Enterprise (BPM)": [
    { name: "Pega PRPC", icon: "" },
    { name: "Case Management", icon: "" },
    { name: "Decision Rules", icon: "" },
    { name: "Workflow Automation", icon: "" },
  ],
  "Tools & Cloud": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  ],
};

const SkillTile = ({ name, icon }) => {
  return (
    <div className="skill-tile">
      {icon ? (
        <img className="skill-icon" src={icon} alt={name} loading="lazy" />
      ) : (
        <div className="skill-icon-fallback">{name.charAt(0)}</div>
      )}
      <div className="skill-name">{name}</div>
    </div>
  );
};

export const Skills = () => {
  const tabKeys = Object.keys(skillsData);

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Tools and technologies I use across frontend, backend, enterprise workflow automation (Pega),
                and machine learning projects.
              </p>

              <Tab.Container defaultActiveKey={tabKeys[0]}>
                <Nav variant="pills" className="skill-tabs">
                  {tabKeys.map((key) => (
                    <Nav.Item key={key}>
                      <Nav.Link eventKey={key}>{key}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>

                <Tab.Content className="skill-tab-content">
                  {tabKeys.map((key) => (
                    <Tab.Pane eventKey={key} key={key}>
                      <Row className="g-3">
                        {skillsData[key].map((s) => (
                          <Col xs={6} sm={4} md={3} lg={2} key={`${key}-${s.name}`}>
                            <SkillTile name={s.name} icon={s.icon} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
