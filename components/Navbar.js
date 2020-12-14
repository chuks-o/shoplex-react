import Link from "next/link";

const Navbar = () => (
  <div className="fixed-top">
    <div className="d-flex align-items-center justify-content-center navbar-notice">
      <div className="container text-muted text-center">
        <div className="d-flex justify-content-center">
          <a href="">
            <span className="fab fa-instagram text-muted mr-4"></span>
          </a>
          <a href="">
            <span className="fab fa-twitter text-muted mr-4"></span>
          </a>
          <a href="">
            <span className="fab fa-facebook text-muted mr-4"></span>
          </a>
          <a href="">
            <span className="fab fa-linkedin text-muted mr-4"></span>
          </a>
        </div>
      </div>
    </div>

    <nav className="navbar main-nav navbar-expand-lg navbar-expand-sm navbar-light border-bottom">
      <div className="container py-2">
        <Link href="/">
          <a>
            <img
              src="/images/Logo.png"
              className="navbar-brand-img"
              alt="Shoplex Logo"
              width="100px"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle category font-weight-normal text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Fashion
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="container">
                  <div className="row w-100">
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            TOPS
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Shirts
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Tunics
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Tops
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Vests
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            DRESSES
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Casual
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Evening
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Designer
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            SHOES
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Flat shoes
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Sandals
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Boots
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            JEWELRY
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Bracelets
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Earings
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Nosepin
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Necklace
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Rings
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Lockets
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            TRENDING
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Crafted Kurti
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Shorts
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Cosmetics
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Custumized Shoes
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            JEANS
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Slim Fit
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Low Waist
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle category text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Electronics
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="container">
                  <div className="row w-100">
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            MOBILE
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Sony
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Samsung
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Apple
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Xiaomi
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Lenevo
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            KITCHEN
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Electric Heater
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Toaster
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            DAILY USE
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Water Heater
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Induction Cooker
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            COMPUTERS & ACCESSORIES
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Laptops
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Hard Drives
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Pen Drives
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Mouse & Keyboards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle category text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Furniture
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="container">
                  <div className="row w-100">
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Object 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 3
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Object 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 3
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Object 3
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 3
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Object 4
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle category text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sports & Book
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="container">
                  <div className="row w-100">
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Object 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 3
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Object 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 3
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Object 3
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 3
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Object 4
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link i" href="#">
                            Item 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul> */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link mr-3 text-dark font-weight-bold">
                  Login
                </a>
              </Link>
            </li>
          </ul>

          <div>
            <Link href="/signup">
              <button className="btn btn-primary font-weight-bold">
                Start Selling
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>

    <style jsx>{`
      .main-nav {
        background: #fff;
      }
      .navbar-notice {
        background: #fff;
        height: 30px;
        font-size: 12px;
        border-bottom: 1px solid #e4e8ec;
        color: black;
      }

      .navbar .dropdown-menu div[class*="col"] {
        margin-bottom: 1rem;
      }

      .navbar .dropdown-menu {
        border: none;
        background-color: #fff !important;
        background: transparent;
        margin-top: 11px;
      }

      .navbar {
        padding-top: 0px;
        padding-bottom: 0px;
      }

      .navbar .nav-item {
        padding: 0.5rem 0.5rem;
        margin: 0 0.25rem;
      }

      .navbar .dropdown {
        position: static;
      }

      .navbar .dropdown-menu {
        width: 100%;
        left: 0;
        right: 0;
        top: 45px;
      }

      .navbar .dropdown:hover .dropdown-menu,
      .navbar .dropdown .dropdown-menu:hover {
        display: block !important;
      }

      .navbar .dropdown-menu {
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: #fff;
      }

      a.i {
        margin-top: -20px;
        font-weight: 400;
        color: white;
      }

      a.category {
        margin-left: -20px;
      }

      button.srch {
        padding: 0px;
      }

      @media only screen and (max-width: 1024px) and (min-width: 768px) {
        input.srch {
          padding: 0px;
          width: 100%;
        }
      }

      a.nav-link.active {
        font-weight: 700;
        color: #00bdaa;
        width: 100%;
      }

      span.navbar-toggler.icon {
        color: black;
      }
    `}</style>
  </div>
);

export default Navbar;
