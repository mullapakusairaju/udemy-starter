import styles from "../MainStyles/DateCounter.css";
import { useReducer } from "react";

const intitalState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "descCount":
      return { ...state, count: state.count - state.step };
    case "incCount":
      return { ...state, count: state.count + state.step };
    case "descStep":
      return { ...state, step: state.step - action.payload };
    case "incStep":
      return { ...state, step: state.step + action.payload };
    case "reset":
      return intitalState;
    default:
      throw new Error(" dispatch action unknown");
  }
}

export default function DateCounter() {
  const [state, disptach] = useReducer(reducer, intitalState);

  const date = new Date();
  date.setDate(date.getDate() + state.count);

  function decreaseCount() {
    disptach({ type: "descCount", payload: 1 });
  }

  function IncreaseCount() {
    disptach({ type: "incCount", payload: 1 });
  }

  function decreaseStep() {
    disptach({ type: "descStep", payload: 1 });
  }

  function IncreaseStep() {
    disptach({ type: "incStep", payload: 1 });
  }

  function handleRestDate() {
    disptach({ type: "reset" });
  }

  return (
    <div>
      <div className="step-counter d-flex justify-content-center mt-4">
        <button className="btnStep" onClick={decreaseStep}>
          -
        </button>
        <span className="StepVal  d-flex justify-content-center px-2">
          Step : {state.step}
        </span>
        <button className="btnStep" onClick={IncreaseStep}>
          +
        </button>
      </div>
      <div className="date-counter d-flex justify-content-center mt-4">
        <button className="btnCounter" onClick={decreaseCount}>
          -
        </button>
        <span className="countVal d-flex justify-content-center px-2">
          Counter : {state.count}
        </span>
        <button className="btnCounter" onClick={IncreaseCount}>
          +
        </button>
      </div>
      <div className="count-message  d-flex justify-content-center mt-3">
        <p>Today Date is {date.toDateString()}</p>
      </div>
      <div className="reset-btn">
        <button onClick={handleRestDate}>RESET</button>
      </div>
    </div>
  );
}
