import Link from "next/link";
import { moneyFormat } from "../../utils/filters";

const ProductList = ({ id, title, price, uploads, state, lga, slug }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card  shadow-sm border br-10 h-100">
        <Link
          href={`/products/${id}`}
          className="m-0 p-0"
          as={`/products/${id}/${slug}`}
        >
          <a>
            <div className="m-0 p-0">
              <div className="product_image m-0 p-0">
                {uploads.length > 0 ? (
                  <img
                    className=""
                    src={uploads[0]["filename"]}
                    alt="product image"
                    height="250px"
                    width="100%"
                  />
                ) : (
                  <img
                    className="img-fluid"
                    src="/images/image-placeholder.jpg"
                    alt="product-image"
                  />
                )}
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title mb-2">
                  <a className="font-weight-normal text-dark">{title}</a>
                </h4>
                <h5 className="text-primary font-weight-bold">
                  {moneyFormat(price)}
                </h5>
                <div className="">
                  <p
                    className="my-0 p-0 small text-muted"
                    aria-label="location"
                  >
                    <span className="fas fa-map-marker-alt text-secondary mr-1"></span>{" "}
                    {lga.name}, {state.name}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>

      <style jsx global>{`
        .product_image img {
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default ProductList;
