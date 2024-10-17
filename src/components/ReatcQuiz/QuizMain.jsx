import React from "react";
import styles from "./QuizApp.css";
import QuizQuestions from "./QuizQuestions";
import Questions from "./Questions";

export default function QuizMain({ question, dispatch, ans, index }) {
  return (
    <div className="container Question">
      <div className="container">
        <h4 className="question-id">
          {index + 1}. {question.question}
        </h4>

        <div>
          <Questions
            options={question}
            dispatch={dispatch}
            ans={ans}
            index={index}
          ></Questions>
        </div>
      </div>
    </div>
  );
}
