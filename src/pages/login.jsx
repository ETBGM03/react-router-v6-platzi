import React, { Fragment, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const Login = () => {
  const [userName, setUserName] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ userName });
    navigate("/profile");
    setUserName("");
  };

  if (user) {
    return <Navigate to="/profile" />;
  }
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
