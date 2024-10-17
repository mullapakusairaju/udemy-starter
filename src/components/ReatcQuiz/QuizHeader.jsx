import React from "react";
import styles from "./QuizApp.css";

export default function QuizHeader() {
  const reactLogoUrl =
    "https://cdn-images-1.medium.com/max/280/1*lKN9xV1YEin-2wfAiGySBA.png";
  return (
    <div>
      <div className=" container header">
        <img
          src="https://cdn-images-1.medium.com/max/280/1*lKN9xV1YEin-2wfAiGySBA.png"
          alt="react-logo"
          width={50}
          height={50}
        />
        <h1 className="title">React Quiz</h1>
      </div>
    </div>
  );
}
