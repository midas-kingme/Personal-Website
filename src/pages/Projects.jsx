import ProjectCard from "../components/ProjectCard";
import AnimatedBackground from '../components/AnimatedBackground';

function Projects() {
  return (
    <div style={{ padding: "40px", color: "white", textAlign: "center" }}>
      <AnimatedBackground />
      <h1>My Projects</h1>

      {/* New Container for the cards */}
      <div className="projects-grid" style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          gap: "20px",
          marginTop: "40px"
      }}>
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
    </div>
  );
}

export default Projects;