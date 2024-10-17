import React from "react";
import styles from "./QuizApp.css";
import Questions from "./Questions";

export default function QuizQuestions({ question, dispatch }) {
  console.log(question);
  return (
    <div className="container quiz-question">
      <div className="quiz-title">
        <h3 className="quiz-title">Welcome to the React Quiz !!!</h3>
        <p>25 Questions to test your Reatc mastery</p>
      </div>

      <button
        className="start-btn"
        onClick={() => dispatch({ type: "StartQuiz" })}
      >
        Let's start
      </button>
    </div>
  );
}
