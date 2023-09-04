import React from "react";
import styles from "./Button.module.css";

function Button({ val, center = false, disabled = false, onClick }) {
  const containerClassName = center
    ? styles.centeredContainer
    : styles.container;

  return (
    <div className={containerClassName}>
      <button className={styles.btn} disabled={disabled} onClick={onClick}>
        {val}
      </button>
    </div>
  );
}

export default Button;
