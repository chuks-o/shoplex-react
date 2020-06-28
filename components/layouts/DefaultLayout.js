import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Shoplex Nigeria | Buy anything in Nigeria</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="author" content="Shoplex Nigeria Ltd"></meta>
        <meta charSet="utf-8"></meta>
        <meta
          name="description"
          content="Buy from the right source and get value anywhere in Nigeria"
        ></meta>
        <meta
          name="keywords"
          content="Shoplex, shoplex Nigeria, Buy anything in Nigeria, Supermart, One stop shop, buy cars in nigeria, electronics in nigeria, groceries in nigeria,"
        ></meta>

        <meta itemprop="name" content="Shoplex"></meta>
        <meta
          itemprop="description"
          content="Buy anything in Nigeria with confidence"
        ></meta>
        <meta
          itemprop="image"
          content="https://res.cloudinary.com/davecode01/image/upload/v1593305094/Shoplex_social_preview_kpajsc.jpg"
        ></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@shoplexng"></meta>
        <meta name="twitter:title" content="Shoplex Nigeria"></meta>
        <meta name="twitter:url" content="https://shoplexnigeria.com"></meta>
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/davecode01/image/upload/v1593305094/Shoplex_social_preview_kpajsc.jpg"
        ></meta>

        <meta
          name="twitter:description"
          content="Buy anything in Nigeria with total confidence, Shoplex provides you with only verified and authentic goods."
        ></meta>
        <meta name="twitter:app:country" content="NG"></meta>
        <meta name="twitter:creator" content="@shoplexng"></meta>
        <meta name="twitter:domain" content="@shoplexng"></meta>
        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/davecode01/image/upload/v1593305094/Shoplex_social_preview_kpajsc.jpg"
        ></meta>
        <meta property="og:title" content="Shoplex"></meta>
        <meta property="og:url" content="https://shoplexnigeria.com"></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/davecode01/image/upload/v1593305094/Shoplex_social_preview_kpajsc.jpg"
        ></meta>
        <meta
          property="og:description"
          content="Buy anything in Nigeria with total confidence, Shoplex provides you with only verified and authentic goods."
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="Shoplex"></meta>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        ></link>

        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.bundle.min.js"
          crossOrigin="anonymous"
        ></script>

        <script src="/scripts/sidebar.js"></script>
      </Head>

      <Navbar />

      <div className="main-body">{children}</div>

      <Footer />

      {/* <!-- for the search only version --> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/algoliasearch@4/dist/algoliasearch-lite.umd.js"></script> */}

      {/* <!-- for the default version --> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/algoliasearch@4/dist/algoliasearch.umd.js"></script> */}

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
