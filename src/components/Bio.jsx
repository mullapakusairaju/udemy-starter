import React from "react";
import Intro from "./Intro";
import Logo from "./Logo";
import Skills from "./Skills";
import styles from "../MainStyles/Bio.css";
export default function Bio() {
  return (
    <div className="AppCard ">
      <Logo />
      <Intro />

      <Skills />
    </div>
  );
}
