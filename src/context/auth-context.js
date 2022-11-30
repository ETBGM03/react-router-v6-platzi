import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = ({ userName }) => {
    setUser({
      userName,
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
