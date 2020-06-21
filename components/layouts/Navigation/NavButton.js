import Link from "next/link";
import { withRouter } from "next/router";

const NavButton = props => {
  const activeRoute = props.router.pathname === props.path && "active";

  return (
    <Link href={props.path}>
      <a className={`nav-link ${activeRoute}`}>
        <div className="sb-nav-link-icon">
          <i className={props.icon}></i>
        </div>
        {props.label}

        <style jsx>{`
          a.nav-link {
            padding: 22px;
            margin: 5px;
          }
          a.nav-link i {
            color: #adb5bd;
            font-size: 16px;
            margin-right: 6px;
          }
          a.nav-link:hover,
          a.nav-link.active {
            color: white !important;
            background: #00bdaa;
            border-radius: 3px;
          }
          a.nav-link:hover i,
          a.nav-link.active i {
            color: #fff;
          }
        `}</style>
      </a>
    </Link>
  );
};

export default withRouter(NavButton);
