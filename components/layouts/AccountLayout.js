import Head from "next/head";
import TopNav from "../Dashboard/TopNav";
import SideNav from "../Dashboard/SideNav";
import Footer from "../Dashboard/Footer";
import navButtons from "../../config/buttons";
import { useEffect } from "react";

const AccountLayout = ({ children, ...props }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("g-sidenav-show");
    return () => {
      document.querySelector("body").classList.remove("g-sidenav-show");
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
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/argon-dashboard/assets/vendor/nucleo/css/nucleo.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/argon-dashboard/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
          type="text/css"
        />
        {/* <!-- Page plugins --> */}
        {/* <!-- Argon CSS --> */}
        {/* <link rel="stylesheet" href="/styles/styles.css" type="text/css"></link> */}
        <script src="https://demos.creative-tim.com/argon-dashboard/assets/vendor/jquery/dist/jquery.min.js"></script>
        <script src="https://demos.creative-tim.com/argon-dashboard/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://demos.creative-tim.com/argon-dashboard/assets/vendor/js-cookie/js.cookie.js"></script>
        <script src="https://demos.creative-tim.com/argon-dashboard/assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
        <script src="https://demos.creative-tim.com/argon-dashboard/assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>
        {/* <!-- Optional JS --> */}
        <script src="https://demos.creative-tim.com/argon-dashboard/assets/vendor/chart.js/dist/Chart.min.js"></script>
        <script src="https://demos.creative-tim.com/argon-dashboard/assets/vendor/chart.js/dist/Chart.extension.js"></script>
        {/* <!-- Argon JS --> */}
        <script src="https://demos.creative-tim.com/argon-dashboard/assets/js/argon.min.js?v=1.2.0"></script>
      </Head>

      <>
        <SideNav {...props} navButtons={navButtons} />

        <div className="main-content" id="panel">
          <TopNav {...props} />

          <>{children}</>
          {/* <Footer /> */}
        </div>
      </>

      <style jsx>{`
        #layoutSidenav_content {
          background-color: #f8f9fa;
        }
        /* Chart.js */
        @keyframes chartjs-render-animation {
          from {
            opacity: 0.99;
          }
          to {
            opacity: 1;
          }
        }
        .chartjs-render-monitor {
          animation: chartjs-render-animation 1ms;
        }
        .chartjs-size-monitor,
        .chartjs-size-monitor-expand,
        .chartjs-size-monitor-shrink {
          position: absolute;
          direction: ltr;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
          visibility: hidden;
          z-index: -1;
        }
        .chartjs-size-monitor-expand > div {
          position: absolute;
          width: 1000000px;
          height: 1000000px;
          left: 0;
          top: 0;
        }
        .chartjs-size-monitor-shrink > div {
          position: absolute;
          width: 200%;
          height: 200%;
          left: 0;
          top: 0;
        }
      `}</style>
    </div>
  );
};

export default AccountLayout;
