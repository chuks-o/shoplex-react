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
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div>
            <h6 className="m-0 font-weight-bold">
              <span className="">Welcome </span>
              {firstname}.
            </h6>
          </div>
        </div>
      </div>
      {/* overview cards */}
      <div className="row mt-4">
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm bg-white mb-4">
            <div className="card-body">
              <div className="d-flex">
                <div className="mr-3">
                  <div className="icon-wrap primary-tint">
                    <Thumbsup />
                  </div>
                </div>
                <div className="card-left-section">
                  <p className="small card-title font-weight-bold">
                    ALL PRODUCTS
                  </p>
                  <div className="d-flex align-items-center">
                    <h4 className="m-0 card-value font-weight-bold">
                      {allProductCount}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer border-0 bg-white d-flex align-items-center justify-content-between">
              <Link href="/account/my-products">
                <a className="small stretched-link">View Details</a>
              </Link>
              <div className="small">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm bg-white mb-4">
            <div className="card-body">
              <div className="d-flex">
                <div className="mr-3">
                  <div className="icon-wrap primary-tint">
                    <Thumbsup />
                  </div>
                </div>
                <div className="card-left-section">
                  <p className="small card-title font-weight-bold">
                    ACTIVE PRODUCTS
                  </p>
                  <div className="d-flex align-items-center">
                    <h4 className="m-0 card-value font-weight-bold">
                      {activeCount}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer border-0 bg-white d-flex align-items-center justify-content-between">
              <Link href="/account/my-products">
                <a className="small stretched-link">View Details</a>
              </Link>
              <div className="small">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm bg-white mb-4">
            <div className="card-body">
              <div className="d-flex">
                <div className="mr-3">
                  <div className="icon-wrap secondary-bg">
                    <Thumbsup />
                  </div>
                </div>
                <div className="card-left-section">
                  <p className="small card-title font-weight-bold">
                    PENDING PRODUCTS
                  </p>
                  <div className="d-flex align-items-center">
                    <h4 className="m-0 card-value font-weight-bold">
                      {pendingCount}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-white border-0 d-flex align-items-center justify-content-between">
              <Link href="/account/my-products">
                <a className="small stretched-link">View Details</a>
              </Link>
              <div className="small">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm bg-white mb-4">
            <div className="card-body">
              <div className="d-flex">
                <div className="mr-3">
                  <div className="icon-wrap light-grey">
                    <Cash />
                  </div>
                </div>
                <div className="card-left-section">
                  <p className="small card-title font-weight-bold">
                    CLOSED PRODUCTS
                  </p>
                  <div className="d-flex align-items-center">
                    <h4 className="m-0 card-value font-weight-bold">
                      {closedCount}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-white border-0 d-flex align-items-center justify-content-between">
              <Link href="/account/my-products">
                <a className="small stretched-link">View Details</a>
              </Link>
              <div className="small">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex flex-column justify-content-center align-items-center zero-state">
                <div className="mb-4 text-center">
                  No Published Products at this time.
                </div>

                <div>
                  <Link href="/account/create-product">
                    <button className="btn btn-primary font-weight-bold">
                      Start Selling
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .zero-state {
          min-height: 43vh;
        }
      `}</style>
    </div>
  );
};

export default Overview;
