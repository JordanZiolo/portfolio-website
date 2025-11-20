
import { Link } from "react-router-dom";
import "../App.css";

export default function HtmlProject() {
  return (
    <div className="single-project-container">
      <h1>HTML Project</h1>

      <p className="project-text">
        Hier is de link naar het HTML project:
      </p>

      <Link to="/projects" className="back-link">
        Terug naar projecten
      </Link>

      <img src={htmlImg} alt="HTML Project" className="single-project-img" />
    </div>
  );
}
