import React from "react";
import PerspectiveGrid from "../PerspectiveGrid";

const Skills = () => {
  return (
    <div className="skills-body">
      <div className="about-title">
        <h1>Skills</h1>
      </div>
      <div className="perspective-grid">
        <PerspectiveGrid />
      </div>
      <div className="skills-square">
        <div className="skills-square-text">
          <span>Enhanced Problem-Solving</span>
        </div>
        <div className="skills-square-text">
          <span>Advanced Critical Thinking</span>
        </div>
        <div className="skills-square-text">
          <span>Efficient Time Management</span>
        </div>
        <div className="skills-square-text">
          <span>Effective Communication</span>
        </div>
        <div className="skills-square-text">
          <span>Strong Team Collaboration</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;