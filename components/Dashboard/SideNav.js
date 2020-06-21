import NavButton from "../layouts/Navigation/NavButton";

const SideNav = ({ user: { fullName }, ...props }) => {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-light border-right"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu font-weight-bold">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            {props.navButtons.map(button => (
              <NavButton key={button.path} {...button} />
            ))}
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          <strong>{fullName}</strong>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
