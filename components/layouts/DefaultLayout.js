import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Shoplex Nigeria | Security your trade</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        ></link>
      </Head>

      <Navbar />

      <div className="main-body">{children}</div>

      <Footer />

      {/* <!-- for the search only version --> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/algoliasearch@4/dist/algoliasearch-lite.umd.js"></script> */}

      {/* <!-- for the default version --> */}
      <script src="https://cdn.jsdelivr.net/npm/algoliasearch@4/dist/algoliasearch.umd.js"></script>

      <style jsx>{`
        .main-body {
          height: 100%;
          min-height: 90vh;
        }
      `}</style>
    </div>
  );
};

export default DefaultLayout;
