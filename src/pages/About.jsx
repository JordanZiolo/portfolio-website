import React from "react";
import "../App.css";

const About = () => {
  return (
    <>
      <main className="about-page">

        <h1 className="about-title">Over mij</h1>

        <div className="about-content">
          <div className="about-box">
            <p>
              Ik ben Jordan Buchacz, een software developer in opleiding.  
              Ik hou van programmeren en het bouwen van slimme, gebruiksvriendelijke applicaties.  
              Tijdens mijn opleiding leer ik werken met verschillende talen en frameworks om mijn skills te verbeteren.
            </p>
          </div>

          <div className="about-box">
            <p>
              Ik experimenteer graag met nieuwe technologieën en werk aan persoonlijke projecten.  
              Mijn doel is om als developer software te maken die er goed uitziet én goed presteert.  
              Leren, groeien en beter worden in wat ik doe — dat motiveert mij elke dag.
            </p>
          </div>
        </div>

      </main>

      <footer className="footer">Jordan Buchacz Portfolio</footer>
    </>
  );
};

export default About;
