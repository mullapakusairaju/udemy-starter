import React from "react";
import styles from "../MainStyles/DateCounterApp.css";
import DateCounter from "./DateCounter";

export default function DateCounterApp() {
  return (
    <div className="DateCounterApp">
      <h3 className="d-flex justify-content-center DateCounterApp-title">
        Datecounter
      </h3>

      <DateCounter></DateCounter>
    </div>
  );
}
