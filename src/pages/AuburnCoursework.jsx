import ProjectCard from "../components/ProjectCard";
import AnimatedBackground from '../components/AnimatedBackground';

function AuburnCoursework() {
    return (
        <div style={{ padding: "40px", color: "white", textAlign: "center" }}>
            <AnimatedBackground />
            <h1>Auburn Coursework</h1>
            <p style={{ marginBottom: "40px" }}>A collection of academic projects and key learnings.</p>

            {/* Reusing the same flexible grid layout from your Projects page */}
            <div className="projects-grid" style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px"
            }}>

                <ProjectCard
                    title="Software Modeling & Design"
                    description="Designed a full-stack system using UML diagrams, Java, and design patterns to solve complex business logic."
                    github="https://github.com/midas-kingme" // Update link or remove if private
                />

                <ProjectCard
                    title="Operating Systems"
                    description="Developed a multi-threaded process scheduler and memory manager using C and Linux system calls."
                    github="https://github.com/midas-kingme"
                />

                <ProjectCard
                    title="Algorithms (COMP 3270)"
                    description="Implemented graph traversal algorithms and dynamic programming solutions to optimize computational efficiency."
                    github="https://github.com/midas-kingme"
                />

                <ProjectCard
                    title="Mobile Applications"
                    description="Built a responsive iOS application using Swift and SwiftUI integrating RESTful APIs."
                    github="https://github.com/midas-kingme"
                />

            </div>
        </div>
    );
}

export default AuburnCoursework;