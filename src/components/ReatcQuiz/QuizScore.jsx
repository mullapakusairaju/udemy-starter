import React from "react";
import styles from "./QuizApp.css";

export default function QuizScore({ score }) {
  return (
    <div className="container QuizScore">
      <h3 className="score-info">Finals Score u got is :{score}</h3>
    </div>
  );
}
