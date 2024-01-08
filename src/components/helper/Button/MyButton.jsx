import React from "react";
import styles from "./Button.module.css";

const MyButton = (props) => {
  const onclick =
    typeof props["onClick"] === "function" ? props["onClick"] : () => {};
  return (
    <button
      className={`${styles["btn"]} ${styles[props["classname"]]}`}
      type={props["type"]}
      style={props["style"]}
      onClick={onclick}
    >
      {props.children}
    </button>
  );
};

export default MyButton;
