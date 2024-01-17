import React, { useCallback, useContext, useState } from "react";
import styles from "./KarzinkaModal.module.css";
import ModalProvider from "../../Modals/Modal";
import appContext from "../../../context/appContext";
import { useDispatch, useSelector } from "react-redux";
import { delKarzinka } from "../../../context/constants";

const KarzinkaModal = (props) => {
  // const ctx = useContext(appContext);
  const { karzinka } = useSelector((state) => state);
  const dispatch = useDispatch();
  const overalPrice = karzinka.reduce((acc, e) => {
    const price = +e?.price * e?.count;
    return acc + price;
  }, 0);

  const deleteOrder = (id) => {
    dispatch({ type: delKarzinka, payload: id });
  };

  const orderFood = (data) => {
    dispatch({ type: delKarzinka, payload: false });
    props.isOpen();
    props.setOrder(true);
  };
  return (
    <ModalProvider isOpen={props.isOpen}>
      <div className={styles["box"]}>
        <table className={styles["table"]}>
          <thead>
            <tr className={styles["item"]}>
              <th>No</th>
              <th>Buyurtma nomi</th>
              <th>Narxi</th>
              <th>Buyurtma soni</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className={styles["tbody"]}>
            {karzinka.map((p, i) => {
              return (
                <tr key={p?.id} className={styles["item"]}>
                  <td>{i + 1}.</td>
                  <td>
                    {"  "}
                    {p?.name}
                    {"  "}
                  </td>
                  <td>
                    {p?.price} {" so'm"}
                  </td>
                  <td>{p?.count}</td>
                  <td>
                    <button onClick={deleteOrder.bind(null, p?.id)}>del</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={styles["overal"]}>
          <span>
            {"Umumiy "} <strong>{overalPrice.toFixed(3)}</strong> {" so'm"}
          </span>
          <button
            onClick={orderFood.bind(null, karzinka)}
            disabled={karzinka.length > 0 ? false : true}
          >
            Buyurtma berish
          </button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default KarzinkaModal;
