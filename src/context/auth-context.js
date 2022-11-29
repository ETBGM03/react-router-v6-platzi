import { createContext, useContext, useState } from "react";

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

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

export { useAuth, AuthContextProvider };
