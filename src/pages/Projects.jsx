import ProjectCard from "../components/ProjectCard";
import AnimatedBackground from '../components/AnimatedBackground';

function Projects() {
  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>My Projects</h1>
      <AnimatedBackground />

      <ProjectCard
        title="ChatBookie"
        description="A chatbot that predicts sports outcomes using machine learning."
        github="https://github.com/midas-kingme"
      />

      <ProjectCard
        title="Opportunity Protocol"
        description="Edit this"
        github="https://github.com/midas-kingme"
      />
    </div>
  );
}

export default Projects;
