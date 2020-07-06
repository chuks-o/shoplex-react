import Thumbsup from "../Dashboard/Thumbsup";
import Cash from "../Dashboard/Cash";
import Link from "next/link";
import { useState, useEffect } from "react";

const Overview = (props) => {
  const {
    user: { firstname },
    products,
  } = props;

  const [activeCount, setActiveCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [closedCount, setClosedCount] = useState(0);
  const [allProductCount, setAllProductCount] = useState(0);

  useEffect(() => {
    productMetrics();
  }, []);

  const productMetrics = () => {
    // [,draft, pending,active closed]
    const activeCount = products.filter(
      (product) => product.status === "active"
    ).length;

    const pendingCount = products.filter(
      (product) => product.status === "pending"
    ).length;
    const closedCount = products.filter(
      (product) => product.status === "closed"
    ).length;

    setAllProductCount(products.length);

    setActiveCount(activeCount);

    setPendingCount(pendingCount);

    setClosedCount(closedCount);
  };

  return (
    <>
      <div className="header bg-grey pb-6">
        <div className="container-fluid">
          <div className="header-body">
            {/* <!-- Card stats --> */}
            <div className="row pt-5">
              <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                  {/* <!-- Card body --> */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">
                          Active Ads
                        </h5>
                        <span className="h2 font-weight-bold mb-0">
                          {activeCount}
                        </span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                          <i className="ni ni-active-40"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                  {/* <!-- Card body --> */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">
                          Pending Ads
                        </h5>
                        <span className="h2 font-weight-bold mb-0">
                          {pendingCount}
                        </span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                          <i className="ni ni-chart-pie-35"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                  {/* <!-- Card body --> */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">
                          Closed Ads
                        </h5>
                        <span className="h2 font-weight-bold mb-0">
                          {closedCount}
                        </span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                          <i className="ni ni-money-coins"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                  {/* <!-- Card body --> */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">
                          All Ads
                        </h5>
                        <span className="h2 font-weight-bold mb-0">
                          {allProductCount}
                        </span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                          <i className="ni ni-chart-bar-32"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page content --> */}
      <div className="container-fluid mt--6">
        <div className="row">
          <div className="col-xl-8">
            <div className="card bg-default">
              <div className="card-header bg-transparent">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="text-light text-uppercase ls-1 mb-1">
                      Overview
                    </h6>
                    <h5 className="h3 text-white mb-0">Sales value</h5>
                  </div>
                  <div className="col">
                    <ul className="nav nav-pills justify-content-end">
                      <li
                        className="nav-item mr-2 mr-md-0"
                        data-toggle="chart"
                        data-target="#chart-sales-dark"
                        data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}'
                        data-prefix="$"
                        data-suffix="k"
                      >
                        <a
                          href="#"
                          className="nav-link py-2 px-3 active"
                          data-toggle="tab"
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        data-toggle="chart"
                        data-target="#chart-sales-dark"
                        data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}'
                        data-prefix="$"
                        data-suffix="k"
                      >
                        <a
                          href="#"
                          className="nav-link py-2 px-3"
                          data-toggle="tab"
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                {/* <!-- Chart --> */}
                <div className="chart">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">
                      <div className=""></div>
                    </div>
                    <div className="chartjs-size-monitor-shrink">
                      <div className=""></div>
                    </div>
                  </div>
                  {/* <!-- Chart wrapper --> */}
                  <canvas
                    id="chart-sales-dark"
                    className="chart-canvas chartjs-render-monitor"
                    width="594"
                    height="700"
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header bg-transparent">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h5 className="h3 mb-0">Total orders</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                {/* <!-- Chart --> */}
                <div className="chart">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">
                      <div className=""></div>
                    </div>
                    <div className="chartjs-size-monitor-shrink">
                      <div className=""></div>
                    </div>
                  </div>
                  <canvas
                    id="chart-bars"
                    className="chart-canvas chartjs-render-monitor"
                    width="594"
                    height="700"
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-header border-0">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                  <div className="col text-right">
                    <a href="#!" className="btn btn-sm btn-primary">
                      See all
                    </a>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                {/* <!-- Projects table --> */}
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Page name</th>
                      <th scope="col">Visitors</th>
                      <th scope="col">Unique users</th>
                      <th scope="col">Bounce rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">/argon/</th>
                      <td>4,569</td>
                      <td>340</td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3"></i>{" "}
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/index.html</th>
                      <td>3,985</td>
                      <td>319</td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3"></i>
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/charts.html</th>
                      <td>3,513</td>
                      <td>294</td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3"></i>
                        36,49%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/tables.html</th>
                      <td>2,050</td>
                      <td>147</td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3"></i>{" "}
                        50,87%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/profile.html</th>
                      <td>1,795</td>
                      <td>190</td>
                      <td>
                        <i className="fas fa-arrow-down text-danger mr-3"></i>
                        46,53%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header border-0">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                  <div className="col text-right">
                    <a href="#!" className="btn btn-sm btn-primary">
                      See all
                    </a>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                {/* <!-- Projects table --> */}
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Referral</th>
                      <th scope="col">Visitors</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Facebook</th>
                      <td>1,480</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">60%</span>
                          <div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-gradient-danger"
                                role="progressbar"
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Facebook</th>
                      <td>5,480</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">70%</span>
                          <div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-gradient-success"
                                role="progressbar"
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Google</th>
                      <td>4,807</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">80%</span>
                          <div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-gradient-primary"
                                role="progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Instagram</th>
                      <td>3,678</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">75%</span>
                          <div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-gradient-info"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">twitter</th>
                      <td>2,645</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">30%</span>
                          <div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-gradient-warning"
                                role="progressbar"
                                aria-valuenow="30"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer --> */}
        <footer className="footer pt-0">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="copyright text-center text-lg-left text-muted">
                © 2020
                <a
                  href="https://shoplexnigeria.com"
                  className="font-weight-bold ml-1"
                  target="_blank"
                >
                  Shoplex Nigeria
                </a>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    className="nav-link"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    className="nav-link"
                    target="_blank"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="http://blog.creative-tim.com"
                    className="nav-link"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                    className="nav-link"
                    target="_blank"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </footer>
      </div>
      <style jsx>{`
        .chart-canvas {
          display: block;
          height: 350px;
          width: 297px;
        }
        .progress-bar {
          width: 60%;
        }
      `}</style>
    </>
  );
};

export default Overview;
