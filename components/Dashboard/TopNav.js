import { logout } from "../../utils/Auth";
import Link from "next/link";

const TopNav = (props) => {
  const handleLogout = () => {
    logout();
  };

  const toggleSideNav = () => {
    document.querySelector("body").classList.toggle("g-sidenav-hidden");
    document.querySelector("body").classList.toggle("g-sidenav-pinned");
  };

  return (
    <>
      <nav className="navbar navbar-top navbar-expand navbar-dark bg-grey border-bottom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Search form --> */}
            <form
              className="navbar-search navbar-search-light form-inline mr-sm-3"
              id="navbar-search-main"
            >
              <div className="form-group mb-0">
                <div className="input-group input-group-alternative input-group-merge">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </div>
              <button
                type="button"
                className="close"
                data-action="search-close"
                data-target="#navbar-search-main"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </form>
            {/* <!-- Navbar links --> */}
            <ul className="navbar-nav align-items-center ml-md-auto">
              <li className="nav-item d-lg-none">
                {/* <!-- Sidenav toggler --> */}
                <div
                  className="pr-3 text-dark sidenav-toggler sidenav-toggler-light"
                  data-action="sidenav-pin"
                  data-target="#sidenav-main"
                  onClick={() => toggleSideNav()}
                >
                  <div className="sidenav-toggler-inner text-dark">
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                  </div>
                </div>
              </li>
              <li className="nav-item d-sm-none">
                <a
                  className="nav-link"
                  href="#"
                  data-action="search-show"
                  data-target="#navbar-search-main"
                >
                  <i className="ni ni-zoom-split-in text-dark"></i>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav align-items-center ml-auto ml-md-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link pr-0"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="media align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img alt="Image placeholder" src="/images/avatar.jpg" />
                    </span>
                    <div className="media-body ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm text-dark font-weight-bold">
                        {props.user.fullName}
                      </span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </div>
                  <a href="#!" className="dropdown-item">
                    <i className="ni ni-single-02"></i>
                    <span>My profile</span>
                  </a>
                  {/* <a href="#!" className="dropdown-item">
                    <i className="ni ni-settings-gear-65"></i>
                    <span>Settings</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <i className="ni ni-calendar-grid-58"></i>
                    <span>Activity</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <i className="ni ni-support-16"></i>
                    <span>Support</span>
                  </a> */}
                  <div className="dropdown-divider"></div>
                  <a onClick={() => logout()} className="dropdown-item">
                    <i className="ni ni-user-run"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
