import { useState } from "react";

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchProducts = async () => {
    try {
    } catch (error) {}
  };
  return (
    <div>
      <div className="jumbotron rounded-0 d-flex align-items-center justify-content-center">
        <div className="shopping-illustration-cart d-lg-block d-none">
          <img src="/images/shopping-cart.svg" height="150px" />
        </div>
        <div className="col-md-6 mx-auto">
          <div className="">
            <div className="d-flex align-items-center justify-content-center mb-2">
              <h5>
                <span className="fas fa-map-marker-alt"></span> &nbsp; Find
                anything in{" "}
                <span className="badge badge-secondary btn-lg"> Nigeria</span>{" "}
                🇳🇬
              </h5>
            </div>

            <form className="w-100">
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control searchInput br-10"
                  placeholder="Search For Goods"
                  aria-label="Search For Goods"
                  aria-describedby="button-addon2"
                  required
                />
                <div className="input-group-append">
                  <button
                    className="font-weight-bold btn-search"
                    type="button"
                    id="button-addon2"
                  >
                    <span className="fa fa-search"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="shopping-illustration d-lg-block d-none">
          <img src="/images/shopping.svg" height="150px" />
        </div> */}
      </div>

      <style jsx>{`
        .jumbotron {
          height: 260px;
          display: block;
          padding: 0;
          margin-top: 95px;
          border-bottom: 1px solid #e4e8ec;
        }
        form input.search {
          height: 55px;
          font-size: 18px;
        }
        form input.form-control:focus {
          border: 1px solid #ced4da !important;
        }
        form .btn {
          height: 55px;
        }
        .btn-search {
          width: 60px !important;
          background: #00bdaa;
          color: #fff;
          border: none;
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
        }
        .shopping-illustration-cart {
          position: absolute;
          left: 10%;
          top: 20%;
        }
        .shopping-illustration {
          position: absolute;
          right: 5%;
          top: 20%;
        }
      `}</style>
    </div>
  );
};

export default SearchProduct;
