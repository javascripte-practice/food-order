import React from "react";
import styles from "./FoodCardItem.module.css";
import { useContext } from "react";
import appContext from "../../../context/appContext";
import { setKarzinka } from "../../../context/constants";
const FoodCardItem = ({ data }) => {
  const ctx = useContext(appContext);
  const addKarzinka = (e) => {
    e.preventDefault();
    // const diff = ctx.karzinka?.filter((e) => e.name === data.name);
    console.log(ctx.karzinka);
    // if (diff.length > 0) {
    //   const newArr = ctx.karzinka?.map((e) => {
    //     if (e.name === data.name) {
    //       const newObj = {
    //         ...e,
    //         count: e.count + 1,
    //       };
    //       return newObj;
    //     } else {
    //       return e;
    //     }
    //   });
    //   ctx.setData(setKarzinka, newArr);
    // } else {
    const obj = { ...data, count: 1, id: Date.now().toString() };
    ctx.setData(setKarzinka, obj);
    // }
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
