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

export default ProjectCard;
