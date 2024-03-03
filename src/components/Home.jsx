import React from "react";
import "./Home.css";

const Home = () => {
  const welcomeMessage = "Welcome to My Innovative Software Solutions!";
  const techStack = [
    "React", "SQL", "Python", "Node.js", "Express", "MongoDB",
    "PostgreSQL", "MySQL", "GraphQL", "PHP", "Flask", "Django"
  ];
  const codingPhilosophy = "crafting elegant solutions for complex problems.";

  // Rendering the techStack
  const renderTechStack = () => {
    return (
      <ul>
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="home" id="home">
      <div className="header">
        <h1>{welcomeMessage}</h1>
      </div>
      <div className="technologies">
        <p>Empowering businesses with cutting-edge technologies:</p>
        {renderTechStack()}
      </div>
      <div className="philosophy">
        <p>At the core of my development approach lies the philosophy of {codingPhilosophy}</p>
      </div>
      <div className="impact">
        <p>Here's is a glimpse of the impact:</p>
        <pre>
          <code>
            {`
//Transforming ideas into reality
function createInnovativeSolution(idea) {
    const result = innovative(idea);
    return result;
}

//Driving business success
const success = driveBusinessSuccess();
if (success) {
    celebrate();
} 

//Continuously improving
learnNewTechnologies();
improveCodeQuality();
`}
          </code>
        </pre>
      </div>
      <div className="visual-content">
        {/* visual content */}
        <img src="/path/to/your/image.jpg" alt="Visual Content" />
      </div>
      <div className="cta">
        <p>Let's build something great together</p>
        <button>Contact Me</button>
      </div>
    </div>
  );
};

export default Home;
