import Head from "next/head";
import TopNav from "../Dashboard/TopNav";
import SideNav from "../Dashboard/SideNav";
import Footer from "../Dashboard/Footer";
import navButtons from "../../config/buttons";

const AccountLayout = ({ children, ...props }) => (
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
      <meta name="description" content="" />
      <meta name="author" content="" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      ></link>
    </Head>

    <div className="">
      <TopNav {...props} />

      <div id="layoutSidenav">
        <SideNav {...props} navButtons={navButtons} />

        <div id="layoutSidenav_content">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>

    <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"
      crossOrigin="anonymous"
    ></script>
    <script src="https://blackrockdigital.github.io/startbootstrap-sb-admin/dist/js/scripts.js"></script>
    <style jsx>{`
      #layoutSidenav_content {
        background-color: #f8f9fa;
      }
    `}</style>
  </div>
);

export default AccountLayout;
