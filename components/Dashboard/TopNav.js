import { logout } from "../../utils/Auth";
import Link from "next/link";

const TopNav = (props) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="sb-topnav navbar navbar-expand px-lg-5 border-bottom">
      <a className="navbar-brand font-weight-bold text-primary">Shoplex</a>
      <a
        className="order-4 ml-auto order-lg-0 d-block d-lg-none"
        id="sidebarToggle"
      >
        <i className="fas fa-bars"></i>
      </a>
      <ul className="navbar-nav d-md-block d-none">
        <li className="nav-item">
          <a className="nav-link font-weight-bold">Dashboard</a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="text-dark mr-3">{props.user.fullName}</span>
            <i className="far fa-user-circle "></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            <Link href="/account/profile">
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </Link>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" onClick={handleLogout}>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
