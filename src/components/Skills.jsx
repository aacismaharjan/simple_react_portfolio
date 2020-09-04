import React from "react";
import { Section } from "./";

const SkillBar = () => {
  return (
    <div className="skill">
      <div className="skill-bar">
        <div className="skill-box">
          <h4>Lorem, ipsum.</h4>
          <div className="skill-bar-container">
            <div className="skill-bar-container-fill"></div>
          </div>
        </div>

        <div className="skill-box">
          <h4>Lorem, ipsum.</h4>
          <div className="skill-bar-container">
            <div className="skill-bar-container-fill"></div>
          </div>
        </div>

        <div className="skill-box">
          <h4>Lorem, ipsum.</h4>
          <div className="skill-bar-container">
            <div className="skill-bar-container-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCircle = () => {
  return (
    <div className="skill-cirlce">
      <div className="skill-box">
        <div className="skill-circle-container">
          <div className="skill-circle-text">
            <span className="">70%</span>
          </div>
        </div>
      </div>

      <div className="skill-box">
        <div className="skill-circle-container">
          <div className="skill-circle-text">
            <span className="">70%</span>
          </div>
        </div>
      </div>

      <div className="skill-box">
        <div className="skill-circle-container">
          <div className="skill-circle-text">
            <span className="">70%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <Section
      title="Skills"
      body="Everything is beautiful in love, war and coding!"
    >
      <SkillBar></SkillBar>
      <SkillCircle></SkillCircle>
    </Section>
  );
}
