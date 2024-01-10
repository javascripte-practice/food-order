import { useContext } from "react";
import appContext from "./context/appContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  const ctx = useContext(appContext);
  console.log(ctx);
  return (
    <Routes>
      {!ctx.isVerify && <Route path="/" element={<Navigate to={"/login"} />} />}
      {ctx.isVerify && <Route path="/" element={<Navigate to={"/home"} />} />}
      {ctx.isVerify && <Route path="/home" element={<Home />} />}
      <Route path="/login" element={<Login />} />
      {!ctx.isVerify && <Route path="*" element={<Navigate to={"/login"} />} />}
      {ctx.isVerify && <Route path="*" element={<Navigate to={"/home"} />} />}
    </Routes>
  );
}

export default App;
