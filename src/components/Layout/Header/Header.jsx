import React from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import headerImg from "../../../assets/header-food.webp";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className={styles["header-img"]}>
        <img src={headerImg} alt="New Menu" />
      </div>
    </div>
  );
};

export default Header;
