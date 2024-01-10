import React, { useContext, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Login.module.css";
import appContext from "../../context/appContext";
import { onLogin } from "../../context/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(appContext);
  const navigate = useNavigate();

  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeLogin = (e) => {
    setLogin(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      login: login.trim(),
      password: password.trim(),
    };
    ctx.setData(onLogin, data);
    navigate("/home");
    setLogin("");
    setPassword("");
  };

  return (
    <Layout>
      <form onSubmit={onSubmit} className={styles["form"]}>
        <input
          type="text"
          placeholder="Login"
          onChange={changeLogin}
          value={login}
        />
        <input
          type="password"
          placeholder="Parol"
          onChange={changePassword}
          value={password}
        />
        <button>Login</button>
      </form>
    </Layout>
  );
};

export default Login;
