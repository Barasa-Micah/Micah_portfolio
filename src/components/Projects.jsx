import React, { useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');

  const handleInputChange = (e) => {
    setNewProject(e.target.value);
  };

  const handleAddProject = () => {
    if (newProject.trim() !== '') {
      setProjects([...projects, newProject]);
      setNewProject('');
    }
  };

  return (
    <div className="projects" id="projects">
      <h2>My Projects</h2>

      {/* Form for adding new projects */}
      <div>
        <input
          type="text"
          placeholder="Enter project name"
          value={newProject}
          onChange={handleInputChange}
        />
        <button onClick={handleAddProject}>Add Project</button>
      </div>

      {/* Display existing projects */}
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
