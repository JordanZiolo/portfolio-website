
import { Link } from "react-router-dom";
import "../App.css";

export default function JsProject() {
  return (
    <div className="single-project-container">
      <h1>JavaScript Project</h1>

      <p className="project-text">
        Hier is de link naar het JavaScript project:
      </p>

      <Link to="/projects" className="back-link">
        Terug naar projecten
      </Link>

      <img src={jsImg} alt="JavaScript Project" className="single-project-img" />
    </div>
  );
}
