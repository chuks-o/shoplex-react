const Footer = () => (
  <footer className="b-top">
    <div className="py-3 px-2">
      <p className="p-0 m-0 text-center text-muted small">
        Copyright &copy; 2020 Shoplex Nigeria Inc, All rights reserved.
      </p>
    </div>
    <style jsx>{`
      footer {
        height: 60px;
        bottom: 0;
        top: 0;
        background: #f8f8f9;
      }
      .b-top {
        border-top: 1px solid #e4e8ec;
      }
    `}</style>
  </footer>
);

export default Footer;
