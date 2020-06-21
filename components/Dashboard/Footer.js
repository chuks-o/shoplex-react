const Footer = () => (
  <footer className="py-4 bg-light mt-auto border-top">
    <div className="container-fluid">
      <div className="d-md-flex align-items-center justify-content-between small">
        <div className="text-muted">
          Copyright &copy; Shoplex Nigeria Inc {new Date().getFullYear()}
        </div>
        <div>
          <a href="#">Privacy Policy</a>
          &middot;
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
