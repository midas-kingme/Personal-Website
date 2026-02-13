import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProjectCard({ title, description, github, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      {/* 1. Added className="project-link" here */}
      {github && (
        <a href={github} target="_blank" rel="noreferrer" className="project-link">
          View on GitHub
        </a>
      )}

      {/* This one already had the class */}
      {link && (
        <Link to={link} className="project-link">
          View Coursework
        </Link>
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string,
  link: PropTypes.string,
};

export default ProjectCard;