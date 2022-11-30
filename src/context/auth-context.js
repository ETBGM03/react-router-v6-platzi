import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const adminList = ["Camilo", "Camila"];

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = ({ userName }) => {
    const isAdmin = adminList.find((admin) => admin === userName);
    setUser({
      userName,
      isAdmin,
    });
  };

  const logOut = () => {
    setUser(null);
  };
  const auth = { user, login, logOut };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function AuthPrivateRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

export { useAuth, AuthContextProvider, AuthPrivateRoute };
