import Link from "next/link";
import Footer from "../../components/Footer";

const EmailVerify = () => (
  <div className="email-verify d-flex flex-column">
    <div className="email-verify--body d-flex justify-content-center align-items-center">
      <div className="col-lg-5 col-md-7 mx-auto">
        <div className="text-center">
          <h1 className="mb-4 font-weight-bold text-primary email-verify--header">
            Great Job! <br /> You're almost there.
          </h1>
          <h4 className="mb-4">Verify your email address.</h4>
          <p className="email-verify-text mb-4">
            We have sent a verification mail to your email inbox. Click the link
            or button on the mail to complete your signup.
          </p>
          <p className="mb-5 h6">
            <Link href="/login">
              <a className="text-secondary">
                Go to Login <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </Link>
          </p>
          <p>
            Didn't receive the mail?{" "}
            <a href="#" className="text-muted text-underline">
              Click to Resend.
            </a>
          </p>
        </div>
      </div>
    </div>

    <div className="mt-auto">
      <Footer />
    </div>

    <style jsx>{`
      .email-verify {
        height: 100vh;
      }
      .email-verify--body {
        height: 100%;
        box-sizing: border-box;
      }
      .email-verify-text {
        line-height: 1.8em;
      }
      .email-verify--header {
        line-height: 1.4em;
      }
    `}</style>
  </div>
);

export default EmailVerify;
