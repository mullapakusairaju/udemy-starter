import React, { useState } from "react";
import styles from "../MainStyles/CareerSteps.css";

export default function CareerSteps() {
  const Message = ["Learn React", "Build a portfolio", "Apply Jobs"];

  const [stepVal, setStepVal] = useState(1);

  function handlePrevious() {
    if (stepVal > 1) setStepVal((s) => s - 1);
  }

  function handleNext() {
    if (stepVal < 3) setStepVal((s) => s + 1);
  }

  return (
    <div className="CareerSteps">
      <div className="steps d-flex justify-content-between">
        <p className={`${stepVal >= 1 ? "stepNum active" : "stepNum"}`}>1</p>
        <p className={`${stepVal >= 2 ? "stepNum active" : "stepNum"}`}>2</p>
        <p className={`${stepVal >= 3 ? "stepNum active" : "stepNum"}`}>3</p>
      </div>
      <div className="message  d-flex justify-content-center">
        <p>
          {" "}
          Step {stepVal} : {Message[stepVal - 1]}
        </p>
      </div>
      <div className="stepBtn d-flex justify-content-between">
        <button className="btn message" onClick={handlePrevious}>
          Previous
        </button>
        <button className="btn message" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
