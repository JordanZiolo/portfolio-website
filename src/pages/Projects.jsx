import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import projecten  from "./projecten.js";

const Projects = () => {

  // maak een usestate genaamd projects, setProjects en laad hier je projecten data in
  const [projects, setProjects] = useState(projecten);

  const navigate = useNavigate();
  const goToDetail = (projectId) => {
    navigate(`/projecten/${projectId}`);
    console.log(projectId);
  };


  return (
    <section className="projecten-section">
      
      <div className="projecten-title">projecten</div>

      <div className="projecten-icons">

          
        {projects.map((project, index) => (
          <div className="project-icon" key={project.id} onClick={() => goToDetail(project.id)}>
            <div className="php-box">
              <img 
                src={project.afbeelding} 
                alt={project.name}
                style={{ width: "90px" }} 
              />
            </div>
          </div>
        ))}

      </div>

      <p className="projecten-text">
        Klik op een van de logo’s om het project te bekijken.
      </p>
      
    </section>
  );
}

export default Projects


