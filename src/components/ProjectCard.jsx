import PropTypes from 'prop-types'; // Add this import at the top

function ProjectCard({ title, description, github }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      {github && (
        <a href={github} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      )}
    </div>
  );
}

// Add this validation block at the bottom
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string
};

export default ProjectCard;