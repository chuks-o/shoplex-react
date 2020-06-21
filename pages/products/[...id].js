import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { auth } from "../../utils/Auth";
import { baseUrl } from "../../utils/variables";
import { moneyFormat, dateFormat } from "../../utils/filters";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import ProductList from "../../components/Dashboard/Product/ProductList";
import ProductCarousel from "../../components/Dashboard/Product/ProductCarousel";
import ProductCondition from "../../components/Dashboard/Product/ProductCondition";

const ProductItem = (props) => {
  const { product, similarProducts } = props;

  const handleWishlistSubmit = async (id) => {
    // const { accountId, token } = props.payload;
    // const url = `${baseUrl}/wishlist/add`;
    // const payload = {
    //   productId: id,
    //   userId: accountId
    // };
    // try {
    //   const wish = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`
    //     },
    //     body: JSON.stringify(payload)
    //   });
    //   const {
    //     data: { wishlist }
    //   } = await wish.json();
    //   if (wishlist) alert("Product added to wishlist");
    // } catch (error) {}
  };
  return (
    <DefaultLayout>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <div className="card border-0 mb-2 order-1">
              <div className="card-body p-0">
                <div className="image-section">
                  <ProductCarousel product={product} />
                </div>
              </div>
            </div>

            <div className="card border mb-5 order-3">
              <div className="card-body">
                <div className="d-flex align-items-baseline">
                  <h5 className="mb-2 p-0">{product.title}</h5> &nbsp;
                </div>
                <p className="mb-2 small">{product.description} </p>
                <p className="mb-4">
                  <small>Condition: </small>
                  <ProductCondition {...product} />
                </p>
                <hr />
                <div className="d-flex align-items-center">
                  <div className="">
                    <span className="fas fa-map-marker-alt text-muted fa-sm"></span>{" "}
                    &nbsp;
                  </div>

                  <div className="location mb-4 text-muted w-100">
                    <div className="d-flex align-items-center">
                      <div className="small">
                        {product.state.name}, {product.lga.name}
                      </div>
                      <div className="ml-auto small">
                        <span className="far fa-eye fa-sm"></span> 2 Views
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-muted small">
                  <span className="far fa-clock"></span> &nbsp; Posted On:{" "}
                  {dateFormat(product.createdAt)}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="sellers-details-section">
              <div className="card border-0 bg-primary mb-3">
                <div className="card-body p-0 ">
                  <div className="p-4">
                    <h3 className="text-center m-0 font-weight-bold text-white ">
                      {moneyFormat(product.price)}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="card border mb-3">
                <div className="card-body">
                  <h6 className="mb-4">Seller Details</h6>
                  <div className="d-flex align-items-center mb-4">
                    <div className="mr-3">
                      <img
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                        height="50px"
                        className="rounded-circle"
                      />
                    </div>
                    <div>
                      <div className="">{product.creator.fullName}</div>
                      <div className="text-muted small">
                        {product.creator.email}
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <a
                      className="btn btn-secondary btn-block"
                      href="tel:+1-303-499-7111"
                    >
                      Call {product.creator.firstname} &nbsp;
                      <span className="fas fa-phone fa-sm"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <Link href="/account/create-product">
                  <button className="btn btn-primary btn-block">
                    Post Products Like This
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="my-5 order-4">
              <h5 className="mb-3">Similar Products</h5>

              {similarProducts.map((product) => (
                <ProductList
                  key={product.id}
                  {...product}
                  onAddWishlist={(id) => handleWishlistSubmit(id)}
                />
              ))}
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .container {
              margin-top: 120px;
            }
          `}
        </style>
      </div>
    </DefaultLayout>
  );
};

ProductItem.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query;
  const [productId] = id;
  const url = `${baseUrl}/products/${productId}`;

  // const { accountId, token } = auth(ctx);
  // const payload = { accountId, token };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const {
      data: { product },
    } = await response.json();

    // similar products
    const productCatUrl = `${baseUrl}/products/sub-categories/${product.subCategory.id}`;
    const similar = await fetch(productCatUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const {
      data: { products: similarProducts },
    } = await similar.json();

    return { product, similarProducts };
  } catch (error) {}
};

export default ProductItem;
