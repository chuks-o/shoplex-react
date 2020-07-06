import Link from "next/link";
import { withRouter } from "next/router";

const NavButton = (props) => {
  const { button } = props;
  const activeRoute = props.router.pathname === button.path ? "active" : "";

  return (
    <li className="nav-item">
      <Link href={button.path}>
        <a className={`nav-link ${activeRoute}`}>
          <i className={button.icon}></i>
          <span className="nav-link-text">{button.label}</span>
        </a>
      </Link>

      <style jsx>{`
        a.nav-link {
          padding: 22px;
          margin: 5px;
          color: #32325d !important;
        }
        a.nav-link i {
          color: #32325d;
          font-size: 16px;
          margin-right: 6px;
        }
        a.nav-link:hover {
          background: #f8f9fe;
        }
        a.nav-link.active {
          color: #fff !important;
          font-weight: bold;
          background: #00bdaa !important;
          border-radius: 3px;
        }
        a.nav-link.active i {
          color: #fff;
        }
      `}</style>
    </li>
  );
};

export default withRouter(NavButton);
