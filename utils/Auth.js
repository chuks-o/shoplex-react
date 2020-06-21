import cookie from "js-cookie";
import Router from "next/router";
import { useEffect } from "react";
import nextCookie from "next-cookies";
import fetch from "isomorphic-unfetch";
import { baseUrl } from "../utils/variables";

export const login = ({ token, user }) => {
  if (!token || !user) return false;

  cookie.set("token", token, { expires: 1 / 8 }); // expires in 3 hours.
  cookie.set("accountId", user.id);

  Router.push("/account");
};

export const storage = {
  getItem(key) {
    return window.localStorage.getItem(key);
  },
  setItem(key, value) {
    return window.localStorage.setItem(key, value);
  },
  removeItem(key) {
    return window.localStorage.removeItem(key);
  },
};

export const auth = (ctx) => {
  const { token, accountId } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push("/login");
  }

  return { token, accountId };
};

export const logout = () => {
  cookie.remove("token");
  cookie.remove("accountId");
  // to support logging out from all windows
  window.localStorage.setItem("logout", Date.now());
  Router.push("/login");
};

export const withAuthSync = (WrappedComponent) => {
  const Wrapper = (props) => {
    const syncLogout = (event) => {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        Router.push("/login");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);
      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx) => {
    const payload = auth(ctx);
    const { accountId, token } = payload;

    const url = `${baseUrl}/user/${accountId}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const {
        data: { user },
      } = await response.json();

      let componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return {
        user,
        payload,
        ...componentProps,
      };
    } catch (error) {}
  };

  return Wrapper;
};
