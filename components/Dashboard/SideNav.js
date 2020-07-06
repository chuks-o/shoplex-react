import NavButton from "../layouts/Navigation/NavButton";

const SideNav = ({ ...props }) => {
  return (
    <>
      <nav
        className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
        id="sidenav-main"
      >
        <div className="scroll-wrapper scrollbar-inner">
          <div className="scrollbar-inner scroll-content scroll-scrolly_visible">
            {/* <!-- Brand --> */}
            <div className="sidenav-header align-items-center">
              <a className="navbar-brand">
                <img
                  src="/images/Logo.png"
                  className="navbar-brand-img"
                  alt="Shoplex Logo"
                />
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
                    <NavButton key={button.path} button={button} />
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
      `}</style>
    </>
  );
};

export default SideNav;
