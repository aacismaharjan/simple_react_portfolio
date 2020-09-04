import React from "react";
import { Section } from "./";

import defaultImg from "../assets/default.jpg";

const Project = () => {
  return (
    <div className="project">
      <div className="widget-content">
        <div className="widget-tags">
          <span>Tags</span>
          <span>Tags</span>
          <span>Tags</span>
          <span>Tags</span>
        </div>

        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, error.
          Est saepe sapiente fugit tempora! Repudiandae quasi unde voluptates
          nulla dignissimos eveniet ipsa fugit, enim error quia consequatur
          provident cupiditate?
        </p>
        <button>View Live</button>
        <button>Source Code</button>
      </div>

      <div className="widget-picture">
        <img src={defaultImg} alt="img" width="300px" />
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div>
      <Section title="Projects">
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </Section>
    </div>
  );
}
