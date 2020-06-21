import Link from "next/link";
import { moneyFormat } from "../../utils/filters";

const ProductList = ({ id, title, price, uploads, state, lga, slug }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card shadow-sm border-0 h-100">
        <a href="#">
          {uploads.length > 0 ? (
            <img
              className="img-fluid"
              src={uploads[0]["filename"]}
              alt="product-image"
            />
          ) : (
            <img
              className="img-fluid"
              src="/images/image-placeholder.jpg"
              alt="product-image"
            />
          )}
        </a>
        <div className="card-body pb-0">
          <h6 className="card-title">
            <Link href={`/products/${id}`} as={`/products/${id}/${slug}`}>
              <a className="font-weight-normal text-dark">{title}</a>
            </Link>
          </h6>
          <h6 className="text-primary font-weight-bold">
            {moneyFormat(price)}
          </h6>
        </div>
        <div className="card-footer py-2 border-0 mb-1 bg-white">
          <div className="d-flex">
            <p className="my-0 small text-muted" aria-label="location">
              <span className="fas fa-map-marker-alt"></span> {lga.name},{" "}
              {state.name} State
            </p>
            <a
              href="#"
              className="ml-auto text-muted ft-14"
              title="Add to wishlist"
            >
              <span className="far fa-star text-secondary"></span>
              {/* Add to Wishlist */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
