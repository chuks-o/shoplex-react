import "../public/styles/main.scss";
import "../public/styles/account.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../public/styles/stepper.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { AuthProvider } from "../contexts/UserContext";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AuthProvider>
  );
}

export default MyApp;
