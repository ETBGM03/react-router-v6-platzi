import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    auth.logOut();
    navigate("/");
  };
  return (
    <Fragment>
      <h2>Logout</h2>
      <form action="">
        <label htmlFor="user_name">Seguro que quieres salir?</label>
        <button onClick={handleLogOut}>Salir</button>
      </form>
    </Fragment>
  );
};

export default Logout;
