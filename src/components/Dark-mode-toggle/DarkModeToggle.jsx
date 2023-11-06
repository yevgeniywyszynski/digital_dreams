"use client";

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  //check yours app theme
  console.log("toggle", mode);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.modeToggleIcon}>🌙</div>
      <div className={styles.modeToggleIcon}>🔆</div>
      <div
        className={styles.toggleBool}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
