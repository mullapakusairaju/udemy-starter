import React, { useState } from "react";
import styles from "./QuizApp.css";

export default function Questions({ options, dispatch, ans, index }) {
  const correctOption = options.answer;

  console.log(correctOption, ans);

  const renderOptionButton = (optionKey) => (
    <button
      className={
        ans === ""
          ? "options-btn"
          : ans === optionKey
          ? correctOption === optionKey
            ? "correct-ans-btn"
            : "wrong-ans-btn"
          : correctOption === optionKey
          ? "correct-ans-btn"
          : "disabled-btn"
      }
      disabled={ans !== ""}
      onClick={() => {
        correctOption === optionKey
          ? dispatch({ type: "addScore", payload: optionKey })
          : dispatch({ type: "selectAnswer", payload: optionKey });
      }}
    >
      {options[optionKey]}
    </button>
  );

  return (
    <div>
      <div className="container options">
        {renderOptionButton("A")}
        {renderOptionButton("B")}
        {renderOptionButton("C")}
        {renderOptionButton("D")}
      </div>

      <div className="questions-btn">
        {index === 0 ? (
          <button className="prev-btn" disabled={index === 0}>
            Previous
          </button>
        ) : (
          <button
            className="prev-btn"
            onClick={() => dispatch({ type: "previousQuestion" })}
          >
            Previous
          </button>
        )}

        {index === 24 ? (
          <button
            className="next-btn"
            onClick={() => dispatch({ type: "EndQuiz" })}
          >
            submit
          </button>
        ) : (
          <button
            className="next-btn"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
