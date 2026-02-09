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
          title="thoughtSpace"
          description="A borderless, anonymous social media app where users leave ephemeral “notes” in a shared infinite space."
          github="https://github.com/thoughtSpace-app/thoughtSpace"
        />

        <ProjectCard
          title="Auburn Coursework"
          description="An overview of some of the programming courses taken at Auburn University."
          github="https://github.com/midas-kingme/Auburn-Courses"
        />

        <ProjectCard
          title="Course Management System"
          description="CMS for a group project showcases online course catalog."
          github="https://github.com/cadomani/course-management-system"
        />

        <ProjectCard
          title="ChatBookie"
          description="A chatbot that predicts sports outcomes using machine learning."
          github="https://github.com/midas-kingme/ChatBookie"
        />

        <ProjectCard
          title="Opportunity Protocol"
          description="A decentralized, non-custodial social graph that implements unique, on-chain social interaction mechanisms ocial media interactions."
          github="https://github.com/midas-kingme/opportunity-client"
        />

        <ProjectCard
          title="Pure Life Pools"
          description="Website that showcases custom pool designs and expert craftsmanship."
          github="https://github.com/midas-kingme/pure-life-pools"
        />

        <ProjectCard
          title="PeerNative"
          description="An Ai powered mobile application facilitating all utilities you need to improve your fluency in a language."
          github="https://github.com/midas-kingme/peernative"
        />
      </div>
    </div>
  );
}

export default Projects;