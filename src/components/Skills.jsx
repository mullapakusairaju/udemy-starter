import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../MainStyles/skills.css";

export default function Skills() {
  return (
    <div>
      <h3>Skills</h3>

      <div className="d-flex flex-row  skillCard">
        <p className="col">
          <span className="Tech">HTML</span>
        </p>
        <p className="col">
          <span className="Tech">CSS</span>
        </p>
        <p className="col">
          <span className="Tech">JavaScript</span>
        </p>
      </div>
    </div>
  );
}
