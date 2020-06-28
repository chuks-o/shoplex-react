import { createContext, useEffect, useState } from "react";
import cookie from "js-cookie";
import nextCookie from "next-cookies";
import Router from "next/router";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [[user, setUser], [payload, setTokenPayload]] = useState({}, {});

  return (
    <UserContext.Provider
      value={{
        user,
        payload,
        login: ({ token, user }) => {
          if (!token || !user) return false;

          cookie.set("token", token, { expires: 1 / 8 }); // expires in 3 hours.
          cookie.set("accountId", user.id);
          window.localStorage.setItem("user", user);
          window.Router.push("/account");
        },
        setUser: (userData) => {
          setUser(userData);
        },
        setPayload: (tokenPayload) => {
          setTokenPayload(tokenPayload);
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
