import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { auth } from "../../../utils/Auth";
import { baseUrl } from "../../../utils/variables";
import { moneyFormat } from "../../../utils/filters";
import ProductCondition from "./ProductCondition";

const ProductList = (props) => {
  const {
    id,
    title,
    description,
    price,
    state,
    lga,
    slug,
    uploads,
    status,
  } = props;

  return (
    <div className="card border mb-3 list-body">
      <div className="card-body p-0 m-0">
        <div className="d-md-flex w-100">
          {/* <div className="status-container">
            <h6 className="m-0 font-weight-bold">{status}</h6>
          </div> */}
          <div className="p-0 m-0 img-section">
            {uploads.length > 0 ? (
              <img
                className="product-image img-fluid img-responsive"
                src={uploads[0]["filename"]}
                alt={title}
              />
            ) : (
              <img
                className="product-image img-fluid img-responsive"
                src="/images/image-placeholder.jpg"
                alt={title}
              />
            )}
          </div>
          <div className="pt-3 pb-lg-0 pb-3 px-3 w-100">
            <div className="d-flex flex-column h-100">
              <div className="d-flex align-items-start mb-0">
                <Link href={`/products/${id}`} as={`/products/${id}/${slug}`}>
                  <h3 className="text-dark product-title">{title}</h3>
                </Link>
                <div className="ml-auto">
                  <ProductCondition {...props} />
                </div>
              </div>
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
                  <div className="ml-auto">
                    <a
                      onClick={() => props.onAddWishlist(id)}
                      className="small text-muted"
                    >
                      <span className="far fa-star text-secondary"></span> Add
                      to Wishlist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .img-section img {
          height: 220px;
          width: 100%;
          box-sizing: border-box;
        }
        .product-title {
          cursor: pointer;
        }
        .status-container h6 {
          font-size: 14px;
        }
        .status-container {
          position: absolute;
          background: #212529;
          padding: 0px 5px;
          color: white;
          top: 10px;
          left: 3px;
          transform: rotate(-15deg);
          /* Safari */
          -webkit-transform: rotate(-15deg);

          /* Firefox */
          -moz-transform: rotate(-15deg);

          /* IE */
          -ms-transform: rotate(-15deg);

          /* Opera */
          -o-transform: rotate(-15deg);

          /* Internet Explorer */
          filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
        }

        .list-body:hover {
          background: #f8f8f9;
        }

        @media screen and (min-width: 426px) {
          .img-section img {
            width: 300px;
            box-sizing: border-box;
            height: 170px;
          }
        }
      `}</style>
    </div>
  );
};

ProductList.getInitialProps = (ctx) => {
  const { accountId, token } = auth(ctx);
  return { accountId, token };
};

export default ProductList;
