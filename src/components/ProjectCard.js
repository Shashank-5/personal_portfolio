import { Card, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, tech = [], github, demo }) => {
  return (
    <Card className="project-single-card">
      <Card.Img variant="top" src={imgUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <div className="project-tech">
          {tech.map((t) => (
            <span className="tech-pill" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {github && (
            <Button variant="outline-light" href={github} target="_blank" rel="noreferrer">
              GitHub
            </Button>
          )}
          {demo && (
            <Button
              variant="light"
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="ms-2"
            >
              Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
