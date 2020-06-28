import { logout } from "../../utils/Auth";
import Link from "next/link";

const TopNav = (props) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="sb-topnav navbar bg-white navbar-expand px-lg-5 border-bottom">
      <p className="navbar-brand font-weight-bold text-primary">Shoplex</p>
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
        <li className="d-flex flex-column my-auto">
          <div className="">
            <span className="d-lg-block d-none">{props.user.fullName}</span>
          </div>
        </li>
        <li className="nav-item dropdown mx-3">
          <a
            className="nav-link dropdown-toggle"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="/images/avatar-placeholder.png"
              alt="Avatar"
              className="avatar"
              height="40px"
            ></img>
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
      <style jsx>{`
        .avatar {
          vertical-align: middle;
          width: 40px !important;
          height: 40px !important;
          border-radius: 50% !important;
          padding: 4px;
          border: 1px solid #eee !important;
        }
      `}</style>
    </nav>
  );
};

export default TopNav;
