import { useContext, useState } from "react";
import Layout from "./components/Layout/Layout";
import FoodCards from "./components/UI/Food-Cards/FoodCards";
import { data } from "./assets/data";
import appContext from "./context/appContext";

function App() {
  const datas = Object.entries(data);
  const ctx = useContext(appContext);
  return (
    <Layout>
      {datas.map((d) => (
        <FoodCards key={d[0]} title={d[0]} data={d[1]} />
      ))}
    </Layout>
  );
}

export default App;
