import Head from "next/head";
import TopNav from "../Dashboard/TopNav";
import SideNav from "../Dashboard/SideNav";
import Footer from "../Dashboard/Footer";
import navButtons from "../../config/buttons";
import { useEffect } from "react";

const AccountLayout = ({ children, ...props }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("sb-nav-fixed");
    return () => {
      document.querySelector("body").classList.remove("sb-nav-fixed");
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Shoplex | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Buy anything in Nigeria with confidence"
        />
        <meta name="author" content="Shoplex" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        ></link>
        <link rel="stylesheet" href="styles/styles.css"></link>
      </Head>

      <>
        <TopNav {...props} />

        <div id="layoutSidenav">
          <SideNav {...props} navButtons={navButtons} />

          <div id="layoutSidenav_content">
            <div>{children}</div>
            <Footer />
          </div>
        </div>
      </>

      <style jsx>{`
        #layoutSidenav_content {
          background-color: #f8f9fa;
        }
      `}</style>

      <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      ></script>

      <script src="/scripts/sidebar.js"></script>
    </div>
  );
};

export default AccountLayout;
