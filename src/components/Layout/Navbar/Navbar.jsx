import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import appContext from "../../../context/appContext";
import KarzinkaModal from "../../UI/KarzinkaModal/KarzinkaModal";
import ModalProvider from "../../Modals/Modal";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [openKarzinka, setOpenKarzinka] = useState(false);
  const [order, setOrder] = useState(false);
  // const ctx = useContext(appContext);
  const { karzinka } = useSelector((state) => state);
  const isOpen = () => {
    setOpenKarzinka(!openKarzinka);
  };
  return (
    <div className={styles["navbar"]}>
      {order && (
        <ModalProvider isOpen={() => setOrder(!order)}>
          <h2 style={{ padding: "10px 20px" }}>
            Buyurtmangiz qabul qilindi...
          </h2>
        </ModalProvider>
      )}
      {openKarzinka && <KarzinkaModal isOpen={isOpen} setOrder={setOrder} />}
      <div className={`container ${styles["container"]}`}>
        <div className={styles["logo"]}>Versal Food</div>
        <ul className={styles["ul-links"]}>
          <li>Home</li>
          <li>Menu</li>
          <li>Services</li>
          <li>Offers</li>
        </ul>
        <div>
          <button className={`btn ${styles["karzinka-btn"]}`} onClick={isOpen}>
            Karzinka {karzinka?.length}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
