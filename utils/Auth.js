import cookie from "js-cookie";
import Router from "next/router";
import { useEffect, useState } from "react";
import nextCookie from "next-cookies";

export const storage = {
  getItem(key) {
    return window.localStorage.getItem(key);
  },
  setItem(key, value) {
    window.localStorage.setItem(key, value);
  },
  removeItem(key) {
    window.localStorage.removeItem(key);
  },
};

export const login = ({ token, user }) => {
  if (!token || !user) return false;

  cookie.set("token", token, { expires: 1 / 8 }); // expires in 3 hours.
  cookie.set("accountId", user.id);
  storage.setItem("user", JSON.stringify(user));

  Router.push("/account");
};

export const logout = () => {
  cookie.remove("token");
  cookie.remove("accountId");
  storage.removeItem("user");
  // to support logging out from all windows
  storage.setItem("logout", Date.now());
  Router.push("/login");
};

export const auth = (ctx) => {
  const { token, accountId } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
    return;
  }

  if (!token) {
    return logout();
  }

  return { token, accountId };
};

export const withAuthSync = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [userProfile, setUserProfile] = useState({});

    const syncLogout = (event) => {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        Router.push("/login");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);

      const user = JSON.parse(window.localStorage.getItem("user"));
      setUserProfile(user);

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);

    return <WrappedComponent {...props} user={userProfile} />;
  };

  Wrapper.getInitialProps = async (ctx) => {
    const payload = auth(ctx);

    let componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return {
      payload,
      ...componentProps,
    };
  };

  return Wrapper;
};
