import fetch from "isomorphic-unfetch";
import { auth, withAuthSync } from "../../utils/Auth";
import AccountLayout from "../../components/layouts/AccountLayout";
import { baseUrl } from "../../utils/variables";
import { useEffect, useState } from "react";
import ActivityIndicator from "../../components/ActivityIndicator";
import ProductLists from "../../components/Dashboard/Product/ProductLists";

const MyProducts = (props) => {
  const { products, payload, user } = props;
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    setAllProducts(products);
  }, [products]);

  const getProducts = async (status) => {
    setLoading(true);
    const { token } = payload;
    const url = `${baseUrl}/products/by-status/user`;
    const accountId = user.id;

    try {
      const product = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: `${accountId}`,
          status,
        }),
      });

      const {
        data: { products },
      } = await product.json();

      setAllProducts(products);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <AccountLayout {...props}>
      <div className="container mt-5">
        <h2 className="font-weight-bold mb-4">My Products</h2>
        <div className="card shadow-sm border-0 my-3">
          <div className="card-body p-0">
            <nav>
              <div className="nav nav-tabs pt-2" id="nav-tab" role="tablist">
                <a
                  className="nav-item nav-link active"
                  id="nav-active-tab"
                  data-toggle="tab"
                  href="#nav-active"
                  onClick={(e) => getProducts("active")}
                  role="tab"
                  aria-controls="nav-active"
                  aria-selected="false"
                >
                  Active
                </a>

                <a
                  className="nav-item nav-link"
                  id="nav-pending-tab"
                  data-toggle="tab"
                  href="#nav-pending"
                  onClick={(e) => getProducts("pending")}
                  role="tab"
                  aria-controls="nav-pending"
                  aria-selected="false"
                >
                  Pending
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-draft-tab"
                  data-toggle="tab"
                  href="#nav-draft"
                  role="tab"
                  onClick={(e) => getProducts("draft")}
                  aria-controls="nav-draft"
                  aria-selected="true"
                >
                  Drafts
                  <span className="badge badge-custom-secondary badge-lg">
                    0
                  </span>
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-closed-tab"
                  data-toggle="tab"
                  href="#nav-closed"
                  onClick={(e) => getProducts("closed")}
                  role="tab"
                  aria-controls="nav-closed"
                  aria-selected="true"
                >
                  Closed <span className="badge badge-custom-secondary">0</span>
                </a>
              </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-active"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                {loading && <ActivityIndicator />}
                <ProductLists products={allProducts} />
              </div>
              <div
                className="tab-pane fade"
                id="nav-pending"
                role="tabpanel"
                aria-labelledby="nav-pending-tab"
              >
                {loading && <ActivityIndicator />}
                <ProductLists products={allProducts} />
              </div>
              <div
                className="tab-pane fade"
                id="nav-draft"
                role="tabpanel"
                aria-labelledby="nav-draft-tab"
              >
                {loading && <ActivityIndicator />}
                <ProductLists products={allProducts} />
              </div>
              <div
                className="tab-pane fade"
                id="nav-closed"
                role="tabpanel"
                aria-labelledby="nav-closed-tab"
              >
                {loading && <ActivityIndicator />}
                <ProductLists products={allProducts} />
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          a.nav-item.nav-link {
            border: 0px;
          }
          a.nav-item.nav-link:hover {
            border: 0px;
          }
          a.nav-item.nav-link.active {
            border: none;
            border-bottom: 3px solid var(--primary);
          }
        `}</style>
      </div>
    </AccountLayout>
  );
};

MyProducts.getInitialProps = async (ctx) => {
  const { token, accountId } = auth(ctx);
  const url = `${baseUrl}/products/by-status/user`;

  const reqPayload = {
    userId: accountId,
    status: "active",
  };

  try {
    const myProduct = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(reqPayload),
    });

    const { data } = await myProduct.json();

    if (data) {
      const { products } = data;
      return { products };
    }

    return { products: [] };
  } catch (error) {}
};

export default withAuthSync(MyProducts);
