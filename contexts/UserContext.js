import { createContext, useEffect, useState } from "react";
import cookie from "js-cookie";
import nextCookie from "next-cookies";
import Router from "next/router";

export const AuthContext = createContext();

export const AuthProvider = ({ children, ...props }) => {
  const [user, setUser] = useState({});
  const [accId, setAccountId] = useState();
  const [authToken, setAuthToken] = useState("");

  return (
    <AuthContext.Provider
      value={{
        user,
        accountId: accId,
        authToken,

        setAuthUser: (user) => {
          if (!user) return;
          setUser(user);
        },

        setAccountId: (id) => {
          if (!id) return;
          setAccountId(id);
        },

        setToken: (token) => {
          if (!token) return;
          setAuthToken(token);
        },

        login: ({ user, token }) => {
          if (!token || !user) return false;

          cookie.set("token", token, { expires: 1 / 8 }); // expires in 3 hours.
          cookie.set("accountId", user.id);
          cookie.set("s_user", user);

          Router.push("/account");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
