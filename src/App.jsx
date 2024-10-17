import "./App.css";
import Bio from "./components/Bio";
import Career from "./components/Career";
import DateCounterApp from "./components/DateCounterApp";
import ReactQuiz from "./components/ReatcQuiz/ReactQuiz";

function App() {
  return (
    <div>
      <ReactQuiz></ReactQuiz>
      <hr></hr>
      <Career></Career>
      <hr></hr>
      <DateCounterApp></DateCounterApp>
      <hr></hr>
    </div>
  );
}

export default App;
