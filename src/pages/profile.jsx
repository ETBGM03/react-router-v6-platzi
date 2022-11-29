import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const Profile = () => {
  const { user } = useAuth();
  const naviagte = useNavigate();
  useEffect(() => {
    if (!user.userName) {
      naviagte("/");
    }
  }, [user, naviagte]);

  return (
    <Fragment>
      <h2>Perfil</h2>
      <div>Profile de {user.userName}</div>
    </Fragment>
  );
};

export default Profile;
