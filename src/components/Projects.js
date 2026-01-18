// src/components/Projects.js
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      key: "proj1",
      tabLabel: "Sentiment App",
      title: "Emoji-Based Sentiment Analysis Web App",
      summary:
        "A full-stack web application for real-time sentiment analysis of text and emojis using modern NLP techniques and live client-server communication.",
      highlights: [
        "Designed and developed a full-stack system that analyzes emoji-rich user input and returns instant sentiment feedback.",
        "Built a Flask backend exposing REST and WebSocket endpoints to handle real-time sentiment processing.",
        "Integrated Socket.IO to enable live, bidirectional updates as users type text or select emojis.",
        "Implemented user authentication and session persistence with SQLite to store interaction history.",
        "Applied NLP preprocessing techniques such as toknization, lemmatization, TF-IDF, and embeddings for accurate sentiment detection.",
      ],
      tech: ["React", "Python", "Flask", "Socket.IO", "NLP",],
      github: "https://github.com/Shashank-5/Emoticons_Based_Sentimen_Analysis",
    },
    {
      key: "proj2",
      tabLabel: "Diffusion Model",
      title: "Facial Diffusion Generation using Conditional Diffusion Models",
      summary:
        "A deep learning project focused on generating realistic, multi-ethnic facial images using conditional diffusion models optimized for quality and training efficiency.",
      highlights: [
        "Engineered a conditional diffusion model using PyTorch with UNet architecture and self-attention layers.",
        "Implemented EMA (Exponential Moving Average) and gradient checkpointing to stabilize training and optimize GPU memory usage.",
        "Built complete training and sampling pipelines for large-scale image generation experiments.",
        "Evaluated model performance using MSE metrics, visual inspections, and experiment tracking with Weights & Biases (wandb).",
        "Developed a FastAPI backend service to support similarity search and REST-based model interaction.",
      ],
      tech: ["Python","Jupyter Notebook","PyTorch", "UNet", "FastAPI", "wandb"],
      github: "https://github.com/Shashank-5/Facial_Diffusion_Generation_using_Conditional_Diffusion_Model",
    },
    {
      key: "proj3",
      tabLabel: "Image Search",
      title: "Deep Learning-Based Reverse Image Search Web Application",
      summary:
        "A scalable backend system that enables users to upload images and retrieve visually similar results using deep learning embeddings and efficient indexing.",
      highlights: [
        "Designed and implemented an end-to-end reverse image search pipeline using deep feature extraction and similarity indexing.",
        "Used ResNet50 to generate image embeddings and FAISS for fast, accurate nearest-neighbor search.",
        "Built RESTful APIs with FastAPI to support image upload, preprocessing, indexing, and query execution.",
        "Focused on modular service design, performance optimization, and robust error handling.",
        "Managed static assets and processed files efficiently to ensure smooth uploads and search results",
      ],
      tech: ["Python","Jupyter Notebook","FAISS Index","FastAPI", "REST APIs", "RestNet 50"],
      github: "https://github.com/Shashank-5/Reverse_Image_Search_ML",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Selected projects showcasing my experience in full-stack development,
                    backend systems, and applied machine learning.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey={projects[0].key}>
                    {/* Tabs */}
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {projects.map((p) => (
                        <Nav.Item key={p.key}>
                          <Nav.Link eventKey={p.key}>{p.tabLabel}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>

                    {/* One project at a time */}
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      {projects.map((p) => (
                        <Tab.Pane eventKey={p.key} key={p.key}>
                          <Row className="justify-content-center">
                            <Col xs={12} md={9} lg={8}>
                              <div className="project-single-card">
                                <div className="project-card-body">
                                  <h3 className="project-card-title">{p.title}</h3>
                                  <p className="project-card-summary">{p.summary}</p>

                                  <ul className="project-card-list">
                                    {p.highlights.map((h, idx) => (
                                      <li key={idx}>{h}</li>
                                    ))}
                                  </ul>

                                  <div className="project-tech">
                                    {p.tech.map((t) => (
                                      <span className="tech-pill" key={t}>
                                        {t}
                                      </span>
                                    ))}
                                  </div>

                                  <div className="project-actions">
                                    <a
                                      className="project-btn"
                                      href={p.github}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      View on GitHub <span className="arrow">↗</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
