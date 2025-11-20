
import { Link } from "react-router-dom";
import "../App.css";

export default function CssProject() {
  return (
    <div className="single-project-container">
      <h1>CSS Project</h1>

      <p className="project-text">
        Hier is de link naar het CSS project:
      </p>

      <Link to="/projects" className="back-link">
        Terug naar projecten
      </Link>

      <img src={cssImg} alt="CSS Project" className="single-project-img" />
    </div>
  );
}
