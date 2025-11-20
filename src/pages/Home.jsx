import jordanImg from "../assets/jordan.jpg";
import { Link } from "react-router-dom";
import "../App.css"

export default function Home() {
  return (
    <>
    <section className="home">
      <div className="hero">
        <div className="text-section">
          <h1>Jordan Buchacz</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="image-section">
          <img src={jordanImg} alt="Jordan Buchacz" />
        </div>
      </div>
    </section>
          <footer className="footer">Jordan Buchacz Portfolio</footer>
</>
  );
}
