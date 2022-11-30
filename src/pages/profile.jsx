import { AuthPrivateRoute, useAuth } from "../context/auth-context";

const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <h2>Perfil</h2>
      <div>Profile de {user.userName}</div>
    </>
  );
};

export default Profile;
