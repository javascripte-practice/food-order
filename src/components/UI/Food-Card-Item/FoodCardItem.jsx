import React from "react";
import styles from "./FoodCardItem.module.css";
import { useContext } from "react";
import appContext from "../../../context/appContext";
const FoodCardItem = ({ data }) => {
  const ctx = useContext(appContext);
  const addKarzinka = (e) => {
    e.preventDefault();
    const diff = ctx.karzinka?.filter((e) => e.name === data.name);
    if (diff.length > 0) {
      const newArr = ctx.karzinka?.map((e) => {
        if (e.name === data.name) {
          const newObj = {
            ...e,
            count: e.count + 1,
          };
          return newObj;
        } else {
          return e;
        }
      });
      ctx.setKarzinka((prev) => {
        return newArr;
      });
    } else {
      const obj = { ...data, count: 1, id: Date.now().toString() };
      ctx.setKarzinka((prev) => {
        return [...prev, obj];
      });
    }
  };
  return (
    <div className={styles["card-box"]}>
      <div className={styles["food-img"]}>
        <img src={data.img} alt="" />
      </div>
      <p className={styles["food-name"]}>{data.name}</p>
      <div>
        <p className={styles["food-price"]}>{data.price} so'm</p>
      </div>
      <button
        type="button"
        className={`btn ${styles["food-order-btn"]}`}
        onClick={addKarzinka}
      >
        + Karzinka
      </button>
    </div>
  );
};

export default FoodCardItem;
