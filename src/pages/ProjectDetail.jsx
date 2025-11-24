// src/Pages/ProductDetail.jsx
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projecten from '../Pages/projecten.js';

const ProductDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [projecttList, setProjecttList] = useState(projecten);
  
  
  // Zoek het juiste product
  const project = projecttList.find(p => p.id === Number(projectId));

  console.log(project);

  if (!project) {
    return <div>Project niet gevonden</div>;
  }

  return (
<section className="project-section">
  {/* Bovenste afbeelding als logo */}
  <img className="project-logo" src={project.afbeelding} alt="Logo" />

  {/* Tekst bovenaan midden */}
  <div className="project-text">
    <h1>{project.titel}</h1>
    <p>{project.periode}</p>
    <p>{project.beschrijving}</p>
    <a href={project.link} target="_blank" rel="noopener noreferrer">Github</a>
  </div>

  {/* Grote afbeelding in het midden */}
  <img className="project-large-image" src={project.afbeelding1} alt="" />
</section>



  );
};

export default ProductDetail;