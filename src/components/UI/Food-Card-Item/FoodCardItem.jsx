import React, { useCallback } from "react";
import styles from "./FoodCardItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setKarzinka } from "../../../redux-toolkit/foodOrderSlice";
// import { setKarzinka } from "../../../context/constants";
const FoodCardItem = ({ data }) => {
  // const ctx = useContext(appContext);
  const { isVerify } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addKarzinka = useCallback((e) => {
    e.preventDefault();
    const obj = { ...data, count: 1, id: Date.now().toString() };
    dispatch(setKarzinka(obj));
    // dispatch({ type: setKarzinka, payload: obj });
    // ctx.setData(setKarzinka, obj);
  });
  return (
    <div className={styles["card-box"]}>
      <div className={styles["food-img"]}>
        <img src={data.img} alt="" />
      </div>
      {isVerify && <p>Hello</p>}
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
