import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function ContextProvider({ children }) {
  const [token, setToken] = useState("");

  const [name, setName] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);

  const [emailLogin, setEmailLogin] = useState("")

  const [userIdLogin, setUserIdLogin] = useState(0)

  const [indicationsLogin, setIndicationsLogin] = useState([])  

  return (
    <AuthContext.Provider
      value={{ token, setToken, name, setName, isAdmin, setIsAdmin, emailLogin, 
        setEmailLogin, userIdLogin, setUserIdLogin, indicationsLogin, setIndicationsLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useContextProvider() {
  return useContext(AuthContext);
}
