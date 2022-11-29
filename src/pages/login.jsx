import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const Login = () => {
  const [userName, setUserName] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    //navigate
    e.preventDefault();
    auth.login({ userName });
    navigate("/profile");
    setUserName("");
  };
  return (
    <Fragment>
      <form action="">
        <label htmlFor="user_name">User Name</label>
        <input
          id="user_name"
          type="text"
          placeholder="user name"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
        <button onClick={handleSubmit}>Entrar</button>
      </form>
    </Fragment>
  );
};

export default Login;
