import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import FoodCards from "../../components/UI/Food-Cards/FoodCards";
import { data } from "../../assets/data";
// import appContext from "../../context/appContext";
import { useSelector } from "react-redux";

const Home = () => {
  const datas = Object.entries(data);
  // const ctx = useContext(appContext);

  const isVerify = useSelector((state) => state.isVerify);
  return (
    <Layout>
      {isVerify &&
        datas.map((d) => <FoodCards key={d[0]} title={d[0]} data={d[1]} />)}
    </Layout>
  );
};

export default Home;
