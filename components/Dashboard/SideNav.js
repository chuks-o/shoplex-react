import NavButton from "../layouts/Navigation/NavButton";

const SideNav = ({ ...props }) => {
  const toggleSideNav = () => {
    document.querySelector("body").classList.toggle("g-sidenav-pinned");
    console.log("closed");
  };
  return (
    <>
      <nav
        className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
        id="sidenav-main"
      >
        <div className="scroll-wrapper">
          <div className="scrollbar-inner scroll-content">
            {/* <!-- Brand --> */}
            <div className="sidenav-header align-items-center">
              <a className="navbar-brand mb-5 mr-3">
                <div className="d-flex align-items-center">
                  <img
                    src="/images/Logo.png"
                    className="navbar-brand-img mx-auto"
                    alt="Shoplex Logo"
                  />
                  <span
                    className="ml-auto pt-2 text-muted sidebarToggle d-block d-lg-none"
                    onClick={() => toggleSideNav()}
                    role="button"
                  >
                    &times;
                  </span>
                </div>
              </a>
            </div>
            <div className="navbar-inner">
              {/* <!-- Collapse --> */}
              <div
                className="collapse navbar-collapse"
                id="sidenav-collapse-main"
              >
                {/* <!-- Nav items --> */}
                <ul className="navbar-nav">
                  {props.navButtons.map((button) => (
                    <NavButton
                      key={button.path}
                      closeNav={toggleSideNav}
                      button={button}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="scroll-element scroll-x scroll-scrolly_visible">
            <div className="scroll-element_outer">
              <div className="scroll-element_size"></div>
              <div className="scroll-element_track"></div>
              <div className="scroll-bar scrollbar--nowidth"></div>
            </div>
          </div>
          <div className="scroll-element scroll-y scroll-scrolly_visible">
            <div className="scroll-element_outer">
              <div className="scroll-element_size"></div>
              <div className="scroll-element_track"></div>
              <div className="scroll-bar"></div>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .scrollbar-inner {
          height: auto;
          margin-bottom: 0px;
          margin-right: 0px;
          max-height: 718px;
        }
        .scroll-wrapper {
          position: relative;
        }
        .scroll-bar {
          height: 681px;
          top: 0px;
        }
        .scrollbar--nowidth {
          width: 0px;
        }
        .sidebarToggle {
          font-size: 30px;
        }
      `}</style>
    </>
  );
};

export default SideNav;
