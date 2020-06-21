import Link from "next/link";
import { moneyFormat } from "../../../utils/filters";
import ProductCondition from "./ProductCondition";

const Wishlist = props => {
  const { id, title, description, price, lga, state, slug } = props;

  return (
    <div className="card border mb-3 list-body">
      <div className="card-body p-0 m-0">
        <div className="d-md-flex w-100">
          <div className="p-0 m-0 img-section">
            <img
              className="img-fluid"
              src="https://studcom.org/assets/images/700x400/6.jpg"
              alt=""
              height="150px"
            />
          </div>
          <div className="pt-3 pb-lg-0 pb-3 px-3 w-100">
            <div className="d-flex flex-column h-100">
              <Link href={`/products/${id}`} as={`/products/${id}/${slug}`}>
                <div className="d-flex align-items-start mb-0">
                  <h6 className="text-dark product-title">{title}</h6>

                  <div className="ml-auto">
                    <ProductCondition {...props} />
                  </div>
                </div>
              </Link>
              <small className="mb-2 text-muted truncate product-description__text">
                {description}
              </small>
              <h6 className="mb-2 font-weight-bold text-primary">
                <span className="text-muted"></span> {moneyFormat(price)}
              </h6>

              <div className="mt-auto w-100">
                <div className="d-md-flex">
                  <p className="small text-muted ft-14">
                    <span className="fas fa-map-marker-alt text-muted"></span>{" "}
                    {lga.name}, {state.name} State
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .img-section img {
          height: 160px;
          width: 300px;
        }
        .list-body {
          overflow: hidden;
          cursor: pointer;
        }
        .list-body:hover {
          background: #f8f8f9;
        }
        .product-description__text {
          width: 99%;
        }
        .truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
};

export default Wishlist;
