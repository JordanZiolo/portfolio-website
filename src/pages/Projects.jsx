import htmlImg from "../assets/html.jpg";
import cssImg from "../assets/css.jpg";
import jsImg from "../assets/javascript.jpg";
import { Link } from "react-router-dom";
import "../App.css";

export default function Projects() {
  return (
    <>
      <section className="projects-page">

        <h1 className="projects-title">My Projects</h1>

        <p className="projects-subtext">Klik op een project om het te openen</p>

        <div className="projects-grid">

          <Link to="/html-project" className="project-card">
            <p>HTML Project</p>
            <img src={htmlImg} alt="HTML Project" />
          </Link>

          <Link to="/css-project" className="project-card">
            <p>CSS Project</p>
            <img src={cssImg} alt="CSS Project" />
          </Link>

          <Link to="/js-project" className="project-card">
            <p>JavaScript Project</p>
            <img src={jsImg} alt="JavaScript Project" />
          </Link>

        </div>
      </section>
            <footer className="footer">Jordan Buchacz Portfolio</footer>     
    </>
  );
}
