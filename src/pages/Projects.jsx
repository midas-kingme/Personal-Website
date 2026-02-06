import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>My Projects</h1>

      <ProjectCard
        title="ChatBookie"
        description="A chatbot that predicts sports outcomes using machine learning."
        github="https://github.com/yourrepo"
      />

      <ProjectCard
        title="Opportunity Protocol"
        description="A decentralized UBI protocol using Bitcoin."
        github="https://github.com/yourrepo"
      />
    </div>
  );
}

export default Projects;
