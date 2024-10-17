import React from "react";
import styles from "./QuizApp.css";
import QuizHeader from "./QuizHeader";
import QuizMain from "./QuizMain";
import { useEffect } from "react";
import { useReducer } from "react";
import Loading from "../Loading";
import Error from "../Error";
import QuizQuestions from "./QuizQuestions";
import QuizScore from "./QuizScore";

const initialState = {
  question: [],
  status: "loading",
  index: 0,
  score: 0,
  ans: "",
};

function Reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, question: action.payload, status: "started" };
    case "dataFailed":
      return { ...state, status: "Error" };
    case "StartQuiz":
      return { ...state, status: "Active" };
    case "selectedOption":
      return { ...state, ans: "YES" };
    case "nextQuestion":
      return { ...state, index: state.index + 1, ans: "" };
    case "previousQuestion":
      return { ...state, index: state.index - 1, ans: "" };
    case "selectAnswer":
      return { ...state, ans: action.payload };
    case "addScore":
      return { ...state, score: state.score + 10, ans: action.payload };

    case "EndQuiz":
      return { ...state, status: "ended" };
    default:
      throw new Error("Unknown action");
  }
}

export default function ReactQuiz() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/Questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  if (state.status === "loading") return <Loading></Loading>;
  if (state.status === "Error") return <Error></Error>;

  console.log(state.score);
  console.log(state.question.length);

  return (
    <div className="QuizApp ">
      <QuizHeader></QuizHeader>

      {state.status === "ended" && <QuizScore score={state.score} />}

      {state.status === "started" && <QuizQuestions dispatch={dispatch} />}

      {state.status === "Active" && (
        <QuizMain
          question={state.question[state.index]}
          dispatch={dispatch}
          ans={state.ans}
          index={state.index}
        ></QuizMain>
      )}
    </div>
  );
}
