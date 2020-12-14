import { useState, useReducer } from "react";
import { auth, withAuthSync } from "../../utils/Auth";
import AccountLayout from "../../components/layouts/AccountLayout";
import { baseUrl } from "../../utils/variables";
import CreateProductDetails from "../../components/Dashboard/Product/CreateProductDetails";
import FormStepper from "../../components/Dashboard/Product/FormStepper";
import CreateProductPackage from "../../components/Dashboard/Product/CreateProductPackage";
import CreateProductReview from "../../components/Dashboard/Product/CreateProductReview";

const CreateProduct = (props) => {
  const { payload, categories, states, packages, user } = props;

  const [activePage, setActivePage] = useState({
    name: "product-details",
    done: false,
    active: true,
  });

  const [product, setProduct] = useState({});

  const handleProductCreate = (product) => {
    setActivePage({
      name: "product-package",
      done: false,
      active: true,
    });
    setProduct(product);
  };

  const handleSubscription = () => {
    setActivePage({
      name: "product-review",
      done: false,
      active: true,
    });
  };

  return (
    <AccountLayout {...props}>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-10">
            <div className="mb-4">
              <div className="d-flex align-items-center mb-2">
                <h2 className="m-0 font-weight-bold">Create Product </h2>
              </div>
              <p className="">
                Let's help you find a buyer for your product. 🙂
              </p>
            </div>

            <div className="card border-0 rounded-0">
              <div className="card-body px-lg-5 py-lg-4">
                {/* start stepper */}
                <FormStepper activePage={activePage} />
                {/* endstepper */}
                {/* page one of the form */}
                {activePage.name === "product-details" && (
                  <CreateProductDetails
                    payload={payload}
                    categories={categories}
                    user={user}
                    states={states}
                    onFormSubmit={handleProductCreate}
                  />
                )}

                {/* page two of the form */}
                {activePage.name === "product-package" && (
                  <CreateProductPackage
                    user={user}
                    product={product}
                    packages={packages}
                    payload={payload}
                    onSubscribe={handleSubscription}
                  />
                )}

                {/* page three preview and submit  */}
                {activePage.name === "product-review" && (
                  <CreateProductReview payload={payload} product={product} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

CreateProduct.getInitialProps = async (ctx) => {
  const { token, accountId } = auth(ctx);

  try {
    const cat = await fetch(`${baseUrl}/products/main/categories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const st = await fetch(`${baseUrl}/regions/states`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const subPackage = await fetch(`${baseUrl}/packages`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const {
      data: { packages },
    } = await subPackage.json();

    const {
      data: { states },
    } = await st.json();
    const {
      data: { categories },
    } = await cat.json();

    return { categories, states, packages };
  } catch (error) {}
};

export default withAuthSync(CreateProduct);
